 <%@include file="TEMPcatalogos.jsp"%>
        
        <script src="js/ponderaciones.js"></script>
        <script src="js/validaciones.js"></script>
        

         <div class="table-responsive" >
            <form  id = "formPonderacioneModulos">
					<br>
                    <div class="col-md-4 col-md-offset-2" >

                        <label for="modulo">M&oacute;dulo</label>
                        <input type="text" name="modulo" id="modulo" class="form-control">
                        <input type="button" value="Agregar modulo" id ="agregarModulo" class="btn btn-default">

                    </div>
					<br><br>
                    <!--
                    <div class="col-md-4" >
                        <label for="ponderacion">% Modulo</label>
                        <input type="text" name="ponderacion"  id="ponderacion" class="form-control">

                    </div>
                    -->


            </form>
       
                <div id="toolbar">
                    <button id="guardarTablaMod" class="btn btn-default">Guardar</button>          
                </div>
                <table class="table table-striped" id="tablePonderacionModulos" data-toolbar="#toolbar" data-toggle="table">
                    <thead>
                        <tr >
                            <th >M&oacute;dulo</th>                  
                            <th >% M&oacute;dulo</th>
                        </tr>
                    </thead>
                </table>
 
                <br>
                <br>

            <form  id = "formSubModulos">
                <div class="row">
                    <div class="col-md-4 col-md-offset-2" >
                        <label for="listaModulos">M&oacute;dulos</label>
                        <select class="form-control" id="moduloSel" name="moduloSel" ></select>
                        <label for="subModulo">Subm&oacute;dulo</label>
                        <input type="text" name="subModulo"  id="subModulo" class="form-control">
                        <input type="button" value="Agregar submodulo" id ="agregarSubmodulo" class="btn btn-default">
                    </div>
                </div>
            </form>
            
    
                <div id="toolbarSub">
                    <button id="guardarTablaSub" class="btn btn-default">Guardar</button>          
                </div>
                <table class="table table-striped" id="tablePonderacion" data-toolbar="#toolbarSub" data-toggle="table">
                    <thead>
                        <tr >
                            <th >M&oacute;dulo</th>
                            <th >Subm&oacute;dulo</th>
                            <th >% Subm&oacute;dulo</th>
                            <th >% M&oacute;dulo</th>
                        </tr>
                    </thead>
                </table>
           
  </div>

 <%@include file="footer.jsp"%>