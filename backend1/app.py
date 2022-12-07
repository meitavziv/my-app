import json
from flask import Flask, Response, jsonify, request
from flask_cors import CORS
# from flask_sqlalchemy import SQLAlchemy
from database import db
from src.training import training_bp, Training
from src.nutrition import nutrition_bp
from src.user import user_bp, User

def create_app():
    app = Flask(__name__)
    CORS(app)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///user.db'
    app.config['SQLALCHEMY_BINDS'] = {
        'training': 'sqlite:///training.db',
        'users': 'sqlite:///user.db'
    }
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.register_blueprint(training_bp)
    app.register_blueprint(user_bp)
    app.register_blueprint(nutrition_bp)    

    return app
    

def setup_databases(app):
    with app.app_context():
        db.init_app(app)
        db.create_all()

if __name__ == '__main__':
    app = create_app()
    setup_databases(app)
    app.run(debug=True, host='127.0.0.1', port=3001)