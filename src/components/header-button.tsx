import { ReactNode, useState } from "react"

interface BtnHeaderProps {
    href: string
    children: ReactNode
    currentLink: string
    setCurrentLink: (href: string) => void
}

export default function BtnHeader({ href, children, currentLink, setCurrentLink }: BtnHeaderProps) {
    const [hover, setHover] = useState(false)

    return (
        <a
            href={href}
            onClick={() => setCurrentLink(href)}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={`px-2 flex flex-col justify-center items-center transition-all
            ${currentLink === href ? 'font-bold' : ''}
        `}>
            <p>{children}</p>
            <span className={`border-b-4 rounded-lg h-2 transition-all
                ${currentLink === href ? 'w-[120%] border-accent' :
                    hover ? 'border-accent/60 w-full' : 'w-0 '
                }
                
                `}></span>
        </a >

    )
}