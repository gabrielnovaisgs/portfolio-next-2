import Image from "next/image"

export interface IconStackProps {
    title: string
    imageName: string
    color: string
}

export default function IconStack({ imageName, title, color }: IconStackProps) {

    return (
        <div className={`p-3 rounded-lg transition-all border shadow-md relative`} style={{
            backgroundColor: `${color}80`,
            //borderColor: `${color}99`
        }}
        >

            <div className="min-w-20 max-h-20 md:w-28 md:h-28 md:max-h-28 gap-1 grid grid-rows-[80%_1fr] items-center">
                <Image src={`/assets/stack/${imageName}`} alt={`Logo do ${imageName}`} width={64} height={64}
                    className="w-full  h-full object-contain object-center"></Image>

                <p className="font-mono transition-all text-white text-center  md:text-xl font-extrabold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"

                >{title}</p>
            </div>

        </div >
    )
}

