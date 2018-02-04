# popup
simple style popup
# SIMPLE POPUP

使用前你需要自己包含jq库，同时我已在该文件中提供了一个jq链接。除此之外，你也可以使用链接包含该js文件

链接为：http://www.funnywtx.xin/pub/Popup.js

## API
#### create object
```
var pop=new Popup();
```

#### alert
```
函数
function alert(text=’’,[callback])
---------------说明------------
Text是你的提示信息，callback是回调函数，接收一个参数，ok返回true，关闭返回false
---------------样例------------
pop.alert(“你好”,function(e){alert(“e”);})
```
#### confirm
```
函数
function confirm(text=’’,[callback])
---------------说明------------
Text是你的提示信息，callback是回调函数，接收一个参数，ok返回true，关闭或者cancel返回false
---------------样例------------
pop.confirm(“你好”,function(e){alert(“e”);})
```
#### prompt
```
函数
function prompt(text=‘’,placeholder=‘请在该处输入’, [func] )

---------------说明------------
Text是你的提示信息，placeholder是输入框的placeholder，callback是回调函数，接收一个参数，ok返回输入内容，关闭返回false
---------------样例------------
pop.prompt(“你好”,”请输入内容”function(e){alert(e);})
```
#### password
```
函数
function password(text=‘’,placeholder=‘请输入密码’, [func] )

---------------说明------------
Text是你的提示信息，placeholder是输入框的placeholder，callback是回调函数，接收一个参数，ok返回输入内容，关闭返回false
---------------样例------------
pop.password(“你好”,”请输入内容”function(e){alert(e);})
```
##说明
如果需要连用请在callback中调用相关函数。
##样例
```
prompt
 
```

```
confirm
 
```
```
alert
 
```
··```
Password
 
```
