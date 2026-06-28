import React, { createContext, useEffect, useState } from "react";
import words from "../assets/lang";
export const NotesContext = createContext(null);
const NotesProvaider = ({children}) => {
  // console.log(props);
  const [notes, setNotes] = useState([
      {
        id: 1,
        title: "React",
        date: "07.03.2022",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      },
      {
        id: 2,
        title: "Vue",
        date: "15.03.2022",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      },
      {
        id: 3,
        title: "JavaScript",
        date: "28.03.2022",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      },
    ]);
    const [modal, setModal] = useState(false)
    const [currentId, setCurrentId] = useState(0)
    const [noteInfo, setNoteInfo] = useState(null)
    const [save, setSave] = useState("")
    const [lang, setLang] = useState("ru")
    const [delModal, setDelModal] = useState(false)
    const [delNoteId, setDelNoteId] = useState(null)
    const saveNotes = (obj)=>{
      setNotes([...notes, obj])
      setCurrentId(obj.id)
      setModal(false)
    }
    const delNotes = (id)=>{
      const list = notes.filter((elem)=>{ return elem.id != id})
      setNotes(list);
      setDelModal(false);
    }
    
    const openDeleteModal = (id) => {
      setDelNoteId(id);
      setDelModal(true);
    }
  
    const closeDeleteModal = () => {
      setDelNoteId(null);
      setDelModal(false);
    }
    
    const getNote = (id)=>{
      const value = notes.find((elem)=> elem.id == id)
      setNoteInfo(value);
      setModal(true)
    }
    
    const changeNote = (obj)=>{
      const newNotes = notes.map((elem)=>{
        if (elem.id == obj.id) {
          elem.title = obj.title
          elem.desc = obj.desc
          elem.date = obj.date
        }
        return elem
      })
      setNotes(newNotes);
      closeModal()
    }
    
    const closeModal = ()=>{
      setNoteInfo(null);
      setModal(false)
    }
    
    useEffect(()=>{
      const localNotes = localStorage.getItem("notes")
      const data = JSON.parse(localNotes)
      setNotes(data);
    }, [])
      
    
    useEffect(()=>{
      localStorage.setItem("notes", JSON.stringify(notes))
      const lastIndex = notes.length - 1
      const id = lastIndex >= 0 ? notes[lastIndex].id : 0
    }, [notes])
  return (
    <NotesContext value={{notes, modal, setModal, currentId, saveNotes, delNotes, getNote, noteInfo, closeModal, changeNote, save, setSave, lang, setLang, words, delModal, delNoteId, openDeleteModal, closeDeleteModal}}>
      {children}
    </NotesContext>
  )
}

export default NotesProvaider