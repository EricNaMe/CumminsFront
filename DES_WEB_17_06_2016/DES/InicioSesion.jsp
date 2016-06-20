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

<script>

    var oem = [];
    $(function() {
    	cargarDR(null);
        
    	
    	$('#dr').on('change', function() {

            $('#codigoDR').val($('#dr').val());
            $("#codigoDeal").val("");

            cargarDealers($('#dr').val(), null);
            //cargarDR(null);
        });

        $('#dealer').on('change', function() {
            $("#codigoDeal").val($('#dealer').val());
        });
    });

    function cargarDR(drCode) {
        $.ajax({
            dataType: "text",
            url: "ObtenerDR",
            method: "POST",
            beforeSend: function() {

            }
        }).done(function(e) {
            if (e === 'error') {
                alert('Ocurrio un error al cargar catalogo de distribuidores');
            } else {
                json = $.parseJSON(e);
                $('#dr').html($("<option></option>"));
                for (var i = 0; i < json.length; i++) {
                    $('#dr')
                            .append($("<option></option>")
                                    .attr("value", json[i].value)
                                    .text(json[i].text));
                }

                $('#dr').val(drCode);
                $('#dr').val(drCode);
            }
        }).fail(function(e) {
            $('#headerModal').html('Ocurrio un error al enviar la informacion');
            $('#closeModal').css('display', '');
        });
    }


    function cargarDealers(drCode, sp_code) {
        $.ajax({
            dataType: "text",
            url: "ObtenerDealer?id_dr=" + drCode,
            method: "GET",
            beforeSend: function() {

            }
        }).done(function(e) {
            if (e === 'error') {
                alert('Ocurrio un error al cargar catalogo de rangos');
            } else {
                json = $.parseJSON(e);
                $('#dealer').html($("<option></option>"));
                for (var i = 0; i < json.length; i++) {
                    $('#dealer').append($("<option></option>")
                            .attr("value", json[i].value)
                            .text(json[i].text));
                    oem[i] = json[i].oem;
                    //oem[i]=json[i].oem;
                }
                $('#dealer').val(sp_code);
            }
        }).fail(function(e) {
            $('#headerModal').html('Ocurrio un error al cargar catalogo de rangos');
            $('#closeModal').css('display', '');
        });
    }

    function cargarFechas() {
        var tipoEval = $('#tipo_eval').val();
        var revision = $('#revision').val();
        var anio = $('#anio').val();
        if (tipoEval != '' && revision != '' && anio != '') {
            $.ajax({
                dataType: "text",
                data: {tipoEval: tipoEval, revision: revision, anio: anio},
                url: "ObtenerFechas",
                method: "GET",
                beforeSend: function() {
                }
            }).done(function(e) {
                if (e === 'error') {
                    alert('Ocurrio un error al cargar catalogo de rangos');
                } else {
                    json = $.parseJSON(e);
                    for (var i = 0; i < json.length; i++) {
                        $('#datepicker').val(json[i].fechaEval);
                        $('#datepicker2').val(json[i].fechaIni);
                        $('#datepicker3').val(json[i].fechaFin);
                    }
                }
            }).fail(function(e) {
                $('#headerModal').html('Ocurrio un error al cargar catalogo de rangos');
                $('#closeModal').css('display', '');
            });
        } else {
            $('#datepicker').val('');
            $('#datepicker2').val('');
            $('#datepicker3').val('');
        }
    }
    /*
    function clicMenu(){
    	window.location = "header.jsp";
    }*/
    
    function cargarDR(drCode) {
        $.ajax({
            dataType: "text",
            url: "ObtenerDR",
            method: "POST",
            beforeSend: function() {

            }
        }).done(function(e) {
            if (e === 'error') {
                alert('Ocurrio un error al cargar catalogo de distribuidores');
            } else {
                json = $.parseJSON(e);
                $('#dr').html($("<option></option>"));
                for (var i = 0; i < json.length; i++) {
                    $('#dr')
                            .append($("<option></option>")
                                    .attr("value", json[i].value)
                                    .text(json[i].text));
                }

                $('#dr').val(drCode);
                $('#dr').val(drCode);
            }
        }).fail(function(e) {
            $('#headerModal').html('Ocurrio un error al enviar la informacion');
            $('#closeModal').css('display', '');
        });
    }
