import React from 'react'

const Modal = ({isvisible,onClose,children}) => {
    if(!isvisible)return null;
  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
        <div className='max-w-[80%] bg-[#0B0B0B] flex flex-col border-[3px] border-[#00C29A]'>
            <div className='text-[#00C29A] text-xl  text-right pr-5 pt-2 font-heading'>
            <button  onClick={()=>onClose()}>X</button></div>
            <div className=' p-5 rounded'>{children}</div>

        </div>
        </div>
  )
}

export default Modal
