from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
from flask import Flask, render_template, request, jsonify, make_response
#import json
#import cherrypy
#import time

app = Flask(__name__)
req = ""
subjArr = [""]
tempArr = [""]
@app.route('/', methods=["GET", "POST"])
def example():
    req = request.get_json()

    #print("req ")
    # print(req.get("paragraph"))
    # print(req.get("lengthOfPar"))
    # print(req.get("index"))


    # print("sentence: {}, subjective: {}, vs: {}".format(par, subjective, vs))
    # print("sentence: {}, factual: {}, vs: {}".format(par, factual, vs))
    analyzer = SentimentIntensityAnalyzer()

    subjective = 0
    factual = 0


    vs = analyzer.polarity_scores(req.get("paragraph"))

    if not vs['neg'] > 0.5:
        if vs['pos']-vs['neg'] > 0:
            if vs['neu'] < vs['pos']:
                factual += 1
            else:
                subjective += 1
                # print("sentence: {}, subjective: {}, vs: {}".format(par, subjective, vs))
                # print("sentence: {}, factual: {}, vs: {}".format(par, factual, vs))

    if not vs['pos'] > 0.5:
        if vs['pos']-vs['neg'] <= 0:
            if vs['neu'] < vs['neg']:
                subjective += 1
            else:
                factual += 1


    if factual > subjective:
        return "factual -- kicked out"

    subjArr.append(req.get("paragraph"))
    print(subjArr)
    res = make_response(jsonify(subjArr))

    
    #print(subjArr)
    #print(res)
    return res

if __name__ == "__main__":
    app.run()


# class HelloWorld(object):
#     @cherrypy.expose
#     def index(self):
#         return x
#
# cherrypy.quickstart(HelloWorld())
#cherrypy.quickstart(get_sentiment())
