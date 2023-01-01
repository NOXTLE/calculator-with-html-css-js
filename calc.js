function sum(){

    
    
    let a=document.getElementById("input").value;
   
    
   

    let val=document.getElementById("sum_");
    let total=eval(a);
    
      
    if(a==0){
        val.style="color:red";
        val.innerHTML=total; 
    }
    else{

    
    
    val.style="color:lime";
    val.innerHTML=total;   
    }
}

