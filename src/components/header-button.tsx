import { ReactNode } from "react"

interface BtnHeaderProps {
    href: string
    children: ReactNode
    selected: boolean
}

export default function BtnHeader({ href, children, selected = false }: BtnHeaderProps) {

    return (

        <a href={href} className={`px-2 hover:font-bold flex flex-col justify-center items-center transition-all
            ${selected ? 'font-bold' : ''}
        `}>
            <p>{children}</p>
            <span className={`border-b-4  h-2 border-accent transition-all
                ${selected ? 'w-[120%]' : 'w-0'}
                `}></span>
        </a >

    )
}