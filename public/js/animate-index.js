const mostrar = document.getElementById('Informacin');
const info = document.getElementById('rect-Informacin');
const chev = document.getElementById('Trazo_30');

mostrar.addEventListener('mouseenter', function () {
  info.classList.remove('ocultar');
  chev.classList.add('chev-info');
});
mostrar.addEventListener('mouseleave', function () {
  info.classList.add('ocultar');
  chev.classList.remove('chev-info');
});

//Rectangulo redondeado de dos esquinas con svg y D3.js
/*
<script type="text/javascript">
				var svg = d3.select("body").append("svg")
				.attr("width", 960)
    			.attr("height", 500)
    			.style("fill", function(d) {
    				return d.color = color(d.name.replace(/ . asterisco/, ""));
       				})
       			.style("stroke", function(d) {
           			return d3.rgb(d.color).darker(2);
       				})
  				.append("g")
    			.attr("transform", "translate(480,250)");

    			var rect = svg.append("#Rectngulo_37")
    			.attr("d", rounded_rect(-240, -120, 422, 150, 17, 17, 17));

				function rounded_rect(x, y, w, h, r, tl, tr, bl, br) {
				       var retval;
				       retval  = "M" + (x + r) + "," + y;
				       retval += "h" + (w - 2*r);
				       if (tr) { retval += "a" + r + "," + r + " 0 0 1 " + r + "," + r; }
				       else { retval += "h" + r; retval += "v" + r; }
				       retval += "v" + (h - 2*r);
				       if (br) { retval += "a" + r + "," + r + " 0 0 1 " + -r + "," + r; }
				       else { retval += "v" + r; retval += "h" + -r; }
				       retval += "h" + (2*r - w);
				       if (bl) { retval += "a" + r + "," + r + " 0 0 1 " + -r + "," + -r; }
				       else { retval += "h" + -r; retval += "v" + -r; }
				       retval += "v" + (2*r - h);
				       if (tl) { retval += "a" + r + "," + r + " 0 0 1 " + r + "," + -r; }
				       else { retval += "v" + -r; retval += "h" + r; }
				       retval += "z";
				       return retval;
				}

*/

