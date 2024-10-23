import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Hanamizu_",
      avatar: "https://minotar.net/helm/Hanamizu_/100.png",
      role: "开发者",
      content:
          "工业园是国内顶尖的Minecraft建筑服务器之一，有着先进的建筑工具，每日超过100次备份，服务器炸了也不用担心地图丢失。还有一个非常活跃的社区，欢迎大家加入！",
    },
    {
      name: "z_wuxin",
      avatar: "https://minotar.net/helm/z_wuxin/100.png",
      role: "体素艺术家",
      content:
          "工业园的多样化功能帮助我完成了雕塑创作和欧式大比例场景设计。rotate旋转在这服里会自动修补一部分，不会有太多空缺的地方。插件功能也非常齐全，建筑输错了指令卡了也不会影响到别人，在这里建筑非常舒服。",
    },
    {
      name: "EM_Ghost",
      avatar: "https://minotar.net/helm/EM_Ghost/100.png",
      role: "体素艺术家",
      content:
          "工业园是一个非常棒的建筑社区服。在创作过程中不仅能够使用市面上大部分的建筑工具，更能认识一堆志同道合的小伙伴。总之欢迎大家一起来工业园玩耍！",
    },
    {
      name: "chunshushu",
      avatar: "https://minotar.net/helm/chunshushu/100.png",
      role: "体素艺术家",
      content:
          "工业园的办事和解决问题的效率是我使用的多个建筑服中最高的，服务器也很稳定，帮助我完成了很多项目。",
    },
    {
      name: "Greens_xfl",
      avatar: "https://minotar.net/helm/Greens_xfl/100.png",
      role: "体素艺术家",
      content:
          "在工业园完成了很多的建筑，gopaint、arceon、axiom等各项插件功能齐全，便捷的命令查询功能帮助我在建筑时节省了很多的时间。",
    },

    {
      name: "Haoyuan_luo",
      avatar: "https://minotar.net/helm/Haoyuan_luo/100.png",
      role: "体素艺术家",
      content:
          "在工业园可以遇到很多小伙伴，大家都很友善；服务器绝大部分的建筑插件都有非常的方便，说是国内顶尖的建筑服务器也不为过",
    },
    {
      name: "ShanJun_H",
      avatar: "https://minotar.net/helm/ShanJun_H/100.png",
      role: "体素艺术家",
      content:
          "工业园☜支持使用axiom，建筑插件完备，免费托管，好用，玩他！",
    },
  ];

  return (
      <div className="text-gray-600 dark:text-gray-300" id="testimonials">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
          <div className="md:columns-2 lg:columns-3 gap-8 space-y-8">
            {testimonials.map((testimonial, index) => (
                <div
                    key={index}
                    className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white shadow-2xl shadow-gray-600/10"
                >
                  <div className="flex gap-4">
                    <img
                        className="w-12 h-12 rounded-xl"
                        src={testimonial.avatar}
                        alt={`Avatar of ${testimonial.name}`}
                        width="200"
                        height="200"
                        loading="lazy"
                    />
                    <div>
                      <h6 className="text-lg font-medium text-gray-700">
                        {testimonial.name}
                      </h6>
                      <p className="text-sm text-gray-600">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="mt-8">{testimonial.content}</p>
                </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default Testimonials;
