import React, {useState, useEffect, useRef} from "react";

function StopWatch(){

    const [running, SetRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalId = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if(running){
            intervalId.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current) // All in MiliSeconds
                console.log(intervalId.current)
            }, 10)

            return () => {
                clearInterval(intervalId.current) // for no unexpected behaviour 
            }
        }

    }, [running]);

    function start() {
        SetRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }

    function stop() {
        SetRunning(false);
    }

    function reset() {
        setElapsedTime(0);
        SetRunning(false);
    }

    function formatTime() {
        let hours = Math.floor(elapsedTime/[1000 * 60 * 60]) 
                                        // 1000ms - 60secs - 60mins
        let minutes = Math.floor(elapsedTime/(1000 * 60) % 60)
                                        // % 60 [is to ensure the minute reset after reaching 60mins]
        let seconds = Math.floor(elapsedTime/(1000) % 60)
        let miliSeconds = Math.floor((elapsedTime % 1000) / 10)
                                        // / 10 [will show only 2 digits of miliSeconds]

        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        miliSeconds = String(miliSeconds).padStart(2, "0");

        return `${hours}:${minutes}:${seconds}:${miliSeconds}`
    }


    return(
        <>
        <div className="stopWatch">
            <div className="display">{formatTime()}</div>
            <div className="controls">
                <button onClick={start} className="start">Start</button>
                <button onClick={stop} className="stop">Stop</button>
                <button onClick={reset} className="reset">Reset</button>
            </div>
        </div>
        </>
    )
}

export default StopWatch