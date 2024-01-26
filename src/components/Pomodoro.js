import React, { useState,useEffect } from 'react'
import './Pomodoro.css'
export const Pomodoro = () => {
    const [workDuration,setWorkDuration]=useState(60);
    const[breakDuration,setBreakDuration]=useState(10);
    const [workSecond,setWorkSecond]=useState(3600);
    const[breakSecond,setBreakSecond]=useState(600);
    const [type,setType] = useState("Work");
    const [resetFlag,setResetFlag] = useState(true);
    const [flag,setFlag] = useState(false);
    useEffect(()=>{
        if(flag && type === "Work"){
            if(workSecond>0){
                const timer = setTimeout(()=>{setWorkSecond(workSecond-1)},1000);
                return ()=>clearInterval(timer)
            }
            if(workSecond === 0){
                alert('Work Duration is over');
                setType("Break");
                setWorkSecond(workDuration*60)
            }
        }
        
        if(flag && type==="Break"){
            if(breakSecond>0){
                const timer = setTimeout(()=>{setBreakSecond(breakSecond-1)},1000);
                return ()=>clearInterval(timer)
            }
            if(breakSecond === 0){
                alert('Break Duration is over');
                setType("Work");
                setWorkSecond(breakDuration*60)
            }
        }
        
    },[breakSecond,workSecond,flag,breakDuration,workDuration,type])
    const convertToMinutetoSecond=(sec)=>{
      let m = parseInt(sec/60).toString();
      let s = parseInt(sec%60).toString();
      if(m.length === 1) m="0" + m;
      if(s.length === 1) s="0" + s;
      return m+":"+s
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        setWorkSecond(workDuration*60);
        setBreakSecond(breakDuration*60);
        setType("Work")
    }
    const reset=()=>{
        setResetFlag(true);
        setFlag(false)
        setType("Work");
        setBreakDuration(10);
        setWorkDuration(60)
        setBreakSecond(600)
        setWorkSecond(3600)
    }
  return (
    <div id='Pomodoro'>
        <div>
        <p className='TIMER'>{type==="Work"?convertToMinutetoSecond(workSecond):convertToMinutetoSecond(breakSecond)}</p> <hr/>
        </div>
        <div>
            <p className='WORK'>{type==="Work"?"Work":"Break"} - Time</p>
        </div><hr/>
        <div className='buttons'>
        <button onClick={()=>{setFlag(true);setResetFlag(false)}} disabled={flag}>Start</button>
            <button onClick={()=>{setFlag(false);setResetFlag(false)}}  disabled={!flag}>Stop</button>
            <button disabled={resetFlag} onClick={reset}>Reset</button>
        </div>
        <div>
        <form onSubmit={(e)=>handleSubmit(e)}>
                <label htmlFor={workDuration}>WORK-DURATION</label>
                <input placeholder='ENTER YOUR WORK DURATION HERE' type="number" value={workDuration} 
                onChange={(e)=>setWorkDuration(e.target.value)} /><br/>
                <label  htmlFor={breakDuration}>BREAK-DURATION</label>
                <input placeholder='ENTER YOUR BREAK DURATION HERE' type="number" value={breakDuration}
                onChange={(e)=>setBreakDuration(e.target.value)}/>
                <input className='Set' type="submit" value="Set" />
            </form>
        </div>
        
        
    </div>
  )
}
