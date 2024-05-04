import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'

const Queries = () => {

  const textAreaRef = useRef(null)
  const [email, setEmail] = useState()
  const [query, setQuery] = useState()

  useEffect(() => {
    textAreaRef.current.style.height = 'auto'
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px'
  }, [query])

  const handleQuerySubmit = async (e) => {
    e.preventDefault();
    if (!email || !query) return;
    try {
      await axios.post("/query", { email, query });
    } catch (e) {
      console.log(e.message)
    }
  }


  return (
    <div>
      <h2 className='text-3xl font-bold mb-4'>QUERIES</h2>
      <span className='text-xl'>Drop your queries here👇</span>
      <form className='flex flex-col gap-5 mt-4' onSubmit={handleQuerySubmit}>
        <input type='email'
          placeholder='YOUR EMAIL-ID'
          className='bg-slate-500/60 rounded-lg p-2'
          value={email}
          onChange={(e) => setEmail(e.target.value.toLowerCase())}
        />
        {/* <input type='name' placeholder='NAME' className='bg-slate-500/60 rounded-lg p-2' /> */}
        <textarea type='text'
          placeholder='YOUR QUERY'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className='bg-slate-500/60 rounded-lg p-2 min-h-20 max-h-fit resize-none overflow-hidden'
          ref={textAreaRef}></textarea>
        <input type='submit' value={"SUBMIT"} className='w-fit m-auto p-2 bg-slate-500/60 rounded-xl' />
      </form>
    </div>
  )
}

export default Queries