import { useParams } from "react-router-dom"
import DiagnosticLookup from "../diagnosticLookup";
import PriceMultiplier from "../priceMultiplier";

const Tools = () => {
    const params = useParams();
    switch (params?.toolName) {
        case 'priceMultiplier':
            return (<><PriceMultiplier/></>)
        case 'diagnosticLookup':
            return (<><DiagnosticLookup/></>)
        default:
            return (<><h1>There are no tools here</h1></>)
    }

}

export default Tools
