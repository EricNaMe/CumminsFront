<%@include file="TEMPHerramientasmain.jsp"%>    

<script src="js/HerramientasIndividual.js"></script>
 <script src="js/validaciones.js"></script>


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
 		  		
 		  		obtener_lista_Herram(<%=(String)session.getAttribute("strIdDealer")%>,null);
 		  	});
        	</script>
   
 		<%} %>
<div class="table-responsive">
    <form role="myform" id="myform"> 
    		<br>  
            <h1 style="font-family: arial; font-size: 18px; font-weight: bold; text-align: center;">Herramientas individual</h1>
			<br><br>
        
		<%@include file="CTRL_FeDrDealer.jsp"%>

        <br> 

        <div class="col-sm-5">
            <div class="col-xs-3">
                <label class="" for="oem">OEM:</label>
            </div>
            <div class="col-xs-9">

                <input class="form-control"  name="oem" id="oem"  type="text" style="background-color:#ffffff; color:#000000"  readonly >

            </div>
        </div>
        
		<input type="hidden" id="para" name="para" value="DEALER">
        <!--<div class="col-sm-3">
            <div class="col-xs-4">
                <label class="" for="para">Para:</label>
            </div>
            <div class="col-xs-8">
                <select class="form-control" id="para" name="para">
                    <option>DEALER</option>
                </select>
            </div>
        </div>-->

        <div class="col-sm-3">
            <div  class="col-xs-3">
                <label class="" for="matriz">Motor:</label>
            </div>
            <div class="col-xs-9">
                <select class="form-control" id="matriz" name="matriz">
                </select>
            </div>
        </div>
        
		<div id="status_eval"></div>
		
        <br><br><br><br>


        <button type="button" id="guardarBtn" class="btn btn-default">Guardar</button>
        <button type="button" id="guardarBtnS" class="btn btn-default">Guardar y Salir</button>

        <input type="hidden" name="Total" id="Total">
    </form>
</div>
<BR>
<div  class="table-responsive" style="text-align:right; padding-right:30px;">
    <p id="DispTotal" style="font-weight: bold; font-size:15px; "></p>
</div>

<table id="tableBody" data-toolbar="#toolbar" data-toggle="table"></table>

<%@include file="footer.jsp"%>
