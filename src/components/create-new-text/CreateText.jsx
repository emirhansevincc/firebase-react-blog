import "./create.css"

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Firebase
import { auth, db } from '../../firebase/firebase-config'
import { addDoc, collection } from "firebase/firestore"

function CreateText() {

  const navigate = useNavigate()
  const [text, setText] = useState("")
  const [textTitle, setTextTitle] = useState("")

  const createNewPost = async () => {
    const textsCollection = collection(db, "texts")
    await addDoc(textsCollection, {
      postTitle: textTitle,
      text,
      author: { 
        id: auth.currentUser.uid,
        name: auth.currentUser.displayName
      }
    })

    navigate("/")
  }

  return (
    <div className="container">
      <div className="create-new-text">
        <div className="text-container">
          <h2 className="cr">Create New Text</h2>
          <div className="form">
            <div className="title-part common">
              <label>Title :</label>
              <input
                type="text"
                placeholder="Title..."
                value={textTitle}
                onChange={(e) => setTextTitle(e.target.value)}
              />
            </div>
            <div className="text-part common">
              <label>Text :</label>
              <textarea
                placeholder="Text..."
                rows={6}
                onChange={(e) => setText(e.target.value)}
                value={text}
              />
            </div>
          </div>
          <button
            className="create-text"
            onClick={createNewPost}
          >Create Post</button>
        </div>
      </div>
    </div>
  )
}

export default CreateText