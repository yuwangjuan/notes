(function(window,undefined){
    function jquery(selector){
        return new jquery.fn.init(selector);
    }
    // 利用对象的引用类型特点
    jquery.fn.init.prototype = jquery.fn;
    jquery.fn =jquery.prototype={

    }
    $.extend({a:1})
    $.extend({a:1},{b:2})//{a:1,b:2}
    jquery.extend = function(){
        var target = this.arguments[0] ||{};
        var length = arguments.length;
        var i = 1;
        var options;
        if(length==1){
            target = this;
            i--;
        }
        options =arguments[i]
        for(var name in options){
            target[name] = options[name]
        }
        }
   
    jquery.extend({})
    window.$ = window.jquery= jquery;
})(window);
//javascript是怎么查找变量的