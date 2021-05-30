import pickle
import pandas as pd
import numpy as np

path="./final.csv"
head = pd.read_csv(path, sep=';').columns.to_numpy()
sympIndx = np.where(head=="Itching")[0][0]
sympList= head[sympIndx:]
testList= head[:sympIndx]

def encode(data):
    npData = np.array(data)
    encoded =  np.zeros(shape=sympList.shape)
    for elem in npData:
        encoded = np.logical_or(encoded,sympList==elem )
    
    print(encoded)
    return encoded

def decode(data):
    decoded = testList[data==1]
    return decoded

