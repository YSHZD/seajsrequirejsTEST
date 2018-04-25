简介：一个web模块加载框架，追求简单，自然的代码书写和组织方式 遵循CMD 规范，模块化js代码。依赖的自动加载，配置的简洁清晰


优点： 提高可维护性  模块化编程    动态加载 性能优化

缺点：不太适合多js文件但少改动 动态加载优势和模块化优势不明显   

AMD 异步模块定义 requirejs
CMD  通用模块定义  seajs   keep it simple stupid

<!-- 
define！它的作用是，定义一个js模块，供其他模块或者require使用。
它引用其他js的模块的方法和require差不多，都是将需要的js文件引入，然后参数一一对应。
大家需要要注意的是，define里定义的方法或者变量，其他模块是访问不到的，
所以，你如果想其他模块也能访问，就应该返回(return)对象或者函数都可以。
在这里，我return的是一个对象，提供init供其他模块调用。 
-->

// CMD
define(function(require, exports, module) {
    var a = require('./a')
    a.doSomething()
    // 此处略去 100 行
    var b = require('./b') // 依赖可以就近书写
    b.doSomething()
    // ...
})

// AMD 默认推荐的是
define(['./a', './b'], function(a, b) { // 依赖必须一开始就写好
    a.doSomething()
    // 此处略去 100 行
    b.doSomething()
    // ...
})

requirejs :

requirejs.config ({ base:'' , paths:{},  deps:{}, urlArgs:'' })
urlArgs 
RequireJS获取资源时附加在URL后面的额外的query参数。作为浏览器或服务器未正确配置时的“cache bust”手段很有用。使用cache bust配置的一个示例： 
javascript:;urlArgs: “bust=” + (new Date()).getTime() 
在开发中这很有用，但请记得在部署到生成环境之前移除它。

scriptType 
指定RequireJS将script标签插入document时所用的type=”“值。默认为“text/javascript”。想要启用Firefox的JavaScript 1.8特性，可使用值“text/javascript;version=1.8”。

waitSeconds 
通过该参数可以设置requireJS在加载脚本时的超时时间，它的默认值是7，即如果一个脚本文件加载时长超过7秒钟，便会放弃等待该脚本文件，从而报出timeout超时的错误信息，考虑到国内网络环境不稳定的因素，所以这里我建议设置为0。当然一般不需要去改动它，除非到了你需要的时候。

deps 
用于声明require.js在加载完成时便会自动加载的模块，值是一个数组，数组元素便是模块名。

callback 
当deps中的自动加载模块加载完毕时，触发的回调函数



define('模块名',  [依赖模块名],  function(模块1, 模块2...) { })

依次加载require的模块，然后监测script的onload事件，判断所有模块加载成功，执行require的callback， 如果只带一个参数且不是数组，就是加载成功后return 模块

优点： 防止js加载阻塞页面渲染   简洁清晰

定义
a.js

   define(funciton(){

   })

综合处理

main.js

   require.config({
     paths: {
     	name:url,
     	'a':'a'
     }
   })
   require([name,"a"],function(){

   })

使用 调用综合处理文件即可

<script data-main="js/main" src="js/require.js"></script>


sea.js

定义模块

seajs.config ({ base:'' , paths:{},  alias:{},})

seajs.use ([模块名]) 

definef (function(require, exports, module){ .... })

require  ([模块名]) 

require.async ([模块名]) 

require方法的加载方式是提前并行加载，并不是同步加载，看似同步，但还会往下执行，它不会因为一个文件而阻塞其他文件的加载。require.async方法的加载方式是异步按需加载，异步回调执行

require的文件在代码分析期加载，require. async的文件在代码执行期加载。

require的文件预加载完成但不执行，require. async的文件加载完后立即执行

在seajs里，require没有回调函数，只能通过变量赋值，require.async可以将返回值作为一个参数放到回调函数中使用。


exports     对外暴露的函数，为module.exports的引用

module.exports



define(function(require,exports,module){
	 var $ = require('jq') //获取模块 => 调用模块
	 异步加载模块 或者多个模块 [url,url]
	 require.asyn(url,function(){

	 })
	 <!-- return $; -->
	 对外提供接口
	 exports.name = xxx
	 module.exports = {
	    name : ''
	 }
})

seajs.config({ 
    base:'',
    paths:{//设置路径
 
   },
	alias:{//设置别名
	    name:url
    }
});
paths 和 alias 的设置仅仅相当于一个变量，在哪里使用，就在那里替换为设定的值，然后再解析

使用：

<script src="sea.js"></script>
<script>
加载一个 加载完成后执行回调
seajs.use(url,function(){
	
})
或者 加载多个 加载完成后进行回调

seajs.use([url],function(){
	
})
</script>
