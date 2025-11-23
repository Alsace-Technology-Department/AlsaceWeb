import React, {useState, useEffect} from "react";
import Link from "next/link";
// Import react scroll
import {Link as LinkScroll} from "react-scroll";
import ButtonOutline from "../misc/ButtonOutline.";

const Header = () => {
    const [activeLink, setActiveLink] = useState(null);
    const [scrollActive, setScrollActive] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScrollActive(window.scrollY > 20);
        });
    }, []);
    return (
        <>
            <header
                className={
                    "fixed top-0 w-full  z-30 bg-white-500 transition-all " +
                    (scrollActive ? " shadow-md pt-0" : " pt-4")
                }
            >
                <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
                    <div className="col-start-1 col-end-2 flex items-center">
                        <img src="https://ns.alsace.team/service/images/logo/25/AlsaceIndustrialPark.svg" alt="Logo"
                             className={"h-12 w-auto"}/>
                    </div>
                    <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500  items-center">
                        <LinkScroll
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            duration={1000}
                            onSetActive={() => {
                                setActiveLink("about");
                            }}
                            className={
                                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                                (activeLink === "about"
                                    ? " text-orange-500 animation-active "
                                    : " text-black-500 hover:text-orange-500 a")
                            }
                        >
                            关于我们
                        </LinkScroll>
                        <LinkScroll
                            activeClass="active"
                            to="feature"
                            spy={true}
                            smooth={true}
                            duration={1000}
                            onSetActive={() => {
                                setActiveLink("feature");
                            }}
                            className={
                                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                                (activeLink === "feature"
                                    ? " text-orange-500 animation-active "
                                    : " text-black-500 hover:text-orange-500 ")
                            }
                        >
                            介绍
                        </LinkScroll>
                        <LinkScroll
                            activeClass="active"
                            to="mapmanager"
                            spy={true}
                            smooth={true}
                            duration={1000}
                            onSetActive={() => {
                                setActiveLink("mapmanager");
                            }}
                            className={
                                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                                (activeLink === "mapmanager"
                                    ? " text-orange-500 animation-active "
                                    : " text-black-500 hover:text-orange-500 ")
                            }
                        >
                            地图托管
                        </LinkScroll>
                        <LinkScroll
                            activeClass="active"
                            to="testimoni"
                            spy={true}
                            smooth={true}
                            duration={1000}
                            onSetActive={() => {
                                setActiveLink("testimoni");
                            }}
                            className={
                                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                                (activeLink === "testimoni"
                                    ? " text-orange-500 animation-active "
                                    : " text-black-500 hover:text-orange-500 ")
                            }
                        >
                            为什么选择我们
                        </LinkScroll>
                    </ul>
                    <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
                        <Link href="https://map.alsace.team">
                            <a className="text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-orange-500 transition-all">
                                地图管理平台
                            </a>
                        </Link>
                        <a href="https://alsaceteam.feishu.cn/wiki/space/7307151664564584449">
                            <ButtonOutline>
                                服务器手册
                            </ButtonOutline>
                        </a>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;
