
<% String idDealer=""; %>

<%@include file="TEMPHerramientasmain.jsp"%>      

<script src="js/MatrizHerramientas.js"></script>
<script src="js/validaciones.js"></script>
 <%
            if((String)session.getAttribute("bandLog")=="true"){
        %>
<script>
 $(document).ready(function() {
	$('#atras').hide(true);
	
	$('#atras').hide(true);
    $('#guardarBtn').hide(true);
    $('#guardarBtnS').hide(true);
    $('#tableBody').bootstrapTable('destroy');
    matriz(<%=(String)session.getAttribute("strIdDealer")%>,'<%=(String)session.getAttribute("strTipoEval")%>', <%=(String)session.getAttribute("strRevision")%>, <%=(String)session.getAttribute("strAnio")%>);
    
    $('#codigoDeal').val(this.value);
    $('#consultar').show(true);
    $('#tableBody').show(true);
 	
 	$('#tableBody').bootstrapTable('refresh');
 });
 </script>
 <%
            }
 %>
<div class="table-responsive" >
    <div class="container-body">
        <div class="table-responsive">
            
            <form id="myform" name="myform">
                <input type="hidden" name="idMatriz" id="idMatriz">
                <input type="hidden" name="matriz" id="matriz">
               	<br>  
	            	<h1 style="font-family: arial; font-size: 18px; font-weight: bold; text-align: center;">Herramientas agrupadas</h1>
				<br><br>
                <%@include file="CTRL_FeDrDealer.jsp"%>
            </form>
            
            <br><br><br><br><br>
        </div>
        <div class="table-responsive">
            <table id="tableBody" data-toggle="table">
            </table><br>
            <button type="button" class="btn btn-default" id="consultar">Consultar</button>
            <button type="button" class="btn btn-default" id="atras">Cancelar</button>
            <button type="button" id="guardarBtn" class="btn btn-default">Guardar</button>
            <button type="button" id="guardarBtnS" class="btn btn-default">Guardar y Salir</button>
        </div>
    </div>
</div>
<%@include file="footer.jsp"%>    