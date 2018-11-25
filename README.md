# Simple Loader

Create fantastic loading screens using minimal effort.

# Setup

Copy all files from dist/js and dist/css to your applications folder.
Add this line in the head tag of index.html as:

```html
    <head>
    ..
    <!-- Simple Loader CSS -->
    <link rel="stylesheet" type="text/css" href="./css/simple-loader.css" />
    ..
    </head>
```
Add this line before closing body tag of index.html as:

```html
    <body>
    ..
    <!-- Simple Loader JS -->
    <script src="./js/simple-loader.js" type="text/javascript"></script>
    </body>
```

# Usage

To show the loader add this line in your js file:

```javascript
    simpleloader.show();
```
  
To hide the loader add this line in your js file:

```javascript
    simpleloader.hide();
```
    
For example, to show a loader in an XML request:

```javascript
    function getRequest(url){
      simpleloader.show();
      var request = new XMLHttpRequest();
      request.open("GET", url, true);
      request.send();
      request.onreadystatechange = function () {
        if (request.readyState == XMLHttpRequest.DONE) {
          simpleloader.hide();
          if (request.status == 200) {
            alert("Success");
          } else {
            alert("Error");
          }
        }
      };
    }
```

To set the loader type add this line in your js file:

```javascript
    simpleloader.type = "spinner";
```

The default type if no type is specified is "spinner". Currently available types are:
- spinner
- bounceball
- ripple
- square-wave
  
More loader types will be added soon!

# Contribution

I welcome pull requests from all! Thanks in advance! Visit our [Contributions](CONTRIBUTING.md) page for more information.

# Code of Conduct

Visit our [Code of Conduct](CODE_OF_CONDUCT.md) page for an overview on our ground rules.

 # License

Created and Maintained by Divakar Manivel. Licensed under [MIT](LICENSE).
