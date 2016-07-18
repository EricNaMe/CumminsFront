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
	<div style="width:90%;" class="modal-dialog">
      <!-- Modal content-->
      	<div class="modal-content" >
	        <div class="modal-header">
	          <button type="button" class="close" data-dismiss="modal" id="close" name="close">&times;</button>
	        </div>
	        <div class="modal-body ">

	        	<form id="formAddQueja" enctype="multipart/form-data"  method="post">
           			<input type="hidden"  name="hdn_id_queja" id="hdn_id_queja" />
           			<div class='col-sm-12'>
	           			<div class="col-sm-2">
	           			<label>Fecha de Creación:</label>
	           			</div>
	           			
	           			<div class="col-sm-2 form-inline">
	           			<label>Fecha de Queja:</label>
	           			</div>
	           			
	           			<div class="col-sm-3">
	           			<label>Cliente:</label>
	           			</div>          			
	           			
	           		</div>
	           	<div class="col-sm-12">
	           		
	           		<div class="col-sm-2">	
	           			<input type="text" style="" id="fecha_crea" class="form-control" name="fecha_crea">
	           		</div>
	           		<div class="col-sm-2">
	           			<input type="text" style="" id="fecha_queja" class="form-control" name="fecha_queja">
	           		</div>
	           		<div class="col-sm-7 col-sm-offset-1">
	           			<input type="text" style="" id="nombre_cliente" class="form-control" name="nombre_cliente">
	           		</div>
	           		
	           	</div>	
	           		
	           		<div class='col-sm-12'>
	           			<div style="text-align:left;" class="col-sm-4 form-inline">
	           				<label>Contacto del Cliente:</label>	           				
	           			</div>
	           			<div class="col-sm-3">
	           				<label>Queja:</label>
	           			</div>
	           		</div>
	           		
	           		<div class="col-sm-12">
	           			<div class="col-sm-4">
	           				<input type="text" style="" id="contact_cliente" class="form-control" name="contact_cliente">
	           			</div>
	           			<div class="col-sm-7 col-sm-offset-1">
	           				<select  class="form-control"  style="" id="queja" name="queja"></select>
	           			</div>
	           		</div>
	           		
	           		<div class="col-sm-12">
	           			<div style="text-align:left;" class="col-sm-3">
	           				<label>
	           				Descripci&oacute;n de la Queja:
	           				</label>	           				
	           			</div>
	           		</div>
	           		<div class="col-sm-12">
	           			<div class="col-sm-12">
	           				<textarea  style="" id="descrip_queja" rows="3" class="form-control" name="descrip_queja"></textarea>
	           			</div>
	           		</div>
	           		
	           		<div class='col-sm-12'>
	           			<div style="text-align:left;" class="col-sm-6 form-inline">
	           				<label>Seguimiento de la Queja:</label>	           				
	           			</div>
	           		</div>
	           		<div class="col-sm-12">
	           			<div class="col-sm-12">
	           			<textarea  style="" rows="2" id="seg_queja" class="form-control" name="seg_queja"></textarea>
	           			</div>
	           		</div>
	           		
	           		<div class="col-sm-12">
	           			<div style="text-align:left;" class="col-sm-3 form-inline">
	           				<label>Responsable del Seguimiento:</label>
	           				
	           			</div>
	           			<div style="text-align:left;" class="col-sm-3 col-sm-offset-1 form-inline">
	           				<label>Fecha de Cierre:</label>	           				
	           			</div>
	           		</div>
	           		<div class="col-sm-12">
	           			<div  class="col-sm-4">
	           				<input type="text" style="" id="resp_seg" class="form-control" name="resp_seg">
	           			</div>
	           			<div  class="col-sm-2">
	           				<input type="text" style="" id="fecha_cierre" class="form-control" name="fecha_cierre">
	           			</div>
	           			<div class="col-sm-1">
	           				<a href="javascript:UpdateFileQuejas($('#hdn_id_queja').val());" class="TextFormat" style="margin-top:25px;"><img src="img/attachempty.png" alt="Upload" style="width:32px; height:40px; background-color:#FFFFFF; "> </a>
	           			</div>
	           		</div>
	           		<div class="col-sm-12">
	           			<div style="text-align:left;" class="col-sm-6 form-inline">
		           			<label>Compromiso con el Dealer:</label>	           				
	           			</div>
	           		</div>
	           		<div class="col-sm-12">
	           			<div class="col-sm-12">
	           			<textarea rows="2" style="" id="compromiso" class="form-control" name="compromiso"></textarea>
	           			</div>
	           		</div>
	           		<div class="col-sm-12">
	           			<div style="text-align:left;" class="col-sm-4">
	           				<label>Reporta:</label>
	           			</div>
	           			<div style="" class="col-sm-2 ">
	           				<label>Status Queja:</label>	           		
	           			</div>
	           			<div class="col-sm-2">
	           				<label>Auditoría:</label>	           		
	           			</div>		           		
	           		</div>
	           		<div style="margin-bottom:20px;" class="col-sm-12">
	           			<div class="col-sm-4">
	           				<input type="text" style="" id="reporta" class="form-control" name="reporta">
	           			</div>
	           			<div class="col-sm-2 form-inline">
	           			    <select  class="form-control" id="status" name="status">
	           					<option value='Y'>Activo</option>
	           					<option value='N'>Inactivo</option>
	           				</select>	
	           			</div>
	           			<div class="col-sm-2 form-inline">
	           			    <select  class="form-control" id="valido_eval" name="valido_eval">
	           					<option value='Y'>Valido</option>
	           					<option value='N'>No Valido</option>
	           				</select>	
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
           		<input type="hidden" id="index" name="index">
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

<div class="col-sm-12" style="margin-bottom:20px;">  
    <div id="toolbar">
        <button id="buttonAdd" class="btn btn-default">Agregar registro</button>
    </div>
    <br><br><br>
    <table id="tableQuejasCaptura" data-toggle="table" data-toolbar="#toolbar"></table>
    <br>
    <button type="button" class="btn btn-default" id="guardarBtn">Guardar</button>
</div>
   <br><br><br>
  
<%@include file="footer.jsp"%>