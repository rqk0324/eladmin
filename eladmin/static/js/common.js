// 一、id名获取元素
function $(str) {
  if (str.charAt(0) == "#") {
    return document.getElementById(str.substring(1));
  } else if (str.charAt(0) == ".") {
    return document.getElementsByClassName(str.substring(1));
  } else {
    return document.getElementsByTagName(str);
  }
}


//二、获取dom的样式
function getStyle(dom, attr) {
  if (dom.currentStyle) {
    return dom.currentStyle[attr];
  } else {
    return window.getComputedStyle(dom)[attr];
  }
}

// 三、阻止浏览器的默认行为兼容
function mypreventDefault(aa) {
  if (aa.preventDefault) {
    aa.preventDefault();
  } else {
    aa.returnValue = false;
  }
}

// 四、DOM2事件的封装
function myaddEventListener(dom, event, func, bubble) {
  //dom事件源，event事件类型，func函数，bubble是否冒泡
  if (dom.addEventListener) {
    dom.addEventListener(event, func, bubble);
  } else if (dom.attachEvent) {
    dom.attachEvent('on' + event, func)
  } else {
    dom['on' + event] = func;
  }

}


//五、阻止事件的冒泡
function stopBubble(e) {
  //如果提供了事件对象，则这是一个非IE浏览器
  if (e && e.stopPropagation)
  //因此它支持W3C的stopPropagation()方法
    e.stopPropagation();
  else
  //否则，我们需要使用IE的方式来取消事件冒泡
    window.event.cancelBubble = true;
}

// 六、多属性运动
function sports(domObj, attrObj, time, func) {//attronj为jason{x:"2",y:"3"}
  let startObj = {}//time是总时长
  for (let i in attrObj) {
    startObj[i] = parseFloat(getStyle(domObj, i))
  }
  let direction = {}
  for (let i in attrObj) {
    direction[i] = startObj[i] - attrObj[i] > 0 ? -1 : 1
  }
  let timeSpace = 10
  let stepCount = time / timeSpace//求步数
  let stepObj = {}
  for (let i in attrObj) {
    stepObj[i] = Math.abs(startObj[i] - attrObj[i]) / stepCount
  }
  let valueObj = startObj
  let timer = setInterval(() => {
    for (let i in attrObj) {
      valueObj[i] = valueObj[i] + direction[i] * stepObj[i]
    }
    let turnOnoff = false;
    for (let i in attrObj) {
      if (Math.abs(valueObj[i] - attrObj[i]) < stepObj[i]) {
        valueObj[i] = attrObj[i]
        // window.clearInterval(timer)
        turnOnoff = true;
      }
    }
    if (turnOnoff) {
      window.clearInterval(timer)
      func && func();
    }
    for (let i in attrObj) {
      if (i == "opacity") {
        domObj.style[i] = valueObj[i]
      } else {
        domObj.style[i] = valueObj[i] + "px"
      }
    }
  }, timeSpace)
}

//七、随机颜色
function randomColor() {
  let str = "";
  for (var i = 0; i < 6; i++) {
    var c = parseInt(Math.random() * 16);
    str += c.toString(16);
  }
  return "#" + str
}

//八、瀑布流的类
class Pubu {
  constructor(obj) {
    this.dom = obj.dom;
    this.width = obj.width;
    this.imgNum = obj.num;
    this.appendImg();
    this.changeisOn();
    this.addEvent();
  }

  appendImg() {
    for (let i = 0; i < this.imgNum; i++) {
      let t = document.createElement("img");
      t.src = `img/${i + 1}.jpg`;
      t.style.cssText = `width:${this.width}px;
						position:absolute;`
      this.dom.appendChild(t)
    }
  }

