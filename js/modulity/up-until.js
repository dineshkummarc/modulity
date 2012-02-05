define(function() {
	
return function(element, nodeName) {
	
	while(element = element.parentNode) if(element.nodeName.toLowerCase() === nodeName) return element;
}
	
});