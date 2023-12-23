import './App.css';
import Header from './Header.js'
import Content from './Content'
//import Footer from './Footer'
import AddList from './AddList';
import { useState } from 'react';
import SearchBox from './SearchBox';
import Footer from './Footer';

function App() {
  const addItem =(item)=>{
      const id = list.length +1
      const add = {id,checked:false,item}
      const newList =[...list,add]
      updateList(newList)
  }
  const [list, setList] = useState(JSON.parse(localStorage.getItem("updated-list")) || []);
  const [newItem,setNewItem] = useState('')
  const [searchItem,setSearchItem] =useState('')
  const handleNewItem = (e) =>{
    e.preventDefault()
    setNewItem('')
    addItem(newItem)
  }
  const handleDelete = (id)=>{
    const newList = list.filter((item)=>item.id!==id)
    updateList(newList)
  }
  const handleCheck = (id)=>{
    const newList = list.map((item)=>item.id===id?{...item,checked:!item.checked}:item)
    updateList(newList)
  }
  const updateList =(newList)=>{
    setList(newList)
    window.localStorage.setItem("updated-list",JSON.stringify(newList))
  }
  return(
    <main className='main'>
      <div>
      <Header />
      <div className="content">
        <AddList newItem = {newItem} setNewItem = {setNewItem} handleNewItem = {handleNewItem} />
        <SearchBox searchitem = {searchItem} setSearchItem = {setSearchItem} />
      </div>
      <Content list={list.filter((item)=>item.item.includes(searchItem))} handleDelete = {handleDelete} handleCheck ={handleCheck} />
      </div>
      <Footer list = {list}/>
    </main>

   
  )
}

export default App;
