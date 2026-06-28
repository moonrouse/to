import "./notesitem.css";
import { del, edit } from "../../assets/image";
import { useContext } from "react";
import { NotesContext } from "../../Store/NotesProvaider";

const Notesitem = ({note}) => {
  const {getNote, openDeleteModal, lang, words} = useContext(NotesContext)
  return (
    <div className="card">
      <div className="card__content">
        <h3 className="card__title">{note.title}</h3>
        <p className="card__date">{note.date}</p>
      </div>
      <p className="card__desc">
        {note.desc}
      </p>
      <div className="card__controls">
        <button onClick={()=> getNote(note.id)} className="btn">
          <img src={edit} alt="" />
          {words.editbtn[lang]}
        </button>
        <button onClick={()=> openDeleteModal(note.id)} className="btn btn_red">
          <img src={del} alt="" />
          {words.deledit[lang]}
        </button>
      </div>
    </div>
  );
};

export default Notesitem;
