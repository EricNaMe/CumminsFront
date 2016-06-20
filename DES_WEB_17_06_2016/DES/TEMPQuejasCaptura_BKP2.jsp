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



<br>
<h1 style="font-family: arial; font-size: 18px; font-weight: bold; text-align: center;">Captura de Quejas</h1>
<br><br>
<form id='myform' name='myform'>
    <%@include file="CTRL_FeDrDealer.jsp"%>
</form>

<div class="col-sm-12" style="height: 500;">  
    <div id="toolbar">
        <button id="buttonAdd" class="btn btn-default">Agregar registro</button>
    </div>
    <br><br><br>
    <table id="tableQuejasCaptura" data-toggle="table" data-toolbar="#toolbar"></table>
    <br>
    <button type="button" class="btn btn-default" id="guardarBtn">Guardar</button>
</div>
<%@include file="footer.jsp"%>