</script>


        <style type="text/css">

            body {   
                background-image: url('img/bg01.bmp');
                margin:0px;
            }

            .encabezado {
                background-color:#FF0000;
                margin-left:10px;
                margin-right:10px;
                margin-top:10px;
                margin-bottom:10px;
                border:black 8px solid;
                border-spacing: 8px;
            }

            .contenido {
                border-radius: 5px;
                margin-top:0px;
                background-image:url('img/bg01.bmp');
                height:520px;
                margin-left:10px;
                margin-right:10px;
                margin-bottom:10px;
            }


            .TextFormat a {
                color:#000000;
                background-color: transparent;
            }

            .groupRow a{
                background-color: #D3D3D3;
            }
            .groupRow td{
                background-color: #D3D3D3;
            }
        </style>
        <div class="encabezado">
                <img src="img/cummins.gif"  height="70px" alt="ABO IT" />     
                <img src="img/global.bmp"  height="70px" alt="Global" align="right" /><BR>
            	<a style="background-color: red; text-align: right;" href="https://access.cummins.com/RC_OnlineLogin/cola/logoutend.jsp">Cerrar Sesion</a>
            </div><BR>
<div style=" position:realtive; top:20px; height:140%; width:90%; text-align: center; border: 2px; ">

<form action="SetSession">

<div class="col-sm-4">
    <div class="col-xs-3">
        <label class="" for="dr">DR:</label>
    </div>
    <div class="col-xs-9">
        <select readonly style="background-color:#ffffff;"  class="col-md-5 form-control" id="dr" name="dr"></select>
    </div>
</div>

<br><br><br>   

<div class="col-sm-4">
    <div class="col-xs-3" >
        <label class="" for="dealer">Dealer:</label>
    </div>
    <div class="col-xs-9">
        <select readonly style="background-color:#ffffff;"  class="col-md-5 form-control" id="dealer" name="dealer"></select>
    </div>
</div>

<br><br><br>  

<div class="col-sm-4">
    <div class="col-sm-3">
        <label  for="tipo_eval">Tipo de Evaluación:</label>
    </div>
    <div class="col-sm-9" >
        <select readonly style="background-color:#ffffff;" onchange="cargarFechas();" id ="tipo_eval" name="tipo_eval" class="form-control" >
            <option></option>
            <option value = 'E' >Evaluación</option>
            <option value = 'P' >Pre evaluación</option>
        </select>
    </div>
</div>

<br><br><br>  

<div class="col-sm-4">
    <div class="col-sm-3">
        <label  for="revision">Revisión:</label>
    </div>
    <div class="col-sm-9">
        <select readonly style="background-color:#ffffff;" onchange="cargarFechas();" class="form-control" id ="revision" name="revision" class="form-control" >
            <option></option>
            <option value = '1' >1a</option>
            <option value = '2' >2a</option>
            <!--option value = '3' >3a</option-->
        </select>
    </div>    
</div>

<br><br><br>  

<div class="col-xs-4">
    <div class="col-sm-3">
        <label for="anio">Año:</label>
    </div>
    <div class="col-sm-9">
        <select readonly style="background-color:#ffffff;" onchange="cargarFechas();" class="form-control" id="anio" name="anio">
            <!--<option></option>
            option>2005</option> <option>2006</option> <option>2007</option>
            <option>2008</option> <option>2009</option> <option>2010</option>
            <option>2011</option> <option>2012</option> <option>2013</option>
            <option>2014</option> <option>2015</option--> <option>2016</option>
            <option>2017</option> <option>2018</option> <option>2019</option>
            <option>2020</option> <option>2021</option> <option>2022</option>
            <option>2023</option> <option>2024</option> <option>2025</option>
            <option>2026</option> <option>2027</option> <option>2028</option>
            <option>2029</option> <option>2030</option>
        </select>
    </div>
</div>

<br><br><br>
<input type="submit" value="OK" class="btn btn-default">
</form>
<!-- 
<div style="display:inline-block;">
    <button  type="button" class="btn btn-default" onClick="clicMenu()"  id="entrar">OK</button>
</div> 
 -->
</div>
