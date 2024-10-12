'use client'
import Image from "next/image"
import { CSSProperties, useState, MouseEvent } from "react"

export interface IconStackProps {
    title: string
    imageName: string
    color: string
}

export default function IconStack({ imageName, title, color }: IconStackProps) {

    const [rotation, setRotation] = useState({ rotateX: 0, rotateY: 0 });

    // Função para capturar a posição do mouse e calcular a rotação
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const { width, height, left, top } = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - left;  // Posição X do mouse relativa à div
        const y = e.clientY - top;   // Posição Y do mouse relativa à div

        const rotateY = ((x / width) - 0.5) * 50;  // Calcula a rotação Y baseado na posição X do mouse
        const rotateX = ((y / height) - 0.5) * -50; // Calcula a rotação X baseado na posição Y do mouse

        setRotation({ rotateX, rotateY });
    };

    // Reseta a rotação ao remover o mouse da div
    const handleMouseLeave = () => {
        setRotation({ rotateX: 0, rotateY: 0 });
    };



    const blockStyle: CSSProperties = {
        transform: `rotateX(${rotation.rotateX}deg) rotateY(${rotation.rotateY}deg)`,
        transition: 'transform 0.1s ease-out',
    }
    return (
        <div className={`p-3 rounded-lg transition-all shadow-md relative`} style={{
            backgroundColor: `${color}80`,
            ...blockStyle

        }}
            onMouseLeave={handleMouseLeave}
            onMouseMove={(event) => handleMouseMove(event)}
        >

            <div className="w-28 h-28 gap-1 grid grid-rows-[80%_1fr] items-center">
                <Image src={`/assets/stack/${imageName}`} alt={`Logo do ${imageName}`} width={64} height={64}
                    className="w-full  h-full object-contain object-center"></Image>

                <p className="font-mono transition-all text-white text-center  text-xl font-extrabold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"

                >{title}</p>
            </div>
            {/*<span style={globeStyle} ></span> */}
        </div >
    )
}

