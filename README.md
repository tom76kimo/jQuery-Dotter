jQuery-Dotter
=============

This is a light jQuery Plugin - 'Dotter'

Whatever the given font-size and how long the content is, make content words are not out of bounds and add '...' or other custom tail after the words. And this tool can also handle multi-lines block.

This provide a solution of handling text overflow with ellipsis without using CSS3.

Install
-------

``` bower install jquery-dotter ```

Usage
-----

give the target element 

```JavaScript
$(element).Dotter();
```

Options
-------

|name| default value  |description |
|----|----------------|------------|
|tail| '...'  | the tail follow after the text  |
| multiLine  | false  | set to true to handle with multi-lines  |
Example
------
Here is a div tag or another tag you want which wrapped a string '123@&;/abcdefghijklmnopqrstuvwxyz',
```html
<div>123@&;/abcdefghijklmnopqrstuvwxyz</div>
```
![](https://raw.github.com/tom76kimo/jQuery-Dotter/master/wiki/images/1.jpg)

 the div's css give the font-size and width you want:
```css
div {
	    width: 165px;
		font-size: 19px;
		background: red;
}
```
and you want the string to fit the wrapper and add '...' behind the string, you can just simply add

```JavaScript
$('div').Dotter();
```
to your code.

result will be like this:

![](https://raw.github.com/tom76kimo/jQuery-Dotter/master/wiki/images/2.jpg)

### With adding options
```{multiLine: true, tail: '...(read more)'}```

Will be like this(this example changed the text, don't mind.)
![](https://raw.github.com/tom76kimo/jQuery-Dotter/master/wiki/images/3.jpg)

License
-------

Licensed under the MIT License

