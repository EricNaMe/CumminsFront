
<%@include file="TEMPHerramientasmain.jsp"%>  

<script src="js/herramientasUsoQSOL.js"></script>
<%
    String idDealer = (String) request.getParameter("id");
    System.out.println("****ID: " + idDealer);
    if (!"".equals(idDealer) && idDealer != null) {
%>
<script>
    obtenerInfo(<%=idDealer%>);
</script>
<%
    }
%>

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


    <h1 class="text-center" >Evaluaci&oacute;n uso de QSOL</h1>
    <br>
    <form id="myform" name="myform">
        <%@include file="CTRL_FeDrDealer.jsp"%>  
        
        <input type="hidden" value="" id="Total" name ="Total">
        
    </form>


    <br>
    <br>
    <br>
    <h4><b>Motores a evaluar</b></h4>
    <br><br>
    <div class="row">
        <div class="col-lg-4" style="display:inline-block; max-height:90px;  width:300px;"  >

            <table class="table table-striped" data-toggle="table"  id="tableBody">                        
            </table>
        </div>
        <h4 style="display:inline-block" class="col-lg-7">Se seleccionaron 2 t&eacute;cnicos certificados al azar (diferente plataforma)</h4>
    </div>
    <br><br><br><br><br>
    <div class="row">
        <div style="" class="col-md-9">
            <div class="table-responsive" style="max-height:500px;">
                <table class="table table-striped" data-toggle='table' id="tableBody2">                            
                </table>
            </div>
        </div>
        <div class="col-md-3" style="display:inline-block">
            <div class="col-md-8">
                <button class="col-md-offset-2 btn-default form-control" style="display:block;" type="button" id="calcular">Calcular</button>
            </div>
            <br>
            <div class="col-md-8">
                <button class="col-md-offset-2 btn-default form-control" style="display:block;" type="button" id="guardarBtn">Guardar</button>
            </div>
            <br><br>

            <table style="boder:1px solid; border-color:#DDDDDD;" border="1" bordercolor="#DDDDDD" >
                <tr ><td style="text-align:center; font-weight: bold; font-size:15px; width:80px; border-color:#DDDDDD;" >Porcentaje Posible:</td><td> <p id="DispPosible"> </td></tr>
                <tr ><td style="text-align:center; border-color:#DDDDDD; width:80px;">Porcentaje Obtenido:</td><td> <p id="DispTotal"> </td></tr></Table>

        </div>
    </div>
    <br></br><br>
</body>
</html>