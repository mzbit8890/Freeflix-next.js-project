import { ReactNode } from "react";
import BackgroungImage from "../../public/login_background.jpg"
import Image from "next/image"
import Logo from "../../public/fireh-removebg-preview.png"

export default function AuthLayout ({children}: {children: ReactNode}){
    return(
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
        <Image src={BackgroungImage} alt="Background image" className="hidden sm:flex sm:object-cover -z-10 brightness-50" priority fill />
        <Image src={Logo} alt="freeflix logo" width={190} height={190} className="absolute left-4 object-contain md:left-10 md:top-5 "/>
        {children}
    </div>
    )
}