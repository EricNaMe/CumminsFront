/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function validateNumber(value, req) {

    if (req === true) {
        if (validateEmpty(value) !== '')
            return 'Este campo es requerido';
    }


    if (isNaN(value)) {
        return 'Este campo debe ser numerico';
    }
    return '';
}

function validateNumberMin(value, req) {

    if (req === true) {
        if (validateEmpty(value.trim()) !== '')
            return 'Este campo es requerido';
        
        if (value.trim() <= 0 && value.trim() != 'B'){
            return 'Este campo no puede ser menor o igual a 0';
        }
    } else {
    	if (value.trim() < 0  && value.trim() != 'B'){
            return 'Este campo no puede ser menor a 0';
        }
    }
    
    if (isNaN(value.trim()) && value.trim() != 'B' ) {
        return 'Este campo debe ser numerico';
    }
    return '';
}


function validateEmpty(value) {
    value = $.trim(value);
    if (!value) {
        return 'Este campo es requerido';
    }
    return '';
}


