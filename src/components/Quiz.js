import { useState } from "react";
import { QuizData } from "../data/Quizdata";
import QuizResult from "./QuizResult";

function Quiz(){
    const[current,setCurrent]=useState(0);
    const[optionClick,setOptionClick]=useState(0);
    const[score,setScore]=useState(0);
    const[showResult,setShowResult]=useState(false);

    const handleClick=()=>{
        updateScore();
        if(current<QuizData.length-1){
            setCurrent(current+1)
            setOptionClick(0)
        }else{
            setShowResult(!showResult)
        }
    }
    const updateScore=()=>{
        if(optionClick===QuizData[current].answer){
            setScore(score+1)
        }
    }
    const resetAll=()=>{
        setCurrent(0);
        setOptionClick(0);
        setShowResult(false);
        setScore(0)
    }
    return(
        <div>
            <p className="heading-txt">Quiz APP</p>
            <div className="container">
                {showResult?(<QuizResult score={score} totalScore={QuizData.length} tryAgain={resetAll}/>):(
                <>
                <div className="question">
                    <span id="question-number">{current+1}.</span>
                    <span id="question-txt">{QuizData[current].question}</span>
                </div>
            <div className="option-container">
                {QuizData[current].options.map((option,i)=>{
                    return(
                        <button key={i} className={`option-btn ${optionClick===i+1?"checked":null}`} onClick={()=>setOptionClick(i+1)}>{option}</button>
                    )
                })}
            </div>
            <input type="submit" value="Next" onClick={handleClick} id="next-button"></input>
            </>
                )}
            </div>
        </div>
    )
}
export default Quiz;