<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>


<style>
            body{
                text-align: center;
            }
            .eficiencia-container{
                display: inline-block;
                width: 100%;
                max-width: 1100px;
                text-align: left;
            }
            .Evaluacion input{
                margin-left:-30px;
                padding:0px;
            }
            .revision {
                margin-left:0;
            }
            .tabla1 td{
                   border: solid; 
            }
            .tabla1 tr{
                border:solid;
            }
        </style>
		
		<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="stylesheet" href="cummins_styles/bootstrap.min.css">
        <script src="scripts/jquery.min.js"></script>
        <script src="scripts/bootstrap.min.js"></script>

        <script src="scripts/jquery.dataTables.min.js"></script>
        <script src="scripts/dataTables.bootstrap.min.js"></script>
        <script src="scripts/dataTables.buttons.min.js"></script>
        <script src="scripts/buttons.bootstrap.min.js"></script>
        <script src="scripts/dataTables.select.min.js"></script>
        <script src="scripts/bootstrap-table.js"></script>
        <script src="scripts/mindmup-editabletable.js"></script>
        <script src="scripts/bootstrap-editable.js"></script>
        <script src="scripts/bootstrap-table-editable.js"></script>

        <link rel="stylesheet" href="cummins_styles/bootstrap-table.min.css">
        <link rel="stylesheet" href="cummins_styles/bootstrap-table.css">
        <link rel="stylesheet" href="cummins_styles/buttons.bootstrap.min.css">
        <link rel="stylesheet" href="cummins_styles/select.bootstrap.min.css">
        <link rel="stylesheet" href="cummins_styles/bootstrap-editable.css">

        <link rel="stylesheet" href="css/infantCare.css">
        <!-- progress bar -->
        <link rel="stylesheet" href="cummins_styles/jquery-ui.css">

        <script src="scripts/jquery-ui.js"></script>

        <!-- json serialize -->
        <script src="scripts/jquery.serialize-object.min.js"></script>

        <!-- excel export --> 
        <script type="text/javascript" src="scripts/bootstrap-table-export.js"></script>
        <script type="text/javascript" src="scripts/FileSaver.min.js"></script>
        <script type="text/javascript" src="scripts/jspdf.js"></script>
        <script type="text/javascript" src="scripts/jspdf.plugin.autotable.js"></script>
        <script type="text/javascript" src="scripts/tableExport.js"></script>

        <!-- DatePicker -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.5.1/css/bootstrap-datepicker.css">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.5.1/js/bootstrap-datepicker.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.5.1/locales/bootstrap-datepicker.es.min.js"></script>

        <link rel="stylesheet" href="styles/bootstrapmodificado.min.css">
		<script src="js/capacitacionPreEval.js"></script>
</head>
<body>

