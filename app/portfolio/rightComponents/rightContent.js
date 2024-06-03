import FindMeOn from "../leftComponents/findMe";
import AboutMe from "./aboutMe";
import GetExperience from "./experience";
import FindMeOnRight from "./findMeOn";
import Projects from "./projects";
import Tools from "./tools";

export default function RightContents(){

    return(
        <div className="w-2/3 p-4 bg-white text-black">
            {/* <h1 className="text-4xl font-bold">Right Section</h1>
            <p>This is the right section content.</p> */}
            <AboutMe/>
            <hr></hr>
            <FindMeOnRight/>
            <hr></hr>
            <GetExperience/>
            <hr></hr>
            <Tools />
            <hr></hr>
            <Projects/>
            <hr></hr>

        </div>
    )

}