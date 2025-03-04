import React, {useState, useEffect} from "react";

function DigitalClock() {

    const [time, setTime] = useState(new Date()); 


    
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000)

        
        return () => {
            clearInterval(intervalId) 
        }

    }, [])

    function formatTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12; // Military time converstion 
        // if its 12 will be 0 which will be false so,
        //  With the OR[||] logical operator if its 0 it will return 12

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`
    }

    // padZero will add a zero in ones place if there are no 2 digit numbers
    function padZero(number) {
        return (number < 10 ? "0" : "") + number
    }

    return(
        <>
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
        </>
    )
}


export default DigitalClock