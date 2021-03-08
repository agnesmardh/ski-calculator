import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Row} from 'reactstrap';

import './SkiLengthForm.css'

function SkiLengthFormChild() {
    const [age, setAge] = useState(0);
    const [bodyLength, setBodyLength] = useState(0);
    const [skiLength, setSkiLength] = useState(0);


    function submitForm() {
        let urlAPI = `https://localhost:5001/Ski/${age}/${bodyLength}`
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
                        <Label for="age">Ålder</Label>
                        <Input type="number" name="Ålder" id="age" value={age}
                               onChange={(e) => setAge(e.target.value)}/>
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

export default SkiLengthFormChild;
