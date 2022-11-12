import Photo from "../Photo";
import Typography from "../Typography";

export default function Card ({ title, content, image, link }) {
    return (
        <div className='card'>
            <Photo image={image} ></Photo>
            <Typography>{title}</Typography>
            <Typography>{content}</Typography>
        </div>
    )
}