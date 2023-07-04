import React from "react";
import { quiz } from '../../quiz';
import Quiz from 'react-quiz-component';
import './MyAccount.css'

function MyAccount() {
    return(
        <div className="quiz" >
            <Quiz className="main" quiz={quiz}/>
        </div>
    )
}

export default MyAccount;