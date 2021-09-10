import {useState} from "react";
import { Button} from "@material-ui/core"

 function CountExample(){
    const [count, setCount] = useState(0)
    
    return (
        <div>
            <Button variant="contained" color="secondary" onClick={
                (n)=>{
                    setCount(n +1)
                }
            }> PLUS</Button>
            {count}
        </div>
    )
}

export default CountExample;