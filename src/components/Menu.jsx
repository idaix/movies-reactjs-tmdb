import React from 'react'

const Menu = ({ data }) => {
  return (
    <ul className='flex gap-1 overflow-x-auto hide_sb'>
        {data?.map(item=>(
            <li className='px-3 flex-shrink-0 py-1 bg-white/5 rounded-full font-bold text-gray/500' key={item.id}>{item.name}</li>
        ))}
    </ul>
  )
}

export default Menu