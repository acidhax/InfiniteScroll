(function (scope) {
    var entered = false;
    var _callback;
    var scrollbarCallback = function() {
        var docH = $(document).height();
        var winH = $(window).height();
        var middle = (docH - winH);
        var tolerance = 200;
        var isWithin = $(window).scrollTop() >= middle-tolerance && $(window).scrollTop() <= middle+tolerance;

        if (!entered && isWithin)
        {
            entered = true;
            if (_callback) {
                _callback();
            }
        }
        else if (!isWithin) 
        {
            entered = false;
        }
        return true;
    }
    scope.scrollNotifier = function (callback) {
        _callback = callback;
        $(window).scroll(scrollbarCallback);
    };
})(window);