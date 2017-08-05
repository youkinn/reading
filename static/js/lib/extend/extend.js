; (function (name, definition) {

  // 检测上下文环境是否为AMD或CMD
  var hasDefine = typeof define === 'function';

  // 检测上下文环境是否为Node
  var hasExports = window.module && typeof window.module === 'object' && window.module.exports;

  if (hasDefine) {  // AMD环境或CMD环境
    define(definition);
  } else if (hasExports) {  // 定义为普通Node模块
    module.exports = definition();
  } else {
    // 将模块的执行结果挂在window变量中，在浏览器中this指向window对象
    this[name] = definition();
  }

})('extend', function () {

  /**
   * 类式继承
   * 
   * @param {any} subClass 子类
   * @param {any} superClass 父类
   */
  function extend(subClass, superClass) {
    var F = function () { };
    F.prototype = superClass.prototype;
    subClass.prototype = new F();
    subClass.prototype.constructor = subClass;

    subClass.superclass = superClass.prototype;
    if (superClass.prototype.constructor == Object.prototype.constructor) {
      superClass.prototype.constructor = superClass;
    }
  }
  return extend;
});