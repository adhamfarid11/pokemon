export default function PokemonTags(props) {
    return (
        <div
            className={`pokemon-tags ${props.abs_tag ? "abs_tag" : ""} ${
                props.type_tag ? "type_tag" : ""
            }`}
        >
            <span>{props.text}</span>
        </div>
    );
}
