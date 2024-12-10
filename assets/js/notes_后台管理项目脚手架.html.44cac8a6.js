"use strict";(self.webpackChunkfront_end_notes=self.webpackChunkfront_end_notes||[]).push([[961],{6108:(n,s,a)=>{a.r(s),a.d(s,{comp:()=>e,data:()=>l});var p=a(641);const t={},e=(0,a(6262).A)(t,[["render",function(n,s){return(0,p.uX)(),(0,p.CE)("div",null,s[0]||(s[0]=[(0,p.Fv)('<h1 id="后台管理项目脚手架0-1搭建笔记" tabindex="-1"><a class="header-anchor" href="#后台管理项目脚手架0-1搭建笔记"><span>后台管理项目脚手架0-1搭建笔记</span></a></h1><h2 id="_0-项目介绍" tabindex="-1"><a class="header-anchor" href="#_0-项目介绍"><span>0 项目介绍</span></a></h2><p>项目地址：<a href="https://github.com/namewyf/v-cli" target="_blank" rel="noopener noreferrer">https://github.com/namewyf/v-cli</a></p><h2 id="_2-commander命令的使用" tabindex="-1"><a class="header-anchor" href="#_2-commander命令的使用"><span>2 Commander命令的使用</span></a></h2><p>新建一个文件夹，命名为v-cli</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">npm init</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>形成一个package.json文件</p><p>新建一个bin文件夹，然后安装commander插件</p><p>option参数的使用</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> program <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;commander&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">program<span class="token punctuation">.</span><span class="token function">version</span><span class="token punctuation">(</span><span class="token string">&#39;1.0.0&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line">program<span class="token punctuation">.</span><span class="token function">option</span><span class="token punctuation">(</span><span class="token string">&#39;-n &#39;</span><span class="token punctuation">,</span> <span class="token string">&quot;输出名称&quot;</span><span class="token punctuation">)</span></span>\n<span class="line"><span class="token comment">// 添加一个 -t 或 --type 选项，需要一个参数值</span></span>\n<span class="line">program<span class="token punctuation">.</span><span class="token function">option</span><span class="token punctuation">(</span><span class="token string">&quot;-t --type &lt;type&gt;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;项目类型&quot;</span><span class="token punctuation">)</span></span>\n<span class="line"><span class="token comment">// 解析命令行参数</span></span>\n<span class="line">program<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>argv<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token comment">// 获取所有选项的值</span></span>\n<span class="line"><span class="token keyword">const</span> options <span class="token operator">=</span> program<span class="token punctuation">.</span><span class="token function">opts</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;opts=&gt;&quot;</span><span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>commands参数的使用</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">program<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&quot;create &lt;app-name&gt;&quot;</span><span class="token punctuation">)</span></span>\n<span class="line">    <span class="token punctuation">.</span><span class="token function">description</span><span class="token punctuation">(</span><span class="token string">&quot;创建一个新项目&quot;</span><span class="token punctuation">)</span></span>\n<span class="line">    <span class="token punctuation">.</span><span class="token function">action</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>\n<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">创建项目:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>\n<span class="line"></span>\n<span class="line"><span class="token comment">// 解析命令行参数</span></span>\n<span class="line">program<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>argv<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-figlet参数的使用" tabindex="-1"><a class="header-anchor" href="#_3-figlet参数的使用"><span>3 figlet参数的使用</span></a></h2><p>安装</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">npm install figlet</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>回调函数的方式调用</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">let</span> figlet <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;figlet&quot;</span><span class="token punctuation">)</span></span>\n<span class="line"></span>\n<span class="line"><span class="token comment">//第一种方式：callback调用</span></span>\n<span class="line"><span class="token function">figlet</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Something went wrong...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">        console<span class="token punctuation">.</span><span class="token function">dir</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">        <span class="token keyword">return</span><span class="token punctuation">;</span></span>\n<span class="line">    <span class="token punctuation">}</span></span>\n<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>promise的方式调用</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> log <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;console&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token keyword">let</span> <span class="token punctuation">{</span> promisify <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;util&quot;</span><span class="token punctuation">)</span></span>\n<span class="line"><span class="token keyword">let</span> asyncfiglet <span class="token operator">=</span> <span class="token function">promisify</span><span class="token punctuation">(</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;figlet&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>\n<span class="line"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token keyword">try</span> <span class="token punctuation">{</span></span>\n<span class="line">        <span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">asyncfiglet</span><span class="token punctuation">(</span><span class="token string">&quot;Vue 3&quot;</span><span class="token punctuation">)</span></span>\n<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">    <span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-ora和download-git-repo" tabindex="-1"><a class="header-anchor" href="#_5-ora和download-git-repo"><span>5 ora和download-git-repo</span></a></h2><p>安装aro和download-git-repo插件</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">npm install ora</span>\n<span class="line">npm install download-git-repo</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ora" tabindex="-1"><a class="header-anchor" href="#ora"><span>ora</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">import</span> ora <span class="token keyword">from</span> <span class="token string">&#39;ora&#39;</span><span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line"><span class="token keyword">const</span> spinner <span class="token operator">=</span> <span class="token function">ora</span><span class="token punctuation">(</span><span class="token string">&#39;Loading unicorns&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line"><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>\n<span class="line">    spinner<span class="token punctuation">.</span>color <span class="token operator">=</span> <span class="token string">&#39;yellow&#39;</span><span class="token punctuation">;</span><span class="token comment">//修改颜色</span></span>\n<span class="line">    spinner<span class="token punctuation">.</span>text <span class="token operator">=</span> <span class="token string">&#39;Loading rainbows&#39;</span><span class="token punctuation">;</span><span class="token comment">//修改名字</span></span>\n<span class="line">    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>\n<span class="line">        spinner<span class="token punctuation">.</span><span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意这里是es module语法，ora最新的方式是用es module语法导入</p></blockquote><h3 id="download-git-repo" tabindex="-1"><a class="header-anchor" href="#download-git-repo"><span>download-git-repo</span></a></h3><ol><li>这个地方链接后面必须加上#main，否则默认的分值是master</li><li>&#39;Demo1&#39;目录位置必须是之前不存在的</li></ol><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">let</span> download <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;download-git-repo&#39;</span><span class="token punctuation">)</span></span>\n<span class="line"><span class="token comment">//这里Demo是</span></span>\n<span class="line"><span class="token function">download</span><span class="token punctuation">(</span><span class="token string">&#39;direct:https://github.com/namewyf/namewyf.git#main&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Demo1&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">clone</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err <span class="token operator">?</span> err <span class="token operator">:</span> <span class="token string">&#39;Success&#39;</span><span class="token punctuation">)</span></span>\n<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-完整脚手架实现上" tabindex="-1"><a class="header-anchor" href="#_6-完整脚手架实现上"><span>6 完整脚手架实现上</span></a></h2><p>这里我之前安装的ora只能通过es module语法导入，所以这里我重新安装ora插件旧版本，然后通过commonjs语法导入</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">npm uninstall ora</span>\n<span class="line">npm install ora@5.4.1</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>现在可以用require语法引入了</p>',32)]))}]]),l=JSON.parse('{"path":"/notes/%E5%90%8E%E5%8F%B0%E7%AE%A1%E7%90%86%E9%A1%B9%E7%9B%AE%E8%84%9A%E6%89%8B%E6%9E%B6.html","title":"后台管理项目脚手架0-1搭建笔记","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"0 项目介绍","slug":"_0-项目介绍","link":"#_0-项目介绍","children":[]},{"level":2,"title":"2 Commander命令的使用","slug":"_2-commander命令的使用","link":"#_2-commander命令的使用","children":[]},{"level":2,"title":"3 figlet参数的使用","slug":"_3-figlet参数的使用","link":"#_3-figlet参数的使用","children":[]},{"level":2,"title":"5 ora和download-git-repo","slug":"_5-ora和download-git-repo","link":"#_5-ora和download-git-repo","children":[{"level":3,"title":"ora","slug":"ora","link":"#ora","children":[]},{"level":3,"title":"download-git-repo","slug":"download-git-repo","link":"#download-git-repo","children":[]}]},{"level":2,"title":"6 完整脚手架实现上","slug":"_6-完整脚手架实现上","link":"#_6-完整脚手架实现上","children":[]}],"git":{"updatedTime":1733842641000,"contributors":[{"name":"namewyf","email":"wyf19892552132@163.com","commits":1}]},"filePathRelative":"notes/后台管理项目脚手架.md","excerpt":"\\n<h2>0 项目介绍</h2>\\n<p>项目地址：<a href=\\"https://github.com/namewyf/v-cli\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://github.com/namewyf/v-cli</a></p>\\n<h2>2 Commander命令的使用</h2>\\n<p>新建一个文件夹，命名为v-cli</p>\\n<div class=\\"language-text line-numbers-mode\\" data-highlighter=\\"prismjs\\" data-ext=\\"text\\" data-title=\\"text\\"><pre><code><span class=\\"line\\">npm init</span>\\n<span class=\\"line\\"></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>"}')}}]);