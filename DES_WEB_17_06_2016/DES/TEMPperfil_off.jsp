
<%@include file="header_off.jsp"%>

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
        <!-- <li class="active tabs-left" ><a data-toggle="tab" href="TEMPMotores.jsp">Motores</a></li> -->
        
        <li id="perDealerT"><a  href="TEMPPerfilDealerT.jsp">Perfil Dealer</a></li>
        <li id="perDealer"><a  href="TEMPPerfilDealer.jsp">Captura de Perfil</a></li>
           
    </ul>
</div>

<div class="col-xs-9" >
    <div class="tab-content" style="background-color: #ffffff;">


