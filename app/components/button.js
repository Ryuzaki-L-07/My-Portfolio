"use client";

export default function Button(){

    return(
        <div>
            <button className="bg-green-500 rounded-sm px-4 py-1" onClick={() => console.log(
                "I have clicked Here."
            )}>
                Click Here
            </button> 
        </div>

    )
  
}