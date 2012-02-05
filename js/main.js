require.config({
	packages: ['modulity'],
});


require(['modulity/is-descendant', 'modulity/select-element-text', 'modulity/string-to-fragment', 'modulity/up-until'], function(isDescendant, selectElementText, stringToFragment, upUntil) {
	
	// string to fragment
	document.body.appendChild(stringToFragment('<div class="hello world"><p>Hi there<strong>!</strong></p><p>This text should be selected.</p></div>'));
	
	// select element text
	selectElementText(document.querySelector('p:last-of-type'));
	
	// up until
	console.log(upUntil(document.querySelector('strong'), 'div'));
	
	// is descendant
	console.log(isDescendant(document.querySelector('div'), document.querySelector('strong')));
});