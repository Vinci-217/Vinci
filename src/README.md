---
home: true
layout: BlogHome
icon: home
title: Vinci博客主页
heroImage: https://s2.loli.net/2024/05/26/sKzuPWCk2o86jDJ.png
heroText: VinciGeek
heroFullScreen: true
bgImage: https://s2.loli.net/2024/05/26/VWIenT4cqShtC1Y.jpg
tagline: “无论过去怎样，以后如何，至少现在我们在努力让生活变得更好，不是吗？”
projects:
  - icon: project
    name: 项目名称
    desc: 项目详细描述
    link: https://你的项目链接

  - icon: link
    name: 链接名称
    desc: 链接详细描述
    link: https://链接地址

  - icon: book
    name: 书籍名称
    desc: 书籍详细描述
    link: https://你的书籍链接

  - icon: article
    name: 文章名称
    desc: 文章详细描述
    link: https://你的文章链接

  - icon: friend
    name: 伙伴名称
    desc: 伙伴详细介绍
    link: https://你的伙伴链接

  - icon: https://theme-hope-assets.vuejs.press/logo.svg
    name: 自定义项目
    desc: 自定义详细介绍
    link: https://你的自定义链接


footer: 唯有热爱可抵岁月漫长 本站总访问量<span id="busuanzi_value_site_pv"></span>次 本站访客数<span id="busuanzi_value_site_uv"></span>人次
---
<script>
if (typeof document !== 'undefined') {
  document.addEventListener("DOMContentLoaded", function () {
    const taglines = [
      "——“且将新火试新茶，诗酒乘年华”",
      "——“天生我材必有用，千金散尽还复来”",
      "——“长风破浪会有时，直挂云帆济沧海”",
      "——“海内存知己，天涯若比邻”"
    ];

    const randomTagline = taglines[Math.floor(Math.random() * taglines.length)];
    const taglineElement = document.querySelector('.hero .description');

    if (taglineElement) {
      taglineElement.textContent = randomTagline;
    }
  });
}
</script>
