import './index.css'
import { Alert, Button } from "react-bootstrap"
import { useHistory } from 'react-router-dom';

const Lookup = ({data}) => {
    const [model, setModel, type, setType, style, setStyle, modelNum, setModelNum, desc, setDesc] = data
    const history = useHistory();
    const clickHandler = () => {
        history.push('result')
    }

    return (
    <>
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
                    <Button onClick={clickHandler}><h2>Submit</h2></Button>
                </div>
            </Alert>
    </>
    )
}

export default Lookup
