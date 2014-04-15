Angular-Parse
===

Angular-Parse is a set of services for using Parse query and objects saving inside angular lifecycle using `promises` and without the hassle of using `$scope.$apply`

# Installing

via [npm](https://npmjs.org/)

```Shell
$ npm install angularparse
```

via [Bower](http://bower.io/)

```Shell
$ bower install angularparse
```

# Demo

Check this [plnkr demo](http://plnkr.co/edit/4gPGZJ) for a working example

# Quick Start

## Services

- `parseQuery`: Used to build [`Parse.Query`](https://parse.com/docs/js_guide#queries) objects
- `parsePersistence`: Used to persist/save/destroy [`Parse.Objects`](https://parse.com/docs/js_guide#objects-classes) back to Parse servers


### `parseQuery`

- Creating a `Parse.Query` object

A `Parse.Query` object can be created using the common Parse way

```
var TestObject = Parse.Object.extend("TestObject");
var query = new Parse.Query(TestObject);
```

which is useful if you are using `TestObject` in more than one place. But `angular-parse` has the following shortcut:

```
var query = parseQuery.new('TestObject');
```

- Executing a simple Query

```
parseQuery.find(query).then(function(results) {
  // do something with the query execution results
}, function(error) {
  // do something with the returning error
});
```

- More Options

The `parseQuery.query(query, options, fnc)` method:

`query`: the `Parse.Query` object that will be executed

`options`: the options parameter when [executing a `Parse.Query`](https://parse.com/docs/js_guide#queries-basic). Default value: `{}`

`fnc`: The query funcion being executed, for example: `find` or [`count`](https://parse.com/docs/js_guide#queries-counting). Default value: `'find'`


Also, `parseQuery` has some auxiliary methods acting as shortcuts for `parseQuery.query`: `find`, `count` and `total`


### `parsePersistence`

- Creating a `Parse.Object`

Similiar to the `parseQuery` service, A `Parse.Object` object can be created using the common Parse way

```
var TestObject = Parse.Object.extend("TestObject");
var myObject = new TestObject();
```

And `angular-parse` has the following shortcut:

```
var myObject = parsePersistence.new('TestObject');
```

- Saving Data

```
parsePersistence.save(myObject, {foo: "bar promise"}).then(function(object) {
  // do something with the returning object
}, function(error) {
  // do something with the returning error
});
```

- More Options

The `parsePersistence.persist(obj, data, fnc)` method:

`obj`: the `Parse.Object` object being used

`data`: the optional data parameter when [saving the object](https://parse.com/docs/js_guide#objects-saving)

`fnc`: The object funcion being executed, for example: `save` or [`destroy`](https://parse.com/docs/js_guide#objects-deleting).


Also, `parsePersistence` has some auxiliary methods acting as shortcuts for `parseQuery.persist`: `save` and `destroy`.

## Developers

configure:

```Shell
$ npm install
```

compile:

```Shell
$ grunt build
```


# Authors

**Felipe Sabino**

+ http://twitter.com/felipesabino
+ http://github.com/felipesabino


# Changelog

- 0.2.0

  - Fixed `get` method missing at compiled JS

- 0.1.0

  - Initial Release

# Copyright and license

	The MIT License

	Copyright (c) 2012 Olivier Louvignes

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
