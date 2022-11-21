import json
from flask import Flask, Response, jsonify, request
from flask_cors import CORS
from utils import calc


app = Flask(__name__)
CORS(app)

# @app.route("/")
# def hello_world():
#     response_body = {
#         "sunday": {6: 'עיצוב', 7: 'hit'},
#         "monday": {6: 'עיצוב', 7: 'hit'}
#     }

#     return response_body

@app.route("/calc", methods=["POST"])
def get_calories():
    data = json.loads(request.data.decode())
    calories = int(calc(age=data['age'], weight=data['weight'], height=data['height'], training=data['training'], gender=data['gender']))
    return jsonify(calories)

# with app.test_request_context(
#         '/calc', method='POST', data=json.dumps({"age":26,"weight":200,"height":100,"gender":1,"purpose":2,"intensive":1,"training":2})):
#     get_calories()


@app.route("/training", methods=['GET'])
def training_table():
    table= {
        "sunday": {6: 'עיצוב', 7: 'hit'},
        "monday": {6: 'קיקבוקס', 7: 'פילאטיס'},
        "tuesday": {6: 'עיצוב', 7: 'פילאטיס'},
        "wednesday": {6: 'פונקציונלי', 7: 'hit'},
        "thursday": {6: 'יוגה', 7: 'hit'},
        "friday": {6: 'שחיה', 7: 'hit'}
    }
    return jsonify(table)
    
if __name__ == '__main__':
    app.run(debug=True, host='127.0.0.1', port=3000)