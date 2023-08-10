import './App.css'
import { useState } from "react";
import Note from "./components/Note";
import Footer from "./components/Footer";
import CreateArea from "./components/CreateArea";
import Header from "./components/Header";

function App() {

  const [notes, setNotes] = useState([]);
  function onAdd(newNote){
    setNotes(prevNotes=>[...prevNotes, newNote])
  }

  function deleteNote(id){
    setNotes(prevNotes=>{
      return prevNotes.filter((noteItem, index)=>index !== id )
    })
  }
  return (
    <>
      <Header />
      <CreateArea onAdd={onAdd}/>
      {notes.map((noteItem, index) => <Note key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={deleteNote}/>)}
      <Footer />
    </>
  )
}

export default App
