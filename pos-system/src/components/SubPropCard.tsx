interface SubPropCardProps {
    rate: number
}
const SubPropCard = ({rate}: SubPropCardProps) => {
    return (
        <div className="p-2 m-2 rounde shadow">
            <h1>Rating</h1>
            <p>{rate}</p>
        </div>
    )
}

export default SubPropCard