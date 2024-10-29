import React from "react";

const BuildContest = () => {
    return (
        <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="about">
            <div className="relative" id="build-contest">
                {/* Container */}
                <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
                    <div className="relative z-10">
                        {/* 比赛介绍 */}
                        <div className="mt-6 m-auto space-y-6 md:w-8/12 lg:w-7/12" id="contest-info">
                            <h1 className="text-center text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">
                                承接各类 Minecraft 建筑比赛
                            </h1>
                            <p className="text-center text-lg text-gray-600 dark:text-gray-300">
                                我们专业承接各类Minecraft建筑比赛，拥有一支经验丰富的开发和运维团队，为您提供从规划到执行的全方位支持。无论是举办小型比赛还是大型赛事，我们都能确保活动顺利进行，让您的参赛者获得一流的比赛体验。
                            </p>

                            {/* 三列亮点展示 */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center mt-8">
                                <div>
                                    <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">丰富经验</h2>
                                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                                        多年建筑服务器管理经验，熟悉各种建筑比赛需求，确保比赛流畅无阻。
                                    </p>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">强大支持</h2>
                                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                                        专业的技术支持和一流的服务器资源，确保无论规模多大都能稳定运行。
                                    </p>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">定制方案</h2>
                                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                                        根据客户需求提供个性化的比赛解决方案，打造独特的Minecraft赛事。
                                    </p>
                                </div>
                            </div>

                            {/* 行动按钮 */}
                            <div className="flex flex-wrap justify-center gap-6 mt-8">
                                <a
                                    href="mailto:tech@alsace.team"
                                    className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-xl before:bg-green-100 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                                >
                                <span className="relative text-base font-semibold text-white dark:text-dark">
                                    联系我们
                                </span>
                                </a>

                                <a
                                    target="_blank"
                                    href="https://www.minebbs.com/resources/9430/"
                                    className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-xl before:bg-green-500 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                                >
                                <span className="relative text-base font-semibold text-primary dark:text-white">
                                    单队单服解决方案
                                </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuildContest;
