function QuizResult(props){
    return(
        <>
            <div className="show-score">
                Your score:{props.score}<br/>
                Total score:{props.totalScore}
            </div>
            <button onClick={props.tryAgain} id="next-button">Try again</button>
        </>
    )
}
export default QuizResult;