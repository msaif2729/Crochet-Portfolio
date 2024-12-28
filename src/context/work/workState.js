import { useState } from "react"
import WorkContext from "./workContext"

const WorkState = (props)=>{

    const host = "https://crochet-portfolio-api.vercel.app"
    // const host = "http://localhost:5000"
    


    const [works,setWorks] = useState(null)

    const getWorks =async ()=>{
        const work = await fetch(`${host}/api/work/getallwork`, {
            method:'GET',
            headers: {
                "Content-Type": "application/json"
            }
        });
        const json = await work.json() 
        // console.log(json)
        setWorks(json)
        return json
    }

    const createWork =async (works)=>{

        const {name,image} = works
        const work = await fetch(`${host}/api/work/crochet/admin/saif/createWork`, {
            method:'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({name,image})
        });

        if (!work.ok) {
            throw new Error(`HTTP error! status: ${work.status}`);
        }
        
        // console.log(work);
        const json = await work.json() 
        // console.log(json)
        setWorks(json)
    }

    return(
        <WorkContext.Provider value={{works,getWorks,createWork}} >
                {props.children}
        </WorkContext.Provider>

    )
}

export default WorkState