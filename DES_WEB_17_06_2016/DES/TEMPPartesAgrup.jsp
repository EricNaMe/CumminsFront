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
    	<h1 style="font-family: arial; font-size: 18px; font-weight: bold; text-align: center;">Partes agrupadas</h1>
			<br><br>
			
          <%@include file="CTRL_FeDrDealer.jsp"%>
            
        </form><br><br><br>
        <div class="table-responsive">
            <label for="tableBody">Motores Agrupados</label>
            <table id="tableBody" data-toggle="table" >
            </table><br>
            <button type="button" class="btn btn-default" id="consultar">Consultar</button>
            <button type="button" class="btn btn-default" id="atras">Cancelar</button>
            <button type="button" class="btn btn-default" id="guardar">Guardar</button>
            <button type="button" class="btn btn-default" id="guardarS">Guardar y Salir</button>
        </div>
    </div>
</div>

<%@include file="footer.jsp"%>