import Image from 'next/image'

export interface ServiceBlockProps {
    title: string
    icon: string
    description: string
}

/*        {/*<div className='
        relative backdrop-blur-md 
        w-72 p-8 flex  flex-col items-center md:items-start  gap-2 shadow-xl 
        before:absolute before:top-0 before:left-0 before:w-[calc(100%-5rem)] before:h-full before:z-[-1]
         before:bg-accent/20 before:rounded-l-3xl before:rounded-br-3xl  before:
         after:absolute after:top-0 after:right-0 after:w-[5rem] after:h-[calc(100%-5rem)] after:z-[-1]
         after:bg-accent/20 after:rounded-r-3xl  after:
        ' >
            <Image src={`/assets/icons/${icon}`} width={64} height={64} alt='icone de site' className='w-8 md:w-16'></Image>
            <h3 className='font-title text-accent font-bold text-lg text-center md:text-right'>{title}</h3>
            {/*<p className='font-normal text-center md:text-start'>{description}</p>
            <div className='w-[4rem] h-[4rem] bg-white rounded-full absolute bottom-0 right-0 
                before:content-[""]
                before:absolute before:-top-[0] before:left-0 before:w-full before:h-full before:rounded-full
                before:bg-red-500 before:shadow-[-1rem_0_0_1rem_rgba(67,138,210,0.5)]
            '>

            </div>



        </div>
        }
    )*/

export default function ServiceBlock({ title, description, icon }: ServiceBlockProps) {
    return (
        <div className='w-72 h-72  relative '>
            <h1 className='absolute py-4 px-2 w-full backdrop-blur-md  border border-accent rounded-t-3xl'>{title}</h1>
        </div>
    )
}