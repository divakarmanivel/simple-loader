var simpleloader = function () {

    // initialize the loader
    function init(type) {
        var loaderwrapper = document.createElement("div");
        loaderwrapper.id = "simple-loader-wrapper";

        var loader = document.createElement("div");
        loader.id = "simple-loader";
        loader.className = getType(type);
        loaderwrapper.appendChild(loader);

        document.body.appendChild(loaderwrapper);
    }

    // get the loader type
    function getType(type) {
        if (type === "" || type === undefined || type === null) {
            return "spinner";
        } else if (type !== "spinner") {
            return "spinner";
        } else {
            return type;
        }
    }

    // set the loader type
    function setType(type) {
        document.getElementById("simple-loader").className = getType(type);
    }

    // show the spinner
    function show() {
        document.getElementById("simple-loader-wrapper").setAttribute("style", "display: block;");
    }

    // hide the spinner
    function hide() {
        document.getElementById("simple-loader-wrapper").setAttribute("style", "display: none;");
    }

    // reveal all things private by assigning public pointers
    return {
        init: init,
        show: show,
        hide: hide,
        type: setType
    };
}();
simpleloader.init();