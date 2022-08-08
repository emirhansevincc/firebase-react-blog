import "./home.css"
import React, { useEffect, useState } from 'react'

// Firebase
import {
  auth,
  db
} from '../../firebase/firebase-config'
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
} from 'firebase/firestore'

function Home({ isAuth }) {

  const [items, setItems] = useState([])

  const textsCollection = collection(db, "texts")
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(textsCollection)
      setItems(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }

    getPosts()
  }, [textsCollection])

  const deleteItem = async (id) => {
    const deletedItem = doc(db, "texts", id)
    await deleteDoc(deletedItem)
  }
  console.log(items);


  return (
    <div className="main-container">
      {
        items.map((item) => {
          return (
            <div className="texts-container" key={item.id}>

              {
                isAuth && item.author.id === auth.currentUser.uid &&(
                  <div className="icon">
                    <button onClick={() => {deleteItem(item.id)}}  >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                )
              }

              <div className="post">
                <div className="header">
                  <h2>{item.postTitle}</h2>
                </div>
                <div className="body">
                  <p>{item.text}</p>
                </div>
                <div className="author">
                  @{item.author.name}
                </div>
              </div>
            </div>
          )

        })
      }
    </div>
  )
}

export default Home;