Angular-dev-logger
====
Angular ver1.0 logger module.
window.console control using $devLoggerProvider module.

version
----
0.1.0

install
----

#### npm install
You can install using npm

```bash
npm install angular-dev-logger --save-dev
yarn install angular-dev-logger --dev
```

#### donwload source

#### import script source(HTML)

```html
<script src="path/to/angular-dev-logger.js"></script>
```

#### using common js
```js
require('angular-dev-logger');
```

usage
----

#### add dependecy on angular app
If you import source and using common js, add angular-dev-logger dependency on your angular app.

```js
require('angular-dev-logger');

angular.module('myApp', [
  'angular-dev-logger'
]);
```

#### DebugMode

If you handle debugmode using angular-dev-logger, use angular config module.

```js
angular.module('myApp').config(function ($devLoggerProvider) {
});
```
If you $devLoggerProvider is true, you can use window.console function.

```js
angular.module('myApp').config(function ($devLoggerProvider) {
  $devLoggerProvider.debugMode(true);
});

//controller.js
angular.module('myApp').controller('myController', function () {
  console.log('logger log'); //logger log
  console.error('logger error'); //logger error
  console.info('logger info'); //logger info
});
```

If you $devLoggerProvider is true, window.console function is not operate.

```js
//config js
angular.module('myApp').config(function ($devLoggerProvider) {
  $devLoggerProvider.debugMode(false);
});

//controller.js
angular.module('myApp').controller('myController', function () {
  console.log('logger log'); //not operate
  console.error('logger error'); //not operate
  console.info('logger info'); //not operate
});
```

# License
MIT © [KernYoo](http://trustyoo86.github.io)
