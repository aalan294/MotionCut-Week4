import React from 'react'

const SearchBox = ({searchItem,setSearchItem}) => {
  return (
    <form action="" onSubmit={(e)=>e.preventDefault()} className='search'>
        <input type="text" placeholder='search here' value = {searchItem} onChange={(e)=>setSearchItem(e.target.value)} />
    </form>
  )
}

export default SearchBox