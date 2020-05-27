import indexCss from "./public/css/index.css"
import imgSrc from "./public/images/7.jpg"
let pp = document.createElement('p')
pp.innerHTML = '我不喜欢你'
document.getElementById('root').appendChild(pp)

let myFunc = ()=>{
    console.log('嘿嘿')
}
myFunc()

let imgNode = new Image()
imgNode.src = imgSrc
document.getElementById('root').appendChild(imgNode)