
<%@include file="header.jsp"%>
<%
    IDUser = request.getHeader("UID");
    alRol = com.cummins.servlets.RolUsuario.obtenerRol(IDUser);
    strSpCode = alRol[0][0];
    strRol = alRol[0][1].toUpperCase();
    strTab = alRol[0][2];
    session.setAttribute("SPCODE", strSpCode);
%>	
<link rel="stylesheet" href="styles/bootstrap.vertical-tabs.css">
<style type="text/css">

    .contentTab{
        margin:0px; 
        padding-right: 0px; 
        border-spacing: 0px;
        border:0px;
    }

    .cumminsTabs{
        color:#000000;
    }
    .cumminsTabs li{
        color:#000000;
        background-color:#FFFFFF;

    }
    .cumminsTabs a{
        color:#000000;
        background-color:#FFFFFF;
    }
</style>

<div class="col-xs-2 menu-lateral tabs-left"> <!-- required for floating -->
    <!-- Nav tabs -->
    <ul class="nav nav-tabs tabs-left cumminsTabs" >
        <%
            if (strRol.compareTo("ADMINISTRADOR") == 0 || strRol.compareTo("DR") == 0 || strRol.compareTo("EV_SIN") == 0) {
        %>
        <!-- <li class="active tabs-left" ><a data-toggle="tab" href="TEMPMotores.jsp">Motores</a></li> -->
        <li id="herraSoft"><a  href="TEMPHerramientasSoftware.jsp">Consulta Herramientas y Software</a></li>
        <li id="herraElect"><a  href="TEMPHerramientasElectronica.jsp">Herramientas Electr&oacute;nicas</a></li>

        <!-- 
        <li ><a  href="">Herramientas Individual</a></li>
        <li ><a  href="">Herramientas Agrupado</a></li>
        -->

        <li id="herraIndivi"><a  href="TEMPHerramientasIndividual.jsp">Hta. Esp. Evaluaci&oacute;n Individual</a></li>
        <li id="herraAgrup"><a  href="TEMPMatrizHerramientasAgrup.jsp">Hta. Esp. Evaluaci&oacute;n Agrupada</a></li>
            <%
                if (strRol.compareTo("ADMINISTRADOR") == 0 || strRol.compareTo("DR") == 0) {
            %>
        <li id="herraEvalQSOL"><a  href="TEMPHerramientasEvaluacionQSOL.jsp">Evaluación QSOL</a></li>
        <li id="herraUsoQSOL"><a  href="TEMPHerramientasUsoQSOL.jsp">Uso de QSOL</a></li>
            <%}%>
            <%}%>
    </ul>
</div>

<div style="" class="col-xs-10 menu-central" >
    <div class="tab-content" style="background-color: #ffffff;">


