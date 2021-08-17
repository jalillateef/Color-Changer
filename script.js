const backgroundColor = document.getElementById('background-color')
const colorName = document.getElementById('color')
const btn = document.getElementById('btn')
const colors= ['aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 
'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red', 
'silver', 'teal', 'white', 'yellow'];

btn.addEventListener('click', function(){
    // Get a random number
    function getRandomNumber(){
        return Math.floor(Math.random() * colors.length)
    }
    
    console.log(getRandomNumber())
    

    // Make background color equal random
    backgroundColor.style.backgroundColor = colors[getRandomNumber()]
    colorName.textContent = backgroundColor.style.backgroundColor

   

    
    
})



