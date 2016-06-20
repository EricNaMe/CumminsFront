   <%@include file="TEMPcatalogos.jsp"%>    
   
        <script src="js/herramientas.js"></script>
        <script src="js/validaciones.js"></script>

        <div class="container" style="background-color: white;  height: 330px;  width: 800px;"> 


            <!-- Fila modulo-->             
            <form id="formHerramientas">   
                <div  style="padding-top: 20px;height:70px;border-bottom-style: solid;">            

                    <label class="col-xs-2" for="Modl">&nbsp;&nbsp;&nbsp;Producto:</label>
                    <input type="text" id="producto" name="producto" class="form-control" style ="width: 200px;"/>

                </div>

                <div  style="height:80px;border-bottom-style: solid;">            

                    <label class="col-xs-2"  for="Modl">Revision:</label>
                    <div class="radio">
                        <label class="col-xs-1"><input type="radio" value="1" name="revision" >1</label>
                    </div>
                    <div class="radio">
                        <label class="col-xs-1"><input type="radio" value="2" name="revision" >2</label>
                    </div>

                    <label class="col-xs-1" for="Modl">A&ntilde;o:</label>    
                    <select class="form-control" id="anio" name="anio" style="width: 80px;">
                        <!--option>2005</option> <option>2006</option> <option>2007</option>
						<option>2008</option> <option>2009</option> <option>2010</option>
						<option>2011</option> <option>2012</option> <option>2013</option>
						<option>2014</option> <option>2015</option--> <option>2016</option>
						<option>2017</option> <option>2018</option> <option>2019</option>
						<option>2020</option> <option>2021</option> <option>2022</option>
						<option>2023</option> <option>2024</option> <option>2025</option>
						<option>2026</option> <option>2027</option> <option>2028</option>
						<option>2029</option> <option>2030</option>
                    </select>

                    <label class="col-xs-1" for="Modl">Status dealer</label>

                    <label class="col-xs-2"><input type="radio" value="Y" name="statusDealer">Active</label>

                    <label class="col-xs-2"><input  type="radio" value="N" name="statusDealer">Inactive</label>

                </div>
            </form>     


            <div  style="padding-top: 10px;height:60px;border-bottom-style: solid;">            

                <label class="col-xs-3" for="Modl">Unidad de negocio:</label>

                <select id="sel1" class="form-control"  style="width: 300px;">
                    <option>Cummins MerCruiser Diesel</option>
                    <option>Egine Business</option>
					<option>Power Generation Business</option>
                </select>
            </div>

            <!-- Fila modulo-->

            <!-- Fila modulo-->
            <div  style="padding-top: 10px;height:60px;border-bottom-style: solid;">            


                <label class="col-xs-3" for="Modl">Tipo de herramienta:</label>
                <select class="form-control"  style="width: 150px;" id="sel1" >
                    <option>Required</option>

                </select>
            </div>

            <!-- Fila modulo-->

            <!-- Fila modulo-->

            <div  style="padding-top: 10px;height:60px;">            


                <label class="col-xs-3" for="Modl">Nivel de servicio:</label>


                <select class="form-control"  style="width: 150px;" id="sel1" >
                    <option>Required</option>
                </select>
            </div>

            <!-- Fila modulo-->
            <div id="DivBotones" style="padding-left: 100px;" >
                <button type="button" class="btn btn-default"  id="generar">Generar</button>
            </div>
        </div>
        
        <div class="table-responsive" style="padding-top: 60px;" >
            <table id="tblMatrizTeen"></table>
        </div>

   <%@include file="footer.jsp"%>    

