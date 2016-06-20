   <%@include file="TEMPcatalogos.jsp"%>

	<script src="js/teenCare.js"></script>
    <script src="js/validaciones.js"></script>
	<br>
            <div class="row" >
                <div class="col-md-5 col-md-offset-2" >      
                    <label for="tableMatrizInfant" style="font-family: arial; font-size: 18px; font-weight: bold; padding-left:350px;">Matrices infant care</label>
                    <table id="tableMatrizInfant"></table>
                </div>
            </div>
	<br><br><br>
            <div class="row" >
                <div class="col-md-1 col-md-offset-4" >
                    <button type="button" id="importar"  class="btn btn-default" >Importar</button>
                </div>
            </div>

		<br><br>
    
            <label for="tableMatrizTeenCare" style="font-family: arial; font-size: 18px; font-weight: bold; padding-left:350px;">Matrices teen care</label>
            <table id="tableMatrizTeenCare" > </table>
  
 <%@include file="footer.jsp"%>