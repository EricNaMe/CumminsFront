<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <title>Insert title here</title>
	<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
	<meta charset="utf-8">
  	<meta name="viewport" content="width=device-width, initial-scale=1">
  	
  	<meta charset="utf-8"> 
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>

    <script src="https://cdn.datatables.net/1.10.10/js/jquery.dataTables.min.js"></script>
    <script src="https://cdn.datatables.net/1.10.10/js/dataTables.bootstrap.min.js"></script>
    <script src="https://cdn.datatables.net/buttons/1.1.0/js/dataTables.buttons.min.js"></script>
    <script src="https://cdn.datatables.net/buttons/1.1.0/js/buttons.bootstrap.min.js"></script>
    <script src="https://cdn.datatables.net/select/1.1.0/js/dataTables.select.min.js"></script>
    <script src="http://cdn.rawgit.com/wenzhixin/bootstrap-table/master/src/bootstrap-table.js"></script>
    <script src="http://cdn.rawgit.com/mindmup/editable-table/master/mindmup-editabletable.js"></script>
    <script src="http://cdn.rawgit.com/vitalets/x-editable/master/dist/bootstrap3-editable/js/bootstrap-editable.js"></script>
    <script src="http://cdn.rawgit.com/wenzhixin/bootstrap-table/master/src/extensions/editable/bootstrap-table-editable.js"></script>

    <link rel="stylesheet" href="http://cdn.rawgit.com/wenzhixin/bootstrap-table/master/dist/bootstrap-table.min.css">
    <link rel="stylesheet" href="http://cdn.rawgit.com/wenzhixin/bootstrap-table/master/src/bootstrap-table.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/buttons/1.1.0/css/buttons.bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/select/1.1.0/css/select.bootstrap.min.css">
    <link rel="stylesheet" href="http://cdn.rawgit.com/vitalets/x-editable/master/dist/bootstrap3-editable/css/bootstrap-editable.css">

    <link rel="stylesheet" href="css/infantCare.css">
    <!-- progress bar -->
    <link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">

    <script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>

    <!-- json serialize -->
    <script src="http://cdn.rawgit.com/macek/jquery-serialize-object/master/dist/jquery.serialize-object.min.js"></script>

    <!-- excel export --> 
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-table/1.9.1/extensions/export/bootstrap-table-export.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2014-11-29/FileSaver.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.1.135/jspdf.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/2.0.17/jspdf.plugin.autotable.js"></script>
    <script type="text/javascript" src="https://rawgit.com/hhurz/tableExport.jquery.plugin/master/tableExport.js"></script>

	<!-- DatePicker -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.5.1/css/bootstrap-datepicker.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.5.1/js/bootstrap-datepicker.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.5.1/locales/bootstrap-datepicker.es.min.js"></script>
	
	<link rel="stylesheet" href="styles/bootstrapmodificado.min.css">

<style type="text/css">

body {   
    background-image: url('img/bg01.bmp');
	margin:0px;
}

.encabezado {
	background-color:#FF0000;
	margin-left:10px;
	margin-right:10px;
	margin-top:10px;
	margin-bottom:10px;
	border:black 8px solid;
	border-spacing: 8px;
}

.contenido {
	border-radius: 5px;
	margin-top:0px;
	background-image:url('img/bg01.bmp');
	height:520px;
	margin-left:10px;
	margin-right:10px;
	margin-bottom:10px;
	}

.TextFormat {
	color:#000000;
	background-color: #ffffff;
}
.TextFormat a {
	color:#000000;
	background-color: #ffffff;
}


</style>

</head>

<body>

<div class="container">

  <div class="encabezado">
      <img src="img/cummins.gif"  height="70px" alt="ABO IT" />     
      <img src="img/global.bmp"  height="70px" alt="Global" align="right" />
  </div>

<br>
<div id="myModal" class="modal fade" role="dialog">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="headerModal">Enviando informacion</h4>
            </div>
            <div class="modal-body">
                <div class="progress">
                    <div class="progress-bar progress-bar-striped active" role="progressbar"
                         aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width:100%">
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal" id="closeModal" style="display: none">Close</button>
                <button type="button" class="btn btn-default" data-dismiss="modal" id="closeModalEliminar" style="display: none">Close</button>
            </div>
        </div>
    </div>
</div>
<<ul class="cummins_navi cummins_navi-tabs active" id="TABS">
    <!-- <li  class="active " ><a data-toggle="tab" href="TEMPPerfilDealer.jsp">Perfil</a></li>-->
    <li><a href="TEMPPerfilDealer.jsp">Perfil</a></li>
    <li><a href="TEMPpartes.jsp">Partes</a></li>
    <li><a href="TEMPcapacitacion.jsp">Capacitación</a></li>
    
    <li><a href="TEMPHerramientasmain.jsp">Herramientas & Software</a></li>
    <li><a href="TEMPeficiencia.jsp">Eficiencia</a></li>
    <!-- 
    <li><a data-toggle="tab" href="#menu6">Branding</a></li>
     -->
    <li><a href="TEMPquejas.jsp">Quejas</a></li>
    <!-- 
    <li><a  data-toggle="tab" href="#menu8">Desarrollo Dealer</a></li>
     -->
    <li><a  href="TEMPcatalogos.jsp">Catálogos</a></li>
  </ul>

			<div class="tab-content" style ="background-color: #FFFFFF; ">