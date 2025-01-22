import { ReactNode, useState } from "react"

interface BtnHeaderProps {
    href: string
    children: ReactNode
    currentLink: string
    setCurrentLink: (href: string) => void
}

export default function BtnHeader({ href, children, currentLink, setCurrentLink }: BtnHeaderProps) {
    const [hover, setHover] = useState(false)
    /**
     *   <span className={`  h-2 transition-all
                    ${currentLink === href ? 'w-[120%] border-accent' :
                        hover ? 'border-accent/60 w-full' : 'w-0 '
                    }
                    
                    `}></span>
     */

    return (
        <a
            href={href}
            onClick={() => setCurrentLink(href)}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={`px-10  py-5  flex flex-col rounded-full justify-center items-center transition-all
            ${currentLink === href ? 'font-bold  bg-accent' :
                    hover ? 'bg-white/10' : ''}
        `}>
            {children}

        </a >

    )
}