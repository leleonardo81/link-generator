import React, { useState } from "react";
import { createLink, getLink } from "../api";
import '../App.css';

const MainPage = () => {
  const [link, setLink] = useState('');
  const [name, setName] = useState('');
  const [loading, setloading] = useState(false);

  const submitLink = () => {
    setloading(true)
    getLink(name).then(response=>{
      if (response.data) {
        alert("Link Name already used, please try another!")
        setloading(false);
      } else {
        createLink(name, link).then(
          res=> {
            alert(`Link created: ${window.location.host}/${name}`)
            // alert("Link created and copied!")
            // navigator.clipboard.writeText(res.url);
            setloading(false);
          }
        );
      }

    });
  }

  return (
    <div className="App container d-flex justify-content-center min-vh-100 flex-column">
      <div className="mb-5">
        <h1>Leo Link shortener</h1>
      </div>
      <div className="mb-4">
        {window.location.host}/&nbsp;
        <input 
          placeholder="Name"
          onChange={e=>setName(e.target.value)}
          value={name}
          />
      </div>

      <div className="mb-4">
        <input 
          className="w-50"
          placeholder="Copy your link here"
          onChange={e=>setLink(e.target.value)}
          value={link}
          />
      </div>
      <div className="mb-4">
        <button class="btn btn-light font-bold" onClick={submitLink}
          disabled={!link || !name || loading}
        >Shorten Link</button>
      </div>
    </div>
  )
}

export default MainPage;