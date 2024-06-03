import Image from "next/image";

// components/Card.js
export default function Card({ title, description, imageUrl, gitLink}) {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
        {imageUrl && (
          <Image className="w-full" src={imageUrl} alt={title} width={100} height={100}/>
        )}
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            <a href={gitLink}>  {title} </a>
          </div>
          
          <p className="text-gray-700 text-base">
            {description}
          </p>

        </div>
      </div>
    );
  }
  