import React, {useMemo} from "react";
import {motion} from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const features = [
    "聆听您的建议",
    "专业的运营团队",
    "7*24小时服务",
    "持续更新"
]

const features2 = [
    "WorldEdit系列",
    "Axiom支持",
    "MetaBrushes",
    "Arceon",
    "Ezedits",
    "还有更多自研和常用建筑插件"
]

const Feature = () => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);

    return (
        <div
            className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
            id="feature"
        >
            <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
                <ScrollAnimationWrapper className="flex w-full justify-end">
                    <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
                        <img
                            src="https://ns.alsace.team/service/images/img/kefu.svg"
                            alt="客服布丁"
                            height={414}
                        />
                    </motion.div>
                </ScrollAnimationWrapper>
                <ScrollAnimationWrapper>
                    <motion.div className="flex flex-col justify-center ml-auto lg:w-9/12" variants={scrollAnimation}>
                        <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
                            专业服务，随叫随到
                        </h3>
                        <p className="my-2 text-black-500 lg:h-1/2 pt-2 pb-3">
                            遇到问题？我们的专业团队随时待命，提供优质的服务，您可以随时寻求服务器管理的帮助，确保您的创作无忧。
                        </p>
                        <ul className="text-black-500 self-start list-inside ml-8">
                            {features.map((feature, index) => (
                                    <motion.li
                                        className="relative circle-check custom-list lg:h-10"
                                        custom={{duration: 2 + index}}
                                        variants={scrollAnimation}
                                        key={feature}
                                        whileHover={{
                                            scale: 1.1,
                                            transition: {
                                                duration: .2
                                            }
                                        }}>
                                        {feature}
                                    </motion.li>
                                )
                            )}
                        </ul>
                    </motion.div>
                </ScrollAnimationWrapper>
            </div>

            <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 py-8 my-12">
                <ScrollAnimationWrapper className="flex w-full justify-start">
                    <motion.div className="flex flex-col justify-center lg:w-9/12" variants={scrollAnimation}>
                        <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
                            插件功能，一应俱全
                        </h3>
                        <p className="my-2 text-black-500 lg:h-1/2 pt-2 pb-3">
                            我们拥有大量的专业建筑插件，以满足不同玩家的需求，包括一些免费、付费、自主研发的插件，在服务器里都能无门槛地使用。
                        </p>
                        <ul className="text-black-500 self-start list-inside ml-8">
                            {features2.map((feature, index) => (
                                <motion.li
                                    className="relative circle-check custom-list lg:h-10"
                                    custom={{duration: 2 + index}}
                                    variants={scrollAnimation}
                                    key={feature}
                                    whileHover={{
                                        scale: 1.1,
                                        transition: {
                                            duration: .2
                                        }
                                    }}>
                                    {feature}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </ScrollAnimationWrapper>
                <ScrollAnimationWrapper className="flex w-full justify-end">
                    <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
                        <img
                            src="https://ns.alsace.team/service/images/img/hanamizu.png"
                            alt="拿着小木斧的花水"
                            height={414}
                        />
                    </motion.div>
                </ScrollAnimationWrapper>
            </div>
        </div>
    );
};

export default Feature;
