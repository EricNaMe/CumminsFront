    <%@include file="TEMPcatalogos.jsp"%>
    
        <script src="js/configMotor.js"></script>
        <br>
        <div class="container-fluid"> 
        <div class="row">
            <div class="col-sm-5 " >
                <label for="motor">Motor</label>
                <select id ="motor" name ="motor" class="form-control" style="width:230px;"></select>
            </div>
        </div>
		<br><br>
        <div class="row">
            <div class="table-responsive col-sm-6"  >
                <table id="tableMatrizInfant"  data-height="200"></table>
            </div>
            <div class="table-responsive col-sm-6"  >
                <table id="tableHerramientas"  data-height="200"></table>
            </div>
        </div>
		<br><br>
        <div class="row">
            <div class="table-responsive col-sm-6"  >
                <table id="tableAdminGarantias"  data-height="200"></table>
            </div>
            <div class="table-responsive col-sm-6"  >
                <table id="tableJefeTaller"  data-height="200"></table>
            </div>
        </div>
		<br><br>
        <div class="row">
            <div class="table-responsive col-sm-6"  >
                <table id="tableGerenteServicios"  data-height="200"></table>
            </div>
            <div class="table-responsive col-sm-6"  >
                <table id="tableMecanicos"  data-height="200"></table>
            </div>
        </div>


		<button id="guardar" class="btn btn-default">Guardar</button> 
        
        </div>
        
        <div class="table-responsive" >
            <table class="table table-striped" id = "tableConfigMotores" data-height="450">
            </table>
        </div>

</div>
<%@include file="footer.jsp"%>