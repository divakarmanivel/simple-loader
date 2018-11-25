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

  The default type is spinner if no type is specified. More loader types will be added soon!



 # License

Created and Maintained by Divakar Manivel. Licensed under [MIT](LICENSE).
