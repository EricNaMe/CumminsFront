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
	
        <script src="js/promotion.js"></script>
        <script src="js/validaciones.js"></script>
        
            <div class="page-header">
                <h2>Promotion</h2>
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