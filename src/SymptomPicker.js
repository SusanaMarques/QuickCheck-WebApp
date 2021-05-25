import React, { useState, useEffect } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

function SymptomPicker() {

    const [symptoms, setSymptoms] = useState([]);
    useEffect(() => {
        fetch('/symptoms').then(res => res.json()).then(data => {
            setSymptoms(data.symptoms);
        });
    }, []);
    const getSymptoms = async function getSymptoms(c) {
        fetch('/symptoms').then(res => res.json()).then(data => {
            setSymptoms(data.symptoms);
        });
    }


    return (
        <div className="symptomPicker">

                <div className="HeaderText"> <p> Queres saber quais os concertos perto de ti? </p> </div>
                <Autocomplete
                    id="combo-box-demo"
                    options={symptoms}
                    onChange={(event, v) => getSymptoms(v)}
                    style={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Indica o teu pais" variant="outlined" />}
                />
                <div className="AutoCompleteBoxes">
                </div>
        </div>
    );

}