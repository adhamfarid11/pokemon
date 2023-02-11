export default function StatBar(props) {
    return (
        <div className="container-bar">
            <div className="filler-bar" style={{ width: `${props.value}%` }}>
                <span className="label-bar">{props.value}</span>
            </div>
        </div>
    );
}
