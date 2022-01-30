(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"5x8q":function(t,e,s){"use strict";s.r(e);var r=s("KHd+"),a=s("UQSp"),n=s("Kw5r");function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.a.config.optionMergeStrategies;var o={VueRemarkRoot:a.a},v=function(t){var e=t.options.components=t.options.components||{},s=t.options.computed=t.options.computed||{};Object.keys(o).forEach((function(t){"object"===p(o[t])&&"function"==typeof o[t].render||"function"==typeof o[t]&&"function"==typeof o[t].options.render?e[t]=o[t]:s[t]=function(){return o[t]}}))},_=n.a.config.optionMergeStrategies,c="__vueRemarkFrontMatter",i={excerpt:null,title:"OpenGL ES 着色器语言（GLSL ES）"};var l=function(t){t.options[c]&&(t.options[c]=i),n.a.util.defineReactive(t.options,c,i),t.options.computed=_.computed({$frontmatter:function(){return t.options[c]}},t.options.computed)},d=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("VueRemarkRoot",[s("h1",{attrs:{id:"opengl-es-着色器语言glsl-es"}},[s("a",{attrs:{href:"#opengl-es-%E7%9D%80%E8%89%B2%E5%99%A8%E8%AF%AD%E8%A8%80glsl-es","aria-hidden":"true"}},[t._v("#")]),t._v("OpenGL ES 着色器语言（GLSL ES）")]),s("h2",{attrs:{id:"glsl-es概述"}},[s("a",{attrs:{href:"#glsl-es%E6%A6%82%E8%BF%B0","aria-hidden":"true"}},[t._v("#")]),t._v("GLSL ES概述")]),s("p",[t._v("GLSL ES是强类型语言。")]),s("h2",{attrs:{id:"你好着色器"}},[s("a",{attrs:{href:"#%E4%BD%A0%E5%A5%BD%E7%9D%80%E8%89%B2%E5%99%A8","aria-hidden":"true"}},[t._v("#")]),t._v("你好，着色器")]),s("h2",{attrs:{id:"数据值类型数值和布尔值"}},[s("a",{attrs:{href:"#%E6%95%B0%E6%8D%AE%E5%80%BC%E7%B1%BB%E5%9E%8B%E6%95%B0%E5%80%BC%E5%92%8C%E5%B8%83%E5%B0%94%E5%80%BC","aria-hidden":"true"}},[t._v("#")]),t._v("数据值类型（数值和布尔值）")]),s("ul",[s("li",[t._v("数值类型"),s("ul",[s("li",[t._v("整型（int）")]),s("li",[t._v("浮点型（float）")])])]),s("li",[t._v("布尔值类型(bool)"),s("ul",[s("li",[t._v("true")]),s("li",[t._v("false")])])])]),s("h2",{attrs:{id:"变量"}},[s("a",{attrs:{href:"#%E5%8F%98%E9%87%8F","aria-hidden":"true"}},[t._v("#")]),t._v("变量")]),s("p",[t._v("除了常规的命名规范外，还不能以"),s("code",{pre:!0},[t._v("gl_")]),t._v("、"),s("code",{pre:!0},[t._v("webgl_")]),t._v("、"),s("code",{pre:!0},[t._v("_webgl_")]),t._v("开头，这些前缀已被OpenGL ES保留了。")]),s("h2",{attrs:{id:"矢量和矩阵"}},[s("a",{attrs:{href:"#%E7%9F%A2%E9%87%8F%E5%92%8C%E7%9F%A9%E9%98%B5","aria-hidden":"true"}},[t._v("#")]),t._v("矢量和矩阵")]),s("h2",{attrs:{id:"结构体"}},[s("a",{attrs:{href:"#%E7%BB%93%E6%9E%84%E4%BD%93","aria-hidden":"true"}},[t._v("#")]),t._v("结构体")]),s("p",[t._v("用struct定义结构体，构造函数的参数的顺序必须与结构体定义中的成员顺序一直。")]),s("h2",{attrs:{id:"数组"}},[s("a",{attrs:{href:"#%E6%95%B0%E7%BB%84","aria-hidden":"true"}},[t._v("#")]),t._v("数组")]),s("h2",{attrs:{id:"取样器纹理"}},[s("a",{attrs:{href:"#%E5%8F%96%E6%A0%B7%E5%99%A8%E7%BA%B9%E7%90%86","aria-hidden":"true"}},[t._v("#")]),t._v("取样器（纹理）")]),s("p",[t._v("取样器（sample）用于访问纹理，有两种基本的取样器类型：")]),s("ul",[s("li",[t._v("sampler2D")]),s("li",[t._v("samplerCube")])]),s("p",[t._v("取样器变量只能是uniform变量。")]),s("h2",{attrs:{id:"流程控制"}},[s("a",{attrs:{href:"#%E6%B5%81%E7%A8%8B%E6%8E%A7%E5%88%B6","aria-hidden":"true"}},[t._v("#")]),t._v("流程控制")]),s("p",[t._v("if、if-else、过多的if条件会降低着色器的执行速度；")]),s("p",[t._v("没有switch语句；")]),s("p",[t._v("for循环只允许又一个循环变量，且该变量只能是int或float类型；")]),s("p",[t._v("循环表达式只能是以下形式：i++、i--、i+=常量表达式或者i-=常量表达式；")]),s("h2",{attrs:{id:"函数"}},[s("a",{attrs:{href:"#%E5%87%BD%E6%95%B0","aria-hidden":"true"}},[t._v("#")]),t._v("函数")]),s("p",[s("strong",[t._v("参数限定字")])]),s("table",[s("thead",[s("tr",[s("th",[t._v("类别")]),s("th",[t._v("规则")])])]),s("tbody",[s("tr",[s("td",[t._v("in")]),s("td",[t._v("向函数中传入值，并且可以修改")])]),s("tr",[s("td",[t._v("const in")]),s("td",[t._v("向函数中传入值，但是不能修改")])]),s("tr",[s("td",[t._v("out")]),s("td",[t._v("在函数中被赋值，并被传出")])]),s("tr",[s("td",[t._v("inout")]),s("td",[t._v("传入函数，同时在函数中被赋值，并被传出")])]),s("tr",[s("td",[t._v("无")]),s("td",[t._v("将一个值传给函数，和in一样")])])])]),s("p",[t._v("例如将颜色值转转换为明度的方法：")]),s("pre",{pre:!0,attrs:{class:"language-glsl"}},[s("code",{pre:!0,attrs:{class:"language-glsl"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("luma")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("vec3")]),t._v(" color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("out")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" brightness"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  brightness "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.2126")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("r "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.7162")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("g "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0722")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])]),s("h2",{attrs:{id:"内置函数"}},[s("a",{attrs:{href:"#%E5%86%85%E7%BD%AE%E5%87%BD%E6%95%B0","aria-hidden":"true"}},[t._v("#")]),t._v("内置函数")]),s("h2",{attrs:{id:"存储限定字"}},[s("a",{attrs:{href:"#%E5%AD%98%E5%82%A8%E9%99%90%E5%AE%9A%E5%AD%97","aria-hidden":"true"}},[t._v("#")]),t._v("存储限定字")]),s("p",[s("strong",[t._v("const")])]),s("p",[t._v("定义常量；")]),s("p",[s("strong",[t._v("attribute")])]),s("p",[t._v("只能出现在顶点着色器中，只能被声明为全局变量，被用来表示逐顶点的信息；")]),s("p",[t._v("被修饰的变量只能是以下类型：float、vec2、vec3、vec4、mat2、mat3、mat4；")]),s("p",[s("strong",[t._v("varying")])]),s("p",[t._v("必须是全局变量，用于从顶点着色器向片元着色器传输数据；")]),s("p",[t._v("被修饰的变量只能是以下类型：float、vec2、vec3、vec4、mat2、mat3、mat4；")]),s("h2",{attrs:{id:"精度限定字"}},[s("a",{attrs:{href:"#%E7%B2%BE%E5%BA%A6%E9%99%90%E5%AE%9A%E5%AD%97","aria-hidden":"true"}},[t._v("#")]),t._v("精度限定字")]),s("ul",[s("li",[s("p",[t._v("highp 高精度")])]),s("li",[s("p",[t._v("mediump 中精度")])]),s("li",[s("p",[t._v("lowp 低精度")])])]),s("pre",{pre:!0,attrs:{class:"language-glsl"}},[s("code",{pre:!0,attrs:{class:"language-glsl"}},[s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("ifdef")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token expression"}},[t._v("GL_ES")])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("precision")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mediump")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("endif")])])])]),s("h2",{attrs:{id:"预处理指令"}},[s("a",{attrs:{href:"#%E9%A2%84%E5%A4%84%E7%90%86%E6%8C%87%E4%BB%A4","aria-hidden":"true"}},[t._v("#")]),t._v("预处理指令")]),s("p",[t._v("预处理指令用来在真正编译之前对代码进行预处理")]),s("pre",{pre:!0,attrs:{class:"language-glsl"}},[s("code",{pre:!0,attrs:{class:"language-glsl"}},[s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token expression"}},[t._v("条件表达式")])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//条件为真，执行这里")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("endif")])])])]),s("pre",{pre:!0,attrs:{class:"language-glsl"}},[s("code",{pre:!0,attrs:{class:"language-glsl"}},[s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("ifdef")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token expression"}},[t._v("某宏")])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//如果定义了某宏，执行这里")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("endif")])])])]),s("pre",{pre:!0,attrs:{class:"language-glsl"}},[s("code",{pre:!0,attrs:{class:"language-glsl"}},[s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("ifndef")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token expression"}},[t._v("某宏")])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//如果没有定义某宏，执行这里")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("endif")])])])]),s("p",[s("code",{pre:!0},[t._v("#ifdef")]),t._v("可以配合"),s("code",{pre:!0},[t._v("#else")]),t._v("一起使用")]),s("p",[t._v("定义宏：\t"),s("code",{pre:!0},[t._v("#define 宏名 宏内容")])]),s("pre",{pre:!0,attrs:{class:"language-glsl"}},[s("code",{pre:!0,attrs:{class:"language-glsl"}},[s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token macro-name"}},[t._v("NUM")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token expression"}},[s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")])])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("ifdef")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token expression"}},[t._v("NUM "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")])])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//如果宏NUM为100，执行这里")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("else")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//执行这里")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("endif")])])])]),s("p",[s("code",{pre:!0},[t._v("#version number")]),t._v(" 来指定着色器使用的GLSL ES版本，可以接受的版本包括100（GLSL ES 1.00）和101（GLSL ES 1.01）默认100。该指令只能在着色器顶部。")]),s("p",[s("strong",[t._v("预定义的内置宏")])]),s("table",[s("thead",[s("tr",[s("th",[t._v("宏")]),s("th",[t._v("说明")])])]),s("tbody",[s("tr",[s("td",[t._v("GL_ES")]),s("td",[t._v("在openGL ES 2.0中定义为1")])]),s("tr",[s("td",[t._v("GL_FRAGMENT_PRECISION_HIGH")]),s("td",[t._v("片元着色器支持highp精度")])])])])])}),[],!1,null,null,null);"function"==typeof v&&v(d),"function"==typeof l&&l(d);e.default=d.exports},UQSp:function(t,e,s){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}}}]);