import Head from "next/head";

import { useEffect, useState } from "react";
import axios from "axios";
import PokemonCard from "@/components/Pokemon-Card";

// Mui Material
import Loader from "@/components/loader";

export default function Home() {
    const [pokemonList, setPokemonList] = useState([]);
    const [counter, setCounter] = useState(18);
    const apiEndPoint = "https://pokeapi.co/api/v2/pokemon?limit=1000";
    const [loading, setLoading] = useState(true);

    // fetch pokemon data
    useEffect(() => {
        const getLists = async () => {
            const { data: res } = await axios.get(apiEndPoint);
            setPokemonList(res);
        };
        getLists();
        setLoading(false);
    }, []);

    function seeMore() {
        setCounter(counter + 12);
        if (counter + 12 >= pokemonList.length) {
            setNewButton(true);
        }
    }

    return (
        <>
            <Head>
                <title>Home | Pokemon</title>
            </Head>
            <main>
                <section className="search-container">
                    <img src="./hero.png" alt="" />
                </section>
                {loading ? (
                    <Loader />
                ) : (
                    <div className="wrapper-pokemon-list">
                        <section className="pokemon-list">
                            {pokemonList?.results
                                ?.slice(0, counter)
                                .map((item, index) => (
                                    <div key={index}>
                                        <PokemonCard
                                            item={item}
                                            index={index}
                                        />
                                    </div>
                                ))}
                        </section>
                        <button className="see-more" onClick={() => seeMore()}>
                            <p>See More</p>
                        </button>
                    </div>
                )}
            </main>
        </>
    );
}
