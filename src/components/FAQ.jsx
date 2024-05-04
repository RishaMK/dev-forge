import React, { useState } from 'react'
import { FaCaretDown } from 'react-icons/fa'

const FAQ = () => {

  const [show, setShow] = useState(null)

  const faqs = [
    {
      question: "Will food be provided?",
      answer: "Yes, food will be provided!"
    },
    {
      question: "2",
      answer: "2"
    },
    {
      question: "3",
      answer: "3"
    },
  ]

  return (
    <div id='faq' className='relative flex flex-col gap-20 mt-10 py-24'>
      <h2 className='text-3xl font-bold'>FAQs</h2>
      <div className='border-4 rounded-lg border-white font-jaro text-xl'>
        {
          faqs.map((faq, index) => (
            <div key={index} className='m-2 border-4 rounded-lg border-white bg-slate-500/30'>
              <div className='flex justify-between cursor-pointer items-center' onClick={() => setShow(show !== index || show === null ? index : null)}>
                <span className='m-2'>
                  Q:&nbsp;&nbsp;{faq.question}
                </span>
                <FaCaretDown className='m-2' />
              </div>
              {
                show === index &&
                <p className=' border-t-2 border-white m-2 pt-2'>
                  A:&nbsp;&nbsp;{faq.answer}
                </p>
              }
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default FAQ