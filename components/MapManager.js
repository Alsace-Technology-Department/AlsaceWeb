import React, {useMemo} from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import {motion} from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const MapManager = () => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);

    return (
        <div
            className="bg-gradient-to-b from-white-300 to-white-500 w-full"
            id="mapmanager"
        >
            <div
                className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
                <div className="flex flex-col w-full">
                    <ScrollAnimationWrapper>
                        <motion.h3
                            variants={scrollAnimation}
                            className="pt-10 text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
                        >
                            地图托管
                        </motion.h3>
                        <motion.p
                            variants={scrollAnimation}
                            className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
                        >
                            我们提供优质的地图托管服务，您可以申请免费、安全的私人地图。
                        </motion.p>
                    </ScrollAnimationWrapper>
                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 py-6 px-4 sm:px-2 lg:px-6">
                        <ScrollAnimationWrapper className="flex justify-center">
                            <motion.div
                                variants={scrollAnimation}
                                className="flex flex-col justify-between items-start text-left border border-gray-100 rounded-xl p-8 h-full hover:border-orange-500"
                                whileHover={{
                                    scale: 1.05,
                                    transition: {duration: 0.2},
                                }}
                            >
                                <div className="p-3">
                                    <Image
                                        src="/assets/Icon/protect.svg"
                                        width={50}
                                        height={50}
                                        alt="安全的防护策略"
                                    />
                                </div>
                                <p className="text-2xl font-semibold text-black-600 my-6">
                                    安全的防护策略
                                </p>
                                <ul className="text-black-500 text-base space-y-4 leading-relaxed list-inside flex-grow">
                                    <li>安全地将您的地图存储在我们的服务器。</li>
                                    <li>担心地图风险？不怕，我们可以提供最高安全的服务。</li>
                                    <li>服务器每天备份超过50次，还有异地容灾备份。</li>
                                    <li>完全自动化的地图托管系统，管理员也无法访问地图文件。</li>
                                </ul>
                                <a href="https://map.alsace.team" className="mt-6 text-gray-400 text-sm">
                                    了解更多
                                </a>
                            </motion.div>
                        </ScrollAnimationWrapper>
                        <ScrollAnimationWrapper className="flex justify-center">
                            <motion.div
                                variants={scrollAnimation}
                                className="flex flex-col justify-between items-start text-left border border-gray-100 rounded-xl p-8 h-full hover:border-orange-500"
                                whileHover={{
                                    scale: 1.05,
                                    transition: {duration: 0.2},
                                }}
                            >
                                <div className="p-3">
                                    <Image
                                        src="/assets/Icon/flash.svg"
                                        width={50}
                                        height={50}
                                        alt="便捷的服务"
                                    />
                                </div>
                                <p className="text-2xl font-semibold text-black-600 my-6">
                                    便捷的服务
                                </p>
                                <ul className="text-black-500 text-base space-y-4 leading-relaxed list-inside flex-grow">
                                    <li>随时随地自由下载、访问、分享您的作品。</li>
                                    <li>使用web端管理平台，用可视化的工具管理和申请地图。</li>
                                    <li>您可以随时通过安全密码来下载您的地图。</li>
                                    <li>您不需要维护服务器，只需要专心完成作品。</li>
                                </ul>
                                <a href="https://map.alsace.team" className="mt-6 text-gray-400 text-sm">
                                    了解更多
                                </a>
                            </motion.div>
                        </ScrollAnimationWrapper>
                        <ScrollAnimationWrapper className="flex justify-center">
                            <motion.div
                                variants={scrollAnimation}
                                className="flex flex-col justify-between items-start text-left border border-gray-100 rounded-xl p-8 h-full hover:border-orange-500"
                                whileHover={{
                                    scale: 1.05,
                                    transition: {duration: 0.2},
                                }}
                            >
                                <div className="p-3">
                                    <Image
                                        src="/assets/Icon/tree-one.svg"
                                        width={50}
                                        height={50}
                                        alt="独立的权限管理"
                                    />
                                </div>
                                <p className="text-2xl font-semibold text-black-600 my-6">
                                    独立的权限管理
                                </p>
                                <ul className="text-black-500 text-base space-y-4 leading-relaxed list-inside flex-grow">
                                    <li>您可以随时授予或者取消其他人在您的世界的权限。</li>
                                    <li>可以设置独立的地图管理员。</li>
                                    <li>访客访问可以向您的客户或其他玩家展示您的建筑。</li>
                                    <li>您也可以使用web页面管理地图权限。</li>
                                </ul>
                                <a href="https://map.alsace.team" className="mt-6 text-gray-400 text-sm">
                                    了解更多
                                </a>
                            </motion.div>
                        </ScrollAnimationWrapper>
                        <ScrollAnimationWrapper className="flex justify-center">
                            <motion.div
                                variants={scrollAnimation}
                                className="flex flex-col justify-between items-start text-left border border-gray-100 rounded-xl p-8 h-full hover:border-orange-500"
                                whileHover={{
                                    scale: 1.05,
                                    transition: {duration: 0.2},
                                }}
                            >
                                <div className="p-3">
                                    <Image
                                        src="/assets/Icon/key-one.svg"
                                        width={50}
                                        height={50}
                                        alt="私人的创作空间"
                                    />
                                </div>
                                <p className="text-2xl font-semibold text-black-600 my-6">
                                    私人的创作空间
                                </p>
                                <ul className="text-black-500 text-base space-y-4 leading-relaxed list-inside flex-grow">
                                    <li>除了获得您允许的用户以外，其他任何人都无法进入，包括服务器管理员。</li>
                                    <li>您自己的世界没有世界边界，没有区域限制，您可以在私人世界里自由建造。</li>
                                    <li>您甚至可以理解为您的地图就是您的私人服务器。</li>
                                </ul>
                                <a href="https://map.alsace.team" className="mt-6 text-gray-400 text-sm">
                                    了解更多
                                </a>
                            </motion.div>
                        </ScrollAnimationWrapper>

                    </div>
                </div>
                <div className="flex flex-col w-full my-16">
                    <ScrollAnimationWrapper>
                        <motion.h3
                            variants={scrollAnimation}
                            className="text-xl sm:text-2xl lg:text-3xl font-medium text-black-600 leading-relaxed w-6/12 sm:w-6/12 lg:w-4/12 mx-auto">
                            他们也在使用地图托管服务
                        </motion.h3>
                        <motion.p className="leading-normal  mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12"
                                  variants={scrollAnimation}>
                            地图托管现在被各大建筑团队、高校社团、个人建筑师用于作品创作、校园还原、视频制作、作品展示等用途。
                        </motion.p>
                    </ScrollAnimationWrapper>
                    <ScrollAnimationWrapper>
                        <motion.div className="w-full flex justify-evenly items-center mt-4 flex-wrap lg:flex-nowrap"
                                    variants={scrollAnimation}>
                            <img
                                src="https://www.mualliance.cn/wp-content/uploads/2023/01/e0bedcf698b6720dc1b847b1d102859c9d568364.jpg"
                                className="h-14 w-auto mt-4 lg:mt-2"
                                alt="东南大学信标社"
                            />
                            <img
                                src="https://ns.alsace.team/service/images/img/196B4D40BCCA649AF2BF32F52347CC96.png?imageMogr2/format"
                                className="h-24 w-auto mt-2 lg:mt-0"
                                alt="沉梦之渊"
                            />
                            <img
                                src="https://www.mualliance.cn/wp-content/uploads/2023/10/STDBUcraft-cyan-bg-w.png"
                                className="h-14 w-auto mt-2 lg:mt-0"
                                alt="山商煤炭社"
                            />
                            <img
                                src="https://ns.alsace.team/service/images/logo/logo-web.webp"
                                className="h-14 w-auto mt-2 lg:mt-0"
                                alt="阿尔萨斯工业"
                            />
                            <img
                                src="https://cloud.alsace.team/Picture/pic/体素公社.png?imageMogr2/format"
                                className="h-14 w-auto mt-2 lg:mt-0"
                                alt="体素公社"
                            />
                            <img
                                src="https://ns.alsace.team/service/images/img/CA0F04CB3289275DD35780E1F9E52074.jpg?imageMogr2/format"
                                className="h-12 w-auto mt-2 lg:mt-0"
                                alt="ZANDTOPIA"
                            />
                            <img
                                src="https://ns.alsace.team/service/images/img/AAC9B47126791AE6B43DDDF82169B0B7.png?imageMogr2/format"
                                className="h-16 w-auto mt-2 lg:mt-0"
                                alt="辞源坊"
                            />

                        </motion.div>
                    </ScrollAnimationWrapper>
                </div>

                <div className="flex flex-col w-full my-16" id="testimoni">
                    <div className="py-4 my-6 max-w-screen-md mx-auto text-center">
                        <ScrollAnimationWrapper>
                            <motion.div variants={scrollAnimation}>
                                <h3 className="text-2xl lg:text-3xl font-medium leading-relaxed text-black-600">
                                    用心欢迎玩家
                                </h3>
                                <p className="mt-4 text-black-500">
                                    我们管理团队十分关切每一位玩家的游戏体验，希望热心的玩家们提出自己宝贵的意见，每一份建议对我们来说都弥足珍贵，来帮助我们建设更好的阿尔萨斯工业园社区。 </p>
                                <p className="mt-4 text-black-500">
                                    <b>在这里，任何疑问都能获得耐心的解答。</b>
                                </p>
                            </motion.div>
                        </ScrollAnimationWrapper>
                    </div>

                    <div
                        className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 py-8 my-12 relative">
                        <ScrollAnimationWrapper className="flex w-full justify-start">
                            <motion.div className="flex flex-col justify-center lg:w-9/12" variants={scrollAnimation}>
                                <h3 className="text-xl lg:text-2xl font-medium leading-relaxed text-black-600">
                                    良好的社区氛围
                                </h3>
                                <p className="my-2 text-black-500 lg:h-1/2 pt-2 pb-3">
                                    工业园致力营造一个和谐友善的玩家社区，希望玩家能够在纷忙的互联网世界里找到一隅安宁之地。
                                </p>
                                <p className="my-2 text-black-500 lg:h-1/2 pt-2 pb-3">
                                    我们欢迎所有热爱体素艺术的玩家加入，无论你是拥有多年建筑经验的大神，还是只会造火柴盒的萌新，我们都欢迎你的到来。
                                </p>
                            </motion.div>
                        </ScrollAnimationWrapper>
                        <ScrollAnimationWrapper>
                            <motion.div className="flex flex-col justify-center ml-auto lg:w-9/12"
                                        variants={scrollAnimation}>
                                <h3 className="text-xl lg:text-2xl font-medium leading-relaxed text-black-600">
                                    便捷的社区服务
                                </h3>
                                <p className="my-2 text-black-500 lg:h-1/2 pt-2 pb-3">
                                    工业园的规则并不复杂，我们一切以用户体验为主，诚以热爱打造社区。
                                    希望你能在工业园享受自由自在地建筑。
                                </p>
                                <p className="my-2 text-black-500 lg:h-1/2 pt-2 pb-3">
                                    在这里，无论是地皮还是私人世界，没有任何领取的门槛。
                                    无限空间献给你无限的创造力。还有很多你意想不到的功能等待你的探索。
                                </p>
                            </motion.div>
                        </ScrollAnimationWrapper>
                    </div>

                    <ScrollAnimationWrapper>
                        <motion.h3
                            variants={scrollAnimation}
                            className="pb-16 text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto">
                            聆听大家的声音
                        </motion.h3>
                    </ScrollAnimationWrapper>
                    <ScrollAnimationWrapper className="w-full flex flex-col">
                        <motion.div variants={scrollAnimation}>
                            <Testimoni/>
                        </motion.div>
                    </ScrollAnimationWrapper>
                </div>
            </div>
        </div>
    );
};

export default MapManager;
