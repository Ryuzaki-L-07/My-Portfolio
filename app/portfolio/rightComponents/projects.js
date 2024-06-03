import getPersonalData from "@/app/lib/personalData";
import Image from "next/image";
import Card from "./card";

export default function Projects(){

    const projects = getPersonalData().projects;

    return(
        <div>
            <p className="text-2xl"> Projects </p>
            {
                projects.map(project => (
                    <div key={project.title} className="flex">
                        <Card 
                            title={project.title} 
                            description={project.Description} 
                            imageUrl={project.imageLink} 
                            gitLink={project.gitLink}    
                        /> 
                    </div>

                ) )
            }
        </div>
    )
}