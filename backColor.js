let colorArray = ['#FFFF00', 
                '#FF0000',      
                '#00FF00',      
                '#0000FF',      
                '#000000', 
                '#FFA500',      
                '#FFC0CB'];
                
function newColor () {
    let index = Math.floor(Math.random() * (colorArray.length));
    
    document.body.style.backgroundColor = colorArray[index];
}
