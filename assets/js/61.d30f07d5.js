(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{464:function(t,s,a){"use strict";a.r(s);var n=a(54),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"第一章-类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第一章-类型"}},[t._v("#")]),t._v(" 第一章：类型")]),t._v(" "),a("p",[t._v("大多数开发者会说，动态语言（就像 JS）没有 "),a("em",[t._v("类型")]),t._v("。让我们看看 ES5.1 语言规范（http://www.ecma-international.org/ecma-262/5.1/）在这个问题上是怎么说的：")]),t._v(" "),a("blockquote",[a("p",[t._v("在本语言规范中的算法所操作的每一个值都有一种关联的类型。可能的值的类型就是那些在本条款中定义的类型。类型还进一步被分为 ECMAScript 语言类型和语言规范类型")]),t._v(" "),a("p",[t._v("一个 ECMAScript 语言类型对应于 ECMAScript 程序员使用 ECMAScript 语言直接操作的值。ECMAScript 语言类型有 Undefined，Null，Boolean，String，Number，和 Object。")])]),t._v(" "),a("p",[t._v("现在，如果你是一个强类型（静态类型的）语言的爱好者，你可能会反对“类型”一词的用法。在那些语言中，“类型”的含义要比它在 JS 这里的含义丰富得 "),a("em",[t._v("多")]),t._v("。")]),t._v(" "),a("p",[t._v("有些人说 JS 不应该声称拥有“类型”，它们应被称为“标签”或者“子类型”。")]),t._v(" "),a("p",[t._v("去他的！我们将使用这个粗糙的定义（看起来和语言规范的定义相同，只是改变了措辞）：一个 "),a("em",[t._v("类型")]),t._v(" 是一组固有的，内建的性质，对于引擎 "),a("strong",[t._v("和开发者")]),t._v(" 来说，它独一无二地标识了一个特定的值的行为，并将它与其他值区分开。")]),t._v(" "),a("p",[t._v("换句话说，如果引擎和开发者看待值 "),a("code",[t._v("42")]),t._v("（数字）与看待值 "),a("code",[t._v('"42"')]),t._v("（字符串）的方式不同，那么这两个值就拥有不同的 "),a("em",[t._v("类型")]),t._v(" -- 分别是 "),a("code",[t._v("number")]),t._v(" 和 "),a("code",[t._v("string")]),t._v("。当你使用 "),a("code",[t._v("42")]),t._v(" 时，你就在 "),a("em",[t._v("试图")]),t._v(" 做一些数字的事情，比如计算。但当你使用 "),a("code",[t._v('"42"')]),t._v(" 时，你就在 "),a("em",[t._v("试图")]),t._v(" 做一些字符串的事情，比如输出到页面上，等等。"),a("strong",[t._v("这两个值有着不同的类型。")])]),t._v(" "),a("p",[t._v("这绝不是一个完美的定义。但是对于这里的讨论足够好了。而且它与 JS 描述它的方式并不矛盾。")]),t._v(" "),a("h1",{attrs:{id:"类型的重要意义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型的重要意义"}},[t._v("#")]),t._v(" 类型的重要意义")]),t._v(" "),a("p",[t._v("抛开学术上关于定义的分歧，为什么 JavaScript 有或者没有 "),a("em",[t._v("类型")]),t._v(" 那么重要？")]),t._v(" "),a("p",[t._v("对每一种 "),a("em",[t._v("类型")]),t._v(" 和它的固有行为有一个正确的理解，对于理解如何正确和准确地转换两个不同类型的值来说是绝对必要的（参见第四章，强制转换）。几乎每一个被编写过的 JS 程序都需要以某种形式处理类型的强制转换，所以，你能负责任、有信心地这么做是很重要的。")]),t._v(" "),a("p",[t._v("如果你有一个 "),a("code",[t._v("number")]),t._v(" 值 "),a("code",[t._v("42")]),t._v("，但你想像一个 "),a("code",[t._v("string")]),t._v(" 那样对待它，比如从位置 "),a("code",[t._v("1")]),t._v(" 中将 "),a("code",[t._v('"2"')]),t._v(" 作为一个字符抽取出来，那么显然你需要首先将值从 "),a("code",[t._v("number")]),t._v("（强制）转换成一个 "),a("code",[t._v("string")]),t._v("。")]),t._v(" "),a("p",[t._v("这看起来十分简单。")]),t._v(" "),a("p",[t._v("但是这样的强制转换可能以许多不同的方式发生。其中有些方式是明确的，很容易推理的，和可靠的。但是如果你不小心，强制转换就可能以非常奇怪的，令人吃惊的方式发生。")]),t._v(" "),a("p",[t._v("对强制转换的困惑可能是 JavaScript 开发者所经历的最深刻的挫败感之一。它曾经总是因为如此 "),a("em",[t._v("危险")]),t._v(" 而为人所诟病，被认为是一个语言设计上的缺陷而应当被回避。")]),t._v(" "),a("p",[t._v("带着对 JavaScript 类型的全面理解，我们将要阐明为什么强制转换的 "),a("em",[t._v("坏名声")]),t._v(" 是言过其实的，而且是有些冤枉的 -- 以此来反转你的视角，来看清强制转换的力量和用处。但首先，我们必须更好地把握值与类型。")]),t._v(" "),a("h2",{attrs:{id:"内建类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内建类型"}},[t._v("#")]),t._v(" 内建类型")]),t._v(" "),a("p",[t._v("JavaScript 定义了七种内建类型：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("null")])]),t._v(" "),a("li",[a("code",[t._v("undefined")])]),t._v(" "),a("li",[a("code",[t._v("boolean")])]),t._v(" "),a("li",[a("code",[t._v("number")])]),t._v(" "),a("li",[a("code",[t._v("string")])]),t._v(" "),a("li",[a("code",[t._v("object")])]),t._v(" "),a("li",[a("code",[t._v("symbol")]),t._v(" -- 在 ES6 中被加入的！")])]),t._v(" "),a("p",[a("strong",[t._v("注意：")]),t._v(" 除了 "),a("code",[t._v("object")]),t._v(" 所有这些类型都被称为“基本类型（primitives）”。")]),t._v(" "),a("p",[a("code",[t._v("typeof")]),t._v(" 操作符可以检测给定值的类型，而且总是返回七种字符串值中的一种 -- 令人吃惊的是，对于我们刚刚列出的七中内建类型，它没有一个恰好的一对一匹配。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"undefined"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("          "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"boolean"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),t._v("            "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"number"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"42"')]),t._v("          "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" life"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"object"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在 ES6 中被加入的！")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Symbol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"symbol"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),a("p",[t._v("如上所示，这六种列出来的类型拥有相应类型的值，并返回一个与类型名称相同的字符串值。"),a("code",[t._v("Symbol")]),t._v(" 是 ES6 的新数据类型，我们将在第三章中讨论它。")]),t._v(" "),a("p",[t._v("正如你可能已经注意到的，我在上面的列表中剔除了 "),a("code",[t._v("null")]),t._v("。它是 "),a("em",[t._v("特殊的")]),t._v(" -- 特殊在它与 "),a("code",[t._v("typeof")]),t._v(" 操作符组合时是有 bug 的。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"object"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),a("p",[t._v("要是它返回 "),a("code",[t._v('"null"')]),t._v(" 就好了（而且是正确的！），但是这个原有的 bug 已经存在了近二十年，而且好像永远也不会被修复了，因为有太多已经存在的 web 的内容依存着这个 bug 的行为，“修复”这个 bug 将会 "),a("em",[t._v("制造")]),t._v(" 更多的“bug”并毁掉许多 web 软件。")]),t._v(" "),a("p",[t._v("如果你想要使用 "),a("code",[t._v("null")]),t._v(" 类型来测试 "),a("code",[t._v("null")]),t._v(" 值，你需要一个复合条件：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"object"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),a("p",[a("code",[t._v("null")]),t._v(" 是唯一一个“falsy”（也叫类 false；见第四章），但是在 "),a("code",[t._v("typeof")]),t._v(" 检查中返回 "),a("code",[t._v('"object"')]),t._v(" 的基本类型。")]),t._v(" "),a("p",[t._v("那么 "),a("code",[t._v("typeof")]),t._v(" 可以返回的第七种字符串值是什么？")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* .. */")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"function"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),a("p",[t._v("很容易认为在 JS 中 "),a("code",[t._v("function")]),t._v(" 是一种顶层的内建类型，特别是看到 "),a("code",[t._v("typeof")]),t._v(" 操作符的这种行为时。然而，如果你阅读语言规范，你会看到它实际上是对象（object）的“子类型”。特别地，一个函数（function）被称为“可调用对象” —— 一个拥有 "),a("code",[t._v("[[Call]]")]),t._v(" 内部属性、允许被调用的对象。")]),t._v(" "),a("p",[t._v("函数实际上是对象这一事实十分有用。最重要的是，它们可以拥有属性。例如：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("c")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* .. */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("这个函数对象拥有一个 "),a("code",[t._v("length")]),t._v(" 属性，它被设置为函数被声明时的形式参数的数量。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2")]),t._v("\n")])])]),a("p",[t._v("因为你使用了两个正式命名的参数（"),a("code",[t._v("b")]),t._v(" 和 "),a("code",[t._v("c")]),t._v("）声明了函数，所以“函数的长度”是 "),a("code",[t._v("2")]),t._v("。")]),t._v(" "),a("p",[t._v("那么数组呢？它们是 JS 原生的，所以它们是一个特殊的类型咯？")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"object"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),a("p",[t._v("不，它们仅仅是对象。考虑它们的最恰当的方法是，也将它们认为是对象的“子类型”（见第三章），带有被数字索引的附加性质（与仅仅使用字符串键的普通对象相反），并维护着一个自动更新的 "),a("code",[t._v(".length")]),t._v(" 属性。")]),t._v(" "),a("h2",{attrs:{id:"值作为类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#值作为类型"}},[t._v("#")]),t._v(" 值作为类型")]),t._v(" "),a("p",[t._v("在 JavaScript 中，变量没有类型 -- "),a("strong",[t._v("值才有类型")]),t._v("。变量可以在任何时候，持有任何值。")]),t._v(" "),a("p",[t._v("另一种考虑 JS 类型的方式是，JS 没有“类型强制”，也就是引擎不坚持认为一个 "),a("em",[t._v("变量")]),t._v(" 总是持有与它开始存在时相同的 "),a("em",[t._v("初始类型")]),t._v(" 的值。在一个赋值语句中，一个变量可以持有一个 "),a("code",[t._v("string")]),t._v("，而在下一个赋值语句中持有一个 "),a("code",[t._v("number")]),t._v("，如此类推。")]),t._v(" "),a("p",[a("em",[t._v("值")]),t._v(" "),a("code",[t._v("42")]),t._v(" 有固有的类型 "),a("code",[t._v("number")]),t._v("，而且它的 "),a("em",[t._v("类型")]),t._v(" 是不能被改变的。另一个值，比如 "),a("code",[t._v("string")]),t._v(" 类型的 "),a("code",[t._v('"42"')]),t._v("，可以通过一个称为 "),a("strong",[t._v("强制转换")]),t._v(" 的处理从 "),a("code",[t._v("number")]),t._v(" 类型的值 "),a("code",[t._v("42")]),t._v(" 中创建出来（见第四章）。")]),t._v(" "),a("p",[t._v("如果你对一个变量使用 "),a("code",[t._v("typeof")]),t._v("，它不会像表面上看起来那样询问“这个变量的类型是什么？”，因为 JS 变量是没有类型的。取而代之的是，它会询问“在这个变量里的值的类型是什么？”")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "number"')]),t._v("\n\na "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "boolean"')]),t._v("\n")])])]),a("p",[a("code",[t._v("typeof")]),t._v(" 操作符总是返回字符串。所以：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "string"')]),t._v("\n")])])]),a("p",[t._v("第一个 "),a("code",[t._v("typeof 42")]),t._v(" 返回 "),a("code",[t._v('"number"')]),t._v("，而 "),a("code",[t._v('typeof "number"')]),t._v(" 是 "),a("code",[t._v('"string"')]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"undefined-vs-undeclared"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#undefined-vs-undeclared"}},[t._v("#")]),t._v(" "),a("code",[t._v("undefined")]),t._v(' vs "undeclared"')]),t._v(" "),a("p",[a("em",[t._v("当前")]),t._v(" 还不拥有值的变量，实际上拥有 "),a("code",[t._v("undefined")]),t._v(" 值。对这样的变量调用 "),a("code",[t._v("typeof")]),t._v(" 将会返回 "),a("code",[t._v('"undefined"')]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "undefined"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 稍后")]),t._v("\nb "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "undefined"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "undefined"')]),t._v("\n")])])]),a("p",[t._v("大多数开发者考虑“undefined”这个词的方式会诱使他们认为它是“undeclared（未声明）”的同义词。然而在 JS 中，这两个概念十分不同。")]),t._v(" "),a("p",[t._v("一个“undefined”变量是在可访问的作用域中已经被声明过的，但是在 "),a("em",[t._v("这个时刻")]),t._v(" 它里面没有任何值。相比之下，一个“undeclared”变量是在可访问的作用域中还没有被正式声明的。")]),t._v(" "),a("p",[t._v("考虑这段代码：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\na"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// undefined")]),t._v("\nb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ReferenceError: b is not defined")]),t._v("\n")])])]),a("p",[t._v("一个恼人的困惑是浏览器给这种情形分配的错误消息。正如你所看到的，这个消息是“b is not defined”，这当然很容易而且很合理地使人将它与“b is undefined.”搞混。需要重申的是，“undefined”和“is not defined”是非常不同的东西。要是浏览器能告诉我们类似于“b is not found”或者“b is not declared”之类的东西就好了，那会减少这种困惑！")]),t._v(" "),a("p",[t._v("还有一种 "),a("code",[t._v("typeof")]),t._v(" 与未声明变量关联的特殊行为，进一步增强了这种困惑。考虑这段代码：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "undefined"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "undefined"')]),t._v("\n")])])]),a("p",[a("code",[t._v("typeof")]),t._v(" 操作符甚至为“undeclared”（或“not defined”）变量返回 "),a("code",[t._v('"undefined"')]),t._v("。要注意的是，当我们执行 "),a("code",[t._v("typeof b")]),t._v(" 时，即使 "),a("code",[t._v("b")]),t._v(" 是一个未声明变量，也不会有错误被抛出。这是 "),a("code",[t._v("typeof")]),t._v(" 的一种特殊的安全防卫行为。")]),t._v(" "),a("p",[t._v("和上面类似地，要是 "),a("code",[t._v("typeof")]),t._v(" 与未声明变量一起使用时返回“undeclared”就好了，而不是将其结果值与不同的“undefined”情况混为一谈。")]),t._v(" "),a("h3",{attrs:{id:"typeof-undeclared"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typeof-undeclared"}},[t._v("#")]),t._v(" "),a("code",[t._v("typeof")]),t._v(" Undeclared")]),t._v(" "),a("p",[t._v("不管怎样，当在浏览器中处理 JavaScript 时这种安全防卫是一种有用的特性，因为浏览器中多个脚本文件会将变量加载到共享的全局名称空间。")]),t._v(" "),a("p",[a("strong",[t._v("注意:")]),t._v(" 许多开发者相信，在全局名称空间中绝不应该有任何变量，而且所有东西应当被包含在模块和私有/隔离的名称空间中。这在理论上很伟大但在实践中几乎是不可能的；但它仍然是一个值得的努力方向！幸运的是，ES6 为模块加入了头等支持，这终于使这一理论变得可行的多了。")]),t._v(" "),a("p",[t._v("作为一个简单的例子，想象在你的程序中有一个“调试模式”，它是通过一个称为 "),a("code",[t._v("DEBUG")]),t._v(" 的全局变量（标志）来控制的。在实施类似于在控制台上输出一条日志消息这样的调试任务之前，你想要检查这个变量是否被声明了。一个顶层的全局 "),a("code",[t._v("var DEBUG = true")]),t._v(" 声明只包含在一个“debug.js”文件中，这个文件仅在你开发/测试时才被加载到浏览器中，而在生产环境中则不会。")]),t._v(" "),a("p",[t._v("然而，在你其他的程序代码中，你不得不小心你是如何检查这个全局的 "),a("code",[t._v("DEBUG")]),t._v(" 变量的，这样你才不会抛出一个 "),a("code",[t._v("ReferenceError")]),t._v("。这种情况下 "),a("code",[t._v("typeof")]),t._v(" 上的安全防卫就是我们的朋友。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 噢，这将抛出一个错误！")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DEBUG")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Debugging is starting"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这是一个安全的存在性检查")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DEBUG")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"undefined"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Debugging is starting"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("即便你不是在对付用户定义的变量（比如 "),a("code",[t._v("DEBUG")]),t._v("），这种检查也是很有用的。如果你为一个内建的 API 做特性检查，你也会发现不抛出错误的检查很有帮助：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" atob "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"undefined"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("atob")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*..*/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("注意：")]),t._v(" 如果你在为一个还不存在的特性定义一个“填补”，你可能想要避免使用 "),a("code",[t._v("var")]),t._v(" 来声明 "),a("code",[t._v("atob")]),t._v("。如果你在 "),a("code",[t._v("if")]),t._v(" 语句内部声明 "),a("code",[t._v("var atob")]),t._v("，即使这个 "),a("code",[t._v("if")]),t._v(" 条件没有通过（因为全局的 "),a("code",[t._v("atob")]),t._v(" 已经存在），这个声明也会被提升（参见本系列的 "),a("em",[t._v("作用域与闭包")]),t._v("）到作用域的顶端。在某些浏览器中，对一些特殊类型的内建全局变量（常被称为“宿主对象”），这种重复声明也许会抛出错误。忽略 "),a("code",[t._v("var")]),t._v(" 可以防止这种提升声明。")]),t._v(" "),a("p",[t._v("另一种不带有 "),a("code",[t._v("typeof")]),t._v(" 的安全防卫特性，而对全局变量进行这些检查的方法是，将所有的全局变量作为全局对象的属性来观察，在浏览器中这个全局对象基本上是 "),a("code",[t._v("window")]),t._v(" 对象。所以，上面的检查可以（十分安全地）这样做：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DEBUG")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ..")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("atob"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ..")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("和引用未声明变量不同的是，在你试着访问一个不存在的对象属性时（即便是在全局的 "),a("code",[t._v("window")]),t._v(" 对象上），不会有 "),a("code",[t._v("ReferenceError")]),t._v(" 被抛出。")]),t._v(" "),a("p",[t._v("另一方面，一些开发者偏好避免手动使用 "),a("code",[t._v("window")]),t._v(" 引用全局变量，特别是当你的代码需要运行在多种 JS 环境中时（例如不仅是在浏览器中，还在服务器端的 node.js 中），全局变量可能不总是称为 "),a("code",[t._v("window")]),t._v("。")]),t._v(" "),a("p",[t._v("技术上讲，这种 "),a("code",[t._v("typeof")]),t._v(" 上的安全防卫即使在你不使用全局变量时也很有用，虽然这些情况不那么常见，而且一些开发者也许发现这种设计方式不那么理想。想象一个你想要其他人复制-粘贴到他们程序中或模块中的工具函数，在它里面你想要检查包含它的程序是否已经定义了一个特定的变量（以便于你可以使用它）：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomethingCool")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" helper "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" FeatureXYZ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"undefined"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("FeatureXYZ")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*.. 默认的特性 ..*/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" val "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("helper")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ..")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("code",[t._v("doSomethingCool()")]),t._v(" 对称为 "),a("code",[t._v("FeatureXYZ")]),t._v(" 变量进行检查，如果找到，就使用它，如果没找到，使用它自己的。现在，如果某个人在他的模块/程序中引入了这个工具，它会安全地检查我们是否已经定义了 "),a("code",[t._v("FeatureXYZ")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 一个 IIFE（参见本系列的 *作用域与闭包* 中的“立即被调用的函数表达式”）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("FeatureXYZ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*.. my XYZ feature ..*/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 引入 `doSomethingCool(..)`")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomethingCool")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" helper "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" FeatureXYZ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"undefined"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("FeatureXYZ")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*.. 默认的特性 ..*/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" val "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("helper")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ..")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomethingCool")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("这里，"),a("code",[t._v("FeatureXYZ")]),t._v(" 根本不是一个全局变量，但我们仍然使用 "),a("code",[t._v("typeof")]),t._v(" 的安全防卫来使检查变得安全。而且重要的是，我们在这里 "),a("em",[t._v("没有")]),t._v(" 可以用于检查的对象（就像我们使用 "),a("code",[t._v("window.___")]),t._v(" 对全局变量做的那样），所以 "),a("code",[t._v("typeof")]),t._v(" 十分有帮助。")]),t._v(" "),a("p",[t._v("另一些开发者偏好一种称为“依赖注入”的设计模式，与 "),a("code",[t._v("doSomethingCool()")]),t._v(" 隐含地检查 "),a("code",[t._v("FeatureXYZ")]),t._v(" 是否在它外部/周围被定义过不同的是，它需要依赖明确地传递进来，就像这样：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomethingCool")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("FeatureXYZ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" helper "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" FeatureXYZ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*.. 默认的特性 ..*/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" val "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("helper")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ..")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("在设计这样的功能时有许多选择。这些模式里没有“正确”或“错误” -- 每种方式都有各种权衡。但总的来说，"),a("code",[t._v("typeof")]),t._v(" 的未声明安全防卫给了我们更多选项，这还是很不错的。")]),t._v(" "),a("h2",{attrs:{id:"复习"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#复习"}},[t._v("#")]),t._v(" 复习")]),t._v(" "),a("p",[t._v("JavaScript 有七种内建 "),a("em",[t._v("类型")]),t._v("："),a("code",[t._v("null")]),t._v("、"),a("code",[t._v("undefined")]),t._v("、"),a("code",[t._v("boolean")]),t._v("、"),a("code",[t._v("number")]),t._v("、"),a("code",[t._v("string")]),t._v("、"),a("code",[t._v("object")]),t._v("、"),a("code",[t._v("symbol")]),t._v("。它们可以被 "),a("code",[t._v("typeof")]),t._v(" 操作符识别。")]),t._v(" "),a("p",[t._v("变量没有类型，但是值有类型。这些类型定义了值的固有行为。")]),t._v(" "),a("p",[t._v("许多开发者会认为“undefined”和“undeclared”大体上是同一个东西，但是在 JavaScript 中，它们是十分不同的。"),a("code",[t._v("undefined")]),t._v(" 是一个可以由被声明的变量持有的值。“未声明”意味着一个变量从来没有被声明过。")]),t._v(" "),a("p",[t._v("JavaScript 很不幸地将这两个词在某种程度上混为了一谈，不仅体现在它的错误消息上（“ReferenceError: a is not defined”），也体现在 "),a("code",[t._v("typeof")]),t._v(" 的返回值上：对于两者它都返回 "),a("code",[t._v('"undefined"')]),t._v("。")]),t._v(" "),a("p",[t._v("然而，当对一个未声明的变量使用 "),a("code",[t._v("typeof")]),t._v(" 时，"),a("code",[t._v("typeof")]),t._v(" 上的安全防卫机制（防止一个错误）可以在特定的情况下非常有用。")])])}),[],!1,null,null,null);s.default=e.exports}}]);