    <%@include file="TEMPquejas.jsp"%>
    
        <script src="js/quejascatalogo.js"></script>
			<br>
            <h1 class="titulo-plantilla" style="font-family: arial;  font-weight: bold; text-align: center;">Cat&aacute;logo de Quejas</h1> 
            <br><br>
            <div  class="Quejas row">
                <div class="col-sm-6 col-sm-offset-2">
                    <div class="col-xs-2">
                        <label class="" for="usr">Quejas:</label>
                    </div>
                    <div class="col-xs-6">
                        <input type="text" class="col-md-5 form-control" id="queja">
                    </div>
                   
                </div>
            </div>
            
            <style>
            th{
            text-align:center;
            }
            </style>

            <br>
				<div class="col-md-8 col-md-offset-2">
                <div class="table-responsive" >
                    <table id="tableQuejasCatalogo"></table>
                    <br>
                </div>
                </div>    
            <!--         
	                 <table style="boder:1px solid; border-color:#DDDDDD;" border="1" bordercolor="#DDDDDD" >
	                 <tr ><td style="text-align:center; font-weight: bold; font-size:15px; width:100px; border-color:#DDDDDD;" >TOTAL:</td></tr>
	                 <tr ><td style="text-align:center; border-color:#DDDDDD;">  <p id="DispTotal"></p>   </td></tr></Table>
                 
                 </div> 

            <h4 class="text-center" ><b>Nota:</b> Validar que la suma de las ponderaciones de las quejas sea 100%</h4>
			-->
            <br><br>
             <div class="col-md-12" style="text-align:center; margin-bottom:30px;">
               <button type="button" class="btn btn-default"  id="enviar">Guardar</button>
               <button type="button" style="" class="btn btn-default"  id="Salir">Salir</button>
             </div>
            
    <%@include file="footer.jsp"%>
