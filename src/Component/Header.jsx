import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
function Header() {
    const navigate = useNavigate();
    const [list,setList]=useState([
        {
            tab:"Backlist",
            index:1,
            active:true,
        },
        {
            tab:"MarkShit",
            index:2,
            active:false
        }
    ])
    const handleActiveTab=(value)=>{
        const data=list?.map((_v,i)=>{
             return _v?.index==value?.index ? {tab:value?.tab,
             index:value?.index,
             active:!value?.active} : {tab:_v?.tab,
                index:_v?.index,
                active:!_v?.active} 
          })
          setList(data)
    }
  return (
     <div className='Tab flex w-full h-20 bg-white shadow-lg items-center'>
        {list.map((_value,_index)=>(
            <button onClick={()=>{
                handleActiveTab(_value)
                navigate(`/${_value?.tab == 'Backlist' ? "" : _value?.tab}`)
            }} className={`mx-5 ${_value?.active ?'bg-blue-500' :"bg-white"} h-10 p-2 rounded shadow-md`}>
                <p>{_value?.tab}</p>
            </button>
        ))}
     </div>
  )
}

export default Header