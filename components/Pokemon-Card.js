import Link from "next/link";
import { useState } from "react";

export default function PokemonCard(props) {
    const [isCardHovered, setIsCardHovered] = useState(false);
    const indexPoke = props.index + 1;
    return (
        <Link href={"pokemon/" + indexPoke}>
            <div
                className="pokemon-wrapper"
                onMouseEnter={() => setIsCardHovered(true)}
                onMouseLeave={() => setIsCardHovered(false)}
            >
                <div className="pokemon-card">
                    <img
                        src={`/pokemon/${props.index + 1}.png`}
                        alt={`${props.item.name}`}
                        className="pokemon-image"
                    />
                    <h1 className="pokemon-title">{props.item.name}</h1>
                </div>
                <div
                    className={`blur-bg-image ${
                        isCardHovered ? "hovered" : ""
                    }`}
                    style={
                        isCardHovered
                            ? {
                                  backgroundImage: `url("/pokemon/${
                                      props.index + 1
                                  }.png")`,
                                  backgroundSize: "cover",
                              }
                            : {}
                    }
                ></div>
            </div>
        </Link>
    );
}
