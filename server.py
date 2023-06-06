from flask import Flask

app = Flask(__name__)


@app.route('/')
def index():
    return 'welcome'

@app.route('/select-video')
def select_video():
    return 'select video'


app.run(host='0.0.0.0', port=80)
