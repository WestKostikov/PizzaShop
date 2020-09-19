function something()
{

	var x = window.localStorage.getItem('score'); // это как x = hh['score'] в ruby

	// x * 1 - чтобы преобразовать строку в число
	x = x * 1 + 1;

	window.localStorage.setItem('score', x); // hh['score'] = x

  	alert(x);
  
}

function add_to_cart(id)
{
	var key = 'product_' + id;

	var x = window.localStorage.getItem(key);
	x = x * 1 + 1;
	window.localStorage.setItem(key, x);
}
