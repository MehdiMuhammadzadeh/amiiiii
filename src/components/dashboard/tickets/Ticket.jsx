import NoteContent from "../myNotes/NoteContent.jsx";
import {useState} from "react";

const Ticket = ()=>{

    const [answer, setAnswer] = useState("")
    const handleSubmitAnswer = ()=>{
        console.log(answer)
    }

    return (
        <>
            <div className='tickets-date_container'>
                <span>02/10/2024</span>
                <div className="notes-container__item">
                    <div className='ticker-divider'>
                        <img src="https://avatars.githubusercontent.com/u/53970818?v=4" alt="patient avatar"/>
                        <h5>Mehdi Mohamamdzadeh</h5>
                    </div>
                    <NoteContent title={"Question"}/>
                    <h6>Answer:</h6>
                    <textarea rows={6} value={answer} onChange={(e)=>setAnswer(e.target.value)} placeholder="Type some answers"></textarea>
                    <div className="submit-answer" onClick={()=>handleSubmitAnswer()}>
                        <i className="submit-answer__icon bi bi-send-fill"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ticket;