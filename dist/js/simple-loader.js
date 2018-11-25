NodeList.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
HTMLCollection.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];

var simpleloader = (function() {
  var loaderwrapper;

  // initialize the loader
  function init(type) {
    loaderwrapper = document.createElement("div");
    loaderwrapper.id = "simple-loader-wrapper";
    loaderwrapper.classList.add("simple-loader-wrapper");

    setType(type);

    document.body.appendChild(loaderwrapper);
    return loaderwrapper;
  }

  // get the loader type
  function getType(type) {
    if (type === "" || type === undefined || type === null) {
      return "spinner";
    } else if (
      type !== "spinner" &&
      type !== "bounceball" &&
      type !== "ripple" &&
      type != "square-wave"
    ) {
      return "spinner";
    } else {
      return type;
    }
  }

  // set the loader type
  function setType(type) {
    var elements = document.getElementsByClassName("simple-loader");
    if (elements.length > 0) {
      for (let element of elements) {
        element.remove();
      }
    }
    if (getType(type) == "ripple") {
      for (var i = 0; i < 5; i++) {
        var loader = document.createElement("div");
        loader.classList.add("simple-loader");
        loader.classList.add(getType(type));
        loader.style.left = "calc(50% + " + (2.5 - 2.5 * i) + "em)";
        loader.style.setProperty("--i", i);
        loaderwrapper.appendChild(loader);
      }
    } else if (getType(type) == "square-wave") {
      var loader = document.createElement("div");
      loader.classList.add("simple-loader");
      loader.classList.add(getType(type));
      loaderwrapper.appendChild(loader);
      for (var i = 0; i < 9; i++) {
        var square = document.createElement("div");
        loader.appendChild(square);
      }
    } else {
      var loader = document.createElement("div");
      loader.classList.add("simple-loader");
      loader.classList.add(getType(type));
      loaderwrapper.appendChild(loader);
    }
  }

  // set the width of loader
  function setWidth(width) {
    loaderwrapper.style.width = width;
  }

  // set the height of loader
  function setHeight(height) {
    loaderwrapper.style.height = height;
  }

  // attach loader to element
  function appendToId(element) {
    if (loaderwrapper !== null) {
      document.getElementById(element).appendChild(loaderwrapper);
    }
  }

  // attach loader to class
  function appendToClass(className, loader) {
    var elements = document.getElementsByClassName(className);
    if (elements.length > 0) {
      let count = 0;
      for (let element of elements) {
        var clone = loader.cloneNode(true);
        clone.id = "simple-loader-wrapper" + count;
        element.appendChild(clone);
        count++;
      }
      loader.remove();
    }
  }

  // show the loader
  function show() {
    loaderwrapper.setAttribute("style", "display: block;");
  }

  // hide the loader
  function hide() {
    loaderwrapper.setAttribute("style", "display: none;");
  }

  // reveal all things private by assigning public pointers
  return {
    init: init,
    show: show,
    hide: hide,
    type: setType
    // width: setWidth,
    // height: setHeight,
    // appendToId: appendToId
  };
})();

simpleloader.init("bounceball");
simpleloader.show();
