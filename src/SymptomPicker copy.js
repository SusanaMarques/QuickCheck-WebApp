
/* eslint-disable no-use-before-define */
import React from 'react';
import { useState, useEffect } from 'react';
import './CSS/SymptomPicker.css';
import { borders } from '@material-ui/system';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, TableRow } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";


const CustomAutocomplete = withStyles({
    tag: {
      backgroundColor: "#1565D9",
      height: 25,
      position: "relative",
      zIndex: 0,
      "& .MuiChip-label": {
        color: "#fff"
      },
      "& .MuiChip-deleteIcon": {
        color: "#1565D9"
      },
      "&:after": {
        content: '""',
        right: 10,
        top: 6,
        height: 12,
        width: 12,
        position: "absolute",
        backgroundColor: "white",
        zIndex: -1
      }
    }
  })(Autocomplete);

const useStyles = makeStyles({
    root: {
      outlineColor: '#1565D9',
      border: 10,
      borderRadius: 10,
      borderColor: '#1565D9',
      color: '#1565D9',
      height: 48,
    },
    outlined: {
        borderColor: "#1565D9",
        color: "#1565D9",
        borderRadius: 12,
    }
  });



function SymptomPicker() {
    const classes = useStyles();
    const [selectedSymps, setSelectedSymps] = useState([]);
    const [symptoms, setSymptoms] = useState([]);
    const [predictions, setPredictions] = useState([]);


    function printPredictions(value) {
        fetch("/predict", { method: 'POST', body: JSON.stringify({ symptoms: value }) }).then(
            data => data.json().then(
                data2 =>
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

    if (selectedSymps.length == 0 && predictions.length != 0) setPredictions([])


    return (
        <div className="symptomPicker">
            <div className='text'><p><b>  What symptoms is the patient experiencing? </b></p></div>
            <Grid container spacing={1}>
                <Grid item xs={9}>
                    <CustomAutocomplete
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
                                label="" />
                        )}
                        onChange={(event, value) => setSelectedSymps(value)}
                    />
                </Grid>
                <Grid item xs={3}>
                    <Button className={classes.outlined}  variant="outlined" color="primary" onClick={printPredictions.bind(this, selectedSymps)} >Check The Symptoms</Button>
                </Grid>
            </Grid>

            <div className="predictions">
                {predictions.length == 0 ? "" : <h3 style={{ fontWeight: 'bolder' }}> We recommend you prescribe  the following medical exams: </h3>}
                <ul style={{ textAlign: 'left' }}>
                    {predictions.map((elem) => <li><b>{elem}</b></li>)}
                </ul>
            </div>

        </div>
    )
}




export default SymptomPicker;