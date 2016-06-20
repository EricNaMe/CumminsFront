 <%@include file="TEMPcatalogos.jsp"%>
      
        <script src="js/motoresOEM.js"></script>
        <br>
        <div class="table-responsive">
            <div class="container-body" style="margin: 20px">
                <div class="row">
                    <div class="col-sm-4">
                    <div class="col-xs-3">
                        OEM:
                    </div>
                    <div class="col-xs-9">
                        <select id ="oem" name="oem" class="form-control col-md-5"></select>
                    </div>
                    </div>
                </div>
                <br>
                <div class="row">
                    <div class="col-sm-7 col-sm-offset-2">

                            <table id="tableCheckBoxObl"  data-height="200"></table>

                    </div>
                 </div>
              </div>
                <br>
                <div class="row">
                    <div class="col-sm-7 col-sm-offset-2">

                            <table id="tableCheckBoxNoDisp"  data-height="200"></table>

                    </div>
                 </div>
              </div>

                <div class="row">
                    <div class="col-sm-10"></div>
                    <div class="col-sm-2">
                        <br>
                        <button type="button" class="btn btn-default" id="guardarMotor">Guardar</button>
                    </div>
                </div>
                <br>
           
                    <div class="table-responsive"  >
                        <table id="tableMotoresOEM" data-toolbar="#toolbar"></table>
                    </div>
        
            </div>

 <%@include file="footer.jsp"%>