<%@include file="TEMPeficiencia.jsp"%>
<%String idDealer=""; %>
		 <script src="js/garantias.js"></script>

<script>
    $(document).ready(function() {

        $('#dealer').on('change', function() {
            $('#codigoDeal').val(this.value);
        });
    });
</script>

<%
     idDealer = (String) request.getParameter("id");
    System.out.println("****ID: " + idDealer);
    if (!"".equals(idDealer) && idDealer != null) {
%>
<script>
		obtenerInfo(<%=idDealer%>);
</script>
<%
    }
%>
<style type="text/css">    
 a{
  position: relative;
}

.imagen {
  position: absolute;
  display: none;
  z-index: 10000;
}

#tableEficiencia .th-inner:hover  img.imagen {
    display: block !important;
    z-index: 10000;
}

#tableEficiencia {
	position:relative;
	z-index: 100;
}
            
        </style>


        <form id='myform' name='myform'>
            <input type='hidden' name='DispPosibleH' id='DispPosibleH'>
            <br>
            <h1 style="font-family: arial; font-size: 18px; font-weight: bold; text-align: center;">Eficiencia garant&iacute;as</h1>
            <br><br>

            <%@include file="CTRL_FeDrDealer.jsp"%>

            <br><br>
           	<div class="col-sm-4">
                <button style="" type="button" class="btn btn-default"  id="calcular">Calcular</button>
            </div><br><br>
            
            <div style="">
                <h3 style="text-align: center;">Reclamos de garant&iacute;as</h3>
            </div>
            <div>  
                <div class="col-sm-12">
                    <div class="table-responsive" style='top:0px; ' >
                        <table class="table table-striped table-bordered" data-toggle='table' id="tableReclamos"></table>
                    </div>
                </div>
            </div> 
            <br></br>

            <div style="">
                <h3 style="text-align: center;">Eficiencia</h3>
            </div>
            <div>
                <div class="col-sm-12">
                    <div class="table-responsive" >

                        <table class="table table-striped table-bordered"  data-toggle='table' id="tableEficiencia" ></table>
                        <br><br><br>
                    </div>
                </div>
            </div>


            <div style="margin-top:40px;" class="col-sm-12 table-responsive">
                

                <div class="col-sm-4">
                </div>
                <div class="col-sm-4">
                    <table style="boder:1px solid; border-color:#DDDDDD;" border="1" bordercolor="#DDDDDD" >
                        <tr ><td style="text-align:center; font-weight: bold; font-size:15px; width:80px; border-color:#DDDDDD;" >Porcentaje posible:</td><td> <p id="DispPosible" name='DispPosible'> </td></tr>
                        <tr ><td style="text-align:center; border-color:#DDDDDD; width:80px;">Porcentaje Obtenido:</td><td> <p id="DispTotal" name='DispTotal'> </td></tr></Table>
                </div>
            </div>
            
			<input type="hidden" id="Total" name="Total">
			
            <br></br> <br></br>

            <div style="margin-top:40px;" class="col-sm-12">
                <h3 style="text-align: center;">Garant�as</h3>
            </div>

            <div class="col-sm-12">
                <div class="table-responsive" style=' top:0px; height:400; ' >
                    <table id="tableGarantias" data-toggle="table"  class="table table-striped">
                    </table>
                </div>

            </div>
            <div style="margin-top:40px;" class="col-sm-12">
                <div class="col-sm-4">
                    <button style="" type="button" class="btn btn-default"  id="guardarBtn">Guardar</button>
                    <button style="" type="button" class="btn btn-default"  id="guardarBtnS">Guardar y Salir</button>
                </div>
            </div>
        </form>

<%@include file="footer.jsp"%>
