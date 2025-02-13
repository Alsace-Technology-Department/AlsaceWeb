import React from "react";
import Mail from "../../public/assets/Icon/mail.svg";
import QQ from "../../public/assets/Icon/QQ_tencent-qq.svg";
import Twitter from "../../public/assets/Icon/twitter.svg";
import Youtube from "../../public/assets/Icon/youtube.svg";
import Discord from "../../public/assets/Icon/discord-line.svg";
import Bilibili from "../../public/assets/Icon/tv.svg"

const Footer = () => {
    return (
        <div className="bg-white-300 pt-44 pb-24">
            <div
                className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
                <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
                    <img src="https://ns.alsace.team/service/images/logo/logo-web.webp" alt="Logo"
                         className="w-64"/>
                    <p className="mb-4">
                        工业园不仅仅是一个建筑服务器，它是一个汇聚创意、技术与乐趣的社区
                    </p>
                    <div className="flex w-full mt-2 mb-8 -mx-2">
                        <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
                            <a href={"mailto:tech@alsace.team"}><Mail className="h-6 w-6"/></a>
                        </div>
                        <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
                            <a href={"https://twitter.com/alsaceteam"}>
                                <Twitter className="h-6 w-6"/>
                            </a>
                        </div>
                        <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
                            <a href={"https://www.youtube.com/@alsaceteam"}>
                                <Youtube className="h-6 w-6"/>
                            </a>
                        </div>
                        <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
                            <a href={"https://space.bilibili.com/47983516"}>
                                <Bilibili className="h-6 w-6"/>
                            </a>
                        </div>
                        <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
                            <a href={"http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=Or0lLwYEHFzY_D7hZUoHKp4ANjrGdfuX&authKey=Yzlq2b8X8N%2BsyelDeDHs7Rym8Fl85Pzxn7rE8tVXdjhZIUsBql9ZVuGdwfZ1cKmE&noverify=0&group_code=916435182"}>
                                <QQ className="h-6 w-6"/>
                            </a>
                        </div>
                        <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
                            <a href={"https://discord.gg/q2wTpqjPvp"}>
                                <Discord className="h-6 w-6"/>
                            </a>
                        </div>
                    </div>
                    <p className="text-gray-400">© 2020 - {new Date().getFullYear()} 长沙阿尔萨斯文化传播有限公司 All
                        Rights Reserved.</p>
                    <a className={"text-gray-400 hover:text-orange-500 transition-all"}
                       href={"https://beian.miit.gov.cn/"}>湘ICP备2023023798号</a>
                </div>
                <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
                    <p className="text-black-600 mb-4 font-medium text-lg">友情链接</p>
                    <ul className="text-black-500 ">
                        <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                            <a href="https://space.bilibili.com/3026194/" target="_blank"
                               rel="noopener noreferrer">林氏創藝LinsCraft</a>
                        </li>
                        <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                            <a href="https://team.taixue.cc" target="_blank"
                               rel="noopener noreferrer">太学Taixue</a>
                        </li>
                        <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                            <a href="https://innovacreation.art" target="_blank"
                               rel="noopener noreferrer">新式创筑</a>
                        </li>
                        <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                            <a href="https://space.bilibili.com/319088654" target="_blank"
                               rel="noopener noreferrer">超新星团SuperNova</a>
                        </li>
                        <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                            <a href="https://space.bilibili.com/2106007357/" target="_blank"
                               rel="noopener noreferrer">体素乌托邦VoxelUtopia</a>
                        </li>
                        <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                            <a href="https://space.bilibili.com/13239887/" target="_blank"
                               rel="noopener noreferrer">缘木方舍</a>
                        </li>
                        <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                            <a href="https://www.mcnav.net/" target="_blank" rel="noopener noreferrer">MCNav导航网</a>
                        </li>
                    </ul>
                </div>
                <div className=" row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
                    <p className="text-black-600 mb-4 font-medium text-lg">合作伙伴</p>
                    <ul className="text-black-500 ">
                        <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                            <a href="https://www.mualliance.cn" target="_blank"
                               rel="noopener noreferrer">Minecraft高校联盟</a>
                        </li>
                        <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                            <a href="https://www.rareloot.at/" target="_blank" rel="noopener noreferrer">RareLoot</a>
                        </li>
                        <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                            <a href="https://mc-cloud-town.github.io/" target="_blank"
                               rel="noopener noreferrer">雲鎮工藝CTEC</a>
                        </li>
                    </ul>
                </div>
                <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
                    <p className="text-black-600 mb-4 font-medium text-lg">团队</p>
                    <ul className="text-black-500">
                        <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                            <a href="https://alsaceteam.feishu.cn/wiki/T1xBwlGxSiL123kMAPicIZ0DnYe" target="_blank"
                               rel="noopener noreferrer">加入我们</a>
                        </li>
                        <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                            <a href="mailto:tech@alsace.team">技术合作</a>
                        </li>
                        <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                            <a href="https://space.bilibili.com/47983516" target="_blank"
                               rel="noopener noreferrer">作品</a>
                        </li>
                        <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                            <a href="http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=Or0lLwYEHFzY_D7hZUoHKp4ANjrGdfuX&authKey=Yzlq2b8X8N%2BsyelDeDHs7Rym8Fl85Pzxn7rE8tVXdjhZIUsBql9ZVuGdwfZ1cKmE&noverify=0&group_code=916435182"
                               target="_blank" rel="noopener noreferrer">社区交流群</a>
                        </li>
                        <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                            <a href="/buildcontest"
                               target="_blank" rel="noopener noreferrer">承接各类Minecraft建筑比赛</a>
                        </li>
                        <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                            <a href="mailto:business@alsace.team"
                               target="_blank" rel="noopener noreferrer"
                               title="与工业园社区服无关，商业建筑会在特定服务器制作">服务端、建筑地图、插件定制服务</a>
                        </li>
                    </ul>
                </div>
                <div className="row-span-2 sm:col-span-2 sm:col-start-13 sm:col-end-15 flex flex-col">
                    <p className="text-black-600 mb-4 font-medium text-lg">工业园</p>
                    <ul className="text-black-500">
                        <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                            <a href="https://www.alsace.team/uj?url=manual" target="_blank"
                               rel="noopener noreferrer">工业园服务器手册</a>
                        </li>
                        <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                            <a href="https://www.alsace.team/uj?url=command-guide" target="_blank"
                               rel="noopener noreferrer">命令指南</a>
                        </li>
                        <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                            <a href="https://map.alsace.team" target="_blank" rel="noopener noreferrer">地图管理平台</a>
                        </li>
                        <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                            <a href="https://alsaceteam.feishu.cn/wiki/F8AHwoD18iq45fk3ieSc6pcGnYy" target="_blank"
                               rel="noopener noreferrer">用户协议</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
