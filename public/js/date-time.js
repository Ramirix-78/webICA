(function(){
	var actualizarHora = function(){
		// Obtenemos la fecha actual, incluyendo dia de la semana, dia del mes y mes;
		var fecha = new Date(),
			diaSemana = fecha.getDay(),
			dia = fecha.getDate(),
			mes = fecha.getMonth();

		// Accedemos a los elementos del DOM para agregar mas adelante sus correspondientes valores
		var pDiaSemana = document.getElementById('diaSemana'),
			pDia = document.getElementById('dia'),
			pMes = document.getElementById('mes');

		
		// Obtenemos el dia se la semana y lo mostramos
		var semana = ['Dom,', 'Lun,', 'Mar,', 'Mie,', 'Jue,', 'Vie,', 'Sab,'];
		pDiaSemana.textContent = semana[diaSemana];

		// Obtenemos el dia del mes
		pDia.textContent = dia;

		// Obtenemos el Mes y lo mostramos
		var meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
		pMes.textContent = meses[mes];
	};

	actualizarHora();
	var intervalo = setInterval(actualizarHora, 1000);
}())