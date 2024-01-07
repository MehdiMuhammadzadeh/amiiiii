import NoteContent from "./NoteContent.jsx";

const Note = ({noteTitles}) => {
    return (
        <>
            <span>02/10/2024</span>
            <div className="notes-container__item">
                {
                    noteTitles.map((item, index) => {
                        return (
                            <NoteContent key={index} title={item.title}/>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Note;