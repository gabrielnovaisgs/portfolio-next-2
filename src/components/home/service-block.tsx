import Image from 'next/image'

export interface ServiceBlockProps {
    title: string
    icon: string
    description: string
}

export default function ServiceBlock({ title, description, icon }: ServiceBlockProps) {
    return (
        <div className='bg-white w-72 p-6  flex flex-col gap-2 rounded-md shadow-xl border border-gray-200' >
            <Image src={`/assets/icons/${icon}`} width={64} height={64} alt='icone de site'></Image>
            <h3 className='font-title text-accent font-bold text-lg'>{title}</h3>
            <p className='font-normal'>{description}</p>
        </div>
    )
}