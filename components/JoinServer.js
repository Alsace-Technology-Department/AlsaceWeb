import React from "react";

const JoinServer = () => {
    return (
        <div className="relative py-16" id="joinin">
            {/* 背景效果 */}
            <div
                aria-hidden="true"
                className="absolute inset-0 w-full h-full grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
            >
                <div
                    className="blur-[106px] h-56 bg-gradient-to-br from-orange-500 to-purple"></div>
                <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan to-blue"></div>
            </div>

            {/* Container */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
                <div className="relative z-10">
                    {/* 图片列表 */}
                    <div className="flex items-center justify-center -space-x-2">
                        <img
                            loading="lazy"
                            width="400"
                            height="400"
                            src="https://minotar.net/helm/Pudding_Java/100.png"
                            alt="member photo"
                            className="h-8 w-8 rounded-xl object-cover"
                        />
                        <img
                            loading="lazy"
                            width="200"
                            height="200"
                            src="https://minotar.net/helm/MATSharer/100.png"
                            alt="member photo"
                            className="h-12 w-12 rounded-xl object-cover"
                        />
                        <img
                            loading="lazy"
                            width="200"
                            height="200"
                            src="https://minotar.net/helm/Hanamizu_/100.png"
                            alt="member photo"
                            className="z-10 h-16 w-16 rounded-xl object-cover"
                        />
                        <img
                            loading="lazy"
                            width="200"
                            height="200"
                            src="https://minotar.net/helm/CHuNan/100.png"
                            alt="member photo"
                            className="relative h-12 w-12 rounded-xl object-cover"
                        />
                        <img
                            loading="lazy"
                            width="200"
                            height="200"
                            src="https://minotar.net/helm/Haoyuan_luo/100.png"
                            alt="member photo"
                            className="h-8 w-8 rounded-xl object-cover"
                        />
                    </div>

                    {/* 加入服务器信息 */}
                    <div className="mt-6 m-auto space-y-6 md:w-8/12 lg:w-7/12" id="join">
                        <h1 className="text-center text-4xl font-bold text-gray-800 dark:text-white md:text-5xl">
                            加入服务器
                        </h1>
                        <p className="text-center text-xl text-gray-600 dark:text-gray-300">
                            工业园可以直接在任意 1.12.2-1.21 的客户端使用 IP：<b>alsace.work</b>{" "}
                            进入。<br/>
                        </p>

                        {/* 按钮 */}
                        <div className="flex flex-wrap justify-center gap-6">
                            <a
                                href="https://ns.alsace.team/service/client/AlsaceClient.zip"
                                className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-xl before:bg-orange-100 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                            >
                <span className="relative text-base font-semibold text-white dark:text-dark">
                  下载客户端
                </span>
                            </a>

                            <a
                                href="http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=lye5_f07h2-LB0DEs9sxzput7c87n7Bn&authKey=JsADenzz4Vrc3c4PhGY3rnzEoikWmIR9o8W5TtM7yJ8lkGO%2FsmE%2Fdbb0ziKAe%2Bd0&noverify=0&group_code=916435182"
                                className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-xl before:bg-orange-500 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                            >
                <span className="relative text-base font-semibold text-primary dark:text-white">
                  加入交流群
                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinServer;
