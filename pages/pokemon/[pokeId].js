import { useRouter } from "next/router";

import PokemonTags from "@/components/pokemon-tag";
import StatBar from "@/components/Stat-Bar";

import { Button } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Head from "next/head";

export default function (data) {
    const router = useRouter();
    return (
        <>
            <Head>
                <title>{data.poke.name} Details</title>
            </Head>
            <div className="header-pokemon">
                <Button
                    border="none"
                    startIcon={<ArrowBackIosNewIcon />}
                    onClick={() => router.back()}
                >
                    Back
                </Button>
                <h1 className="pokemon-title">{data.poke.name}</h1>
            </div>
            <img
                // src={`/pokemon/${data.poke.id}.png`}
                src={data.poke.sprites.other.dream_world.front_default}
                alt={`${data.poke.name}`}
                className="pokemon-image mobile"
            />
            <div className="middle-pokemon">
                <div className="left">
                    <div className="id">
                        <div className="title">
                            <h3>ID</h3>
                        </div>
                        <h3>#{data.poke.id}</h3>
                    </div>
                    <div className="weight">
                        <div className="title">
                            <h3>Weight</h3>
                        </div>
                        <h3>{data.poke.weight} kg</h3>
                    </div>
                    <div className="height">
                        <div className="title">
                            <h3>Height</h3>
                        </div>
                        <h3>{data.poke.height}0 cm</h3>
                    </div>
                    <div className="abilities">
                        <div className="title">
                            <h3>Abilities </h3>
                        </div>
                        <div className="wrapper">
                            {data.poke.abilities.map((x) => (
                                <div key={x.ability.name}>
                                    <PokemonTags
                                        text={x.ability.name}
                                        abs_tag
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="types">
                        <div className="title">
                            <h3>Types</h3>
                        </div>
                        <div className="wrapper">
                            {data.poke.types.map((x) => (
                                <div key={x.type.name}>
                                    <PokemonTags text={x.type.name} type_tag />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <img
                    src={data.poke.sprites.other.dream_world.front_default}
                    alt={`${data.poke.name}`}
                    className="pokemon-image desktop"
                />
                <div className="right">
                    {data.poke.stats.map((x) => (
                        <div className="stat" key={x.stat.name}>
                            <div className="title">
                                <h3>{x.stat.name}</h3>
                            </div>
                            <div className="bar">
                                <StatBar value={x.base_stat} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="lower-moves">
                <h3>Moves</h3>
                <div className="container">
                    {data.poke.moves
                        .sort((a, b) => a.move.name.localeCompare(b.move.name))
                        // eslint-disable-next-line react/display-name
                        .map((x) => (
                            <div key={x.move.name}>
                                <PokemonTags text={x.move.name} />
                            </div>
                        ))}
                </div>
            </div>
        </>
    );
}

// fetch pokemon data
export const getStaticPaths = async () => {
    const arrayRange = (start, stop, step) =>
        Array.from(
            { length: (stop - start) / step + 1 },
            (value, index) => start + index * step
        );

    const paths = arrayRange(1, 1000, 1).map((x) => {
        return {
            params: {
                pokeId: x.toString(),
            },
        };
    });
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async (context) => {
    const apiEndPoint = "https://pokeapi.co/api/v2/pokemon/";
    const pokeId = context.params.pokeId;
    const res = await fetch(apiEndPoint + pokeId);
    const data = await res.json();
    return {
        props: { poke: data },
    };
};
