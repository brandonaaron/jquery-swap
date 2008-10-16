/*! Copyright (c) 2008 Brandon Aaron (brandon.aaron@gmail.com || http://brandonaaron.net)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) 
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 */

/**
 * Swaps out one element with another. It can take either a DOM element, 
 * a selector or a jQuery object. It only swaps the first matched element.
 */
jQuery.fn.swap = function(b) {
	b = jQuery(b)[0];
	var a = this[0],
	    a2 = a.cloneNode(true),
	    b2 = b.cloneNode(true),
	    stack = this;
	
	a.parentNode.replaceChild(b2, a);
	b.parentNode.replaceChild(a2, b);
	
	stack[0] = a2;
	return this.pushStack( stack );
};