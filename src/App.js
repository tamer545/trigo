import './App.css';
import { Dropdown, FormControl, InputGroup } from "react-bootstrap";
import { useState } from "react";

function App() {
    const [valueA, setValueA] = useState(0)
    const [valueB, setValueB] = useState(0)
    const [valueC, setValueC] = useState(0)
    let triangleSpecies = 'jk'
    let sinusAlpha2 = 'jk'
    let sinusBeta2 = 'jk'
    let sinusGamma2 = 'jk'
    let tangensGamma2 = 'jk'
    let tangesAlpha2 = 'jk'
    let tangensBeta2 = 'jk'
    let cosineAlpha2 = 'jk'
    let cosineBeta2 = 'jk'
    let angleAlpha = null
    let angleBeta = null
    let angleGamma = null

    function calculateSinusTangens(alphaAngle, secondValue, thirdValue, firstValue) {
        const sinusAlpha = Math.sin( firstValue / thirdValue)
        sinusAlpha2 = sinusAlpha
        const sinusBeta = Math.sin(secondValue / thirdValue)
        sinusBeta2 = sinusBeta
        const tangensAlpha = Math.tan(firstValue / secondValue)
        tangesAlpha2 = tangensAlpha
        const tangensBeta = Math.tan(secondValue / firstValue)
        tangensBeta2 = tangensBeta
    }

    function calculateTriangle(firstValue, secondValue, thirdValue) {
        // Für SSS
        const cosineOfAlpha = Math.cos(secondValue / thirdValue)
        const alphaAngle = Math.cos()
        cosineAlpha2 = cosineOfAlpha
        angleAlpha = alphaAngle
       const cosineOfBeta = Math.cos(firstValue/thirdValue)
        cosineBeta2 = cosineOfBeta
        calculateSinusTangens(alphaAngle, secondValue, thirdValue, firstValue)
        calculateAngles(cosineOfAlpha, cosineOfBeta, thirdValue, firstValue, secondValue)
        findoutTriangleSpecies(firstValue, secondValue, thirdValue)
    }

    
    function findoutTriangleSpecies (firstValue, secondValue, thirdValue)  {
        if (firstValue === secondValue && firstValue === thirdValue && secondValue === thirdValue) {
            triangleSpecies = 'gleichseitig'
        }
        if(firstValue === secondValue || firstValue === thirdValue ||  secondValue === thirdValue ) {
            triangleSpecies = 'gleichschenklig'
        }
    }
    function calculateAngles(cosineOfAlpha, cosineOfBeta, thirdValue, firstValue, secondValue) {
        

        
    }

    const initializeCanvas = (firstValue, secondValue, thirdValue, alphaAngle, betaAngle) => {
        if(document.querySelector("#canvas")) {
            var canvasElement = document.querySelector("#canvas");
            var ctx = canvasElement.getContext("2d");
            // the width of the canvas
            let cw = (canvasElement.width = 150),
                cx = cw / 2;
            //the height of the canvas
            let ch = (canvasElement.height = 150),
                cy = ch / 2;
            //your data
            let a = firstValue,
                b = secondValue,
                c = thirdValue;
            // In this case you have an isosceles triangle since a = b = 30
            // this triangle is circumscribed in a circle with a radius = 30
            let R = 30;
            // calculate the angle between the two sides of equal length
            let angle = Math.asin(.5 * c / a);
    
            //draw the circumscribed circle:
            ctx.beginPath();
            ctx.arc(cx, cy, R, 0, 2 * Math.PI);
            ctx.stroke();
    
    
            var triangle = {
                //the first vertex is in the center of the canvas
                //you may decide to change this.
                x1: cx,
                y1: cy,
                //the second vertex is on the circumscribed circle at 0 radians where R is the radius of the circle ( a = 30, b=30 )
                //you may decide to change this.
                x2: cx + R,
                y2: cy,
                //calculate the 3-rd vertex
                x3: cx + R * Math.cos(alphaAngle),
                y3: cy + R * Math.sin(betaAngle)
            };
    
            ctx.strokeStyle = "red";
    
            ctx.beginPath();
            ctx.moveTo(triangle.x1, triangle.y1);
            ctx.lineTo(triangle.x2, triangle.y2);
            ctx.lineTo(triangle.x3, triangle.y3);
            ctx.lineTo(triangle.x1, triangle.y1);
            ctx.closePath();
            ctx.stroke();
        }  
    }

    return (
        <div className="App">
            <h1>TRIGO</h1>
            <br />
            <br />
            <InputGroup className="form-group w-50">
                <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    value={valueA}
                    onChange={e => setValueA(e.target.value)}
                /><p>Gegenkathete</p>
            </InputGroup>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={console.log('here')}>Action</Dropdown.Item>
                    <Dropdown.Item >Another action</Dropdown.Item>
                    <Dropdown.Item>Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <InputGroup className="form-group w-50">
                <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    value={valueB}
                    onChange={e => setValueB(e.target.value)}
                /><p>Ankathete</p>
            </InputGroup>
            <InputGroup className="form-group w-50">
                <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    value={valueC}
                    onChange={e => setValueC(e.target.value)}
                /><p>Hypotenuse</p>
            </InputGroup>
            <button onClick={calculateTriangle(valueA, valueB, valueC)}>Calculate</button>
            <h3>Sinus Cosinus</h3>
            <p>Sinus Alpha: {sinusAlpha2}</p>
            <p>Sinus Beta: {sinusBeta2}</p>
            <p>Cosinus Alpha: {cosineAlpha2}</p>
            <p>Cosinus Beta: {cosineBeta2}</p>
            <br />
            <h3>Tangens</h3>
            <p>Tangens Alpha: {tangesAlpha2} </p>
            <p>Tangens Beta: {tangensBeta2}</p>
            <h3>Triangle</h3>
            <button onClick={initializeCanvas(valueA, valueB, valueC, angleAlpha, angleBeta)}>Create Triangle</button>
            <canvas id="canvas">

            </canvas>
            <br />
            <h3>Triangle Species</h3>
            <h3>{triangleSpecies}</h3>
            <h3>Angles</h3>
            <p>Winkel Alpha: {angleAlpha}</p>
            <p>Winkel Beta: {angleBeta}</p>
            <p>Winkel Gamma: {angleGamma}</p>

        </div>

    );
}

export default App;
