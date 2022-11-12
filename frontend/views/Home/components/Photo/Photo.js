
export default function Photo ({ image, title, classSet,}) {
    return (
        <img src={`${image}`} alt={`${title}`} className={classSet} />
    )
}