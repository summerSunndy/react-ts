var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var width = canvas.width, height = canvas.height;
// 动画执行的帧数
var start = 0, frames = 200;
// 过渡颜色 蓝色 到 红色
// var from = [0, 0, 255];
// var to = [255, 0, 0];
var from = toRGBA('deepskyblue');
var to = toRGBA('deeppink');

// 动画算法，这里使用Cubic.easeOut算法
var cubicEaseOut = function(t, b, c, d) {
    return c * ((t = t/d - 1) * t * t + 1) + b;
};
// 绘制方法
var draw = function () {
    context.clearRect(0, 0, width, height);
    // 计算此时r, g, b数值
    var r = cubicEaseOut(start, from[0], to[0] - from[0], frames);
    var g = cubicEaseOut(start, from[1], to[1] - from[1], frames);
    var b = cubicEaseOut(start, from[2], to[2] - from[2], frames);
    var a = cubicEaseOut(start, from[3], to[3] - from[3], frames);
    // 可以确定色值
    context.fillStyle = 'rgb('+ [r, g, b, a].join() +')';
    // 用css3实现控制每个颜色变换的时间间隔
    // context.fillStyle = window.getComputedStyle(eleShape).backgroundColor;
    context.arc(width / 2, height / 2, height / 2, 0, 2 * Math.PI);
    context.fill();
    // 持续变化
    start++;
    if (start <= frames) {
        requestAnimationFrame(draw);
    }
};
draw();
// 颜色单位转换---window.getComputedStyle(div).color

var toRGBA = function (color) {
  // 创建div元素并设置颜色
  var div = document.createElement('div');
  div.style.color = color;
  document.body.appendChild(div);
  // 返回计算后的颜色值
  var cssColor = window.getComputedStyle(div).color;
  // div元素移除
  document.body.removeChild(div);
  // 如果是RGB颜色，则转换成RGBA表示
  var arrRGBA = cssColor.match(/\d+/g);
  if (arrRGBA.length == 3) {
      arrRGBA.push(1);
  }
  // 每一项转换成数值类型
  return arrRGBA.map(function (value) {
      return value * 1;
  });
};
