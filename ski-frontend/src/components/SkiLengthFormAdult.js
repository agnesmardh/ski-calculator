import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Row} from 'reactstrap';

import './SkiLengthForm.css'

function SkiLengthFormAdult() {
    const [type, setType] = useState("Klassisk")
    const [bodyLength, setBodyLength] = useState(0);
    const [skiLength, setSkiLength] = useState(0);


    function submitForm() {
        let urlAPI = ""
        if (type === "Klassisk") {
            urlAPI = `https://localhost:5001/Ski/GetSkiLengthClassic/${bodyLength}`
        } else {
            urlAPI = `https://localhost:5001/Ski/GetSkiLengthFreestyle/${bodyLength}`
        }
        fetch(urlAPI, {
            method: 'get',
        })
            .then(res => res.json())
            .then(length => {
                setSkiLength(length)
            })
            .catch(err => console.log(err));
    }

    let message = skiLength > 0 ? `Vi rekommenderar skidlängden: ${skiLength} cm` : "Fyll i värden och klicka på beräkna"

    return (
        <div>
            <Form>
                <Row form className={"formRow"}>
                    <FormGroup>
                        <Label for="type">Typ</Label>
                        <Input type="select" name="type" id="type" value={type}
                               onChange={(e) => setType(e.target.value)}>
                            <option>Klassisk</option>
                            <option>Fristil</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="length">Kroppslängd (cm)</Label>
                        <Input type="number" name="Kroppslängd" id="length" value={bodyLength}
                               onChange={(e) => setBodyLength(e.target.value)}/>
                    </FormGroup>
                </Row>
            </Form>
            <Button color={"primary"} className={"button"} onClick={submitForm}>Beräkna!</Button>
            <div className={"padding"}>
                <p>
                    {message}
                </p>
            </div>
        </div>
    );
}

export default SkiLengthFormAdult;
