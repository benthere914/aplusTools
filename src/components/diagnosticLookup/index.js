import './index.css'
import { useState } from "react"
import { Alert, Button } from "react-bootstrap"

const DiagnosticLookup = () => {
    const [model, setModel] = useState('');
    const [type, setType] = useState('');
    const [style, setStyle] = useState('');
    const [modelNum, setModelNum] = useState('');
    const [desc, setDesc] = useState('');
    return (
    <>
        <div className="diagLookup">

        <Alert>
            <Alert.Heading style={{textAlign: 'center'}}><h1>Diagnostic Lookup</h1></Alert.Heading>
            <div className='diagLookupForm'>
                <p>Model</p>
                <input value={model} onChange={(e) => {setModel(e.target.value)}}/>
                <p>Type</p>
                <input value={type} onChange={(e) => {setType(e.target.value)}}/>
                <p>Style</p>
                <input value={style} onChange={(e) => {setStyle(e.target.value)}}/>
                <p>Model #</p>
                <input value={modelNum} onChange={(e) => {setModelNum(e.target.value)}}/>
                <p>Description</p>
                <input value={desc} onChange={(e) => {setDesc(e.target.value)}}/>
                <br/>
                <Button><h2>Submit</h2></Button>
            </div>
        </Alert>
        </div>
    </>
    )
}

export default DiagnosticLookup
