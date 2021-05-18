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
@app.route('/predict', methods = ['GET','POST'])
def getPrediction():
    g=[]
    if request.method == 'GET':
        return{'obj': "POSTONLY"}

    g = request.form['symptoms']
    print(g)
    #print(l)
    return {'list':g}
#########################################
@app.route('/symptoms', methods = ['GET'])
def getSymptoms():
    g=[]
    path="../../LEI/Data/final.csv"
    
    print(path)
    print("-----Bef---- ")
    g = pd.read_csv(path).columns.to_numpy()[131:].tolist()
    print(g)
    #print(l)
    return {'symptoms':g}