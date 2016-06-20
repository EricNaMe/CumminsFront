<script>

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
	        }
	    }).fail(function(e) {
	                $('#headerModal').html('Ocurrio un error al enviar la informacion');
	                $('#closeModal').css('display', '');
	    });


</script>


<label for="dr">DR</label>
<select id ="dr" name="dr" class="form-control" style="width:200px;"></select>