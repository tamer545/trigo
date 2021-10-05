import './App.css';
import {Dropdown, Button, FormControl, InputGroup, Container, Card, Accordion} from "react-bootstrap";
import {useState} from "react";

function App() {
    const [valueA, setValueA] = useState(0)
    const [valueB, setValueB] = useState(0)

    function calculateSinusCosinus() {

    }

    function calculateTriangle() {

    }

    function calculateTangens() {

    }

    return (
        <div className="App">
            <h1>TRIGO</h1>
            <br/>
            <br/>
            <InputGroup className="form-group w-50">
                <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    value={valueA}
                    onChange={e => setValueA(e.target.value)}
                />
            </InputGroup>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <InputGroup className="form-group w-50">
                <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    value={valueB}
                    onChange={e => setValueB(e.target.value)}
                />
            </InputGroup>
            <InputGroup className="form-group w-50">
                <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    value={valueA}
                    onChange={e => setValueA(e.target.value)}
                />
            </InputGroup>
            <h3>Sinus Cosinus</h3>
            <br/>
            <h3>Triangles</h3>
            {valueA}
            {valueB}
            <br/>
            <h3>Tangens</h3>

        </div>

    );
}

export default App;
