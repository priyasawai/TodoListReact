import React from'react';
import { useState } from 'react';
import "./todolist.css"
function TodoList()
{
  const[Input,setInput]=useState("")
  const[listData,setlistData]=useState([])

  function addActivity()
  {
    // setlistData([...listData,Input])
    // console.log(listData)
    setlistData(()=>
    {
      const updatedList=[...listData,Input]
      console.log(updatedList)
      setInput("")
      return updatedList;
    })
  }
  function removActivity(index) 
  {
    const updatedListData=listData.filter((elem,id)=>
    {
       return index!==id;
    })
    setlistData(updatedListData)
  }
  function removeAll(){
    setlistData([])
  }
  return(
    <>
    <div className="container">
      <div className='header'>TODO LIST</div>
      <input type="text" placeholder="Add Activity" value={Input} onChange={(e)=>setInput(e.target.value)}/>
      <button className='btn' onClick={addActivity}>Add</button>
      {
        listData!==[] && listData.map((data,index)=>{
          return(
            <>
            <p className='para' key={index}>
              <div className='listdata'>{data}</div>
              <div><button className='btnPosition' onClick={()=>removActivity(index)}>Remove</button></div>
            </p>
            </>
          );
        })
      }
      {
        listData.length>=1 && <button onClick={removeAll} className="removeAllbtn">Remove All</button>
      }
      </div>
    </>
  );
}
export default TodoList