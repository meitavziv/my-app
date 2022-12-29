from enum import Enum
from conf.consts import MULTIPLIERS

class Gender(Enum):
    Male = 1
    Female = 2

def get_sum_of_calories(weight: int, height: int, age: int, training: int, gender: Gender):
    num = -161 if Gender(gender) == 'Female' else 5
    return ((10 * weight) + (6.25 * height) - (5 * age) + num) * MULTIPLIERS[training]


def get_time_of_lesson(lesson: str, day: str, training_table: object):
    for row in training_table:
        if row.get(day) == lesson:
            return row.get('time')