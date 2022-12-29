from flask import Blueprint, request, jsonify, json
from utils import get_sum_of_calories
from conf.consts import *

nutrition_bp = Blueprint('nutrition', __name__, url_prefix='/nutrition')

@nutrition_bp.route("/calc", methods=["POST"])
def get_calories():
    data = json.loads(request.data.decode())
    calories = int(get_sum_of_calories(age=data[AGE], weight=data[WEIGHT], height=data[HEIGHT], training=data[TRAINING], gender=data[GENDER]))
    return jsonify(calories)

# with app.test_request_context(
#         '/calc', method='POST', data=json.dumps({"age":26,"weight":200,"height":100,"gender":1,"purpose":2,"intensive":1,"training":2})):
#     get_calories()
