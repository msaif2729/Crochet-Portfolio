import { useState } from "react"
import ServiceContext from "./serviceContext"

const ServiceState = (props)=>{

    const host = "https://crochet-portfolio-api.vercel.app"
    // const host = "http://localhost:5000"


    const [services,setServices] = useState(null)

    const getService =async ()=>{
        const review = await fetch(`${host}/api/service/getallservice`, {
            method:'GET',
            headers: {
                "Content-Type": "application/json"
            }
        });
        const json = await review.json() 
        // console.log(json)
        setServices(json)
        return json;
    }




    const createService =async (service)=>{
        const {first,last,email,phno,message,image} = service
        const review = await fetch(`${host}/api/service/createService`, {
            method:'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({first,last,email,phno,message,image})
        });
        const json = await review.json() 
        // console.log(json)
        setServices(json)
    }

    return(
        <ServiceContext.Provider value={{services,getService,createService}} >
                {props.children}
        </ServiceContext.Provider>

    )
}

export default ServiceState