import React, { useMemo } from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Hero = ({
                  listUser = [
                      {
                          name: "用户",
                          number: "300",
                          icon: "/assets/Icon/heroicons_sm-user.svg",
                      },
                      {
                          name: "日活跃",
                          number: "20",
                          icon: "/assets/Icon/gridicons_location.svg",
                      },
                      {
                          name: "日备份",
                          number: "100",
                          icon: "/assets/Icon/bx_bxs-server.svg",
                      },
                  ],
              }) => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);

    return (
        <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="about">
            <ScrollAnimationWrapper>
                <motion.div
                    className="grid grid-flow-row md:grid-flow-col grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-8 py-6 sm:py-16"
                    variants={scrollAnimation}
                >
                    <div className="flex flex-col justify-center items-start row-start-2 md:row-start-1">
                        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
                            阿尔萨斯工业园社区
                            <br />
                            <strong>Usine d' Alsace Community</strong>.
                        </h1>
                        <p className="text-black-500 mt-4 mb-6">
                            成立于2020年，由阿尔萨斯工业团队倾力运营与维护。
                            <br />
                            我们致力于为玩家打造一个安全、稳定、便捷且自由的 Minecraft
                            服务器社区。在这里，创造和想象力没有边界，只等待像你这样的艺术家加入。
                            <br />
                            工业园不仅仅是一个建筑服务器，它是一个汇聚创意、技术与乐趣的社区。
                        </p>
                        <a
                            href={
                                "http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=Or0lLwYEHFzY_D7hZUoHKp4ANjrGdfuX&authKey=Yzlq2b8X8N%2BsyelDeDHs7Rym8Fl85Pzxn7rE8tVXdjhZIUsBql9ZVuGdwfZ1cKmE&noverify=0&group_code=916435182"
                            }
                        >
                            <ButtonPrimary>加入社区交流群</ButtonPrimary>
                        </a>
                    </div>
                    <div className="flex w-full">
                        <motion.div className="h-full w-full" variants={scrollAnimation}>
                            <Image
                                src="https://ns.alsace.team/service/images/img/全家福202410.png?imageMogr2/format"
                                alt="团队全家福"
                                quality={100}
                                width={822}
                                height={350}
                                layout="responsive"
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </ScrollAnimationWrapper>

            <div className="relative w-full flex">
                <ScrollAnimationWrapper
                    className="rounded-lg w-full grid grid-flow-row sm:grid-cols-1 md:grid-cols-3 py-9 divide-y-2 md:divide-y-0 md:divide-x-2 divide-gray-100 bg-white-500 z-10"
                >
                    {listUser.map((listUsers, index) => (
                        <motion.div
                            className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
                            key={index}
                            custom={{ duration: 2 + index }}
                            variants={scrollAnimation}
                        >
                            <div className="flex mx-auto w-40 sm:w-auto">
                                <div className="flex items-center justify-center bg-orange-100 w-12 h-12 mr-6 rounded-full">
                                    <img src={listUsers.icon} className="h-6 w-6" alt="图标" />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-xl text-black-600 font-bold">
                                        {listUsers.number}+
                                    </p>
                                    <p className="text-lg text-black-500">{listUsers.name}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </ScrollAnimationWrapper>
                <div
                    className="absolute bg-black-600 opacity-5 w-11/12 rounded-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
                    style={{ filter: "blur(114px)" }}
                ></div>
            </div>
        </div>
    );
};

export default Hero;
