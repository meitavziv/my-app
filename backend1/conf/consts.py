from enum import Enum

#SQLALCHEMY CONSTS
SQLALCHEMY_DATABASE_URL = "sqlite:///user.db"
SQLALCHEMY_BINDS = {
        "training": "sqlite:///training.db",
        "users": "sqlite:///user.db",
        "personalTraining": "sqlite:///personalTraining.db"
    }
SQLALCHEMY_TRACK_MODIFICATIONS = False

#CONECCTION CONSTS
HOST = "127.0.0.1"
PORT = 3001

#NUTRITIONS CONSTS
AGE = "age"
WEIGHT = "weight"
HEIGHT = "height"
TRAINING = "training"
GENDER = "gender"

class Days(Enum):
    SUNDAY = "sunday"
    MONDAY = "monday"
    TUESDAY = "tuesday"
    WEDNESDAY = "wednesday"
    THURSDAY = "thursday"
    FRIDAY = "friday"
    SATURDAY = "saturday"

USER = "user"
TIME = "time"
HOUR = 'hour'
LESSON = 'lesson'
DAY = 'day'

MULTIPLIERS = {2: 1.375, 3: 1.4, 4: 1.425, 5: 1.55, 6: 1.75}

#twilio const
TWILIO_ACCOUNT_SID = 'AC7982105ff2a08da6aa37d1a49396c34d'
TWILIO_AUTH_TOKEN = '01413f11fd3ac0befb713e6f00b6a578'