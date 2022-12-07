from flask import Blueprint, request, json, jsonify
from database import db

user_bp = Blueprint('user', __name__, url_prefix='/user')

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

@user_bp.route("/login", methods=["POST"])
def login():
    data = json.loads(request.data.decode())
    user = str(data['user'])
    password = data['password']
    print(user, password)
    result = User.query.filter_by(username=user, password=password).all()
    if result:
        print('in')
        return jsonify(True)
    return jsonify(False)

# with app.test_request_context(
#         '/login', method='POST', data=json.dumps({"user":'מיטב זיו',"password":12345})):
#     login()

@user_bp.route("/register", methods=["POST"])
def register():
    data = json.loads(request.data.decode())
    user = str(data['user'])
    password = data['password']
    print(user, password)
    new_user = User(username=user, password=password)
    db.session.add(new_user)
    db.session.commit()
    return jsonify(True)