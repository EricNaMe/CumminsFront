 <%@include file="TEMPquejas.jsp"%>
 
 	
 		

			<script src="js/datepicker.js"></script>
        	<link rel="stylesheet" href="css/datepicker.css">
        	<script src="js/quejascaptura.js"></script>
        	<script>
            	idDealer = "";
        	</script>
        	
      
   		<%
            String idDealer = (String) request.getParameter("id");
            System.out.println("****ID: " + idDealer);
            if (!"".equals(idDealer) && idDealer != null) {
        %>
        <script>
            idDealer = <%=idDealer%>;
        </script>
        <%
            }
        %>
      
      
     
      
            <h1 style="font-family: arial; font-size: 18px; font-weight: bold; text-align: center;">Captura de quejas</h1>

			<%@include file="CTRL_FeDrDealer.jsp"%>
			
			
			
            
            <div class="col-sm-12 " style="height:800px;">  
                <div id="toolbar">
                    <button id="buttonAdd" class="btn btn-default">Agregar registro</button>
                </div>
                <br><br><br>
                    <table id="tableQuejasCaptura" data-toggle="table" data-toolbar="#toolbar"></table>
        	</div>
 <%@include file="footer.jsp"%>