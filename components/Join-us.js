import React, {useMemo} from "react";
import getScrollAnimation from "../utils/getScrollAnimation";
import {motion} from "framer-motion";
import ButtonPrimary from "./misc/ButtonPrimary";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const JoinUs = () => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);

    return (

        <div
            className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
            <div className="flex flex-col w-full my-16" id="testimoni">
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
    );
};

export default JoinUs;
