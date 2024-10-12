import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LogoWhite from "./Logo-white";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";



export default function Footer() {
    return (
        <footer className="flex p-16 bg-accent text-white justify-between font-normal font-bold text-lg">
            <LogoWhite></LogoWhite>
            <aside>
                <p className="font-title text-2xl font-bold">Informações</p>
                <ul >
                    <li className="flex gap-2 items-center">
                        <FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon>
                        <a href="https://wa.me/5515996254521?text=Gostaria%20de%20tirar%20minha%20ideia%20do%20papel!">+55 (15) 99625-4521</a>
                    </li>
                    <li className="flex gap-2 items-center">
                        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                        <a href="mailto:gabrielnovaisgs+work@gmail.com">gabrielnovaisgs@gmail.com</a>
                    </li>
                </ul>

            </aside>
            <aside>
                <p className="font-title text-2xl font-bold">Redes sociais</p>
                <ul >
                    <li className="flex gap-2 items-center">
                        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                        <a href="https://www.linkedin.com/in/gabriel-novais-b27a82b6/">Linkedin</a>
                    </li>
                    <li className="flex gap-2 items-center">
                        <FontAwesomeIcon icon={faGithubSquare}></FontAwesomeIcon>
                        <a href="https://github.com/gabrielnovaisgs">github</a>
                    </li>
                </ul>
            </aside>
        </footer>
    )
}