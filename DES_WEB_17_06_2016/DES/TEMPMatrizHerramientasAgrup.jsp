
<% String idDealer=""; %>

<%@include file="TEMPHerramientasmain.jsp"%>      

<script src="js/MatrizHerramientas.js"></script>
<script src="js/validaciones.js"></script>
  <script language="JavaScript">
  window.onbeforeunload = confirmExit;
  function confirmExit()
  {
    return "¿Quieres salir de esta pagina? es posible que los cambios no se guarden";
  }
</script>
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
<div style=""class="table-responsive" >
    <div class="container-body">
        <div class="table-responsive">
            
            <form id="myform" name="myform">
                <input type="hidden" name="idMatriz" id="idMatriz">
                <input type="hidden" name="matriz" id="matriz">
               	<br>  
	            	<h1 class="titulo-plantilla" style="font-family: arial; font-weight: bold; text-align: center;">Herramientas Agrupadas</h1>
				<br><br>
                <%@include file="CTRL_FeDrDealer.jsp"%>
            </form>
            
            <br><br>
        </div>
        <div style="text-align:center;"class="col-md-12 table-responsive">
            <table id="tableBody" data-toggle="table">
            </table><br>
            <button type="button" class="btn btn-default" id="consultar">Consultar</button>
            <button type="button" class="btn btn-default" id="atras">Cancelar</button>
            <button type="button" id="guardarBtn" class="btn btn-default">Guardar</button>
            <button type="button" id="guardarBtnS" class="btn btn-default">Guardar y Salir</button>
            <br><br><br><br>
        </div>
    </div>
</div>
<%@include file="footer.jsp"%>    