from flask import Flask, render_template
import mimetypes
from flask_cors import CORS
from flask import send_from_directory

mimetypes.add_type("video/mp4", "mp4")                  #MIME type fix

app = Flask(__name__)                                   #static files served from ./static by default
CORS(app)                                               #allow CORS, ACAO: *

@app.route("/")
def index():
    return render_template("index.html")                #index page with video (not video endpoint)

@app.route("/video/<path:name>")
def get_video(name):
    return send_from_directory("static/video", name)    #video endpoint

if __name__ == "__main__":                              #run with python and debug true
    app.run(debug=True)
