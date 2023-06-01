import React from 'react'
import { useGlobalHook } from './Context'

const Search = () => {
  const {query, searchPost} = useGlobalHook()
  return (
    <div className='search'>
      <h1>Siddhant Technical News Website</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <input type="text" placeholder='Search here...' value={query}  onChange={(e) => searchPost(e.target.value) }/>
        </div>
      </form>
    </div>
  )
}

export default Search
