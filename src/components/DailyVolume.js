import React from 'react'

function DailyVolume() {
    const style = {
        fontSize:"10px",
        backgroundColor:'#3B3B3A',
        color:"white",
        sticky:true,
        paddingTop:'20px'
    }
    const style1={
        color:"green",
        paddingLeft:'20px'
    }
    return (
        <div style={style}>
            <header>Daily Volume</header><br></br>
            <span style={style1}>$12,345.70</span>
        </div>
    )
}

export default DailyVolume
