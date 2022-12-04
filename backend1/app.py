import json
from flask import Flask, Response, jsonify, request
from flask_cors import CORS
from utils import calc
# from flask_sqlalchemy import SQLAlchemy
import sqlite3
import os
from flask_sqlalchemy import SQLAlchemy
# from training import training_blueprint


app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///user.db'
app.config['SQLALCHEMY_BINDS'] = {
    'training': 'sqlite:///training.db',
    'users': 'sqlite:///user.db'
}
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
currentDirectory = os.path.dirname(os.path.abspath(__file__))

class Training(db.Model):
    __bind_key__ = 'training'
    time = db.Column(db.String(80), unique=True, primary_key=True)
    sunday = db.Column(db.String(80), unique=True)
    monday = db.Column(db.String(80), unique=True)
    tuesday = db.Column(db.String(80), unique=True)
    wednesday = db.Column(db.String(80), unique=True)
    thursday = db.Column(db.String(80), unique=True)
    friday = db.Column(db.String(80), unique=True)
    saturday = db.Column(db.String(80), unique=True)

    def __init__(self, time, sunday, monday, tuesday, wednesday, thursday, friday, saturday):
        self.time = time
        self.sunday = sunday
        self.monday = monday
        self.tuesday = tuesday
        self.wednesday = wednesday
        self.thursday = thursday
        self.friday = friday
        self.saturday = saturday

class User(db.Model):
    __bind_key__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True)
    password = db.Column(db.Integer, unique=True)

    def __init__(self, username, password):
        self.username = username
        self.password = password

    def __repr__(self):
        return '<User %r>' % self.username

with app.app_context():
    db.create_all(bind_key='users')
    db.create_all(bind_key='training')


@app.route("/")
def hello_world():
    response_body = {
        "sunday": {6: 'עיצוב', 7: 'hit'},
        "monday": {6: 'עיצוב', 7: 'hit'}
    }

    return response_body

@app.route("/calc", methods=["POST"])
def get_calories():
    data = json.loads(request.data.decode())
    # print(data)
    calories = int(calc(age=data['age'], weight=data['weight'], height=data['height'], training=data['training'], gender=data['gender']))
    # print(calories)
    return jsonify(calories)

# with app.test_request_context(
#         '/calc', method='POST', data=json.dumps({"age":26,"weight":200,"height":100,"gender":1,"purpose":2,"intensive":1,"training":2})):
#     get_calories()

@app.route("/login", methods=["POST"])
def login():
    data = json.loads(request.data.decode())
    user = str(data['user'])
    password = data['password']
    print(user, password)
    # connection = sqlite3.connect(currentDirectory + R'\user.db')
    # cursor = connection.cursor()
    # query = "SELECT * FROM users WHERE user='%s' AND password='%s'" % (user, password)
    # print(query)
    # result = cursor.execute(query).fetchall()
    result = User.query.filter_by(username=user, password=password) 
    print(result)
    if result:
        print('in')
        return jsonify(True)
    return jsonify(False)

# with app.test_request_context(
#         '/login', method='POST', data=json.dumps({"user":'מיטב זיו',"password":12345})):
#     login()

@app.route("/register", methods=["POST"])
def register():
    data = json.loads(request.data.decode())
    user = str(data['user'])
    password = data['password']
    print(user, password)
    # connection = sqlite3.connect(currentDirectory + R'\users.db')
    # cursor = connection.cursor()
    # query = "INSERT INTO users (user, password) VALUES ('%s', '%s')" % (user, password)
    # print(query)
    # result = cursor.execute(query).fetchall()
    # print(result)
    new_user = User(username=user, password=password)
    db.session.add(new_user)
    db.session.commit()
    return jsonify(True)

@app.route("/training", methods=['GET'])
def training_table():
    # connection = sqlite3.connect(currentDirectory + R'\training.db')
    # print(connection)
    # cursor = connection.cursor()
    # query = 'SELECT * from training'
    # result = cursor.execute(query).fetchall()
    result = Training.query.all()
    print(result)

    table = []
    for row in result:
        table.append({
            "time": row.time,
            "sunday": row.sunday,
            "monday": row.monday ,
            "tuesday": row.tuesday,
            "wednesday": row.wednesday,
            "thursday": row.thursday,
            "friday":row.friday,
            "saturday": row.saturday
        })
    
    return jsonify(table)
    
if __name__ == '__main__':
    app.run(debug=True, host='127.0.0.1', port=3001)




    # table = [
    #     {
    #         "time": "18:00-19:00",
    #         "sunday": 'פילאטיס',
    #         "monday": 'עיצוב',
    #         "tuesday": "מתיחות",
    #         "wednesday": "עיצוב",
    #         "thursday": "זומבה",
    #         "friday":"פילאטיס",
    #         "saturday": "זומבה"
    #     },
    #     {
    #         "time": "19:00-20:00",
    #         "sunday": 'hit',
    #         "monday": 'פילאטיס מכשירים',
    #         "tuesday": "עיצוב",
    #         "wednesday": "CORE",
    #         "thursday": "hit",
    #         "friday":"יוגה",
    #         "saturday": "hit"
    #     },
    #     {
    #         "time": "20:00-21:00",
    #         "sunday": 'CORE',
    #         "monday": 'קיקבוקס',
    #         "tuesday": "פילאטיס",
    #         "wednesday": "hit",
    #         "thursday": "עיצוב",
    #         "friday":"ספינינג",
    #         "saturday": "POWER"
    #     },
    #     {
    #         "time": "21:00-22:00",
    #         "sunday": 'עיצוב',
    #         "monday": 'יוגה',
    #         "tuesday": "פונקציונלי",
    #         "wednesday": "עיצוב",
    #         "thursday": "יוגה",
    #         "friday":"קיקבוקס",
    #         "saturday": "ספינינג"
    #     }
    # ]