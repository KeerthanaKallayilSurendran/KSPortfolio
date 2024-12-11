import React, { useState } from 'react'

const Contact = () => {
  const [copySuccess, setCopySuccess] = useState(false);
  const handleCopy = () => {
    const email = "keerthana.kallayilsurendran@gmail.com";
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setCopySuccess(true); 
        setTimeout(() => setCopySuccess(false), 2000); 
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };
  return (
    <div className='container'>
      <div className='text-center pt-5'>
        <h1>Get in touch</h1>
        <p>What’s next? Feel free to reach out to me if you're looking for <br /> a developer, have a query, or simply want to connect.</p>
        
        <div className='d-flex justify-content-center align-items-center'>
          <p><i style={{ color: "#3b264f" }} className="fa-solid fa-envelope pe-2 fw-bold fs-5"></i></p>
          <p className='fw-bold fs-5 me-3'>keerthana.kallayilsurendran@gmail.com</p>
          <p onClick={handleCopy} style={{cursor:"pointer"}}><i style={{ color: "#3b264f" }} class="fa-solid fa-copy fw-bold fs-5"></i></p>
          {copySuccess && (
            <span style={{ marginLeft: "10px", color: "green", fontSize: "14px", fontWeight: "bold",}}>Copied!</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default Contact