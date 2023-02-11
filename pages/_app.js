import "@/styles/globals.scss";
import "@/styles/home.scss";
import "@/styles/details.scss";

import "@/styles/components/pokemon-card.scss";
import "@/styles/components/pokemon-tags.scss";
import "@/styles/components/stat-bar.scss";

import Router from "next/router";
import Loader from "@/components/loader";
import { useState } from "react";

export default function App({ Component, pageProps }) {
    const [loading, setLoading] = useState(false);

    Router.events.on("routeChangeStart", (url) => {
        console.log("Route is changing");
        setLoading(true);
    });
    Router.events.on("routeChangeComplete", (url) => {
        console.log("Route changed");
        setLoading(false);
    });

    return <>{loading ? <Loader /> : <Component {...pageProps} />}</>;
}
