   <%@include file="TEMPcatalogos.jsp"%>

        <script src="js/detallesTeenCare.js"></script>
        <script src="js/validaciones.js"></script>
        

            <div class="page-header">
                <h2>Matriz Teen Care</h2>
            </div>

      
                <form role="form" id="formHeader">
                    <input type="hidden" id="idMatriz" name="idMatriz" value="<%=request.getParameter("id")%>"/>
                    <input type="hidden" id="matriz"  name="matriz">
                    <fieldset>

                        <div class="row">
                                <legend id="matrizLabel" style="padding-left:60px"></legend>      
                        </div>

                        <div class="col-md-4">


                            <div class="form-group">
                                <label for="oem">OEM:</label>
                                <select class="form-control" id="oem" name="oem">

                                </select>
                            </div>
                            <div class="form-group">
                                <label for="revision">Revis&iacute;on:</label>
                                <select class="form-control" id="revision" name="revision">
                                    <option></option>
                                    <option>1</option>
                                    <option>2</option>
                                    <!--option>3</option-->
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="anio">A&ntilde;o:</label>
                                <input type="text" class="form-control" id="anio" name="anio"/>
                            </div>
							<input type="hidden" name="productoNuevo" id="productoNuevoY"/>
                            <!--<label>Producto Nuevo:</label>
                            <label class="radio-inline">
                                <input type="radio" name="productoNuevo" value="Y" id="productoNuevoY">Si
                            </label>
                            <label class="radio-inline">
                                <input type="radio" name="productoNuevo" value="N" id="productoNuevoN">No
                            </label>-->
                            <div class="checkbox">
                                <label><input type="checkbox" id="statusDealer" name="statusDealer">Liberada para evaluaci&oacute;n</label>
                            </div>



                        </div>
                        <div class="col-md-4">

                            <div class="form-group">
                                <label for="tipoProducto">Tipo de producto:</label>
                                <select class="form-control" id="tipoProducto" name="tipoProducto">
                                    <option></option>
                                    <option>Infant Care</option>
                                    <option>Teen Care</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="rango">Rango:</label>
                                <select class="form-control" id="rango" name="rango">

                                </select>
                            </div>
                            <div class="form-group">
                                <label for="mercado">Mercado:</label>
                                <select class="form-control" id="mercado" name="mercado">

                                </select>
                            </div>
                        </div>
                        
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="para">Para:</label>
                                <select class="form-control" id="para" name="para">

                                </select>
                            </div>
                            <div class="form-group">
                                 <%@include file="CTRLditribuidor.jsp"%>
                            </div>
                            <div class="form-group">
                                <button type="button" class="btn btn-default" disabled="disabled" id="enviar">Guardar</button>
                            </div>
                        </div>

                    </fieldset>
                </form>





            <div class="row progress">
                <div id="progress" class="progress-bar progress-bar-striped active" role="progressbar"  aria-valuemin="0" aria-valuemax="100" >
                </div>
            </div>

			<div class="table-responsive" >
	       
	                <div id="toolbar">
	                    <button id="buttonAdd" class="btn btn-default">Agregar registro</button>
	                </div>
	                <table id="tableBody" data-toolbar="#toolbar"></table>
          

            </div>

 <%@include file="footer.jsp"%>  
