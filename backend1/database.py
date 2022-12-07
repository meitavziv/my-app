from flask_sqlalchemy import SQLAlchemy

SQLALCHEMY_BINDS = {
    'training': 'sqlite:///training.db',
        'users': 'sqlite:///user.db'
}

db = SQLAlchemy()
