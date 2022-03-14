import { useParams } from "react-router-dom"
import Diagnostic from "../diagnostic";
import PriceMultiplier from "../priceMultiplier";

const Tools = () => {
    const params = useParams();
    switch (params?.toolName) {
        case 'priceMultiplier':
            return (<><PriceMultiplier/></>)
        case 'diagnostic':
            return (<><Diagnostic/></>)
        default:
            return (<><h1>There are no tools here</h1></>)
    }

}

export default Tools
