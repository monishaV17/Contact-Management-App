import React, { useEffect, useState } from "react";
import "./styles/contact.css";
import { useNavigate, useParams } from "react-router-dom";

const API_URL="http://127.0.0.1:5000";
function UpdateContacts(){
  const [name,setName]=useState("");
  const [phone_no,setPhone_number]=useState("");
  const [email,setEmail]=useState("");
  const [location,setLocation]=useState("");
  const [message,setMessage]=useState("");
  const navigate=useNavigate();
  const {id}=useParams();

  const showMessage=(text) => {
            setMessage(text);
            setTimeout(() => {
            setMessage("");
    }, 1000);
  }

  useEffect(()=> {
  const fetchContactById=async()=>{
    const token=localStorage.getItem("token");
    try{
      const res=await fetch(`${API_URL}/getContact/${id}`,{
        headers: {Authorization : `Bearer ${token}`
      }
    });
    const data=await res.json();
    if(res.ok && data.contacts && data.contacts.length > 0){
      const contact=data.contacts[0];
      setName(contact.name || "");
      setPhone_number(contact.phone_no || "");
      setEmail(contact.email || "");
      setLocation(contact.location || "");
    }
    else{
      showMessage(data.message || "Failed to load contacts");
    }
  }
  catch(error){
    console.log(error);
    showMessage("Failed to connect server");
  }
  }
  fetchContactById();
},[id]);

  const handleSubmit=async (e)=>{
    e.preventDefault();
    if(!name || !phone_no || !email || !location){
      showMessage('All fields are required');
      return;
    }
    try{
      const token=localStorage.getItem("token");
      const res=await fetch(`${API_URL}/updateContact/${id}`,{
        method: 'PUT',
        headers: {'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`},
        body: JSON.stringify({name,phone_no,email,location})
      }
      );
      const data=await res.json();
      if(res.ok){
        showMessage('contact updated');
        setName('');
        setPhone_number('');
        setEmail('');
        setLocation('')
      }
      else{
        showMessage(data.error || data.message || "update failed");
      }
    }
    catch(error){
      console.log(error);
      showMessage('Failed to connect server');
    }
  };

  return (
    <div className="contact-container">
      <form className="contactDetail-form" onSubmit={handleSubmit}>
        <h2>Edit</h2>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input id="name" type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)}/>
          </div>
            <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
             <input id="phone" type="tel" placeholder="Enter phone number" value={phone_no} onChange={(e) => setPhone_number(e.target.value)}/>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input id="email" type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
        <div className="form-group">
            <label htmlFor="location">Location:</label>
            <input id="location" type="text" placeholder="Enter location" value={location} onChange={(e) => setLocation(e.target.value)}/>
          </div>
        </div>
        <div className="btn-row">
          <button className="create-btn" type="submit">Save</button>
           <button type="button" onClick={() => navigate("/Contact")} className="back-btn">Back to Contacts</button>
        </div>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default UpdateContacts;