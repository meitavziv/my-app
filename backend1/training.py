# import json
# from flask import Flask, Response, jsonify, request, Blueprint
# from flask_cors import CORS
# from utils import calc
# import sqlite3
# import os
# from flask_sqlalchemy import SQLAlchemy

# training_blueprint = Blueprint('training', __name__, url_prefix='training')

# training_blueprint.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///training.db'
# training_blueprint.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# db = SQLAlchemy(training_blueprint)
# currentDirectory = os.path.dirname(os.path.abspath(__file__))

# class Training(db.Model):
#     time = db.Column(db.String(80), unique=True)
#     sunday = db.Column(db.String(80), unique=True)
#     monday = db.Column(db.String(80), unique=True)
#     tuesday = db.Column(db.String(80), unique=True)
#     wednesday = db.Column(db.String(80), unique=True)
#     thursday = db.Column(db.String(80), unique=True)
#     friday = db.Column(db.String(80), unique=True)
#     saturday = db.Column(db.String(80), unique=True)

#     def __init__(self, time, sunday, monday, tuesday, wednesday, thursday, friday, saturday):
#         self.time = time
#         self.sunday = sunday
#         self.monday = monday
#         self.tuesday = tuesday
#         self.wednesday = wednesday
#         self.thursday = thursday
#         self.friday = friday
#         self.saturday = saturday

#     def __repr__(self):
#         return 'training table'

# @training_blueprint.route("/", methods=['GET'])
# def training_table():
#     # connection = sqlite3.connect(currentDirectory + R'\training.db')
#     # print(connection)
#     # cursor = connection.cursor()
#     # query = 'SELECT * from training'
#     # result = cursor.execute(query).fetchall()
#     result = Training.query.all()
#     print(result)
#     table = []
#     for row in result:
#         table.append({
#             "time": row[0],
#             "sunday": row[1],
#             "monday": row[2],
#             "tuesday": row[3],
#             "wednesday": row[4],
#             "thursday": row[5],
#             "friday":row[6],
#             "saturday": row[7]
#         })
    
#     return jsonify(table)

