<%@include file="TEMPHerramientasmain.jsp"%>  

<script src="js/herramientasEvaluacionQSOL.js"></script>
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
 		  		var today = new Date();
 		  	    var dd = today.getDate();
 		  	    var mm = today.getMonth()+1; //January is 0!

 		  	    var yyyy = today.getFullYear();
 		  	    if(dd<10){
 		  	        dd='0'+dd
 		  	    } 
 		  	    if(mm<10){
 		  	        mm='0'+mm
 		  	    } 
 		  	    today = dd+'/'+mm+'/'+yyyy;
 		  	 $('#datepicker').val(today);
 		  		
 		  		cargarTabla (<%=(String)session.getAttribute("strIdDealer")%>);
 		  		$('#tableBody').bootstrapTable('refresh');

 		  	});
        	</script>
   
 		<%} %>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <!-- 
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
     -->
    <style>
        .eficiencia-container{
            display: inline-block;
            width: 100%;
            max-width: 1100px;
            text-align: left;
        }

        .Evaluacion input{
            margin-left:-30px;
            padding:0px;
        }

        .revision {
            margin-left:0;

        }
    </style>

	<br>
    <h1 class="titulo-plantilla" style="font-family: arial;  font-weight: bold; text-align: center;">Evaluaci&oacute;n de Licencia de QSOL</h1>
    <br><br>
    <form id="myform" name="myform">
        <%@include file="CTRL_FeDrDealer.jsp"%>  
        <br><br>
        <input type="hidden" id="Total" name="Total">
    </form>
 
 
    <div class="col-md-7 col-md-offset-2" style="margin-bottom:20px;margin-top:20px;">
   	 	<table class="table table-striped" data-toggle="table" id="tableBody">                    
    	</table>
     </div>
     
     <div style="text-align:center;" class='col-sm-12' style="margin-bottom:20px;">        
            <button type="button" class="btn btn-default"  id="guardarBtn">Guardar</button>
            <button type="button" class="btn btn-default"  id="guardarBtnS">Guardar y Salir</button>       
    </div>  
   

</body>
</html>
