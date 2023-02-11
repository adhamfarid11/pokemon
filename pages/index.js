import Head from "next/head";

import { useEffect, useState } from "react";
import axios from "axios";
import PokemonCard from "@/components/Pokemon-Card";

// Mui Material
import { IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function Home() {
    const [pokemonList, setPokemonList] = useState([]);
    const apiEndPoint = "https://pokeapi.co/api/v2/pokemon?limit=1000";
    useEffect(() => {
        const getLists = async () => {
            const { data: res } = await axios.get(apiEndPoint);
            setPokemonList(res);
        };
        getLists();
    }, []);

    return (
        <>
            <Head>
                <title>Home | Pokemon</title>
            </Head>
            <main>
                <section className="search-container">
                    <img src="./hero.png" alt="" />
                    <div className="search-bar">
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search Pokemon"
                            inputProps={{ "aria-label": "search google maps" }}
                        />
                        <IconButton
                            type="button"
                            sx={{ p: "10px" }}
                            aria-label="search"
                        >
                            <SearchIcon />
                        </IconButton>
                    </div>
                </section>
                <section className="pokemon-list">
                    {pokemonList?.results?.map((item, index) => (
                        <div key={index}>
                            <PokemonCard item={item} index={index} />
                        </div>
                    ))}
                </section>
            </main>
        </>
    );
}
