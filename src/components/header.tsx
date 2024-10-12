
import Link from "next/link";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons/faWhatsapp";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import BtnHeader from "./header-button";

export default function Navebar() {

    return (
        <header className="font-title  hidden md:flex px-16 py-6 bg-gray-100/50 backdrop-blur-md text-lg w-full justify-between items-center fixed">
            <Logo></Logo>
            <nav className="flex justify-center gap-20 items-center">
                <BtnHeader href="/#hero-section">Home</BtnHeader>
                <BtnHeader href="/#services-section">Serviços </BtnHeader>
                <BtnHeader href="/#project-section">Projetos </BtnHeader>
                <BtnHeader href="/#stack-section">Tecnologia </BtnHeader>
            </nav>
            <aside className="flex justify-evenly gap-8">
                <FontAwesomeIcon icon={faWhatsapp} size="2xl" className="text-accent" />
                <FontAwesomeIcon icon={faGithubSquare} size="2xl" className="text-accent" />
                <FontAwesomeIcon icon={faLinkedin} size="2xl" className="text-accent" />
            </aside>
        </header>
    )
}