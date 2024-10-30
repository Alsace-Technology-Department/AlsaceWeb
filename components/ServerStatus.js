import React, {useState, useEffect, useMemo} from "react";
import { motion } from "framer-motion";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import getScrollAnimation from "../utils/getScrollAnimation";

const RandomStyleImage = () => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);

    const [styleNumber, setStyleNumber] = useState(1);

    // 生成 1 到 6 之间的随机数
    useEffect(() => {
        const randomStyle = Math.floor(Math.random() * 4) + 1;
        setStyleNumber(randomStyle);
    }, []);

    return (
        <ScrollAnimationWrapper className="w-full mt-16">
            <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
                <img
                    className="pt-6 sm:pt-10 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center rounded-xl"
                    src={`https://motd.puddingkc.com/status.png?ip=alsace.work&style=alsace_style${styleNumber}`}
                    alt="服务器在线人数"
                />
            </motion.div>
        </ScrollAnimationWrapper>
    );
};

export default RandomStyleImage;
