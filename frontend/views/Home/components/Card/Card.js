import Photo from "../Photo";
import Typography from "../Typography";

export default function Card ({ title, content, image, link }) {
    return (
        <div className='card'>
            {/* <Photo image={image} ></Photo> */}
            <div className="var1">
                <div className="var2">
                    <div className="var3">
                        <Typography classSet="plantBox">{title}</Typography>
                        {/* <Typography>{content}</Typography> */}
                    </div>
                </div>
            </div>
        </div>
    )
}