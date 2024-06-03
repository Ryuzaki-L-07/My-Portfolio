import getPersonalData from "@/app/lib/personalData";
import Projects from "./projects";

export default function GetExperience(){
        
    const experience = getPersonalData().workExperience;


    return(
        <div className="mt-2 mb-5 ml-2 mr-2">
            <p className="text-2xl"> Work Experience </p>

            <div className="mt-2 ml-4 mr-2">
                {
                    experience.map(e => (
                        <div key={e.companyName}>
                            <div className="flex justify-between items-center" >
                                <li> {e.title} <a href={e.href} className="text-blue-500" > {e.companyName} </a> </li>
                                <p className="text-xs font-light text-right">{e.duration}</p> 
                            </div>   
                            {/* <p className="text-base"> - <span className="ml-2">{e.Description} </span> </p>                         */}
                        </div>
 
                    ))
                }
            </div>
        </div>
    )

}