import getPersonalData from "@/app/lib/personalData";
import Image from "next/image";

export default function Tools(){
    
    const tools = getPersonalData().Tools;

    return(
        <div>
            <p className="text-2xl"> Tools and Technologies </p>
            {
                tools.map( domains => (
                    <div className="flex gap-6 mt-2 justify-center" key={domains.key}>
                        <p className="text-left align-left"> {domains.key} </p>
                        {domains.values.map( value =>(
                            <div key={value.caption} className="justify-end ml-5 mr-5">
                                <div>
                                    <div>
                                        <Image src={value.imageLink} width={50} height={50} alt={value.caption}/>
                                    </div>
                                    <p className="text-sm ml-3"> {value.caption} </p>
                                </div>
                            </div>
                        ))}
                    </div>
                ))
            }
        </div>
    )

}