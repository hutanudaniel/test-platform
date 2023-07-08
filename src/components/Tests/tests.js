import React from "react";
import { quiz } from '../../quiz';
import Quiz from 'react-quiz-component';
import './tests.css'

function Tests() {
    return(
        <div className="quiz" >
            <Quiz className="main" quiz={quiz}/>
        </div>
    )
}

export default Tests;