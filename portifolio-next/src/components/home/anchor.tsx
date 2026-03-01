interface AnchorProps {
    id: string
    className?: string
}
export default function Anchor({ id, className = '' }: AnchorProps) {
    return (
        <div id={id} className={`${className} p-12`}></div>
    )
}