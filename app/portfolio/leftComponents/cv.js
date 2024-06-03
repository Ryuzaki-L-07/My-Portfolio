import getPersonalData from "@/app/lib/personalData"

export default function CV(){
    const cvLink = getPersonalData().CVlink
    return(
        <div>
            <a href={cvLink} target="_blank">
                <p className="text-2xl mt-2 mb-2 text-blue-500">My CV</p>
            </a>
        </div>
    )
}