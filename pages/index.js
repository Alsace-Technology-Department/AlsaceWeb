import Feature from "../components/Feature";
import MapManager from "../components/MapManager";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import JoinServer from "../components/JoinServer";
import React from "react";
import JoinUs from "../components/Join-us";

export default function Home() {
    return (
        <>
            <SeoHead/>
            <Layout>
                <Hero/>
                <Feature/>
                <MapManager/>
                <JoinServer/>
                <JoinUs/>
            </Layout>
        </>
    );
}
