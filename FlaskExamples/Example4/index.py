from flask import Flask, jsonify, request
from dbFuncs import db, User
app = Flask(__name__)


@app.route("/foo/<bar>", methods=['POST'])
def bar(bar):
    return jsonify({"success": True})


@app.route("/users/add", methods=['POST'])
def add_users():
    username = request.args.get('username', '')
    email = request.args.get('email', '')
    temp = User(username, email)
    db.session.add(temp)
    db.session.commit()
    return jsonify(temp.serialize)


@app.route("/users")
def users():
    return jsonify(json_list=[i.serialize for i in User.query.all()])

if __name__ == "__main__":
    app.debug = True
    app.run()
