<%@include file="TEMPHerramientasmain.jsp"%>    

<script src="js/herramientasElectronica.js"></script>
<%
    String idDealer = (String) request.getParameter("id");
    System.out.println("****ID: " + idDealer);
    if (!"".equals(idDealer) && idDealer != null) {
 %>
        <script>
        $( document ).ready(function() {
        	obtenerInfo(<%=idDealer%>);
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

</br>
<FONT COLOR="red">*Campos obligatorios</FONT>
<h1 style="font-family: arial; font-size: 18px; font-weight: bold; text-align: center;">Evaluación de herramienta electr&oacute;nica</h1>
</br><br>
<form name="myform" id="myform">
    <%@include file="CTRL_FeDrDealer.jsp"%>
	</br><br></br>
    <div class="row">    
        <div class="col-sm-6">
            <div class="col-xs-7">
                <label class="" for="mecReg">Mecánicos registrados en promotion:</label>
            </div>
            <div class="col-xs-2">
                <input type="text" readonly style="background-color:#ffffff; cursor: not-allowed;" class="col-md-3 form-control" id="mecReg" name="mecReg">
            </div>
            <div class="col-xs-3">
            </div>
        </div>
        <div style="" class="col-sm-6 ">
            <div class="col-xs-7">
                <label class="" for="inreq">INSITE/INLINE requerido:</label>
            </div>
            <div class="col-xs-2">
                <input type="text" readonly style="background-color:#ffffff;" class="col-md-4 form-control" id="inreq" name="inreq">
            </div>
            <div class="col-xs-3">
            </div>
        </div>
    </div>     

    <br>  
	
	<div class="col-sm-6">
        <div class="col-xs-7">
            <label class="" for="ayuMecReg">Ayudantes de mecánicos registrados:</label>
        </div>
        <div class="col-xs-2">
            <input type="text" readonly style="background-color:#ffffff;" class="col-md-4 form-control" id="ayuMecReg" name="ayuMecReg">
        </div>
        <div class="col-xs-3">
        </div>
    </div>
    <div style="" class="col-sm-6" >
            <div class="col-xs-7">
                <label class="" for="contCal"><FONT COLOR="red">*</FONT> Conteos de calibraci&oacute;n (mínimo 2):</label>
            </div>
            <div class="col-xs-2">
                <input type="text" class="col-md-4 form-control" id="contCal" name="contCal">
            </div>
            <div class="col-xs-3">
            </div>
     </div>
     
     <br><br><br>   

	<div style="" class="col-sm-6 col-sm-offset-6">
        <div class="col-xs-7" style="">
            <label class="" for="zapIt"><FONT COLOR="red">*</FONT> Zap it (mínimo 1):</label>
        </div>
        <div class="col-xs-2" style=""> 
            <input type="text" class="col-md-4 form-control" id="zapIt" name="zapIt">
        </div>
        <div class="col-xs-3">
        </div>
	</div> 
	
	<br><br><br>   

	<div style="" class="col-sm-6">
	    <div class="col-sm-6"  style="font-size: 20px; border-style:none; background-color: white">           
            <label style="padding-left: 5px;" for="SubPorc"><a style="color:black; text-decoration: none; background-color: #FFFFFF;  font-size: 18px;  font-family: arial;">Nota: Se requiere un Insite/Inline por cada 3 t&eacute;cnicos (sin contar el de rescates)</a> </label>
        </div>
	</div> 
	
	<div style="" class="col-sm-6">
	    <div class="col-xs-7">
            <label class="" for="inlineTall"><FONT COLOR="red">*</FONT> Cantidad de INLINE's en taller:</label>
        </div>
        <div class="col-xs-2">
            <input type="text" class="col-md-4 form-control" id="inlineTall" name="inlineTall">
        </div>
        <div class="col-xs-3">
        </div>
	</div>
	
	<input type="hidden" name="Total" id="Total">
	
</form>
<br></br>

<div class='col-sm-12'>
    <div class="table-responsive" style="padding-top:20px;">
    	<label for="tableBody" style="font-family: arial; font-size: 18px; font-weight: bold;">Insite(s) requerido(s)</label>
        <table class="table" data-toggle="table" id="tableBodyINLIE">
        </table>
    </div>
</div>

<!-- 
<div class='col-sm-3'>
    <div style='display:inline-block; ' class="col-md-4">
        <button type="button" class="btn btn-default"  id="enviar">Evaluar</button>
    </div>
</div>    


<div class='col-sm-12'>
    <div class="table-responsive" style="padding-top:20px;" >
        <table class="table table-striped" data-toggle="table"  id="tableInsite">
        </table>
    </div>
</div>

 -->


<br><br><br><br>
<div class='col-sm-12'>
    <div class="table-responsive" style="padding-top:20px; padding-bottom:5px;" >
        
<table class="table table-striped" id="TableResult" style="display:none; border:1px solid #DDDDDD; ">
  <tr>
    <th></th>
    <th>Requeridos</th>
    <th>Obtenidos</th>
    <th>% Posible</th>   
    <th>% Obtenido</th>
  </tr>
  <tr>
    <td>Insite</td>
    <td><div id="insiteReq" ></div></td>
    <td><div id="insiteObt" ></div></td>
    <td>45%</td>
    <td><div id="tot1" ></div></td>
  </tr>
  <tr>
    <td>Inline</td>
    <td><div id="inlineReq" ></div></td>
    <td><div id="inlineObt" ></div></td>
    <td>40%</td>
    <td><div id="tot2" ></div></td>
  </tr>
  <tr>
    <td>C. Calibraci&oacute;n</td>
    <td>2</td>
    <td><div id="calibObt" ></div></td>
    <td>10%</td>
    <td><div id="tot3" ></div></td>
  </tr>
  <tr>
    <td>Zap-It</td>
    <td>1</td>
    <td><div id="zapitObt" ></div></td>
    <td>5%</td>
    <td><div id="tot4" ></div></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td>100%</td>
    <td><div id="tot5" ></div></td>
  </tr>
</table>
        
        
    </div>
</div>


<br><br><br>
<div class="" style="text-align: center; padding-top: 10px;">
    <button type="button" class="btn btn-default"  id="calcularBbtn">Calcular</button>
    <button type="button" class="btn btn-default"  id="guardarBtn">Guardar</button>
    <button type="button" class="btn btn-default"  id="guardarBtnS">Guardar y Salir</button>
</div>
<%@include file="footer.jsp"%> 
