
import Link from "next/link";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons/faWhatsapp";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Navebar() {
    return (
        <header className="font-title  hidden md:flex px-16 py-6 bg-gray-100/50 backdrop-blur-md text-lg w-full justify-between items-center fixed">
            <Logo></Logo>
            <nav className="flex justify-center gap-20 items-center">
                <a className="border-b-4 px-2 border-accent font-bold">Home</a>
                <a>Serviços</a>
                <a>Tecnologias</a>
            </nav>
            <aside className="flex justify-evenly gap-8">
                <FontAwesomeIcon icon={faWhatsapp} size="2xl" className="text-accent" />
                <FontAwesomeIcon icon={faGithubSquare} size="2xl" className="text-accent" />
                <FontAwesomeIcon icon={faLinkedin} size="2xl" className="text-accent" />
            </aside>
        </header>
    )
}