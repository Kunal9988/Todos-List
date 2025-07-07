import React, { useState } from 'react'

export const AddTodos = ({addTodos}) => {

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit= (e) =>{ 
    e.preventDefault();
    if(!title || !desc){
      alert("title or description cannot be blank");
    }
    else{
    addTodos(title,desc);
    setTitle("");
    setDesc("");
    }
  }
  return (
    <div className='container'>
      <h3>Add Todos</h3>

      <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="title" className="htmlform-label">Todo title </label>
    <input type="text" value={title} onChange = {(e)=>{setTitle(e.target.value)}}  className="htmlform-control" id="title" />
    
  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="htmlform-label">Todo Description</label>
    <input type="text" value={desc} onChange = {(e)=>{setDesc(e.target.value)}} className="htmlform-control" id="desc"/>
  </div>
  
  <button type="submit" className="btn btn-sm btn-success">Add Todos</button>
  </form>

  </div>
  )
}


