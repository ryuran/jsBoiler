(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define([], factory);
    } else if (typeof exports === 'object') {
        // Node, CommonJS-like
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.returnExports = factory();
    }
}(this, function () {

  return (function (window, document, exportName) {

    var defaultOptions = {};

    // Utils functions
    //
    // sample:
    //
    // function isFunction(f) {
    //   return f && Object.prototype.toString.call(f) === '[object Function]';
    // }

    // @contructor
    function MODULE(opt) {
      // merge options
    }

    MODULE.prototype.init = function init() {};

    return MODULE;

  })(window, document, 'MODULE');
}));
