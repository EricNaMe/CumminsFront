<%@include file="TEMPcapacitacion.jsp"%>


<script src="js/capacitacionAdminGarantias.js"></script>

<%
    String idDealer = (String) request.getParameter("id");
    System.out.println("****ID: " + idDealer);
    if (!"".equals(idDealer) && idDealer != null) {
%>
<script>
	obtenerInfo(<%=idDealer%>);
</script>
<%
         }else if((String)session.getAttribute("bandLog")=="true"){
     %>
  	<script>
  	$( document ).ready(function() {
  		cargarTablaAdminGar(<%=(String)session.getAttribute("strIdDealer")%>, '<%=(String)session.getAttribute("strTipoEval")%>', <%=(String)session.getAttribute("strRevision")%>,  <%=(String)session.getAttribute("strAnio")%>);
  		$('#tableBody').bootstrapTable('refresh');
  	});
     	</script>

<%} %>


<Script type="text/javascript">
    function muestraBúsqueda()
    {
        document.getElementById('textNomAdmin').disabled = false;
        document.getElementById('textPromID').disabled = false;
        document.getElementById('textNomAdmin').value = "";
        document.getElementById('textPromID').value = "";
        document.getElementById('bBuscar').disabled = false;
        document.getElementById('bEval').disabled = true;
    }
    function habBot()
    {
        document.getElementById('bEval').disabled = false;
        document.getElementById('textNomAdmin').disabled = true;
        document.getElementById('textPromID').disabled = true;
        document.getElementById('bBuscar').disabled = true;
        document.getElementById('textNomAdmin').value = "";
        document.getElementById('textPromID').value = "";
    }
</Script>

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
<div style=" position:absolute; top:20px; left:80px; height:100%; width:90%;">
    <h1 style="font-family: arial; font-size: 18px; font-weight: bold; text-align: center;">Evaluaci&oacute;n administrador de garant&iacute;as</h1>
<br><br>
    <form name="myform" id="myform">                
        
        <%@include file="CTRL_FeDrDealer.jsp"%>
        
    </form>

    <div style="display:inline-block;">

        <div style="position:relative; ">
            <div class="table-responsive" style='position:relative;  height: 190px; top:30px; width:800px;' class="container" >

                <table class="table table-striped" id="tableBody" data-toggle="table">
                </table>
            </div>
        </div>
    </div><br><br><br><br><br>
    <div style="display:inline-block;">
        <button  type="button" class="btn btn-default"  id="bGuardar">Guardar</button>
        <button  type="button" class="btn btn-default"  id="bGuardarS">Guardar y Salir</button>
    </div> 
    <br><br>
</div>


<%@include file="footer.jsp"%>