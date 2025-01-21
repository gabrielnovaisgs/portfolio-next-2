
'use client'
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons/faWhatsapp";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import BtnHeader from "./header-button";
import { useState } from "react";

export default function Navebar() {
    const [currentLink, setCurrentLink] = useState('/#hero-section')


    return (
        <header className="font-title top-0  hidden md:flex  px-16 py-4 w-full fixed">

            <nav className="rounded-full gap-4 relative bg-dark2 text-white w-full grid grid-cols-3 items-center p-2">
                <div className="flex gap-4">
                    <BtnHeader setCurrentLink={setCurrentLink} currentLink={currentLink} href="/#hero-section">Home</BtnHeader>
                    <BtnHeader setCurrentLink={setCurrentLink} currentLink={currentLink} href="/#services-section">Serviços </BtnHeader>
                    {/*  <BtnHeader setCurrentLink={setCurrentLink} currentLink={currentLink} href="/#project-section">Projetos </BtnHeader> */}
                    <BtnHeader setCurrentLink={setCurrentLink} currentLink={currentLink} href="/#stack-section">Tecnologia </BtnHeader>
                </div>
                <div className="flex justify-center items-center bg-accent w-24 h-24 rounded-full 
                absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-all">

                    <h1 className="font-title font-extrabold text-5xl  
                    
        ">{"GN"}</h1>

                </div>
                <aside className="flex justify-end items-center gap-8 mr-4 col-start-3">
                    <a
                        className="px-4 py-4  rounded-full hover:bg-white/10 transition-all"
                        target="_blank" href="https://wa.me/5515996254521?text=Gostaria%20de%20tirar%20minha%20ideia%20do%20papel!"
                    >
                        <FontAwesomeIcon icon={faWhatsapp} size="2xl" className="text-detail" />
                    </a>
                    <a className="px-4 py-4  rounded-full hover:bg-white/10 transition-all"
                        target="_blank" href="https://github.com/gabrielnovaisgs">
                        <FontAwesomeIcon icon={faGithubSquare} size="2xl" className="text-detail" />
                    </a>
                    <a className="px-4 py-4  rounded-full hover:bg-white/10 transition-all"
                        target="_blank" href="https://www.linkedin.com/in/gabriel-novais-b27a82b6/">
                        <FontAwesomeIcon icon={faLinkedin} size="2xl" className="text-detail" />
                    </a>

                </aside>
            </nav>

            {/**/}
        </header>
    )
}