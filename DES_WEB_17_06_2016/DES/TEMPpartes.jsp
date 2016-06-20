
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

<div class="col-xs-3 tabs-left"> <!-- required for floating -->
    <!-- Nav tabs -->
    <ul class="nav nav-tabs tabs-left cumminsTabs" >
        <%
            if (strRol.compareTo("ADMINISTRADOR") == 0 || strRol.compareTo("DR") == 0 || strRol.compareTo("EV_SIN") == 0) {
        %>
        <!-- <li class="active tabs-left" ><a data-toggle="tab" href="TEMPMotores.jsp">Motores</a></li> -->
        <li id="parEvaluadas"><a  href="TEMPPartesEvaluadas.jsp">Partes Evaluadas</a></li>
        <li id="parIndivi"><a  href="TEMPPartesIndividual.jsp">Partes Individual</a></li>
        <li id="parAgrup"><a  href="TEMPPartesAgrup.jsp">Partes Agrupadas</a></li>
            <%}%>
    </ul>
</div>

<div class="col-xs-9" >
    <div class="tab-content" style="background-color: #ffffff;">


