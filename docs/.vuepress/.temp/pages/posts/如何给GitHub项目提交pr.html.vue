<template><div><h1 id="如何给github项目提交pr" tabindex="-1"><a class="header-anchor" href="#如何给github项目提交pr"><span>如何给GitHub项目提交pr</span></a></h1>
<h2 id="把github项目fork到自己的仓库" tabindex="-1"><a class="header-anchor" href="#把github项目fork到自己的仓库"><span>把GitHub项目fork到自己的仓库</span></a></h2>
<h2 id="拉取代码到本地进行修改" tabindex="-1"><a class="header-anchor" href="#拉取代码到本地进行修改"><span>拉取代码到本地进行修改</span></a></h2>
<p>在本地的某个目录下使用</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">git clone +你要拉取的项目地址</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><blockquote>
<p>注意，git clone会在当前目录下创建一个项目文件夹，然后把github里的代码放在这个文件夹里，而且git文件夹也会放在里面，因此你需要先cd进入这个项目的文件夹，后续才能使用git add等git指令</p>
</blockquote>
<p>进入项目目录下</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">cd 项目名称</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>修改代码</p>
<h2 id="上传代码" tabindex="-1"><a class="header-anchor" href="#上传代码"><span>上传代码</span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">git add .</span>
<span class="line">git commit -m 'xxxx'</span>
<span class="line">git push</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="提交pull-request" tabindex="-1"><a class="header-anchor" href="#提交pull-request"><span>提交pull request</span></a></h2>
<p>点击项目主页的Contribute-&gt;Open pull request</p>
<p>填写好备注后再点击Create pull request</p>
</div></template>