  changeImg() {
    let clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
    let colNum = parseInt(clientWidth / this.width);
    let colSpace = (clientWidth % this.width) / (colNum + 1);
    var arr = [];//保存每列高度的数组
    for (let i = 0; i < colNum; i++) {
      arr.push(0);
    }
    let imgDoms = this.dom.getElementsByTagName('img');
    for (let i = 0; i < imgDoms.length; i++) {
      let colIndex = i % colNum;//列下表
      imgDoms[i].style.left = colIndex * 150 + colSpace * (colIndex + 1) + 'px';
      imgDoms[i].style.top = arr[colIndex] + 'px';
      arr[colIndex] += imgDoms[i].offsetHeight;
    }
  }

  changeisOn() {
    console.log("d")
    let imgDoms = this.dom.getElementsByTagName('img');
    let myTimer = setInterval(() => {
      if (imgDoms[imgDoms.length - 1].offsetHeight > 0) {
        window.clearInterval(myTimer);
        this.changeImg();
      }
    }, 100);
  }

  addEvent() {
    let obj = this;
    myaddEventListener(window, "resize", function () {
      obj.changeisOn();
    }, false);
  }
}

//九、Ajax的封装
function myAjax(obj) {
  let defaultObj = {
    url: "#",
    method: "get",
    key: "",
    isAsync: true,
  };
  let endObj = {};
  for (var i in defaultObj) {
    if (obj[i] == undefined) {
      endObj[i] = defaultObj[i]
    } else {
      endObj[i] = obj[i]
    }
  }
  ;//赋值
  let xhr = new XMLHttpRequest();
  let keywords = endObj.url;
  if (endObj.method.toLowerCase() == "get") {
    keywords += "?" + endObj.key;
  }
  xhr.open(endObj.method, keywords, endObj.isAsync);
  let p = new Promise(function (resolve, reject) {
    //3、设置回调函数
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          resolve && resolve(xhr.responseText);
        } else {
          reject && reject(xhr.statusText);
        }
      }
    }
  });
  //send
  if (endObj.method.toLowerCase() == "post") {
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(endObj.key);
  } else {
    xhr.send();
  }
  return p;
}

//十。轮播图切换效果
function fadeInOut(domInObj, domOutObj, timeLong, func) {
  let timeSpace = 10;//时间间隔 = 总时间/步子数
  let stepCount = timeLong / timeSpace; //步子数 = 总时间/时间间隔
  let step = 1 / stepCount;//步长 = 路程/步子数
  let currOpacity = 0;
  let myTimer = setInterval(() => {
    currOpacity += step;
    if (currOpacity >= 1) {
      currOpacity = 1;
      clearInterval(myTimer);
      func && func();
    }
    domInObj.style.opacity = currOpacity;
    domOutObj.style.opacity = 1 - currOpacity;
  }, timeSpace);
}

function slideInOut(domInObj, domOutObj, timeLong, func) {
  let timeSpace = 10;//时间间隔 = 总时间/步子数
  let stepCount = timeLong / timeSpace; //步子数 = 总时间/时间间隔
  let step = domInObj.offsetWidth / stepCount;//步长 = 路程/步子数
  let currLeft = 0;
  let myTimer = setInterval(() => {
    currLeft -= step;
    if (currLeft <= -1 * domInObj.offsetWidth) {
      currLeft = -1 * domInObj.offsetWidth;
      clearInterval(myTimer);
      func && func();
    }
    domInObj.style.left = (currLeft + domInObj.offsetWidth) + "px";
    domOutObj.style.left = currLeft + "px";
  }, timeSpace);
}

//十一、进入全屏
function enterFullScreen() {
  let de = document.documentElement;
  if (de.requestFullscreen) {
    de.requestFullscreen();
  } else if (de.mozRequestFullScreen) {
    de.mozRequestFullScreen();
  } else if (de.webkitRequestFullScreen) {
    de.webkitRequestFullScreen();
  }
}

//十二、退出全屏
function exitFullScreen() {
  let de = document;
  if (de.exitFullscreen) {
    de.exitFullscreen();
  } else if (de.mozCancelFullScreen) {
    de.mozCancelFullScreen();
  } else if (de.webkitCancelFullScreen) {
    de.webkitCancelFullScreen();
  }
}
