module.exports = function toReadable (number) {
let number_str = String(number);
let number_total = '';    
// for (let i = 0; i < number_str.length; i++) {
    if (number_str.length == 3) {
        if (number_str[0] == '1') number_total = 'one';
        if (number_str[0] == '2') number_total = 'two';
        if (number_str[0] == '3') number_total = 'three';
        if (number_str[0] == '4') number_total = 'four';
        if (number_str[0] == '5') number_total = 'five';
        if (number_str[0] == '6') number_total = 'six';
        if (number_str[0] == '7') number_total = 'seven';
        if (number_str[0] == '8') number_total = 'eight';
        if (number_str[0] == '9') number_total = 'nine';
        number_total = number_total + ' hundred';
        if (number_str[1] == 0 || number_str[1] == 1) {       
        if (number_str.slice(1) == '01') number_total = number_total + ' one';
        if (number_str.slice(1) == '02') number_total = number_total + ' two';
        if (number_str.slice(1) == '03') number_total = number_total + ' three';
        if (number_str.slice(1) == '04') number_total = number_total + ' four';
        if (number_str.slice(1) == '05') number_total = number_total + ' five';
        if (number_str.slice(1) == '06') number_total = number_total + ' six';
        if (number_str.slice(1) == '07') number_total = number_total + ' seven';
        if (number_str.slice(1) == '08') number_total = number_total + ' eight';
        if (number_str.slice(1) == '09') number_total = number_total + ' nine';  
        if (number_str.slice(1) == '10') number_total = number_total + ' ten';
        if (number_str.slice(1) == '11') number_total = number_total + ' eleven';
        if (number_str.slice(1) == '12') number_total = number_total + ' twelve';
        if (number_str.slice(1) == '13') number_total = number_total + ' thirteen';
        if (number_str.slice(1) == '14') number_total = number_total + ' fourteen';
        if (number_str.slice(1) == '15') number_total = number_total + ' fifteen';
        if (number_str.slice(1) == '16') number_total = number_total + ' sixteen';
        if (number_str.slice(1) == '17') number_total = number_total + ' seventeen';
        if (number_str.slice(1) == '18') number_total = number_total + ' eighteen';
        if (number_str.slice(1) == '19') number_total = number_total + ' nineteen';
        }
        if (number_str[1] > 1) {   
        if (number_str[1] == '2') number_total = number_total + ' twenty';
        if (number_str[1] == '3') number_total = number_total + ' thirty';
        if (number_str[1] == '4') number_total = number_total + ' forty';
        if (number_str[1] == '5') number_total = number_total + ' fifty';
        if (number_str[1] == '6') number_total = number_total + ' sixty';
        if (number_str[1] == '7') number_total = number_total + ' seventy';
        if (number_str[1] == '8') number_total = number_total + ' eighty';
        if (number_str[1] == '9') number_total = number_total + ' ninety';
        if (number_str[2] == '1') number_total = number_total + ' one';
        if (number_str[2] == '2') number_total = number_total + ' two';
        if (number_str[2] == '3') number_total = number_total + ' three';
        if (number_str[2] == '4') number_total = number_total + ' four';
        if (number_str[2] == '5') number_total = number_total + ' five';
        if (number_str[2] == '6') number_total = number_total + ' six';
        if (number_str[2] == '7') number_total = number_total + ' seven';
        if (number_str[2] == '8') number_total = number_total + ' eight';
        if (number_str[2] == '9') number_total = number_total + ' nine';
        }
        

    }

    if (number_str.length == 2) {
        if (number_str[0] == 1) {       
        if (number_str == '10') number_total = number_total + 'ten';
        if (number_str == '11') number_total = number_total + 'eleven';
        if (number_str == '12') number_total = number_total + 'twelve';
        if (number_str == '13') number_total = number_total + 'thirteen';
        if (number_str == '14') number_total = number_total + 'fourteen';
        if (number_str == '15') number_total = number_total + 'fifteen';
        if (number_str == '16') number_total = number_total + 'sixteen';
        if (number_str == '17') number_total = number_total + 'seventeen';
        if (number_str == '18') number_total = number_total + 'eighteen';
        if (number_str == '19') number_total = number_total + 'nineteen';
        }
        if (number_str[0] > 1) {   
        if (number_str[0] == '2') number_total = number_total + 'twenty';
        if (number_str[0] == '3') number_total = number_total + 'thirty';
        if (number_str[0] == '4') number_total = number_total + 'forty';
        if (number_str[0] == '5') number_total = number_total + 'fifty';
        if (number_str[0] == '6') number_total = number_total + 'sixty';
        if (number_str[0] == '7') number_total = number_total + 'seventy';
        if (number_str[0] == '8') number_total = number_total + 'eighty';
        if (number_str[0] == '9') number_total = number_total + 'ninety';
        if (number_str[1] == '1') number_total = number_total + ' one';
        if (number_str[1] == '2') number_total = number_total + ' two';
        if (number_str[1] == '3') number_total = number_total + ' three';
        if (number_str[1] == '4') number_total = number_total + ' four';
        if (number_str[1] == '5') number_total = number_total + ' five';
        if (number_str[1] == '6') number_total = number_total + ' six';
        if (number_str[1] == '7') number_total = number_total + ' seven';
        if (number_str[1] == '8') number_total = number_total + ' eight';
        if (number_str[1] == '9') number_total = number_total + ' nine';
        }
        

    }

    
    if (number_str.length == 1) {
        // if (number_str[1] == 0 || number_str[1] == 1) {
        if (number_str == '0') number_total ='zero';       
        if (number_str == '1') number_total ='one';
        if (number_str == '2') number_total = 'two';
        if (number_str == '3') number_total = 'three';
        if (number_str == '4') number_total = 'four';
        if (number_str == '5') number_total = 'five';
        if (number_str == '6') number_total = 'six';
        if (number_str == '7') number_total = 'seven';
        if (number_str == '8') number_total = 'eight';
        if (number_str == '9') number_total = 'nine';  
        
        // }
        // if (number_str[1] > 1) {   
        // if (number_str[1] == '2') number_total = number_total + ' twenty';
        // if (number_str[1] == '3') number_total = number_total + ' thirty';
        // if (number_str[1] == '4') number_total = number_total + ' forty';
        // if (number_str[1] == '5') number_total = number_total + ' fifty';
        // if (number_str[1] == '6') number_total = number_total + ' sixty';
        // if (number_str[1] == '7') number_total = number_total + ' seventy';
        // if (number_str[1] == '8') number_total = number_total + ' eighty';
        // if (number_str[1] == '9') number_total = number_total + ' ninety';
        // if (number_str[2] == '1') number_total = number_total + ' one';
        // if (number_str[2] == '2') number_total = number_total + ' two';
        // if (number_str[2] == '3') number_total = number_total + ' three';
        // if (number_str[2] == '4') number_total = number_total + ' four';
        // if (number_str[2] == '5') number_total = number_total + ' five';
        // if (number_str[2] == '6') number_total = number_total + ' six';
        // if (number_str[2] == '7') number_total = number_total + ' seven';
        // if (number_str[2] == '8') number_total = number_total + ' eight';
        // if (number_str[2] == '9') number_total = number_total + ' nine';
        // }
        

    }

return number_total;  
}
