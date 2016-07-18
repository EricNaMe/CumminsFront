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
            <h1 class="titulo-plantilla" style="font-family: arial;  font-weight: bold; text-align: center;">Evaluaci&oacute;n Jefe Taller</h1>
			<br><br>
            <form name="myform" id="myform">
            	<input type="hidden" id="hdnPorcJefe" name="hdnPorcJefe" value='0'/>    
            	<input type="hidden" id="hdnPorcGere" name="hdnPorcGere" value='0'/> 
     			<input type="hidden" id="hdnTotal" name="hdnTotal" value='0'/>
                <%@include file="CTRL_FeDrDealer.jsp"%>
            </form>

            <br><br><br><br>
            <div class="col-md-7 "style="margin-left:270px; text-align:center; border:1px solid #ddd; margin-bottom:30px;">
               <a style="color:#333;text-decoration: none; font-size:12px; background-color:#FFFFFF;"><b>Nota:</b> El Jefe del taller deberá tener al menos una calificación en alguno de los siguientes motores.</a>
            </div>

            <div>  

                <div class="col-md-4" style="margin-left: 36.33333333%;">
                    <div class="table-responsive" style='position:relative;  max-height: 180px; top:0px; width:250px;' >

                        <table class="table table-striped"  id="tableBody" data-toggle="table">       
                        </table>
                    </div>

                </div>                
            </div> 

            <br></br><br>
            </br><br>
				
				
            <div class="" style=" display:inline-block; margin-left: 12.33333333%; margin-top:30px;">
            	<h1 style="font-family: arial; font-size: 14px; font-weight: bold; text-align: center;">Jefe de Taller</h1>
                <div class="table-responsive" style='position:relative;  max-height: 180px; top:0px; width:800px;' >
                    <table class="table table-striped"  id="tableBody2" data-toggle="table">
                    </table>
                </div>

            </div>
            <br></br><br>
      
           
            
            <div class="col-md-12" style="display:inline-block; text-align:center;">
                <button  type="button" class="btn btn-default"  id="bGuardar">Guardar</button>
                <button  type="button" class="btn btn-default"  id="bGuardarS">Guardar y Salir</button>
            </div> 
             <br></br>
              <br></br>
        </div>
    </body>
</html>