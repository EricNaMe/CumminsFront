
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

<div class="col-xs-2 menu-lateral tabs-left no-print"> <!-- required for floating -->
    <!-- Nav tabs -->
    <ul class="nav nav-tabs tabs-left cumminsTabs" >
        <%
            if (strRol.compareTo("ADMINISTRADOR") == 0 || strRol.compareTo("DR") == 0 || strRol.compareTo("EV_SIN") == 0) {
        %>
        <!-- <li class="active tabs-left" ><a data-toggle="tab" href="TEMPMotores.jsp">Motores</a></li> -->
        <li id="capaEvaluar"><a  href="TEMPCapacitacionEvaluar.jsp">Consulta Capacitaci&oacute;n</a></li>
        <li id="capaMecanico"><a  href="TEMPCapacitacionMecanico.jsp">Mec&aacute;nicos</a></li>
        <li id="capaAdminG"><a  href="TEMPCapacitacionAdminGarantias.jsp">Administrador de Garant&iacute;as</a></li>
        <li id="capaJefeGere"><a  href="TEMPCapacitacionJefeTaller.jsp">Jefe Taller</a></li>
        <li id="capaVerificacion"><a  href="TEMPCapacitacionPreEvaluacion.jsp">Verificaci&oacute;n de datos</a></li>
            <%}%>
    </ul>
</div>

<div class="menu-central col-xs-10" >
    <div class="tab-content" style="background-color: #ffffff;">


