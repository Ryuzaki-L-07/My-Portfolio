import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link';
import getPersonalData from "./lib/personalData";

const inter = Inter({ subsets: ["latin"] });

const personalInfo = getPersonalData().personalInfo;

export const metadata = {
  title: `${personalInfo.name}`,
  description: `${personalInfo.name} portfolio `,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="p-6">
      <body className={inter.className}>
        <nav>
          <ul className="flex gap-6">
            <li className="mr-50 font-bold"><Link href="/"> {personalInfo.name} </Link> </li>
            <li><Link href="/">Home</Link></li>
            {/* <li><Link href="/about">About</Link></li> */}
            {/* <li><Link href="/blogs">Blogs</Link></li> */}
          </ul>
        </nav>
        <hr/>

        {children}
      </body>
    </html>
  );
}
