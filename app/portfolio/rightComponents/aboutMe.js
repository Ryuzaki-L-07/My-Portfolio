import getPersonalData from "@/app/lib/personalData";

export default function AboutMe(){
    const getAboutMeData = getPersonalData().AboutMe;

    return(
        <div className="mb-5 ml-2 mr-2">
            <p className="text-2xl"> About Me </p>
   
            <div className="mt-2">
                <p>Assalamu Alaikum. I am a Software Engineering student in Computer Science and Engineering Department at Islamic University of Technology, Gazipur.</p> <br></br>
                <p>However, I have hands on experince in <b>Web Development both Frontend and Backend</b> </p>
                <p>I am highly enthusiactic in <b>Competitive Programming </b> and participate in Online Contests in a regular basis. 
                    Also I have participated in Onsite constest during my College and University.
                </p>
                <br></br>
                <p className="font-bold"> I am on the software industry job market. Please send me an email if you are recruting. </p>
            </div>

        </div>
    )
}