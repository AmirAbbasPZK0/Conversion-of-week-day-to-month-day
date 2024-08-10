import { useState } from "react";
import { weekDays } from "./libs/weekDays";
import { dateHandler } from "./libs/dateHandler";


const App = () => {

    const [currentDate , setCurrentDate] = useState(new Date(new Date().getFullYear() , 11 , 31))

    function last_day(y , m){
        return new Date(y , m + 1, 0).getDate()
    }

    return (<>
        {weekDays.map((item , index) => (
            <button className="p-4 m-2 border-3xl rounded-sm" key={index} onClick={()=>{
                    let monthCondition = last_day(new Date().getFullYear() , new Date().getMonth()) < dateHandler(currentDate , item.id)
                    if(monthCondition){
                        let text = `${currentDate.getFullYear()}/${currentDate.getMonth() + 2}/${1}`
                        if(currentDate.getMonth() + 2 === 13){
                            text = `${currentDate.getFullYear() + 1}/${1}/${1}`
                        }else if(currentDate.getMonth() + 2 === 0){
                            text = `${currentDate.getFullYear() - 1}/${12}/${last_day(new Date().getFullYear() , new Date().getMonth())}`
                        }
                        let d = new Date(`${text}`)
                        setCurrentDate(d)
                        console.log(text)
                    }else if(dateHandler(currentDate , item.id) < 1){
                        let text = `${currentDate.getFullYear()}/${currentDate.getMonth()}/${last_day(new Date().getFullYear() , new Date().getMonth())}`
                        if(currentDate.getMonth() === 13){
                            text = `${currentDate.getFullYear() + 1}/${1}/${1}`
                        }else if(currentDate.getMonth() === 0){
                            text = `${currentDate.getFullYear() - 1}/${12}/${last_day(new Date().getFullYear() , new Date().getMonth())}`
                        }
                        let d = new Date(`${text}`)
                        setCurrentDate(d)
                        console.log(text)
                    }else{
                        let text = `${currentDate.getFullYear()}/${currentDate.getMonth() + 1}/${dateHandler(currentDate , item.id)}`
                        if(currentDate.getMonth() + 1 === 13){
                            text = `${currentDate.getFullYear() + 1}/${1}/${1}`
                        }else if(currentDate.getMonth() + 1 === 0){
                            text = `${currentDate.getFullYear() - 1}/${12}/${last_day(new Date().getFullYear() , new Date().getMonth())}`
                        }
                        let d = new Date(`${text}`)
                        setCurrentDate(d)
                        console.log(text)
                    }
                
            }}><span>{item.title}</span></button>
        ))}
    </>);
}
 
export default App;
