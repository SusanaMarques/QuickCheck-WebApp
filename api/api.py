import time
from flask import Flask
from flask import request
from flask import Flask
from flask_cors import CORS
import pandas as pd
from pandas import DataFrame
import os


app = Flask(__name__)

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

############ Genre API ############
@app.route('/predict', methods = ['POST'])
def getPrediction():
    g=[]
    g =  request.get_json(force=True)["symptoms"]
    print(g)    
    return {'list':g}
#########################################
@app.route('/symptoms', methods = ['GET'])
def getSymptoms():
    g=[]
    path="../../LEI/Data/final.csv"
    g = pd.read_csv(path).columns.to_numpy()[131:].tolist()
    return {'symptoms':g}