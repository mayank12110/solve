function myfunc(){
    const number = document.getElementById("fii").value;
    
    
    if(number % 2 == 0) {
        document.getElementsByName('display')[0].value= "even no";
    }
    
    
    else {
        document.getElementsByName('display')[0].value= "odd no";
    
       
    }
    
       }
       function celsius(){
      
        let c = document.getElementById("cf").value;
        let f = (c * 1.8)+ 32 ;
        document.getElementsByName("fahrenheit")[0].value=f + 'f' ;    


       }
       function myfunction() 
 {
              let a = document.getElementById('a').value;
             let b = document.getElementById('b').value;
             let c =   document.getElementById('c').value;
                 let root1 , root2 ;
    
              let D = b*b-(4*a*c);
               if (D>0){
              root1 = (-b+Math.sqrt(D))/(2*a);
              root2 = (-b - Math.sqrt(D))/(2*a);
            document.getElementsByName("fi")[0].value  =`The roots of quadratic equation are ${root1} and ${root2}`;
              }
            else if(D==0){
           root1= root2 = -b/(2*a) ;
           document.getElementsByName("fi")[0].value = "first root ="+ root1 +"second root ="+root2;
    
               }
                  else{
                   let R = (-b/(2*a )).toFixed(2);
             let I =  (Math.sqrt(-D)/(2*a)).toFixed(2);
             document.getElementsByName("fi")[0].value= `The roots of quadratic equation are ${R} + ${I}i and ${R} - ${I}i` ;
       
               }
   } 
document.getElementById("fi").style.color = "black"; 
document.getElementById("fi").style.fontSize = "40px"; 