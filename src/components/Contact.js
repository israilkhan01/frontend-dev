// import React from 'react'

function Contact() {
  return (
    <div className="text-center w-6/12 mx-auto pt-3">
      <h1 className="text-center text-3xl m-4 p-4">
        Contact
      </h1>
      <form className="flex flex-col">
        <input type="text" className="border border-black p-2 m-2" placeholder="name"/>
        <input type="text" className="border border-black p-2 m-2" placeholder="message"/>
        <button className="border border-black p-2 m-2">Submit</button>
      </form>
    </div>
  )
}

export default Contact