<%@include file="TEMPquejas.jsp"%>


<script src="js/datepicker.js"></script>
<link rel="stylesheet" href="css/datepicker.css">
<script src="js/quejascaptura.js"></script>
<script>
    idDealer = "";
    $(function() {
    	$('#fecha_crea').datepicker({
            format: "dd/mm/yyyy",
            language: 'es',
            autoclose: true
        });
    	$('#fecha_queja').datepicker({
            format: "dd/mm/yyyy",
            language: 'es',
            autoclose: true
        });
    	$('#fecha_cierre').datepicker({
            format: "dd/mm/yyyy",
            language: 'es',
            autoclose: true
        });
   	});
    
</script>


<%
    String idDealer = (String) request.getParameter("id");
    System.out.println("****ID: " + idDealer);
    if (!"".equals(idDealer) && idDealer != null) {
%>
<script>
    idDealer = <%=idDealer%>;
</script>
 <%
            }else if((String)session.getAttribute("bandLog")=="true"){
        %>
 		  	<script>
 		  	$( document ).ready(function() {
 		  		cargarTabla (<%=(String)session.getAttribute("strIdDealer")%>);
 		  	 $('#tableQuejasCaptura').bootstrapTable('refresh');
 		  	});
        	</script>
   
 		<%} %>

<div class="modal fade" id="modalAddQueja" role="dialog">
	<div class="modal-dialog">
      <!-- Modal content-->
      	<div class="modal-content" >
	        <div class="modal-header">
	          <button type="button" class="close" data-dismiss="modal">&times;</button>
	        </div>
	        <div class="modal-body ">

	        	<form id="formAddQueja" enctype="multipart/form-data"  method="post">
           			<input type="hidden"  name="hdn_id_queja" id="hdn_id_queja" />
           			<div class='row'>
	           			<div class="col-sm-4 form-inline">
	           				Fecha de Creacion:
	           				<input type="text" style="width:130px;" id="fecha_crea" class="form-control" name="fecha_crea">
	           			</div>
	           			<div class="col-sm-4 form-inline">
	           				Fecha de Queja:
	           				<input type="text" style="width:130px;" id="fecha_queja" class="form-control" name="fecha_queja">
	           			</div>
	           		</div>
	           		<div class='row'>
	           			<div class="col-sm-3">
	           				Cliente:
	           				<input type="text" style="width:280px;" id="nombre_cliente" class="form-control" name="nombre_cliente">
	           			</div>
	           		</div>
	           		<div class='row'>
	           			<div class="col-sm-6 form-inline">
	           				Contacto del Cliente:
	           				<input type="text" style="width:250px;" id="contact_cliente" class="form-control" name="contact_cliente">
	           			</div>
	           			<div class="col-sm-4">
	           				Queja
	           				<select  class="form-control"  style="width:250px;" id="queja" name="queja"></select>
	           			</div>
	           		</div>
	           		
	           		<div class="row">
	           			<div class="col-sm-6">
	           				Descripci&oacute;n de la Queja
	           				<input type="text" style="width:500px;" id="descrip_queja" class="form-control" name="descrip_queja">
	           			</div>
	           		</div>
	           		<div class='row'>
	           			<div class="col-sm-6 form-inline">
	           				Seguimiento de la Queja
	           				<input type="text" style="width:250px;" id="seg_queja" class="form-control" name="seg_queja">
	           			</div>
	           			<div class="col-sm-5 form-inline">
	           				Reporta
	           				<input type="text" style="width:250px;" id="reporta" class="form-control" name="reporta">
	           			</div>
	           			
	           		</div>
	           		
	           		<div class='row'>
	           			<div class="col-sm-6 form-inline">
	           				Responsable del Seguimiento
	           				<input type="text" style="width:280px;" id="resp_seg" class="form-control" name="resp_seg">
	           			</div>
	           			<div class="col-sm-3 form-inline">
	           			Status Queja
	           				<select  class="form-control" id="status" name="status">
	           					<option value='Y'>Activo</option>
	           					<option value='N'>Inactivo</option>
	           				</select>	
	           			</div>
	           			<div class="col-sm-2 form-inline">
	           			Auditoria
	           				<select  class="form-control" id="valido_eval" name="valido_eval">
	           					<option value='Y'>Valido</option>
	           					<option value='N'>No Valido</option>
	           				</select>	
	           			</div>
	           		</div>
	           		<div class='row'>
	           			<div class="col-sm-3 form-inline">
	           				Fecha de Cierre
	           				<input type="text" style="width:130px;" id="fecha_cierre" class="form-control" name="fecha_cierre">
	           			</div>
	           			<div class="col-sm-6 form-inline">
		           			Compromiso con el Dealer
	           				<input type="text" style="width:250px;" id="compromiso" class="form-control" name="compromiso">
	           			</div>
	           			<div class="col-sm-1">
	           				<a href="javascript:UpdateFileQuejas($('#hdn_id_queja').val());" class="TextFormat" style="margin-top:25px;"><img src="img/attachempty.png" alt="Upload" style="width:32px; height:40px; background-color:#FFFFFF; "> </a>
	           			</div>
	           		</div>
		     	</form>
		     	<br> 
		     	<input type="button" class="btn btn-default"  value="Guardar" id="saveQueja"/>
	        </div>
    	</div>
	</div>
</div>


<div class="modal fade" id="modalUploadFile" role="dialog">
	<div class="modal-dialog">
      <!-- Modal content-->
      	<div class="modal-content">
	        <div class="modal-header">
	          <button type="button" class="close" data-dismiss="modal">&times;</button>
	        </div>
	        <div class="modal-body">
	        
	         <form id="formUploadFile" enctype="multipart/form-data"  method="post">
           		<input type="hidden"  name="id_queja" id="id_queja" />
           		Seleccione Archivo:
           		<input type="file"  name="file" /> 
           		<br><br>  
	           <input type="button" class="btn btn-default"  value="Adjuntar Archivo" id="saveFile"/>
	           <br><br><br>
	           <div id='lnkDownFile'></div>
		     </form>
		
	        </div>
    	</div>
	</div>
</div>

<br>
<h1 style="font-family: arial; font-size: 18px; font-weight: bold; text-align: center;">Captura de Quejas</h1>
<br><br>
<form id='myform' name='myform'>
    <%@include file="CTRL_FeDrDealer.jsp"%>
</form>

<div class="col-sm-12" style="height: 500;">  
    <div id="toolbar">
        <button id="buttonAdd" class="btn btn-default">Agregar registro</button>
    </div>
    <br><br><br>
    <table id="tableQuejasCaptura" data-toggle="table" data-toolbar="#toolbar"></table>
    <br>
    <button type="button" class="btn btn-default" id="guardarBtn">Guardar</button>
</div>
  
<%@include file="footer.jsp"%>