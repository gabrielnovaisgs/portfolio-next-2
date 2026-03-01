import Image from "next/image"

export interface IconStackProps {
    title: string
    imageName: string
    color: string
}

export default function IconStack({ imageName, title }: IconStackProps) {

    return (
        <div className={`px-4 group hover:-translate-y-1 bg-detail hover:shadow-xl  py-2 rounded-full transition-all duration-300 border shadow-md relative`}
            style={{
                //    backgroundColor: `${color}80`,
                //borderColor: `${color}99`
                //drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]
            }}
        >
            <div className="flex   items-center justify-center gap-4">
                <Image src={`/assets/stack/${imageName}`} alt={`Logo do ${imageName}`} width={32} height={32}
                    className="object-contain object-center"></Image>

                <p className="font-title transition-all text-black text-center  text-xl "

                >{title}</p>
            </div>

        </div >
    )
}

