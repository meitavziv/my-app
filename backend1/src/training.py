from flask import Blueprint, jsonify, request, session
from database import db
from conf.consts import Days, HOUR, LESSON, DAY, TIME
import json
import datetime
from .user import User
from twilioMessages import send_message_by_twilio
from apscheduler.schedulers.background import BackgroundScheduler

training_bp = Blueprint('training', __name__, url_prefix='/training')
hours_list = []

sched = BackgroundScheduler()

class Training(db.Model):
    __bind_key__ = 'training'
    id = db.Column(db.Integer, unique=True, primary_key=True)
    hour = db.Column(db.String(80))
    day = db.Column(db.String(80))
    lesson = db.Column(db.String(80))

    def __init__(self, hour: str, day: str, lesson: str):
        self.hour = hour
        self.day = day
        self.lesson = lesson


class PersonalTraining(db.Model):
    __bind_key__ = 'personalTraining'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80))
    time = db.Column(db.String(80))
    day = db.Column(db.String(80))
    lesson = db.Column(db.String(80))
    

    def __init__(self, time: str, day: str, username: str, lesson: str):
        self.time = time
        self.day = day
        self.lesson = lesson
        self.username = username


@training_bp.route("/", methods=['GET'])
def get_training_table():
    result = Training.query.all()
    table = []
    hour_dict = {}
    for row in result:
        hour = row.hour
        if hour_dict.get(TIME) != hour:
            hours_list.append(int(hour[0:2]))
            table.append(hour_dict)
            hour_dict = {}
            hour_dict[TIME] = hour

        hour_dict[row.day] = row.lesson
    table.append(hour_dict)
    return json.dumps(table[1:])


@training_bp.route("/personal/post", methods=["POST"])
def add_personal_training_table():
    data = json.loads(request.data.decode())
    all_lessons = Training.query.all()
    user = data['user']
    session['user'] = user
    # user = session['user']
    print(user)
    data.pop('user')
    for result in data:
        day = str(data[result][DAY])
        lesson = data[result][LESSON]
        for row in all_lessons:
            if row.day == day and row.lesson == lesson:
                data[result][HOUR] = row.hour
        new_lesson = PersonalTraining(username=user, time=data[result][HOUR], lesson=lesson, day=day)
        db.session.add(new_lesson)
        db.session.commit()
    
    return jsonify(True)

@training_bp.route("/delete", methods=["GET"])
def delete_personal_training_by_user():
    # user = json.loads(request.data.decode())['user']
    PersonalTraining.query.filter_by(username=session['user']).delete()
    db.session.commit()


@training_bp.route("/personal/get", methods=['GET'])
def get_personal_training_table():
    user = 'מיטב זיו'
    result = PersonalTraining.query.filter_by(username=user).order_by(PersonalTraining.time)
    table = []
    hour_dict = {TIME:'', Days.SUNDAY:'', Days.MONDAY:'', Days.TUESDAY:'', Days.WEDNESDAY:'', Days.THURSDAY:'', Days.FRIDAY:'', Days.SATURDAY:''}
    for row in result:
        hour = row.time
        if hour_dict.get(TIME) != hour:
            table.append(hour_dict)
            hour_dict = {}
            hour_dict[TIME] = hour

        hour_dict[row.day] = row.lesson

    table.append(hour_dict)
    return json.dumps(table[1:])


def send_message_to_registered():
    registered, lesson = get_registered_per_hour()
    try:
        for user in registered:
            send_message_by_twilio(user.username, lesson, user.phoneNumber)
    except:
        pass
            
try:
    sched.add_job(func=send_message_to_registered,trigger='cron', hour=str(hours_list[0]-1)+'-'+str(hours_list[-1]), minute='30')
    sched.start()
except:
    pass

def get_registered_per_hour():
    registered = None
    lesson = None
    now = datetime.datetime.now()
    current_hour = now.hour
    current_minutes = now.minute
    current_day = now.date().strftime('%A').lower()
    for hour in hours_list:
        if hour - 1 == current_hour and current_minutes == 30:
            hour = str(hour) + ':00-' + str(hour+1) + ':00'
            results = PersonalTraining.query.with_entities(PersonalTraining.username, PersonalTraining.lesson).filter_by(time=hour, day=current_day)
            lesson = results[0].lesson
            registered_names = (user.username for user in results)
            registered = User.query.with_entities(User.username, User.phoneNumber).filter(User.username.in_(registered_names))
    return registered, lesson
