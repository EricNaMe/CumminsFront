  
    <%@include file="TEMPperfil.jsp"%>
    <%@ page import="com.cummins.GetSession.GetSessionPerfil" %>
    
     <script>
     	var idDealer="";

  /*   	
        $(function() {
     	    $( "#datepicker" ).datepicker({
     	    	format: 'dd/mm/yyyy',
     	    	autoclose: true
     	    });

     	    $( "#datepicker2" ).datepicker({
     	    	format: 'dd/mm/yyyy',
     	    	autoclose: true
     	    });

     	    $( "#datepicker3" ).datepicker({
     	    	format: 'dd/mm/yyyy',
     	    	autoclose: true
     	    });
     	    
     });*/
     
</script>
   <script src="js/perfilDealer.js"></script>
   		<%
            String idDealer = (String) request.getParameter("id");
            System.out.println("****ID: " + idDealer);
            if (!"".equals(idDealer) && idDealer != null) {
            	System.out.println("EVENTO1");
        %>
        <script>
        $( document ).ready(function() {
            obtenerPerfil(<%=idDealer%>);
    	});
            
        </script>
        <%
            }else {if((String)session.getAttribute("bandLog")=="true"){
            	System.out.println("EVENTO2");
        %>
 		  	<script>
 		  	$( document ).ready(function() {
 		  		cargarTablas (<%=(String)session.getAttribute("strIdDealer")%>);
 		  	});
        	</script>
   
 		<%} }%>
	
        <form name="myform" id="myform">
            <div style="margin: 20px; height: 100%;">
                <div class="container-body">
             <br>  
            <h1 style="font-family: arial; font-size: 18px; font-weight: bold; text-align: center;">Perfil</h1>
			<br><br>

