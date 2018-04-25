 require.config({
  baseUrl : "js",
  paths:{
  	"jquery" : ["http://libs.baidu.com/jquery/2.0.3/jquery"],
  	'ysh':'a' 
  }	
})
 require(['jquery','a'],function(){
	$(function(){
        alert("load finished");  
    })
});