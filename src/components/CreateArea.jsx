import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
export default function CreateArea(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  function handleClick(){
    setIsExpanded(true)
  }

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const {name, value} = event.target;
    setNote(preNote=>{
        return {...preNote,
        [name]: value,
        }
    });
  }
  function addNote(event){
    props.onAdd(note)
    setNote({
      title: "",
      content: "",
    })
    event.preventDefault();
}
  return (
    <div onClick={handleClick}>
      <form className="create-note">
        {isExpanded && <input onChange={handleChange} name="title" placeholder="Title" value={note.title} />}
        <textarea
        onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          value={note.content}
        />
        {isExpanded && <Fab onClick={addNote}><AddIcon/></Fab>}
      </form>
    </div>
  );
}
