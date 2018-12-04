NodeList.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
HTMLCollection.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];

var simpleloader = (function() {
  var loaderwrapper;
  var loaderType;
  var loaderBackground = "#222";
  var loaderForeground = "#F44336";

  // initialize the loader
  function init(type) {
    loaderwrapper = document.createElement("div");
    loaderwrapper.id = "simple-loader-wrapper";
    loaderwrapper.classList.add("simple-loader-wrapper");
    document.body.appendChild(loaderwrapper);

    setType(type);
  }

  // get the loader type
  function getType(type) {
    if (type === "" || type === undefined || type === null) {
      return "spinner";
    } else if (
      type !== "spinner" &&
      type !== "bounceball" &&
      type !== "ripple" &&
      type != "square-wave" &&
      type != "twin-spinner"
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

    loaderType = getType(type);

    if (loaderType == "ripple") {
      var ripplewrapper = document.createElement("div");
      ripplewrapper.classList.add("simple-loader");
      ripplewrapper.classList.add("ripple-wrapper");
      for (var i = 0; i < 3; i++) {
        var ripple = document.createElement("div");
        ripple.classList.add(loaderType);
        ripple.style.left = "calc(50% + " + (2.5 - 2.5 * i) + "em)";
        ripple.style.setProperty("--i", i);
        ripplewrapper.appendChild(ripple);
      }
      loaderwrapper.appendChild(ripplewrapper);
    } else if (loaderType == "square-wave") {
      var squarewrapper = document.createElement("div");
      squarewrapper.classList.add("simple-loader");
      squarewrapper.classList.add(loaderType);
      loaderwrapper.appendChild(squarewrapper);
      for (var i = 0; i < 9; i++) {
        var square = document.createElement("div");
        square.classList.add("square");
        squarewrapper.appendChild(square);
      }
    } else if (loaderType == "twin-spinner") {
      var twinspinnerwrapper = document.createElement("div");
      twinspinnerwrapper.classList.add("simple-loader");
      var twinspinner = document.createElement("div");
      twinspinner.classList.add("twin-spinner");
      var loaderInner = document.createElement("div");
      loaderInner.classList.add("twin-spinner-inner");
      loaderInner.id = "twin-spinner-inner";
      var loaderOuter = document.createElement("div");
      loaderOuter.classList.add("twin-spinner-outer");
      loaderOuter.id = "twin-spinner-outer";
      twinspinner.appendChild(loaderOuter);
      twinspinner.appendChild(loaderInner);
      twinspinnerwrapper.appendChild(twinspinner);
      loaderwrapper.appendChild(twinspinnerwrapper);
    } else if (loaderType == "bounceball") {
      var bounceballwrapper = document.createElement("div");
      bounceballwrapper.classList.add("simple-loader");
      loaderwrapper.appendChild(bounceballwrapper);
      var bounceball = document.createElement("div");
      bounceball.classList.add("bounceball");
      bounceball.id = "bounceball";
      bounceballwrapper.appendChild(bounceball);
    } else {
      var loader = document.createElement("div");
      loader.classList.add("simple-loader");
      loader.classList.add(loaderType);
      loaderwrapper.appendChild(loader);
    }
    setBackground(loaderBackground);
    setForeground(loaderForeground);
  }

  // set the background of loader
  function setBackground(color) {
    if (/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(color)) {
      loaderwrapper.style.background = color;
      loaderBackground = color;
    } else if (color == undefined) {
      loaderwrapper.style.background = loaderBackground;
    }
  }

  // set the foreground of loader
  function setForeground(color) {
    if (/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(color)) {
      if (loaderType == "bounceball") {
        var bounceballloader = document.getElementById("bounceball");
        bounceballloader.style.backgroundColor = color;
      } else if (loaderType == "ripple") {
        var rippleloader = document.getElementsByClassName("ripple");
        for (var i = 0; i < 3; i++) {
          rippleloader[i].style.borderColor = color;
        }
      } else if (loaderType == "square-wave") {
        var squareloader = document.getElementsByClassName("square");
        for (var i = 0; i < 9; i++) {
          squareloader[i].style.backgroundColor = color;
        }
      } else if (loaderType == "twin-spinner") {
        var loaderInner = document.getElementById("twin-spinner-inner");
        loaderInner.style.borderColor = color;
        var loaderOuter = document.getElementById("twin-spinner-outer");
        loaderOuter.style.borderColor = color;
      } else {
        var loader = document.getElementsByClassName("simple-loader")[0];
        loader.style.borderColor = color;
      }
      loaderForeground = color;
    } else if (color == undefined) {
      setForeground(loaderForeground);
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
    type: setType,
    background: setBackground,
    foreground: setForeground
    // width: setWidth,
    // height: setHeight,
    // appendToId: appendToId
  };
})();

simpleloader.init();
simpleloader.show();
