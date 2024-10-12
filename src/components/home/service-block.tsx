import Image from 'next/image'

export interface ServiceBlockProps {
    title: string
    icon: string
    description: string
}

export default function ServiceBlock({ title, description, icon }: ServiceBlockProps) {
    return (
        <div className='bg-white w-72 p-6  flex  flex-col items-center md:items-start  gap-2 rounded-md shadow-xl border border-gray-200' >
            <Image src={`/assets/icons/${icon}`} width={64} height={64} alt='icone de site' className='w-8 md:w-16'></Image>
            <h3 className='font-title text-accent font-bold text-lg text-center md:text-right'>{title}</h3>
            <p className='font-normal text-center md:text-start'>{description}</p>
        </div>
    )
}