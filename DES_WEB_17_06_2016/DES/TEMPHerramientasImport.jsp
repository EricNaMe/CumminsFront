   <%@include file="TEMPcatalogos.jsp"%> 
        <style type="text/css">
		
			.inputfile {
				width: 0.1px;
				height: 0.1px;
				opacity: 0;
				overflow: hidden;
				position: absolute;
				z-index: -1;
			}
			
			  .inputfile + label {
			    font-size: 1.25em;
			    font-weight: 700;
			    color: white;
			    background-color: black;
			    display: inline-block;
			    text-overflow: ellipsis;
			    white-space: nowrap;
			    padding: 0.625rem 1.25rem;
			}
			
			.inputfile:focus + label,
			.inputfile + label:hover {
			    background-color: red;
			}
			    
			    
			    .inputfile + label svg {
			    width: 1em;
			    height: 1em;
			    vertical-align: middle;
			    fill: currentColor;
			    margin-top: -0.25em;
			    /* 4px */
			    margin-right: 0.25em;
			    /* 4px */
			}    
			
			.inputfile-1 + label {
			    color: #f1e5e6;
			    background-color: #d3394c;
			}
			
			.inputfile-1:focus + label,
			.inputfile-1.has-focus + label,
			.inputfile-1 + label:hover {
			    background-color: #722040;
			}
			
		</style>
	
        <script src="js/ImportHerramientas.js"></script>
        <script src="js/validaciones.js"></script>
        
            <div class="page-header">
                <h2>Importar Herramientas</h2>
            </div>
            <div class="row">
                <div class="col-md-4">
                    
                </div>
                
                <div class="col-md-4">
                    <input type="file" id="csvFile" onchange="PreviewText()" accept=".csv" class="inputfile inputfile-1" />
					<label for="csvFile"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"/></svg> <span>Elegir Archivo CSV</span></label>
                	<!-- <label for="csvFile"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 512 512"><path d="M368 224l-128 128-128-128h80v-192h96v192zM240 352h-240v128h480v-128h-240zM448 416h-64v-32h64v32z"/></svg> <span>Subir Archivo CSV</span></label>  -->
                </div>
                
                <div class="col-md-4">

                    <button type="button" class="btn btn-default" disabled="disabled" id="enviar">Enviar</button>
                </div>
            </div>
            <div class="row">
                <form role="form" id="formHeader">
                    <input type="hidden" id="matriz"  name="matriz">
                    <fieldset>

                        <legend id="matrizLabel">
                        </legend>

                        <div class="col-md-5">
							<!-- 
                            <div class="form-group">
                                <label for="oem">OEM:</label>
                                <select class="form-control" id="oem" name="oem">
                                </select>
                            </div>
                            -->
                            <div class="form-group">
                                <label for="revision">Revis&iacute;on:</label>
                                <select class="form-control" id="revision" name="revision">
                                    <option value='1' selected>1</option>
                                    <option value='2'>2</option>
                                    <!--option>3</option-->
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="anio">A&ntilde;o:</label>
                                <!-- 
                                <input type="text" class="form-control" id="anio" name="anio"/>
                                 -->
                                <select class="form-control" id="anio" name="anio" style="width: 80px;">
			                        <!--option>2005</option> <option>2006</option> <option>2007</option>
									<option>2008</option> <option>2009</option> <option>2010</option>
									<option>2011</option> <option>2012</option> <option>2013</option>
									<option>2014</option> <option>2015</option--> <option selected>2016</option>
									<option>2017</option> <option>2018</option> <option>2019</option>
									<option>2020</option> <option>2021</option> <option>2022</option>
									<option>2023</option> <option>2024</option> <option>2025</option>
									<option>2026</option> <option>2027</option> <option>2028</option>
									<option>2029</option> <option>2030</option>
                    			</select>
                                
                            </div>
                            <div class="form-group">
                                <label for="para">Para:</label>
                                <select class="form-control" id="para" name="para">
                                    
                                </select>
                            </div>
							<input type="hidden" name="productoNuevo" id="productoNuevo1"/>
                            <!-- <label>Producto Nuevo:</label>
                            <label class="radio-inline">
                                <input type="radio" name="productoNuevo" id="productoNuevo1" value="Y">Si
                            </label>
                            <label class="radio-inline">
                                <input type="radio" name="productoNuevo" id="productoNuevo2" value="N">No
                            </label>-->
                            <div class="checkbox">
                                <label><input type="checkbox" id="statusDealer" name="statusDealer">Liberada para Evaluaci&oacute;n</label>
                            </div>



                        </div>
                        <div class="col-md-5">
							 <!-- 
                            <div class="form-group">
                                <label for="tipoProducto">Tipo de Producto:</label>
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
                             -->
                            <div class="form-group">
                                <label for="mercado">Mercado:</label>
                                <select class="form-control" id="mercado" name="mercado">
                                    <option></option>
                                    <option>Automotriz</option>
                                    <option>Corporativo</option>
                                    <option>CP3</option>
                                    <option>VW</option>
                                    <option>Fuera de Carretera</option>
                                    <option>Chino JV</option>
                                    <option>Herramientas Electronicos</option>
                                </select>
                            </div>
                        </div>

                    </fieldset>
                </form>
            </div>




            <div class="row progress">
                <div id="progress" class="progress-bar progress-bar-striped active" role="progressbar"  aria-valuemin="0" aria-valuemax="100" >

                </div>
            </div>


            <div class="table-responsive">
                <div id="toolbar">
                    <button id="buttonAdd" class="btn btn-default">Agregar registro</button>
                    <button id="buttonRemove" class="btn btn-default">Eliminar registro(s)</button>
                </div>
                <div class="table-responsive" >
                    <table id="tableBody" data-toolbar="#toolbar">

                    </table>
                </div>

            </div>

 <%@include file="footer.jsp"%>  