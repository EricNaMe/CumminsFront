<%@include file="TEMPeficiencia.jsp"%>
<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>

        <script src="js/garantias.js"></script>

        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>

            <h1 style="font-family: arial; font-size: 18px; font-weight: bold; text-align: center;">Eficiencia garantías</h1>

             <%@include file="CTRL_FeDrDealer.jsp"%>
 
            </br></br>
            <div style="">
                <span ><h3 style="text-align: center;">Reclamos garantías y políticas</h3></span>
            </div>
            <div>  
                <div class="col-sm-12">
                    <div class="table-responsive" style=' height: 400px; top:0px; ' >
                    
                    	<table class="table table-striped table-bordered" id="tableReclamos"></table>
                    	
                        
                    </div>
                </div>
            </div> 
            <br></br>

            <div style="">
                <h3 style="text-align: center;">Eficiencia</h3>
            </div>
            <div>
                <div class="col-sm-12">
                    <div class="table-responsive" style=' max-height: 480px; ' >
                    
                    	<table class="table table-striped table-bordered" id="tableEficiencia" ></table>
                    	<br><br><br>
                        <table class="table table-striped table-bordered" id="tableEficienciaSSS" >
                            <thead>
                                <tr>
                                    <th>Tópico</th> 
                                    <th>Rangos</th>
                                    <th>% Posibles</th> 
                                    <th>% Obtenido garantías</th> 
                                    <th>% Obtenido polóticas</th> 
                                </tr>
                            </thead>
                            <tr>
                                <td>Tiempo de Reparación</td>
                                <td><= 2.5 = 100% -> Verde<br><= 2.5 <= 5 = 50% -> Amarillo<br><= 5 = 0 -> Rojo</td>
                                <td>40%</td>
                                <td align="center">
                                    <input readonly style="background:transparent; border:none; text-align:center" 
                                           type="text" name="tieReparaGar" id="tieReparaGar"/>
                                </td>
                                <td align="center">
                                    <input readonly style="background:transparent; border:none; text-align:center" 
                                           type="text" name="tieReparaPol" id="tieReparaPol"/>
                                </td>
                            </tr>
                            <tr>
                                <td>Tiempo Captura</td>
                                <td><= 10 = 100% -> Verde<br><= 10 <= 30 = 50% -> Amarillo<br><= 30 = 0 -> Rojo</td>
                                <td>5%</td>
                                <td align="center">
                                    <input readonly style="background:transparent; border:none; text-align:center" 
                                           type="text" name="tieCapturaGar" id="tieCapturaGar"/>
                                </td>
                                <td align="center">
                                    <input readonly style="background:transparent; border:none; text-align:center" 
                                           type="text" name="tieCapturaPol" id="tieCapturaPol"/>
                                </td>
                            </tr>
                            <tr>
                                <td>Eficiencia (Reclamo)</td>
                                <td><= 95% -> Verde<br><= 90 & < 95 -> Amarillo<br><= 90 -> Rojo</td>
                                <td>10%</td>
                                <td align="center">
                                    <input readonly style="background:transparent; border:none; text-align:center" 
                                           type="text" name="efiReclamoGar" id="efiReclamoGar"/>
                                </td>
                                <td align="center">
                                    <input readonly style="background:transparent; border:none; text-align:center" 
                                           type="text" name="efiReclamoPol" id="efiReclamoPol"/>
                                </td>
                            </tr>
                            <tr>
                                <td>Eficiencia (Reparación)</td>
                                <td><= 95% -> Verde<br><= 90 & < 95 -> Amarillo<br><= 90 -> Rojo</td>
                                <td>45%</td>
                                <td align="center">
                                    <input readonly style="background:transparent; border:none; text-align:center" 
                                           type="text" name="efiReparaGar" id="efiReparaGar"/>
                                </td>
                                <td align="center">
                                    <input readonly style="background:transparent; border:none; text-align:center" 
                                           type="text" name="efiReparaPol" id="efiReparaPol"/>
                                </td>
                            </tr>
                            <tr>
                                <td>Porcentajes</td>
                                <td></td>
                                <td>100%</td>
                                <td align="center">
                                    <input readonly style="background:transparent; border:none; text-align:center" 
                                           type="text" name="porcGarantia" id="porcGarantia"/>
                                </td>
                                <td align="center">
                                    <input readonly style="background:transparent; border:none; text-align:center" 
                                           type="text" name="porcPolitica" id="porcPolitica"/>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>


            <div style="margin-top:40px;" class="col-sm-12">
                <div class="col-sm-4">
                    <button style="" type="button" class="btn-default"  id="calcular">Calcular</button>
                </div>

                <div class="col-sm-4">
                    <button style="" type="button" class="btn-default"  id="guardar">Guardar</button>
                </div> 
                <div class="col-sm-4">
                    <table class="table table-striped" data-toggle="table" id="tablePorc"></table>
                </div>
            </div>

 <br></br> <br></br>
        
            <div style="margin-top:40px;" class="col-sm-12">
                <h3 style="text-align: center;">Garantías y políticas</h3>

            </div>

            <div class="col-sm-12">
                <div class="table-responsive" style='height: 180px; top:0px; ' >

                    <table id="tableGarantias" data-toggle="table" class="table table-striped">
                    </table>
                </div>

            </div>
        </div>
    </body>
</html>
