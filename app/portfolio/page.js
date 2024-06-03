import React from "react";
import LeftContents from "./leftComponents/leftContent";
import RightComponents from "./rightComponents/rightContent";
export async function generateMetadata(){
    // const id = params.id;

    // const blogs = getBlogs();

    // const blog = blogs.find(blog => blog.id == id);
    // if (!blog.id){
    //     console.log("Blog not found");
    // }

    return{
        title: "Md. Monowarul Amin",
        description: "Md. Monowarul Amin Portfolio",
    }

}


export default function PortFolio(){

    return (
        <main className="mt 5 mb-5 mr-20 ml-20">
            <div className="flex min-h-screen">
                <LeftContents/> 
                <RightComponents/>
            </div>
        </main>
    );
}