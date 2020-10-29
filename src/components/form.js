import React from "react";
import "./form.css"

const Form  = (props) => { 
    return (      
        <div className="form">
                <form onSubmit={props.weathetMethod}>
                <input type="text" name="city" placeholder="Город"/>
                <button>Получить погоду</button>
            </form> 
            </div>
    );
    }
export default Form;