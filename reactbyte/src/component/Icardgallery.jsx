import React from 'react'
import Icard from './Icard'
function Icardgallery(){
    const student=[{
        college:"ABES Engineering College",
        roll:"1047",
        name:"Shivam",
        branch:"CSE",
    },
    {
        college:"ABES Engineering College",
        roll:"1057",
        name:"Shiv",
        branch:"CSE",
    }
]
    return(
        <div>
         {/* <Icard college="ABES Engineering College" pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIAC1kBFD8UgsOayMBHWl9pktJkSO1BuY7ZpdVGmLUMg&s=10" roll="1047" name="Shivam" branch="CSE"></Icard> */}
        
        <Icard data={student[1]}></Icard>
        </div>
    )
}
export default Icardgallery
