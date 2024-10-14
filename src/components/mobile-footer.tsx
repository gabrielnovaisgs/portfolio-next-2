'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons/faWhatsapp";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import BtnHeader from "./header-button";
import { useState } from "react";
export default function MobileFooter() {
    const [currentLink, setCurrentLink] = useState('/#hero-section')
    const [menuVisbility, setMenuVisibility] = useState(false)
    return (

        <div className="flex 
        
        items-center
        justify-center
        md:hidden w-[98%] ml-[1%] bottom-0 fixed py-2 
        shadow-[0_35px_40px_10px_rgba(0,0,0,0.3)]
        bg-white
        rounded-t-lg border ">

            <nav className={`fixed bottom-14 px-8 py-4 w-1/2 bg-white/95 shadow-md rounded-md 
                transition-all  ${menuVisbility ? '' : 'h-0 hidden'}
            `}>
                <BtnHeader setCurrentLink={setCurrentLink} currentLink={currentLink} href="/#hero-section">Home</BtnHeader>
                <BtnHeader setCurrentLink={setCurrentLink} currentLink={currentLink} href="/#services-section">Serviços </BtnHeader>
                {/*<BtnHeader setCurrentLink={setCurrentLink} currentLink={currentLink} href="/#project-section">Projetos </BtnHeader> */}
                <BtnHeader setCurrentLink={setCurrentLink} currentLink={currentLink} href="/#stack-section">Tecnologia </BtnHeader>
            </nav>

            <aside className="grid grid-cols-3 w-full items-center justify-center gap-8">
                <a target="_blank" href="https://www.linkedin.com/in/gabriel-novais-b27a82b6/"
                    className="col-start-1 text-center"
                >
                    <FontAwesomeIcon icon={faLinkedin} size="2xl" className="text-accent" />
                </a>

                <button className="col-start-2 transition-all" onClick={() => setMenuVisibility((prevValue) => !prevValue)}>
                    <FontAwesomeIcon icon={faBars} size="2xl" className={`${menuVisbility ? 'text-accent2' : 'text-accent'}`} />
                </button>
                <a target="_blank" href="https://wa.me/5515996254521?text=Gostaria%20de%20tirar%20minha%20ideia%20do%20papel!"
                    className="col-start-3 text-center "
                >
                    <FontAwesomeIcon icon={faWhatsapp} size="2xl" className="text-accent" />
                </a>
            </aside>
        </div>

    )
}