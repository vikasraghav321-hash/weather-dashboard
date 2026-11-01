import React from 'react'

function SearchBar() {
  return (
    <div className='flex gap-3 mt-8 '>
<input type='text' 
placeholder='Search city...'
className='w-full bg-slate-800 border-slate-800 rounded-xl px-4 py-3 outline-none focus:border-cyan-400'
/>
<button className='bg-cyan-500 hover:bg-cyan-600 px-6 rounded-xl font-semibold'>Search</button>
    </div>
  )
}

export default SearchBar