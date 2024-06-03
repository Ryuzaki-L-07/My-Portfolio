import getPersonalData from "@/app/lib/personalData";
import Link from "next/link";
import Image from "next/image";

export default function FindMeOn(){
    const findMeOns = getPersonalData().findMeOn;

    return(
        <div>
            <h4 className="text-xl mt-2">Find Me On ...</h4>
            <div className="flex gap-2 mt-2 mb-2">
                {
                    findMeOns.map(social => (
                        <div className="flex" key={social.alt}>
                            <a href={social.siteLink} target="_blank">
                                <Image src={social.imageLink} alt={social.alt} key={social.imageLink} width={30} height={30} className="rounded-full aspect-square object-cover"/>
                            </a>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}
