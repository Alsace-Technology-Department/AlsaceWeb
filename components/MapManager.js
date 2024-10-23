import React, {useMemo} from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import {motion} from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import JoinServer from "./JoinServer";

const MapManager = () => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);

    return (
        <div
            className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
            id="mapmanager"
        >
            <div
                className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
                <div className="flex flex-col w-full">
                    <ScrollAnimationWrapper>
                        <motion.h3
                            variants={scrollAnimation}
                            className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
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
                                    <li>服务器每天备份超过100次，还有异地容灾备份。</li>
                                    <li>使用自主研发的工业园基础框架，不用担心任何安全问题。</li>
                                </ul>
                                <a href="#" className="mt-6 text-gray-400 text-sm">
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
                                    <li>使用web端管理平台，用可视化的工具管理你的地图。</li>
                                    <li>您可以随时通过安全密码来下载您的地图。</li>
                                    <li>您只需要填写申请表，审核通过后便可使用地图托管服务。</li>
                                </ul>
                                <a href="#" className="mt-6 text-gray-400 text-sm">
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
                                <a href="#" className="mt-6 text-gray-400 text-sm">
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
                                <a href="#" className="mt-6 text-gray-400 text-sm">
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
                                alt=""
                            />
                            <img
                                src="https://www.mualliance.cn/wp-content/uploads/2023/10/STDBUcraft-cyan-bg-w.png"
                                className="h-14 w-auto mt-2 lg:mt-0"
                                alt=""
                            />
                            <img
                                src="https://ns.alsace.team/service/images/img/196B4D40BCCA649AF2BF32F52347CC96.png?imageMogr2/format"
                                className="h-24 w-auto mt-2 lg:mt-0"
                                alt=""
                            />
                            <img
                                src="https://ns.alsace.team/service/images/logo/logo-web.webp"
                                className="h-14 w-auto mt-2 lg:mt-0"
                                alt=""
                            />
                            <img
                                src="https://ns.alsace.team/service/images/img/CA0F04CB3289275DD35780E1F9E52074.jpg?imageMogr2/format"
                                className="h-12 w-auto mt-2 lg:mt-0"
                                alt=""
                            />
                            <img
                                src="https://cloud.alsace.team/Picture/pic/体素公社.png?imageMogr2/format"
                                className="h-12 w-auto mt-2 lg:mt-0"
                                alt=""
                            />
                        </motion.div>
                    </ScrollAnimationWrapper>
                </div>
                <div className="flex flex-col w-full my-16" id="testimoni">
                    <ScrollAnimationWrapper>
                        <motion.h3
                            variants={scrollAnimation}
                            className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto">
                            聆听大家的声音
                        </motion.h3>
                    </ScrollAnimationWrapper>
                    <ScrollAnimationWrapper className="w-full flex flex-col py-12">
                        <motion.div variants={scrollAnimation}>
                            <Testimoni/>
                        </motion.div>
                    </ScrollAnimationWrapper>
                    <JoinServer/>
                    <ScrollAnimationWrapper className="relative w-full mt-16">
                        <motion.div variants={scrollAnimation} custom={{duration: 3}}>
                            <div
                                className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
                                <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                                    <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                                        阿尔萨斯工业团队
                                    </h5>
                                    <p>负责运营和维护工业园社区，加入我们！</p>
                                </div>
                                <a href="https://alsaceteam.feishu.cn/wiki/T1xBwlGxSiL123kMAPicIZ0DnYe">
                                    <ButtonPrimary>入团方式</ButtonPrimary>
                                </a>
                            </div>
                            <div
                                className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
                                style={{filter: "blur(114px)"}}
                            ></div>
                        </motion.div>
                    </ScrollAnimationWrapper>
                </div>
            </div>
        </div>
    );
};

export default MapManager;