<%@include file="CTRL_FeDrDealer.jsp"%>     
                    <br>
                     <div class="col-sm-5">
                        <div class="col-xs-3">
                            <label class="" for="usr">OEM:</label>
                        </div>
                        <div class="col-xs-9">
                            <input type="text"  class="col-md-5 form-control" id="oem" name="oem">
                        </div>
                    </div>

                      <div class="col-sm-3">
                        <div class="col-xs-4">
                            <label class="" for="usr">Fronterizo:</label>
                        </div>
                        <div class="col-xs-8">
	                        <select readonly style="background-color:#ffffff;" id ="fronterizo" name="fronterizo" class="col-md-7 form-control" >
				                <option></option>
				                <option value = 'SI' >SI</option>
				                <option value = 'NO' >NO</option>
				            </select>
                            <!--<input type="text" id="fronterizo" name="fronterizo" class="col-md-7 form-control" >-->
                        </div>
                    </div>
                    
                    <br><br><br><br>
                    
                     <div class="col-sm-3 col-sm-offset-5">
                        <div class="col-xs-4">
                            <label class="" for="usr">No. Bah&iacute;as:</label>
                        </div>
                        <div class="col-xs-8">
                            <input type="text" id="noBahia" name="NUM_BAHIA" class="col-md-7 form-control" id="oem">
                        </div>
                    </div>
      
                </div>
                        
                        
                        
                        
                    </div>
                <br></br><br>
                    <div class="row">
                        <div class="col-sm-6" style="">
                            <div class="table-responsive" style="max-height:150px;" >
                                <label for="tableCheckBoxObl">Motores requeridos para certificaci&oacute;n:</label>
                                <table id="tableCheckBoxObl" data-toggle="table">

                                </table>
                            </div>
                        </div>
                        <div class="col-sm-6" style="" >
                            <!-- 
                            <div class="table-responsive" style="max-height:150px;" >
                               
                                <label for="tableCheckBoxNoDisp">Motores opcionales para certificaci&oacute;n:</label>
                                <table id="tableCheckBoxNoDisp" data-toggle="table">
                                </table>
                            </div>
                            -->
                        </div>
                    </div>
                    <div class="container" style=" position:relative; top:40px; height: 50px; width:1200px;">
                        <div style="" class="col-sm-3 form-inline">
                            <label for="noMecProm">No. mec&aacute;nicos promotion:</label>&nbsp;
                            <input style="width:44px; background-color:#ffffff;" readonly id="noMecProm" name="noMecProm" type="text" class="form-control" size="1" >
                        </div>
                        <div style="display:inline-block; " class="col-sm-3 form-inline">
                            <label for="noMeca">No. de mec&aacute;nicos:</label>&nbsp;
                            <input style="width:44px;" type="text" id="noMeca" name="noMeca" class="form-control" size="1" >
                        </div>
                        <div style="display:inline-block; " class="form-inline">
                            <label for="noAyudantes">No. de ayudantes:</label>&nbsp;
                            <input style="width:44px;" id="noAyudantes" name="noAyudantes" type="text" class="form-control" size="1" >
                        </div>
                    </div>
                  
                    <div style="margin-left: 0px; position:relative; top:50px;" class="modal-body col-sm-7">
                   
                            <div class="table-responsive" style="height:200px;" >
                                <table id="tableBody" data-toggle="table">
                                </table>
                            </div> 
                    
                    </div><br>
                    <div style="position:relative; top:60px;" class="modal-body col-sm-12">
                        <div class="col-sm-2 form-inline">
                            <label>Nivel de serv&iacute;cio:</label>
                        </div>
                        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
           
                                <div class="table-responsive" style="height:200px;" >
                                    <table id="tableBodyChk" data-toggle="table">
                                    </table>
                                </div> 
                       
                        </div>
                        
                    </div>
                </div>
                
                 <input type="hidden" name="Total" id="Total" value="100">
                 
                 
                 <div class="row">
	                <div class="col-xs-3">
	                    <br>
	                    <select  style="background-color:#ffffff;" id ="modulo1" name="modulo1" class="col-md-7 form-control" >
	                    	<option></option>
	                    </select>
	                </div>
	                <div class="col-xs-3">
	                	<br>
	                    <select  style="background-color:#ffffff;" id ="submodulo1" name="submodulo1" class="col-md-7 form-control" >
	                    	<option></option>
	                    </select>
	                </div>
	                <div class="col-xs-2"><br>
	                	<label><input type="checkbox" name="requerido1" id="requerido1" >No Requerido</label>
	                </div>
                </div>
                
                <div class="row">
	                <div class="col-xs-3">
	                    <br>
	                    <select  style="background-color:#ffffff;" id ="modulo2" name="modulo2" class="col-md-7 form-control" >
							<option></option>
	                    </select>
	                </div>
	                <div class="col-xs-3">
	                	<br>
	                    <select  style="background-color:#ffffff;" id ="submodulo2" name="submodulo2" class="col-md-7 form-control" >
							<option></option>
	                    </select>
	                </div>
	                <div class="col-xs-2"><br>
	                	<label><input type="checkbox" name="requerido2" id="requerido2" >No Requerido</label>
	                </div>
                </div>
                
                <div class="row">
	                <div class="col-xs-3">
	                    <br>
	                    <select  style="background-color:#ffffff;" id ="modulo3" name="modulo3" class="col-md-7 form-control" >
							<option></option>
	                    </select>
	                </div>
	                <div class="col-xs-3">
	                	<br>
	                    <select  style="background-color:#ffffff;" id ="submodulo3" name="submodulo3" class="col-md-7 form-control" >
							<option></option>
	                    </select>
	                </div>
	                <div class="col-xs-2"><br>
	                	<label><input type="checkbox" name="requerido3" id="requerido3" >No Requerido</label>
	                </div>
                </div>
                
                <div class="row">
	                <div class="col-xs-3">
	                    <br>
	                    <select  style="background-color:#ffffff;" id ="modulo4" name="modulo4" class="col-md-7 form-control" >
							<option></option>
	                    </select>
	                </div>
	                <div class="col-xs-3">
	                	<br>
	                    <select  style="background-color:#ffffff;" id ="submodulo4" name="submodulo4" class="col-md-7 form-control" >
							<option></option>
	                    </select>
	                </div>
	                <div class="col-xs-2"><br>
	                	<label><input type="checkbox" name="requerido4" id="requerido4" >No Requerido</label>
	                </div>
                </div>
        </form>
        
       <div class="col-sm-1 form-inline">
           <button type="button" class="btn btn-default" id="guardarPerfil">Guardar</button>
           <button type="button" class="btn btn-default" id="guardarPerfilS">Guardar y Salir</button>
       </div>
        
<%@include file="footer.jsp"%>