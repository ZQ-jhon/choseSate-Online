<h1>预览</h1>
[预览地址：https://zq-jhon.github.io/chouseSate-Online/index.html](https://zq-jhon.github.io/chouseSate-Online/index.html)<br>

<ul>
<li>没有使用第三方库/插件。</li><br>
<li>适合手机/pad/pc浏览</li><br>
<li>已经使用js动态画出30*30座位。</li><br>
<li>点击座位，选中为红色，再次点击，表示取消，恢复原来的颜色。</li><br>
</ul>
<br>
<ul>
<h1>问题</h1>
<li>座位增加到5万以上时，由于js引擎处理速度有限，可能会导致不能快速渲染出固定数量的“座位”(dom节点)，并且会出现卡顿/白屏时间过长的现象。</li><br>
<li>解决方案:1.可以先用html画出用户刚开始浏览部分的座位(dom节点)，当用户想要往下浏览时，再采用js动态渲染出dom节点。</li><br>
</ul>
