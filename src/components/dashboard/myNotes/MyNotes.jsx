import './MyNotes.css';
import Note from "./Note.jsx";

const MyNotes = () => {

    const noteTitles = [
        {title: 'Note', titleId: 1},
        {title: 'Medicine', titleId: 2},
        {title: 'Homework', titleId: 3}
    ]

    return (
        <div className='notes-container'>
            <div className='notes-date_container'>
                <Note noteTitles={noteTitles}/>
                <Note noteTitles={noteTitles}/>
                <Note noteTitles={noteTitles}/>
            </div>
        </div>
    )
}

export default MyNotes;