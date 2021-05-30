import time
from flask import Flask
from flask import request
from flask import Flask
from flask_cors import CORS
import pandas as pd
from pandas import DataFrame
import os
import pickle
import numpy as np
from backend import encode, decode

filename="./Best Models/bestKnn.sav"
loaded_model = pickle.load(open(filename, 'rb'))
print(loaded_model)



app = Flask(__name__)

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

############ Genre API ############
@app.route('/predict', methods = ['POST'])
def getPrediction():
    g=[]
    g =  request.get_json(force=True)["symptoms"]
    g=encode(g)
    g = loaded_model.predict(g.reshape(1, -1))[0]
    g = decode(g).tolist()

    return {'list':g}
#########################################
@app.route('/symptoms', methods = ['GET'])
def getSymptoms():
    g=[]
    path="./final.csv"

    g = pd.read_csv(path, sep=';').columns.to_numpy()
    sympIndx = np.where(g=="Itching")[0][0]
    g = g[sympIndx:].tolist()

    return {'symptoms':g}