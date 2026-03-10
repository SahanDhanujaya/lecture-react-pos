import SubPropCard from "./SubPropCard";

interface PropsCardProps {
    title: string;
    img: string;
    description: string,
    rating: number
}
const PropsCard = ({title, img, description, rating}: PropsCardProps) => {
    return (
        <div className="p-4 m-4 rounded shadow text text-center">
           <h1>{title}</h1>
           <img src={img} alt="picture (related for titile)" /> 
           <p>{description}</p>
           <SubPropCard rate={rating} />
        </div>
    )
}
export default PropsCard