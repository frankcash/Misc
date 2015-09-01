from flask import Flask, jsonify
from dbFuncs import db, User
app = Flask(__name__)


@app.route("/foo/<bar>", methods=['POST'])
def bar(bar):
    return jsonify({"success": True})


@app.route("/users")
def users():
    users = User.query.all()
    print(users)
    return jsonify(json_list = [i.serialize for i in User.query.all()])

if __name__ == "__main__":
    app.debug = True
    app.run()
