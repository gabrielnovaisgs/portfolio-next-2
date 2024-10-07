import { ReactNode } from "react"

interface TitleBlockProps {
    title: string
    children: ReactNode
    className?: string

}
export default function TitleBlock({ children: description, title, className }: TitleBlockProps) {
    return (
        <aside className={`w-full flex flex-col ${className}`}>
            <div className='flex gap-1 items-center'>
                <span className='w-14 h-1 bg-accent mt-1'></span>
                <h2 className='font-title font-bold text-2xl text-accent align-middle'>{title}</h2>
            </div>
            <p className='font-normal font-bold text-xl'>{description}</p>
        </aside>
    )
}