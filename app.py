import os
import json
from dotenv import load_dotenv
from flask import Flask, render_template, request, jsonify
import requests

load_dotenv()

app = Flask(__name__)
app.template_folder = 'templates'
app.static_folder = 'static'


@app.route('/')
def index():
    return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=True, port=3001)
