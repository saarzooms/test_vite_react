import { useState } from "react"

interface Props{
    items:string[]
    title:string
}

const List = ({items,title}:Props) => {
    const [selectedIndex,setSelectedIndex]=useState(-1)
    return (
    <>
        <div>{title}</div>
        <ul className="list-group">
                {items.map((item,index)=><li key={item} 
                onClick={()=>{
                    console.log(item,index);
                   setSelectedIndex(index) 
                }} 
                className={selectedIndex==index?
                'list-group-item active':'list-group-item'}>
                    {item}</li>)}
        </ul>
    </>
  )
}

export default List