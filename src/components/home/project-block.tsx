import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faArrowAltCircleRight, faArrowRight, faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'

export interface ProjectBlockProps {
    title: string
    githubLink: string
    accessLink: string
}
export default function ProjectBlock({ title, accessLink, githubLink }: ProjectBlockProps) {


    return (
        <div className='w-full relative flex flex-col gap-4 items-center group '>
            <Image
                className='rounded-3xl shadow-xl'
                src={"/assets/tela1.png"} width={720} height={720} alt='tela 1'></Image>
            <div className=' w-full h-full absolute   
                z-10
              overflow-hidden
       
             transition-all
                            '>
                <div className='flex flex-col gap-4 group-hover:gap-2 px-4  translate-y-[calc(100%-4rem)] 
                w-[calc(100%-4rem] h-full group-hover:bg-dark2/80 duration-500
                group-hover:translate-y-0 transition-all
                rounded-3xl text-white 
                bg-dark2/40 backdrop-blur-sm pt-4 mx-8  group-hover:mx-0
                '>
                    <div className='flex justify-between'>
                        <h3 className=' font-title text-4xl font-bold '>{title}</h3>
                        <FontAwesomeIcon icon={faArrowRight} size='2x' className='text-white' ></FontAwesomeIcon>
                    </div>
                    <p className='text-lg text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sit amet libero at minus praesentium similique deserunt animi voluptatum dolorum, nulla odio doloremque ducimus perspiciatis quo aliquid eius magni aliquam!</p>

                </div>
            </div>
        </div>
    )
}