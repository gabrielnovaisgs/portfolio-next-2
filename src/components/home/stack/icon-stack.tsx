import Image from "next/image"

export interface IconStackProps {
    title: string
    imageName: string
    color: string
}

export default function IconStack({ imageName, title, color }: IconStackProps) {
    const bgColor = `${color}80`
    return (
        <div className={`p-3 rounded-lg `} style={{
            backgroundColor: bgColor,

        }}>
            <div className="w-28 h-28  flex flex-col items-center gap-2">
                <Image src={`/assets/stack/${imageName}.png`} alt={`Logo do ${imageName}`} width={64} height={64}

                    className="object-contain h-full w-max"></Image>
                <p className="row-start-2 font-mono text-white text-lg font-extrabold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]" >{title}</p>
            </div>
        </div>
    )
}