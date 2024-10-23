import Head from "next/head";
import {useRouter} from "next/router";


// Default value for some meta data
const defaultMeta = {
    title: '长沙阿尔萨斯文化传播有限公司',
    siteName: '长沙阿尔萨斯文化传播有限公司',
    description:
        '我们是一支成立于2020年的理想主义Minecraft团队，秉承自由、平等、团结的价值观，以卓越的团队氛围而自豪。在我们的世界里，创造和想象力没有边界，而我们的建筑技术则是国内前列，凭借着完整的建筑流程链，我们已经汇聚了150余名才华横溢的团队成员，每个人都为实现我们的梦想而努力奋斗。',
    // change base url of your web (without '/' at the end)
    url: 'https://www.alsace.team',
    type: 'website',
    robots: 'follow, index',
    // change with url of your image (recommended dimension = 1.91:1)
    // used in twitter, facebook, etc. card when link copied in tweet/status
    image: 'https://ns.alsace.team/service/images/logo/24/card-img.png',
    author: 'Usine d\' Alsace'
};

/**
 * Next Head component populated with necessary SEO tags and title
 * props field used:
 * - title
 * - siteName
 * - description
 * - url
 * - type
 * - robots
 * - image
 * - date
 * - author
 * - templateTitle
 * all field are optional (default value defined on defaultMeta)
 * @example
 * <SeoHead title="Page's Title" />
 */
const SeoHead = (props) => {
    const router = useRouter();
    const meta = {
        ...defaultMeta,
        ...props
    };

    // Use siteName if there is templateTitle
    // but show full title if there is none
    meta.title = props.templateTitle
        ? `${props.templateTitle} | ${meta.siteName}`
        : meta.title;

    return (
        <Head>
            <title>{meta.title}</title>
            <meta name='robots' content={meta.robots}/>
            <meta content={meta.description} name='description'/>
            <meta property='og:url' content={`${meta.url}${router.asPath}`}/>
            <link rel='canonical' href={`${meta.url}${router.asPath}`}/>
            {/* Open Graph */}
            <meta property='og:type' content={meta.type}/>
            <meta property='og:site_name' content={meta.siteName}/>
            <meta property='og:description' content={meta.description}/>
            <meta property='og:title' content={meta.title}/>
            <meta name='image' property='og:image' content={meta.image}/>
            {/* Twitter */}
            <meta name='twitter:card' content='summary_large_image'/>
            <meta name='twitter:site' content='@F2aldi'/>
            <meta name='twitter:title' content={meta.title}/>
            <meta name='twitter:description' content={meta.description}/>
            <meta name='twitter:image' content={meta.image}/>
            {meta.date && (
                <>
                    <meta property='article:published_time' content={meta.date}/>
                    <meta
                        name='publish_date'
                        property='og:publish_date'
                        content={meta.date}
                    />
                    <meta
                        name='author'
                        property='article:author'
                        content={meta.author}
                    />
                </>
            )}
            {/* Favicons */}
            {favicons.map((linkProps) => (
                <link key={linkProps.href} {...linkProps} />
            ))}
            {/* Windows 8 app icon */}
            <meta name='msapplication-TileColor' content='#A52B28'/>
            <meta
                name='msapplication-TileImage'
                content='https://ns.alsace.team/service/images/logo/favicon.ico'
            />
            {/* Accent color on supported browser */}
            <meta name='theme-color' content='#A52B28'/>
        </Head>
    );
};

// Favicons, other icons, and manifest definition
const favicons = [
    {
        rel: 'icon',
        href: 'https://ns.alsace.team/service/images/logo/favicon.ico',
    }
];

export default SeoHead;
