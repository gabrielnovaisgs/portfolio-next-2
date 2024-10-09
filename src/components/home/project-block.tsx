import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'
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
        <div className='w-full flex flex-col gap-4 items-center '>
            <Image src={"/assets/tela1.png"} width={720} height={720} alt='tela 1'></Image>
            <div className='flex justify-between w-full max-w-[720px]'>
                <h3 className='font-title font-bold text-xl text-accent2'>{title}</h3>
                <span className='flex gap-2 px-2'>
                    <Link href={accessLink}>
                        <FontAwesomeIcon icon={faLink} size='2x' className='text-accent2' ></FontAwesomeIcon>
                    </Link>
                    <Link href={githubLink}>
                        <FontAwesomeIcon icon={faGithubSquare} size='2x' className='text-accent2' ></FontAwesomeIcon>
                    </Link>
                </span>
            </div>
        </div>
    )
}