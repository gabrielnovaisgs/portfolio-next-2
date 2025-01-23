import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faArrowAltCircleRight, faArrowRight, faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'

export interface ProjectBlockProps {
    title: string
    githubLink: string
    accessLink: string
    imgSrc: string
    description: string
}
export default function ProjectBlock({ title, description, accessLink, githubLink, imgSrc }: ProjectBlockProps) {


    return (
        <div

            className='
            transition-all duration-500
            
            personal-project w-full max-w-2xl max-h-96 relative group cursor-pointer
        
        '>
            <button className='
            absolute z-10
                 right-4 top-4
                 group-hover:text-detail group-hover:bg-accent
                transition-all duration-500
                w-fit h-fit p-2 rounded-full border-2
                 border-accent text-accent'>
                <FontAwesomeIcon icon={faArrowRight} size='2xl'
                    className=''
                ></FontAwesomeIcon>
            </button>
            <Image
                className='rounded-3xl shadow-xl w-full h-full border object-cover
                '
                src={`/assets/sites/${imgSrc}`} width={720} height={720} alt={`${imgSrc}`}></Image>
            <div className=' top-0 w-full h-full absolute flex flex-col justify-end 
                z-10
            overflow-hidden text-white
                            '>

                <div className='gap- p-4 translate-y-1/3 group-hover:translate-y-0
                w-[calc(100%-2rem)] m-4 h-fit  duration-500
                transition-all group-hover:bg-black/60
                rounded-3xl  
                group-hover:backdrop-blur-sm flex flex-col
                '>

                    <h3 className=' transition-all duration-300 ease-in-out font-title text-4xl font-bold '>{title}</h3>
                    <p className='text-sm text-justify opacity-0 transition-all duration-500 group-hover:opacity-100'>
                        {description}
                    </p>

                </div>
            </div>
        </div>
    )
}