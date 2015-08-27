from flask import Flask, jsonify
app = Flask(__name__)


@app.route("/")
def hello():
    return "Hello World!"


@app.route("/foo")
def foo():
    return bar("buzz")


@app.route("/foo/<buzz>")
def foobar(buzz):
    return bar(buzz)


@app.route("/multiply/<int:num>")
def multiply(num):
    num = num * 2
    return 'number %d' % num


def bar(fizz):
    print(fizz)
    fee = {"foo": fizz}
    print(fee)
    return jsonify(fee)


if __name__ == "__main__":
    app.run()
