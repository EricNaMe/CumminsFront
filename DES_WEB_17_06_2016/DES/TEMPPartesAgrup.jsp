<%
    String idDealer = "";
%>

<%@include file="TEMPpartes.jsp"%>

<script src="js/matriz.js"></script>
 <script src="js/validaciones.js"></script>

 
 <script>
 $(document).ready(function() {
	 $('#atras').hide(true);
     $('#guardar').hide(true);
     $('#guardarS').hide(true);
	 $('#tableBody').bootstrapTable('destroy');
 	matriz(<%=(String)session.getAttribute("strIdDealer")%>,'<%=(String)session.getAttribute("strTipoEval")%>', <%=(String)session.getAttribute("strRevision")%>, <%=(String)session.getAttribute("strAnio")%>);
 	$('#codigoDeal').val(this.value);
    $('#consultar').show(true);
    $('#tableBody').show(true);
 });
 </script>

<div class="table-responsive" style="margin: 20px">
    <div class="container-body">
        <form id="myform" name="myform">
            <input type="hidden" name="idMatriz" id="idMatriz">
            <input type="hidden" name="matriz" id="matriz">
 
            <br>
    	<h1 class="titulo-plantilla" style="font-family: arial; font-weight: bold; text-align: center;">Partes agrupadas</h1>
			<br><br>
			
          <%@include file="CTRL_FeDrDealer.jsp"%>
            
        </form><br>
        <div style="text-align:center;" class="table-responsive col-sm-11">
        	<div class="row">
            <label for="tableBody">Motores Agrupados</label>
            </div>
            <div style="margin-bottom:10px;" class="col-sm-12">
            <table id="tableBody" data-toggle="table" >
            </table>
            </div><br>
            <div class="row">
            <button type="button" class="btn btn-default" id="consultar">Consultar</button>
            <button type="button" class="btn btn-default" id="atras">Cancelar</button>
            <button type="button" class="btn btn-default" id="guardar">Guardar</button>
            <button type="button" class="btn btn-default" id="guardarS">Guardar y Salir</button>
            
            </div>
        </div>
    </div>
</div>

<%@include file="footer.jsp"%>