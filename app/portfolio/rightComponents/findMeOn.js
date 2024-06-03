import getPersonalData from "@/app/lib/personalData";
import Image from "next/image";

export default function FindMeOnRight(){
    const personalInfo = getPersonalData().personalInfo;
    const findMeOn_ = getPersonalData().findMeOn;

    return(
        <div className="flex justify-between items-center mt-5 mb-5 ml-2 mr-2">
            <span className=" text-base left-text"> Email: <a href={personalInfo.emailhref}> {personalInfo.email} </a></span>
            <span className="right-text flex gap-2">
                <p className="text-base"> Find Me On </p>
                {
                    findMeOn_.map(social => (
                        <div key={social.alt}>
                            <a href={social.siteLink} target="_blank">
                            <Image className="rounded-full aspect-square object-cover" src={social.imageLink}  alt={social.alt} key={social.siteLink} width={30} height={30} />
                            </a>
                        </div>
                    ))
                }
            </span>
        </div>
    )

}