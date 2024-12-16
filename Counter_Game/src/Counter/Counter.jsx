import { useState } from "react";
import styles from "./Counter.module.css";  

function Counter(){
    const [add, setAdd] = useState(0);

    const add1 = () => {
        setAdd(add + 1);
    }

    const decrease1 = () => {
        setAdd(add - 1);
    }

    const reset0 = () => {
        setAdd(0);
    }

    return (
        <div>
            <h1 className={styles.counterH1}>🏆My Counter🏆</h1>
            <p  className={styles.content}>{add}</p>    
            <button onClick={add1} className={styles.button}>Add</button>   
            <button onClick={decrease1} className={styles.button}>Decrease</button> 
            <button onClick={reset0} className={styles.button}>Reset</button> 
        </div>
    );
}
export default Counter