    <%@include file="TEMPquejas.jsp"%>
    
        <script src="js/quejascatalogo.js"></script>
			<br>
            <h1 style="font-family: arial; font-size: 18px; font-weight: bold; text-align: center;">Cat&aacute;logo de quejas</h1> 
            <br><br>
            <div class="Quejas row">
                <div class="col-sm-6">
                    <div class="col-xs-2">
                        <label class="" for="usr">Quejas:</label>
                    </div>
                    <div class="col-xs-6">
                        <input type="text" class="col-md-5 form-control" id="queja">
                    </div>
                    <div>
                        <button type="button" class="btn btn-default"  id="enviar">Guardar</button>
                    </div>
                </div>
            </div>

            <br>

                <div class="table-responsive" >
                    <table id="tableQuejasCatalogo"></table>
                    <br>
                    
	                 <table style="boder:1px solid; border-color:#DDDDDD;" border="1" bordercolor="#DDDDDD" >
	                 <tr ><td style="text-align:center; font-weight: bold; font-size:15px; width:100px; border-color:#DDDDDD;" >TOTAL:</td></tr>
	                 <tr ><td style="text-align:center; border-color:#DDDDDD;">  <p id="DispTotal"></p>   </td></tr></Table>
                 
                 </div> 

            <h4 class="text-center" ><b>Nota:</b> Validar que la suma de las ponderaciones de las quejas sea 100%</h4> 
            <br><br>
            <button type="button" style="margin-left:300px;" class="btn btn-default"  id="Salir">Salir</button>
    <%@include file="footer.jsp"%>
