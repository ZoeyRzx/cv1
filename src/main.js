let html = document.querySelector("#html"); //通过css选择器找到html这个元素
let style = document.querySelector('#style')
let string = `
/*你好，我叫快乐肥宅馨
 * 接下来我来演示一下我的前端功底
 * 首先我要准备一个div
 **/
#div1{
    border:1px solid red;
    width:200px;
    height:200px;
}
/* 接下来我把div变成一个八卦图
 * 首先，把div变成一个圆
 **/
#div1 {
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/* 八卦是阴阳形成的
 * 一黑一白
 **/
#div1{
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 加两个乾坤圈 */
#div1::before{
    width:100px;
    height:100px;
    top:0;
    left:50%;
    transform:translateX(-50%);
    background:#000;
    border-radius:50%;
    background: rgb(255,255,255);
background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background:#fff;
    border-radius:50%;
    background: rgb(0,0,0);
background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`;

console.log(string.length);
let string2 = '';
let n = 0;

let step = () => {
    setTimeout(() => {
        //如果是回车就不照搬
        //如果不是回车就照搬
        if (string[n] === "\n") {
            string2 += "<br>";
        } else if (string[n] === " ") {
            string2 += "&nbsp";
        } else {
            string2 += string[n]
        };

        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n)
        window.scrollTo(0, 99999)
        html.scrollTo(0, 99999)
        if (n < string.length - 1) {
            //n不是最后一个，就继续
            n += 1
            step();
        } else {
            //n是最后一个
        }
    }, 50)
}; //描述每一秒做什么

step()

