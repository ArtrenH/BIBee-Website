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


@app.route('/register', methods=['POST'])
def register():
    # Get form data
    name = request.form['name']
    email = request.form['email']
    role = request.form['role']

    # Log the registration in a file (json format)
    registration = {
        "name": name,
        "email": email,
        "role": role
    }
    with open('registrations.log', 'a') as f:
        json.dump(registration, f)
        f.write('\n')

    # Send data to Discord webhook
    try:
        webhook_url = os.getenv('WEBHOOK_URL')
        discord_data = {
            "embeds": [{
                "title": "Neue Registrierung für die Bonn Integration Bee",
                "fields": [
                    {
                        "name": "Name",
                        "value": name
                    },
                    {
                        "name": "E-Mail",
                        "value": email
                    },
                    {
                        "name": "Rolle",
                        "value": role
                    }
                ]
            }]
        }
        requests.post(webhook_url, json=discord_data)
    except Exception:
        return jsonify({"message": "Webhook ging nicht, Rest schon"})

    return jsonify({"message": "Erfolgreich registriert!"})


if __name__ == '__main__':
    app.run(debug=True, port=3001)