<div class="eficiencia-container container-fluid">

            <h1 class="text-center" >Capacitación Preevaluación</h1>
            <br>
            <div class="table-responsive" style="height:50px;">

                    <div class="col-sm-6">
                        <div class="col-xs-4">
                            <label class="" for="dr">DR:</label>
                        </div>
                        <div class="col-xs-6">
                            <select readonly id ="dr" name="dr" class="col-md-5 form-control" style="width:200px; background-color:#ffffff;"></select>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="col-xs-4">
                            <label class="" for="codigoDR">Código DR:</label>
                        </div>
                        <div class="col-xs-6">
                            <input type="text" readonly style="background-color:#ffffff;" id="codigoDR" name="codigoDR" class="col-md-2 form-control">
                        </div>
                    </div>
                </div>
                <br>
                <div>
                    <div class="col-sm-6">
                        <div class="col-xs-4">
                            <label class="" for="dealer">Dealer:</label>
                        </div>
                        <div class="col-xs-6">
                            <select id ="dealer" readonly name="dealer" class="col-md-5 form-control" style="background-color:#ffffff;"></select>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="col-xs-4">
                            <label class="" for="codigoDeal">Código Dealer:</label>
                        </div>
                        <div class="col-xs-6">
                            <input type="text" readonly style="background-color:#ffffff;" name="codigoDeal" id="codigoDeal" class="col-md-2 form-control">
                        </div>
                    </div>
                </div>
            </div>

            <br>

            <h4><b>Tipo: Pre evaluación 2016</b></h4>

            <br> <br>

                    <table class="table tabla1 col-lg-12" id="tableBody" data-toggle="table">
                    </table>
             

            

            <br> 
            <h2 class='text-center'>Favor de verificar los siguientes datos</h2>

            <div class="col-sm-8">
                <div class="col-xs-6">
                    <label class="" for="usr">¿Cuántos mecánicos tienen?</label>
                </div>
                <div class="col-xs-2">
                    <input type="text"  class="col-md-2 form-control" id="usr">
                </div>
            </div>
            <br></br>
            <div class="col-sm-8">
                <div class="col-xs-6">
                    <label class="" for="usr">¿Cuántos ayudantes mecánicos tienen?</label>
                </div>
                <div class="col-xs-2">
                    <input type="text"  class="col-md-2 form-control" id="usr">
                </div>
            </div>



            <br>     <br>      <br> 

            <div class="row">

                <div style="display:inline-block;" class="col-md-12">
                    <div  >
                        <table class="table table-striped" id="tableBody2" data-toggle="table">
                        </table>

                        <table class="table">
                            <tr>
                                <td colspan="3"></td>
                                <td><button class="col-md-offset-7 btn btn-default" disabled type="button" style="border-color:#000000; color:#000000;"  id="enviar">Dar de Alta</button></td>
                            </tr>
                            <tr>
                                <td colspan="3"></td>
                                <td><button class="col-md-offset-7 btn btn-default" disabled type="button" style="border-color:#000000; color:#000000;"  id="enviar">Dar de Alta</button></td>
                            </tr>
                            <tr>
                                <td colspan="3"></td>
                                <td><button class="col-md-offset-7 btn btn-default" disabled type="button" style="border-color:#000000; color:#000000;"  id="enviar">Dar de Alta</button></td>
                            </tr>
                            <tr>
                                <td colspan="3"></td>
                                <td><button class="col-md-offset-7 btn btn-default" disabled type="button"  style="border-color:#000000; color:#000000;" id="enviar">Dar de Alta</button></td>
                            </tr>
                        </table>
                    </div>
                </div>

            </div>

            <br><br>

            <h4 class="text-center" >Administrador de garantías</h4>
            <br><br>
            <div style="display:inline-block;" class="col-xs-7">
                <div class="col-sm-5 ">
                    <label for="sel1">Administrador de garantías:</label>
                </div>
                <div class="col-sm-5">

                    <input  type="text" class="col-md-5 form-control" id="adminGara">
                </div>
            </div>

            <div class="col-sm4"><button class=" btn-default" type="button"   id="enviar">Verificado</button>      <button class=" btn-default" type="button"   id="enviar">Dar de baja</button></div>
            <br><br>

            <div style="display:inline-block;" class="col-xs-6">
                <div class="col-sm-4 ">
                    <label for="sel1">Promoción ID:</label>
                </div>
                <div class="col-sm-5">

                    <input  type="text" class="col-md-5 form-control" id="promId1">
                </div>
            </div>

            <div class="col-xs-6">
                <div class="col-sm-5 ">
                    <label for="sel1">Fecha de certificación:</label>
                </div>
                <div class="col-sm-5">

                    <input  type="text" class="col-md-5 form-control" id="fechaCer">
                </div>
            </div>


            <br><br>  <br>

            <div class="col-xs-6">
                <div class="col-sm-5 ">
                    <label for="sel1">Nombre de certificación:</label>
                </div>
                <div class="col-sm-5">

                    <input  type="text" class="col-md-5 form-control" id="nombreCer">
                </div>
            </div>

            <br><br>  <br>

            <div class="col-xs-7">
                <div class="col-sm-3 ">
                    <label for="sel1">Dar de alta a:</label>
                </div>
                <div class="col-sm-5">

                    <input  type="text" class="col-md-6 form-control" id="darAlta">
                </div>
            </div>


            <div  class="col-xs-5">
                <div class="col-sm-4 ">
                    <label for="sel1">Promoción ID:</label>
                </div>
                <div class="col-sm-5">

                    <input  type="text" class="col-md-5 form-control" id="promId2">
                </div>
            </div>

            <br><br>  <br>

            <h4><b>Nota:</b> La certificación tiene una vigencia de 2 años. Verificar al momento de la evaluación,
                que el administrador de garantías cuente con una certificación o recertificación con fecha menor
                o igual a 2 años de la fecha de evaluar del Dealer.</h4>

            <br><br>  <br>



            <div style="display:inline-block;" class="col-md-12">
                <div class="table-responsive" style="height:200px;">
                    <table class="table table-striped" id="tableBody3" data-toggle="table">
                    </table>
                </div>
            </div>
        


</body>
</html>