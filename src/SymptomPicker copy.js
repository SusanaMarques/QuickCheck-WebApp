
/* eslint-disable no-use-before-define */
import React from 'react';
import { useState, useEffect } from 'react';
import './CSS/SymptomPicker.css';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, TableRow } from '@material-ui/core';



function SymptomPicker() {


    
    const [selectedSymps, setSelectedSymps] = useState([]);
    const [symptoms, setSymptoms] = useState([]);
    const [predictions, setPredictions] = useState([]);


    function printPredictions(value){
        fetch("/predict",{method:'POST', body:JSON.stringify({symptoms:value})}).then(
            data=>data.json().then(
                data2=>
                setPredictions(data2.list)
            )
        )
    }
    
    useEffect(() => {
        fetch('/symptoms').then(res => res.json()).then(data => {
            setSymptoms(data.symptoms);
        });
    }, []);
    const getSymptoms = async function getSymptoms(c) {
        fetch('/symptoms').then(res => res.json()).then(data => {
            alert(data.symptoms)
            setSymptoms(data.symptoms);
            
        });
    }

    if(selectedSymps.length==0 && predictions.length!=0) setPredictions([])


    return(
      <div className="symptomPicker">
        <Grid container spacing={1}>
          <Grid item xs={9}>
  <Autocomplete
        className="pickerBox pickerFrame"
        multiple
        id="tags-outlined"
        options={symptoms}
        getOptionLabel={(option) => option}
        defaultValue={[]}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="what symptoms is the patient experiencing?" />
        )}
        onChange={(event, value) => setSelectedSymps(value)}
      />
      </Grid>
      <Grid item xs={3}>
     <Button className="checkSymptoms" variant="outlined" color="primary" onClick={printPredictions.bind(this,selectedSymps)} >check the symptoms</Button>
     </Grid>
     </Grid>
     <div  className="predictions">
            {predictions.length==0?"" :<h3 style={{fontWeight:'bolder'}}>We recommend you prescribe  the following medical exams:</h3>}
            <ul style={{textAlign:'left' }}>
            {predictions.map((elem) => <li>{elem}</li>)}
            </ul>
     </div>
      </div>
      )
}




export default SymptomPicker;