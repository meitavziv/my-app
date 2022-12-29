import json
from flask import Flask, request, make_response
from flask_cors import CORS
from database import db
from src.training import training_bp, send_message_to_registered 
from src.nutrition import nutrition_bp
from src.user import user_bp
from conf.consts import *
from flask_session import Session


def create_app():
    app = Flask(__name__)
    CORS(app)
    # config session
    app.secret_key = 'MEITAV_APP'
    app.config["SESSION_TYPE"] = "sqlalchemy"
    app.config['SESSION_SQLALCHEMY'] = db
    Session(app)
    app.register_blueprint(training_bp)
    app.register_blueprint(user_bp)
    app.register_blueprint(nutrition_bp)    

    return app

def set_sqlalchemy_config(app: Flask):
    app.config['SQLALCHEMY_DATABASE_URI'] = SQLALCHEMY_DATABASE_URL
    app.config['SQLALCHEMY_BINDS'] = SQLALCHEMY_BINDS
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = SQLALCHEMY_TRACK_MODIFICATIONS

def setup_databases(app: Flask):
    with app.app_context():
        db.init_app(app)
        db.create_all()


if __name__ == '__main__':
    app = create_app()

    @app.after_request
    def after_request(response):
        header = response.headers
        header['Access-Control-Allow-Origin'] = '*'
        return response

    @app.before_request
    def _build_cors_preflight_response():
        if request.method == 'OPTIONS':
            response = make_response()
            response.headers.add("Access-Control-Allow-Origin", "*")
            response.headers.add('Access-Control-Allow-Headers', "*")
            response.headers.add('Access-Control-Allow-Methods', "*")
            return response
            
    set_sqlalchemy_config(app)
    setup_databases(app)
    app.run(debug=True, host=HOST, port=PORT)