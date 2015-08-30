from flask import Flask, jsonify, render_template
app = Flask(__name__)

@app.route("/hello/")
@app.route("/hello/<name>")
def hello(name=None):
    return render_template('index.html', name=name)

@app.route("/foo/<bar>", methods=['POST'])
def bar(bar):
    return jsonify({"success": True})

if __name__ == "__main__":
    app.run()
