import IconStack, { IconStackProps } from "./icon-stack"

interface BaseStackProps {
    title: string
    icons: IconStackProps[]
}
export default function BaseStack({ title, icons }: BaseStackProps) {
    return (
        <div className="flex flex-col items-center">
            <h4 className="font-title font-bold text-lg">{title}</h4>
            <div className="grid grid-cols-2 md:flex flex-wrap w-full items-center justify-center gap-4">
                {icons.map((icon, index) => (
                    <IconStack imageName={icon.imageName} title={icon.title} color={icon.color} key={index}></IconStack>
                ))}
            </div>
        </div>
    )
}