jQuery-Dotter
=============

This is a jQuery Plugin - 'Dotter'

Whatever the given font-size and how long the content is, make content words are not out of bounds and add '...' after the words.

This provide a solution of handling text overflow with ellipsis without using CSS3.

Usage
-----

give the target element 

```JavaScript
$(element).Dotter();
```


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



License
-------

Licensed under the MIT License

