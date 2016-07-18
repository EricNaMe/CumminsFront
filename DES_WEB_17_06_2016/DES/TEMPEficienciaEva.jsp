<%@include file="TEMPeficiencia.jsp"%>


<script src="js/eficienciaEval.js"></script>

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



		<div style="text-align:center;" class="col-md-12">
		<label class="titulo-plantilla"  style="font-family: arial; text-align:center; font-weight: bold;">Eficiencia Garant&iacute;as y Rescates</label>
		</div>
		

        <div style="text-align:center;" class="col-md-12">            
                    <form class="form-horizontal" role="form">
                        <div class="table-responsive" >                         	
                            <table id="tableBody" data-toggle="table">
                            </table>
                        </div> 
                    </form>           
        </div>
 
 
 <%@include file="footer.jsp"%>