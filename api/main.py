from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Sample data
tend = [
    {
        "dt": 1681234567,
        "sunrise": 1681200000,
        "sunset": 1681243200,
        "temp": {"now": 25, "min": 18, "max": 27},
        "humidity": 60,
        "speed": 5,
        "deg": 90,
        "code": "sunrise",
    },
    {
        "dt": 1681234567,
        "sunrise": 1681200000,
        "sunset": 1681243200,
        "temp": {"now": 21, "min": 13, "max": 24},
        "humidity": 60,
        "speed": 5,
        "deg": 90,
        "code": "sunrise",
    },
]

live = {
    "dt": 1681234567,
    "temp": {"now": 21, "min": 13, "max": 24},
    "humidity": 60,
    "speed": 5,
    "sun": 15,
    "deg": 60,
    "code": "sunrise",
}

hours = [
    {"dt": 1681233600, "avgtemp": 22, "code": "sunrise"},
    {"dt": 1681255200, "avgtemp": 24, "code": "sunrise"},
    {"dt": 1681276800, "avgtemp": 21, "code": "sunrise"},
    {"dt": 1681298400, "avgtemp": 20, "code": "sunrise"},
    {"dt": 1681320000, "avgtemp": 18, "code": "sunrise"},
    {"dt": 1681341600, "avgtemp": 19, "code": "sunrise"},
]

# Routes
@app.route("/api/weather/live", methods=["GET"])
def get_live():
    return jsonify(live)


@app.route("/api/weather/tenday", methods=["GET"])
def get_tenday():
    return jsonify(tend)


@app.route("/api/weather/hourly", methods=["GET"])
def get_hourly():
    return jsonify(hours)


# Run the Flask app
if __name__ == "__main__":
    app.run(debug=True)
