//só é chamado depois que todo html for carregado e analisado
document.addEventListener("DOMContentLoaded", () => {
    const celulas = document.querySelectorAll('td');
    let p_current = true;

    let px = 'X';
    let p0 = '0';
    

    celulas.forEach(celula => {
            celula.addEventListener('click', clickOutCome)

    })

    function clickOutCome(event){
        
        const celulaArray = Array.from(celulas);
        const index = celulaArray.indexOf(event.target);
        
        if(p_current == true){
            celulas[index].innerHTML = px;
                              
            
        }else {
            celulas[index].innerHTML = p0;
        } 

        p_current = !p_current;      
        

    }

})