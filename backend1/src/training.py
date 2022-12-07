from flask import Blueprint, jsonify
from database import db

training_bp = Blueprint('training', __name__, url_prefix='/training')

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

# @training_bp.route("/", methods=["POST"])
# def training_table():
#     return ''


@training_bp.route("/", methods=['GET'])
def training_table():
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