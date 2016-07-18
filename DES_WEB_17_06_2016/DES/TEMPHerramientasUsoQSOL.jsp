
<%@include file="TEMPHerramientasmain.jsp"%>  

<script src="js/herramientasUsoQSOL.js"></script>
<%
    String idDealer = (String) request.getParameter("id");
    String idPromo = (String) request.getParameter("idPromo");
    System.out.println("****ID: " + idDealer);
    if ((!"".equals(idDealer) && idDealer != null) && (!"".equals(idPromo) && idPromo != null)) {
%>
<script>
    obtenerInfo(<%=idDealer%>,'<%=idPromo%>');
</script>
<%
            }else if((String)session.getAttribute("bandLog")=="true"){
        %>
 		  	<script>
 		  	$( document ).ready(function() {
 		  		cargarPreguntas('PregUsoQSOL', '', '');
 		        cargarTabla(<%=(String)session.getAttribute("strIdDealer")%>, '');
 		        $('#DispPosible').html('');
 		        $('#DispTotal').html('');
 		        $('#Total').val('');
 		       $('#tableBody3').bootstrapTable('refresh');
 		      $('#tableBody').bootstrapTable('refresh');
 		  	});
        	</script>
   
 		<%} %>

<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>


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

	<br>
    <h1 class="titulo-plantilla" style="font-family: arial; font-weight: bold; text-align: center;">Evaluaci&oacute;n Uso de QSOL</h1>
    <br><br>
    <form id="myform" name="myform">
        <%@include file="CTRL_FeDrDealer.jsp"%>  

        <input type="hidden" value="" id="Total" name ="Total">

    </form>



  
    <div style="margin-bottom:30px;"class="col-lg-12">
        <div class="col-lg-4 col-lg-offset-1 table-responsive" style="display:none; max-height:250px; margin-top: 55px;"  >

            <table class="table table-striped" data-toggle="table"  id="tableBody">                        
            </table>
        </div>
        <div class="col-lg-11 table-responsive" style="display:inline-block; max-height:250px; margin-left:-10px; "  >

            <table class="table table-striped" data-toggle="table"   id="tableBody3">                        
            </table>
        </div>
    </div>
    <br><br>
    <!-- 
    <h4 style="display:inline-block" class="col-lg-7">Se seleccionaron 2 t&eacute;cnicos certificados al azar (diferente plataforma)</h4>
     -->
    <br><br>
    <div style="text-align:center;" class="row">
        <div style="margin-left:20px;" class="col-md-9">
            <div class="table-responsive" style="max-height:500px;">
                <table class="table table-striped" data-toggle='table' id="tableBody2">                            
                </table>
            </div>
        </div>
        <div class="col-md-2" style="display:inline-block">
            <div class="col-md-8">
                <button class=" btn-default form-control" style="display:block;" type="button" id="calcular">Calcular</button>
            </div>
            <br><br><br>
            
            <br><br>

			<div class="col-md-8">		
            <table style="boder:1px solid; border-color:#DDDDDD;" border="1" bordercolor="#DDDDDD" >
                <tr ><td style="text-align:center; font-weight: bold; font-size:14px;  border-color:#DDDDDD;" >&nbsp;Porcentaje Posible&nbsp;</td><td style="text-align:center; font-weight: bold; font-size:14px; border-color:#DDDDDD; ">&nbsp;Porcentaje Obtenido&nbsp;</td></tr>
                <tr ><td style="text-align:center;"> <p id="DispPosible"> </td><td style="text-align:center;"> <p id="DispTotal"> </td></tr>
                </table>
            </div>    
        </div>
    </div>
    
    
    		<div style="text-align:center; margin-top:30px;margin-bottom:30px;" class="col-md-12">
    		    
                <button class=" btn-default btn"  type="button" id="guardarBtn">Guardar</button>             
                
                <button class="btn-default btn"  type="button" id="guardarBtnS">Guardar y Salir</button>
            </div>
            
          
    
</body>
</html>