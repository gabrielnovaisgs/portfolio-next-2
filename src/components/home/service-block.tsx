import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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

export default function ServiceBlock({ title, icon }: ServiceBlockProps) {
    return (
        <div className='group relative'>
            {/*<div className='w-72 h-72 flex flex-col items-stretch  relative '>
                <h1 className=' py-4 bg-gray-700/50 px-2 w-full backdrop-blur-md   rounded-t-3xl'>{title}</h1>
                <svg className='w-full h-full ' viewBox="0 0 815 722" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="path-1-inside-1_65_171" fill="white">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0L0 659C0 693.794 28.2061 722 63 722H483C517.794 722 546 693.794 546 659V517C546 482.206 574.206 454 609 454H752C786.794 454 815 425.794 815 391V0H0Z" />
                    </mask>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0L0 659C0 693.794 28.2061 722 63 722H483C517.794 722 546 693.794 546 659V517C546 482.206 574.206 454 609 454H752C786.794 454 815 425.794 815 391V0H0Z"
                        className='fill-gray-700/50 backdrop-blur-md' />
                    <path d="M0 0V-1H-1L-1 0L0 0ZM815 0H816V-1H815V0ZM-1 0L-1 659H1L1 0L-1 0ZM-1 659C-1 694.346 27.6538 723 63 723V721C28.7584 721 1 693.242 1 659H-1ZM63 723H483V721H63V723ZM483 723C518.346 723 547 694.346 547 659H545C545 693.242 517.242 721 483 721V723ZM547 659V517H545V659H547ZM547 517C547 482.758 574.758 455 609 455V453C573.654 453 545 481.654 545 517H547ZM609 455H752V453H609V455ZM752 455C787.346 455 816 426.346 816 391H814C814 425.242 786.242 453 752 453V455ZM816 391V0H814V391H816ZM815 -1H0V1H815V-1Z"
                        mask="url(#path-1-inside-1_65_171)" />
                </svg>
    
    
            </div>*/}
            <svg className='w-full h-full' viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">

                <clipPath id="path-border" >
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M400 24C400 10.7452 389.255 0 376 0H24C10.7452 0 0 10.7452 0 24V376C0 389.255 10.7452 400 24 400H243C256.255 400 267 389.255 267 376V309.2C267 295.945 277.745 285.2 291 285.2H376C389.255 285.2 400 274.455 400 261.2V24Z"

                    />
                </clipPath>
                <foreignObject x={0} y={0} className='w-full h-full relative bg-white/10 group-hover:bg-accent/70 transition-all backdrop-blur-md' clipPath='url(#path-border)'>
                    <div className='w-full h-full'>
                        <h1 className='w-full py-4 text-center  font-title group-hover:font-semibold transition-all text-3xl border-b border-gray-500 '>{title}</h1>
                        <Image src={`/assets/sites/${icon}`} width={200} height={200} alt='icone de site'
                            className='w-full h-2/3 translate-y-1/4 object-fill absolute bottom-0 rounded-3xl group-hover:translate-y-0 transition-all'></Image>
                    </div>
                </foreignObject>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M400 24C400 10.7452 389.255 0 376 0H24C10.7452 0 0 10.7452 0 24V376C0 389.255 10.7452 400 24 400H243C256.255 400 267 389.255 267 376V309.2C267 295.945 277.745 285.2 291 285.2H376C389.255 285.2 400 274.455 400 261.2V24Z"
                    className='stroke-gray-500 stroke-1'
                />

            </svg>


            <button className='rounded-full  p-4 bg-white/10 absolute bottom-0 right-4 
            transition-all group-hover:bg-accent/70 group-hover:text-white -rotate-45 group-hover:scale-110 duration-300'>
                <FontAwesomeIcon icon={faArrowRight} className='' size='2xl'></FontAwesomeIcon>
            </button>
        </div>
    )
}