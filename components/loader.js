export default function Loader(props) {
    return (
        <div className={`loader ${props.mini ? "mini" : ""}`}>
            <img src={"/pokeload.gif"} alt="loading..." />
            {/* https://dribbble.com/shots/2446541-Pokemon-Rewind?utm_source=Clipboard_Shot&utm_campaign=andrewmillar&utm_content=Pokemon%20Rewind&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=andrewmillar&utm_content=Pokemon%20Rewind&utm_medium=Social_Share */}
            {/* link to pokemon gif */}
            <h5>loading...</h5>
        </div>
    );
}
