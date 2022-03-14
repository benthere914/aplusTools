import { Alert, Button } from "react-bootstrap"
import { useHistory } from "react-router-dom"
const Result = ({data}) => {
    const [model, type, style, modelNum, desc] = data
    const history = useHistory()
    const goBackHandler = () => {
        
    }
    return (
    <>
        <Alert>
            <Alert.Heading><h1>Results</h1></Alert.Heading>
            <div>
                <h3>Model: {model}</h3>
                <h3>Type: {type}</h3>
                <h3>Style: {style}</h3>
                <h3>Model Number: {modelNum}</h3>
                <h3>Desc: {desc}</h3>
                <Button onClick={() => {history.push('lookup')}}>Go Back</Button>
            </div>
        </Alert>
    </>
    )
}

export default Result
