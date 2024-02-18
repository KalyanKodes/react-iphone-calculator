import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById('root'));




function Note(){
    let [status , setStatus] = React.useState(true);
    setTimeout(()=>{
        setStatus(false)
    } , 2000)
    return status ? <div className="preLoader">This is just a Basic Calculator.</div> : <App />
}




root.render(<Note/>)