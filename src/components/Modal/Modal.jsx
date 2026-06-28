import { useContext, useEffect, useState } from "react";
import "./modal.css";
import { NotesContext } from "../../Store/NotesProvaider";

const Modal = () => {
  const { modal, setModal, currentId, saveNotes, noteInfo, closeModal, changeNote, lang, words, delModal, delNoteId, delNotes, closeDeleteModal, notes } =
    useContext(NotesContext);
  const [input, setInput] = useState("");
  const [area, setArea] = useState("");

  const getNoteById = (id) => {
    return notes.find((elem) => elem.id === id);
  };
  const addNote = () => {
    let title = input.trim();
    let desc = area.trim();
    if (title.length > 0 && desc.length) {
      const obj = {
        id: currentId + 1,
        title,
        date: new Date().toLocaleDateString(),
        desc,
      };
      saveNotes(obj);
    }
  };
  const ChangeHandle = () => {
    let title = input.trim();
    let desc = area.trim();
    if (title.length > 0 && desc.length) {
      const obj = {
        id: noteInfo.id,
        title,
        date: new Date().toLocaleDateString(),
        desc,
      };
      changeNote(obj);
    }
  };
  useEffect(() => {
    if (noteInfo) {
      setInput(noteInfo.title);
      setArea(noteInfo.desc);
    } else {
      setInput("");
      setArea("");
    }
  }, [modal]);
  return (
    <>
      {/* Модальное окно добавления/редактирования */}
      <div
        onMouseDown={() => {
          setModal(false);
        }}
        className={`modal ${modal ? "active" : ""}`}
      >
        <div
          onMouseDown={(event) => {
            event.stopPropagation();
          }}
          className="modal__form"
        >
          <h3 className="modal__title">
            {!noteInfo ? words.titlewindow[lang] : words.titlewindowedit[lang]}
          </h3>
          <div className="modal__content">
            <label>
              <span>Title</span>
              <input
                type="text"
                placeholder="Title"
                onChange={(event) => {
                  setInput(event.target.value);
                }}
                value={input}
              />
            </label>
            <label>
              <span>Content</span>
              <textarea
                placeholder="Content"
                rows={1}
                onChange={(event) => {
                  setArea(event.target.value);
                }}
                value={area}
              ></textarea>
            </label>
          </div>
          <div className="modal__controls">
            <button
              onClick={() => {
                closeModal();
              }}
              className="btn btn_red"
            >
              {words.closebtn[lang]}
            </button>
            {noteInfo ? (
              <button onClick={ChangeHandle} className="btn">
                {words.editwindowbtn[lang]}
              </button>
            ) : (
              <button onClick={addNote} className="btn">
                {words.addbtn[lang]}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Модальное окно подтверждения удаления */}
      <div
        onMouseDown={() => {
          closeDeleteModal();
        }}
        className={`modal ${delModal ? "active" : ""}`}
      >
        <div
          onMouseDown={(event) => {
            event.stopPropagation();
          }}
          className="modal__form modal__delete"
        >
          <h3 className="modal__title">{words.deleteConfirmTitle[lang]}</h3>
          <div className="modal__delete-content">
            <p className="modal__note-title">{getNoteById(delNoteId)?.title}</p>
          </div>
          <div className="modal__controls">
            <button
              onClick={() => {
                delNotes(delNoteId);
              }}
              className="btn btn_red"
              >
            {words.deleteBtnConfirm[lang]}
            </button>
            <button
              onClick={() => {
                closeDeleteModal();
              }}
              className="btn"
              >
              {words.cancelBtnConfirm[lang]}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;