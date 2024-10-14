
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
        <header className="font-title top-0  hidden md:flex px-16 py-6 bg-gray-100/50 backdrop-blur-md text-lg w-full justify-between items-center fixed">
            <Logo></Logo>
            <nav className="flex justify-center gap-20 items-center">
                <BtnHeader setCurrentLink={setCurrentLink} currentLink={currentLink} href="/#hero-section">Home</BtnHeader>
                <BtnHeader setCurrentLink={setCurrentLink} currentLink={currentLink} href="/#services-section">Serviços </BtnHeader>
                {/*  <BtnHeader setCurrentLink={setCurrentLink} currentLink={currentLink} href="/#project-section">Projetos </BtnHeader> */}
                <BtnHeader setCurrentLink={setCurrentLink} currentLink={currentLink} href="/#stack-section">Tecnologia </BtnHeader>
            </nav>
            <aside className="flex justify-evenly gap-8">
                <a target="_blank" href="https://wa.me/5515996254521?text=Gostaria%20de%20tirar%20minha%20ideia%20do%20papel!"
                >
                    <FontAwesomeIcon icon={faWhatsapp} size="2xl" className="text-accent" />
                </a>
                <a target="_blank" href="https://github.com/gabrielnovaisgs">
                    <FontAwesomeIcon icon={faGithubSquare} size="2xl" className="text-accent" />
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/gabriel-novais-b27a82b6/">
                    <FontAwesomeIcon icon={faLinkedin} size="2xl" className="text-accent" />
                </a>

            </aside>
        </header>
    )
}