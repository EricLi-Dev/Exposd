# from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
#
# import time
# analyzer = SentimentIntensityAnalyzer()
#
# subjective = 0
# factual = 0
#
# par = elt
# vs = analyzer.polarity_scores(par)
# if not vs['neg'] > 0.5:
#     if vs['pos']-vs['neg'] > 0:
#         if vs['neu'] < vs['pos']:
#             factual += 1
#         else:
#             subjective += 1
#             print("sentence: {}, subjective: {}, vs: {}".format(par, subjective, vs))
#             print("sentence: {}, factual: {}, vs: {}".format(par, factual, vs))
#
# if not vs['pos'] > 0.5:
#     if vs['pos']-vs['neg'] <= 0:
#         if vs['neu'] < vs['neg']:
#             subjective += 1
#         else:
#             factual += 1
#             print("sentence: {}, subjective: {}, vs: {}".format(par, subjective, vs))
#             print("sentence: {}, factual: {}, vs: {}".format(par, factual, vs))
import cherrypy

class HelloWorld(object):
    @cherrypy.expose
    def index(self):
        return "Hello World!"

cherrypy.quickstart(HelloWorld())
