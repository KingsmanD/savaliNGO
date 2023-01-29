$(document).ready(function(){

    const elements = document.querySelectorAll('.info');
    
    for(var i=0;i<elements.length;i++){
        $(elements[i]).click(function(){
            var key = event.target.dataset.par1;
            alert(key);
        })
    }

})