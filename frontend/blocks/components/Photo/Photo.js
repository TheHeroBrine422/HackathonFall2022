
export default function Photo ({ image, title, classSet,}) {
    return (
        <div className={`${title} ${classSet}`}/>
    )
}