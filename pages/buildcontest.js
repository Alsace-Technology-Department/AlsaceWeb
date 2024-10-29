import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import BuildContest from "../components/BuildContest";

export default function Home() {
    return (
        <>
            <SeoHead/>
            <Layout>
                <BuildContest/>
            </Layout>
        </>
    );
}
