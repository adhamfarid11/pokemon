import Link from "next/link";
import { useEffect, useState } from "react";
import Loader from "./loader";

export default function PokemonCard(props) {
    const [loading, setLoading] = useState(true);
    const indexPoke = props.index + 1;
    const data = props.item;

    const [error, setError] = useState(null);
    const [items, setItems] = useState();

    useEffect(() => {
        fetch(data.url)
            .then((res) => res.json())
            .then(
                (result) => {
                    setItems(result);
                    setLoading(false);
                },
                (error) => {
                    setError(error);
                    setLoading(false);
                }
            );
    }, []);
    if (loading) {
        return (
            <div className="pokemon-wrapper">
                <div className="loading">
                    <Loader mini />
                </div>
            </div>
        );
    } else {
        if (items != undefined) {
            return (
                <Link href={"pokemon/" + indexPoke}>
                    <div className="pokemon-wrapper">
                        <div className="pokemon-card">
                            <img
                                src={
                                    items.sprites.other.dream_world
                                        .front_default
                                }
                                alt={`${props.item.name}`}
                                className="pokemon-image"
                            />
                            <h1 className="pokemon-title">{props.item.name}</h1>
                        </div>
                    </div>
                </Link>
            );
        }
    }
}
