from flask import Flask, render_template, url_for
from random import choice
import random

app = Flask(__name__, static_folder="sources")

@app.template_filter('random_rotate')
def random_rotate(value):
    return choice([-15, -10, -5, 5, 10, 15])

@app.route('/')
def home():
    polaroids = [
        {"image": url_for('static', filename='bouldering.png'), "caption": "Sports", "info": "Among bouldering, biking and crossfit I love to do lots of different sports and spent quite some of my freetime with diverse sports"},
        {"image": url_for('static', filename='plants.png'), "caption": "Plants", "info": "Recently I've grown (pun intended) an interest in raising and caring for different house plants"},
        {"image": url_for('static', filename='coding.png'), "caption": "Computer Science", "info": "What started as an hobby turned into a passion. I am enthusiasticly learning and testing out the diverse world of computer science. For some projects check out my github"},
        {"image": url_for('static', filename='hike.png'), "caption": "Outdoor & Nature", "info": "To escape from everyday life I love to do hiking trips and spent time outdoors"},
        {"image": url_for('static', filename='scout.png'), "caption": "Scouting & Social Engagement", "info": "My passion for scouting started over 15 years ago and today I've met a lot of amazing people and experienced some adventures with my group"},
        # maybe add gaming polaroid?
    ]
    random.shuffle(polaroids)

    return render_template('index.html',polaroids=polaroids)


if __name__ == "__main__":
    app.run(debug=True)
