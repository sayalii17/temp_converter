const degree= document.getElementById('degree');

function checkButton() {  

            let inputVal= degree.value;  
            
            if(document.getElementById('cel').checked) {   
                const celToFah= (inputVal* 9) / 5 + 32;
                document.getElementById("val").innerHTML= celToFah.toFixed(3)+ ' &deg;f' ;

               const celToKel= (inputVal+ 273.15);
               document.getElementById("val1").innerHTML= celToKel+ ' K' ; 
            }   
            else if(document.getElementById('fahr').checked) {   
                const fahrToCel= (inputVal-32) * (5/9);
                document.getElementById("val").innerHTML= fahrToCel.toFixed(3)+ ' &deg;c' ;

                const fahrToKel= (inputVal- 32) * 5 / 9 + 273.15;
                document.getElementById("val1").innerHTML= fahrToKel.toFixed(3)+ ' K' ;
            }   
            else if(document.getElementById('kel').checked) {   
                const kelToCel= (inputVal- 273.15);
                document.getElementById("val").innerHTML= kelToCel.toFixed(3)+ ' &deg;c' ;   

                const kelToFah= (inputVal- 273.15) * 9 / 5 + 32;
                document.getElementById("val1").innerHTML= kelToFah.toFixed(3)+ ' &deg;f' ;   
            }  
            else {   
                document.getElementById("val").innerHTML="You have not selected any Conversion Type";
            }   
        }   



