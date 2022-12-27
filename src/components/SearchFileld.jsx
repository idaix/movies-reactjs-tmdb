import React from 'react'
import Button from './Button/Button'

const SearchFileld = ({ setQuery, query }) => {
  return (
    <div className='rounded overflow-hidden bg-image-for-search'>
        <div className='bg-image rounded h-full w-full p-3 flex'>
            <input 
                type="text"
                placeholder='Movie...'
                value={query}
                className='flex-1 rounded backdrop-blur-sm bg-white/10 outline-none p-3' 
                onChange={(e)=>setQuery(e.target.value)}
            />
            
            {/* <Button title={'Search'} onClick={()=>console.log('Click')}/> */}
        </div>
    </div>
  )
}

export default SearchFileld