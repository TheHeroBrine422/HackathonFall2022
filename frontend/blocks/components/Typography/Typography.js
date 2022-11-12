
export default function Typography ({ children, classSet, }) {
    return (
        <p  className={classSet} >
            {children}
        </p>
    )
}