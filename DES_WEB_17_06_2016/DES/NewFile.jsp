<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title></title>
<script src="scripts/jquery.min.js"></script>
 <script src="js/jQuery.print.js"></script>
<script type="text/javascript">
$( document ).ready(function() {  
	var d = new Date();
	var month = new Array();
	month[0] = "Enero";
	month[1] = "Febrero";
	month[2] = "Marzo";
	month[3] = "Abril";
	month[4] = "Mayo";
	month[5] = "Junio";
	month[6] = "Julio";
	month[7] = "Augosto";
	month[8] = "Septiembre";
	month[9] = "Octubre";
	month[10] = "Novembiembre";
	month[11] = "Diciembre";
	$("#dateLabel").html(d.getDate()+" de "+ month[d.getMonth()] +" del " + d.getFullYear());
	//$("#yourdropdownid option:selected").text();

	$("#printable").print({
	    addGlobalStyles : true,
	    globalStyles : true,
	    stylesheet : null,
	    rejectWindow : true,
	    noPrintSelector : ".no-print",
	    iframe : true,
	    append : null,
	    prepend : null
	});
});
</script>
</head>
<body>
<div id="printable">
<table style="width:100%">
<tr><td><img src="img/izq.png"  height="70px" alt="ABO IT" /></td>
<td style="width:70%"></td><td style="width:30%; valign:bottom;"> <div id="dateLabel"></div></td>
</tr></table>
<br>
<h1 style="text-align:center; font-weight:bold;">Sistema de Certificaci&oacute;n de Dealers</h1>
<h1 style="text-align:center;"> 1 Evaluaci&oacute;n 2016 </h1>
<br><br>
<h1 style="text-align:center;">Kenwort Del Bajio</h1>
<br>
<h3>Nivel de Servicio Obtenido por Plataforma</h3>
<br>
inserte tabla aqui
<br><br>
insete la otra tabla aqui
<table  style="width:100%"><tr>
<td><td>
<td><td>
</tr></table>
<h2>COMPROMISOS/COMENTARIOS GENERALES</h2>
inserte texto aqui
<br>
inserte firmas aqui
</div>
</body>
</html>