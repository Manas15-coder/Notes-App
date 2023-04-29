import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import '../App.css'
import { removeNote } from './Redux/action';


export default function AllNotes() {

   const notes= useSelector((state) => state.notes)
   console.log(notes)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
    <div className='container'>
    
        {
        
        notes.map((note, index) => {
          return (
            <>
            <div className='d-flex'></div>
              <div className="card" style={{width: "300px", height:"300px",padding:"10px 20px", margin:'2rem'}}>
                <div className="card-body">
                  <div className='card-btn'>
                  <button className='delete-btn' title='delete' onClick={()=>{dispatch(removeNote(index))}}><i class='fa fa-trash-o'></i></button>
                <button className='update-btn' title='update' onClick={()=>{navigate('/editNote')}}><i class='fa fa-pencil-square-o'></i></button>
                  </div>
                  <h5 className="card-title"><h2>{note.title}</h2></h5>
                  <br/>
                  <p className="card-text"><h3>{note.content}</h3></p>
 
                </div>
              </div>
            </>
 
          )
        })
      }
   </div>
   </>
 
  )
}
