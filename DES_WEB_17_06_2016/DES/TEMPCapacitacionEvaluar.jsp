
<%@include file="TEMPcapacitacion.jsp"%>


<script src="js/capacitacionEvaluar.js"></script>



        <title>Capacitación Evaluar</title>
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

        <br></br></br>

        <div style="margin-top:-30px; text-align:center;" class="table-responsive">
            <div class="container-body" style="margin: 20px">
                <div class="container-body col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <form class="form-horizontal" role="form">
                        <div class="table-responsive" >
                         	<label class="titulo-plantilla" for="tableBody" style="font-family: arial; font-weight: bold;">Consulta de Evaluaciones</label>
                            <table id="tableBody" data-toggle="table">
                            </table>
                        </div> 
                    </form>
                </div>
            </div>
        </div>
 
 
 <%@include file="footer.jsp"%>