window.addEventListener('load', function(){
	document.getElementById('buscar').addEventListener('keyup', function(){
		fetch('/welcome/buscador?buscar=${document.getElementById("texto").value}',{
			method:'get'
		})
		.then(response => response.text() )
		.then(html => {
			document.getElementById('content-table').innerHTML += html
		})
		.catch(error => console.log(error))
	})
})