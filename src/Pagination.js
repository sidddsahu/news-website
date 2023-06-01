import React from 'react'
import { useGlobalHook } from './Context'

const Pagination = () => {
  const {page , nbPages, getPrevPage, getNextPage} = useGlobalHook();
  return (
    <div className='pagination-button'> 
    <button className='btn btn-dark me-2' onClick={() => getPrevPage()}>PREV</button>
    <span>{page + 1} of {nbPages}</span>
    <button className='btn btn-dark ms-2' onClick={() => getNextPage()}>NEXT</button>
      
    </div>
  )
}

export default Pagination
