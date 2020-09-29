///////////////////////////////////////
// INICIALIZACIÓN
///////////////////////////////////////
window.onload = function cargar(){
	var ctx = document.getElementById('grafica').getContext('2d');
	/*Degradado de linea*/
	var gradientStroke = ctx.createLinearGradient(0,0,1200,0);
	gradientStroke.addColorStop(0, "#FF9C00");
	gradientStroke.addColorStop(0.2, "#FF0000");
	gradientStroke.addColorStop(0.5, "#FF9C00");
	gradientStroke.addColorStop(1, "#FFC600");

	/*Degradado de relleno*/
	var gradientFill = ctx.createLinearGradient(500,0,100,0);
	gradientFill.addColorStop(0, "rgba(16, 14, 59, 0.6)");
	gradientFill.addColorStop(1, "rgba(124, 178, 238, 0.6)");

	/*Crear Gráfica*/
	var myChart = new Chart(ctx,{
		type:"line",
		data:{
			labels:['11 AM','12 PM','01 PM','02 PM'],
			datasets:[{
				label:'Temperatura °C',
				data:[28,43,29,25],
				fill: true,
				backgroundColor: gradientStroke
			}]
		},
		options:{
			responsive:false,
			maintainAspectRatio:true,
			scales:{
				yAxes:[{
					ticks:{
						beginAtZero:true,
						maxTicksLimit: 7
					}
				}],
				gridLines:{
					drawTicks:false,
					display:false
				}
			},
			legend:{
				display: false
			}
		}
	});	
}