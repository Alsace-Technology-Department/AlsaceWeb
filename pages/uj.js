// AlsaceWeb/pages/uj.js
import React, { useEffect } from 'react';
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";

const UjPage = () => {
    useEffect(() => {
        const redirect = async () => {
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            const redirectUrl = urlParams.get('url');

            if (redirectUrl && redirectUrl.startsWith('https://alsaceteam.feishu.cn')) {
                // 如果是有效的 Feishu 链接，直接跳转
                window.location.href = redirectUrl;
            } else if (redirectUrl) {
                // 加载url.json并处理非链接的情况
                try {
                    const response = await fetch('/url.json');
                    const urlData = await response.json();

                    if (urlData[redirectUrl]) {
                        // 如果在json中找到了对应的url，跳转
                        window.location.href = urlData[redirectUrl];
                    } else {
                        document.getElementById('message').innerText = 'Invalid URL or URL not found in JSON.';
                    }
                } catch (error) {
                    console.error('Error fetching URL data:', error);
                    document.getElementById('message').innerText = 'Error loading redirection data.';
                }
            } else {
                document.getElementById('message').innerText = 'Invalid URL or no URL specified for redirection.';
            }
        };

        redirect();
    }, []);

    return (
        <>
            <SeoHead title="跳转中，请稍后..." />
            <Layout>
                <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto py-16">
                    <p id="message">Redirecting...(跳转中，请稍后...)</p>
                </div>
            </Layout>
        </>
    );
};

export default UjPage;
