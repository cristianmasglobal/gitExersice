import { useState } from "react";
import CountExample from "./CountExample"

function Vis() {
    const [visible, setVisible] = useState(true)
    if (!visible) {
        return null
    }
    return (
    <>
        <button onClick={() =>{
            setVisible(!visible)
        }}>Click me</button>
        <CountExample />
    </>
    )
}

export default Vis;