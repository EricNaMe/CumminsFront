<%@include file="TEMPcapacitacion.jsp"%>

<script src="js/capacitacionJefeTaller.js"></script>

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
 		  		
 		  		cargarTablaMotores(<%=(String)session.getAttribute("strIdDealer")%>);
 		    	cargarTablaJefeTaller(<%=(String)session.getAttribute("strIdDealer")%>);
 		    	$('#tableBody').bootstrapTable('refresh');
 		    	$('#tableBody2').bootstrapTable('refresh');
 		  	});
        	</script>
   
 		<%} %>
 		
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
			<br>
            <h1 style="font-family: arial; font-size: 18px; font-weight: bold; text-align: center;">Evaluaci&oacute;n jefe taller / gerente de servicio</h1>
			<br><br>
            <form name="myform" id="myform">
            	<input type="hidden" id="hdnPorcJefe" name="hdnPorcJefe" value='0'/>    
            	<input type="hidden" id="hdnPorcGere" name="hdnPorcGere" value='0'/> 
     			<input type="hidden" id="hdnTotal" name="hdnTotal" value='0'/>
                <%@include file="CTRL_FeDrDealer.jsp"%>
            </form>

            <br><br><br><br>
            <div style="position:relative;top:-40px;">
                <span ><a style="color:black;text-decoration: none; background-color:#FFFFFF;"><b>Nota:</b>El jefe del taller deberá tener al menos una calificación y el Gerente de servicio deberá tener al menos una familiarización en algunos de los siguientes motores</a></span>
            </div>

            <div>  

                <div style="position:relative; left:50px; display:inline-block;">
                    <div class="table-responsive" style='position:relative;  height: 180px; top:0px; width:250px;' >

                        <table class="table table-striped"  id="tableBody" data-toggle="table">       
                        </table>
                    </div>

                </div>                
            </div> 

            <br></br><br>
				
				
            <div style="position:relative; left:50px; display:inline-block;">
            	<h1 style="font-family: arial; font-size: 18px; font-weight: bold; text-align: center;">Jefe de Taller</h1>
                <div class="table-responsive" style='position:relative;  height: 180px; top:0px; width:800px;' >
                    <table class="table table-striped"  id="tableBody2" data-toggle="table">
                    </table>
                </div>

            </div>
            <br></br><br>
         <!--    
            <div>
                <div style="position:relative; left:50px; display:inline-block;">
                <h1 style="font-family: arial; font-size: 18px; font-weight: bold; text-align: center;">Gerente de Servicio</h1>
                    <div class="table-responsive" style='position:relative;  height: 180px; top:0px; width:800px;' >
                        <table class="table table-striped" id="tableBody3" data-toggle="table">
                        </table>
                    </div>

                </div>
            </div>
        --> 
            <br></br>
            <br></br>
            <br></br>
            <div style="display:inline-block;">
                <button style="position:relative; left:250px; top:-100px;" type="button" class="btn btn-default"  id="bGuardar">Guardar</button>
                <button style="position:relative; left:250px; top:-100px;" type="button" class="btn btn-default"  id="bGuardarS">Guardar y Salir</button>
            </div> 
        </div>
    </body>
</html>