import './index.css'
import { Route } from "react-router-dom"
import { Switch } from "react-router-dom"
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min"
import { useState } from "react"
import Lookup from "./lookup"
import Result from "./result"

const Diagnostic = () => {
    const [model, setModel] = useState('');
    const [type, setType] = useState('');
    const [style, setStyle] = useState('');
    const [modelNum, setModelNum] = useState('');
    const [desc, setDesc] = useState('');
    return (
    <>
        <BrowserRouter>
            <Switch>
                <Route path='/tools/diagnostic/lookup'>
                <div className="diagnostic">
                    <Lookup data={[model, setModel, type, setType, style, setStyle, modelNum, setModelNum, desc, setDesc]}/>
                </div>
                </Route>
                <Route path='/tools/diagnostic/result'>
                    <div className="diagnostic">
                        <Result data={[model, type, style, modelNum, desc]}/>
                    </div>
                </Route>
            </Switch>
        </BrowserRouter>

    </>
    )
}

export default Diagnostic
