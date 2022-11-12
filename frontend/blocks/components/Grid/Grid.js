

export default function Grid ({ rows, columns, children, classSet }) {
    return (
        <div className={classSet}
            style={{
            display: 'grid',
            gridTemplateRows: `repeat(${rows}, 1fr)`,
            gridTemplateColumns: `repeat(${columns}, 1fr`,
        }} >
            {children}
        </div>
    );
}