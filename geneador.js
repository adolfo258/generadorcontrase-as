const app = document.getElementById('app')
const inputCaracteres = document.getElementById('numero-caracteres')

const configuracion = {
    caracteres: parseInt(inputCaracteres.value),
    simbolos: false,
    numeros: false,
    mayusculas: false,
    minusculas:true
}

const caracteres = {
    numeros: '0 1 2 3 4 5 6 7 8 9',
    simbolos: '° # $ % & / ( ) = ? ¡ @ ~ + - = : , < > * .',
    mayusculas: 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z',
    minusculas: 'a b c d e f g h i j k l m n o p q r s t u v w x y z'
}

app.addEventListener('submit', (e)=>{
   e.preventDefault()
})

document.getElementById('btn-mas-uno').addEventListener('click', ()=>{
    if(configuracion.caracteres < 20){
        configuracion.caracteres++
        inputCaracteres.value = configuracion.caracteres
        }
})
document.getElementById('btn-menos-uno').addEventListener('click', ()=>{
    if(configuracion.caracteres > 1){
    configuracion.caracteres--
    inputCaracteres.value = configuracion.caracteres
    }
})


document.getElementById('btn-simbolos').addEventListener('click',()=>{
    document.getElementById('btn-simbolos').classList.toggle('active')
    if( document.getElementById('btn-simbolos').classList.contains('active')){
        configuracion.simbolos = true
    }else{
        configuracion.simbolos = false
    }   
})
document.getElementById('btn-numeros').addEventListener('click',()=>{
    document.getElementById('btn-numeros').classList.toggle('active')
    if( document.getElementById('btn-numeros').classList.contains('active')){
        configuracion.numeros = true
    }else{
        configuracion.numeros = false
    }
})
document.getElementById('btn-mayusculas').addEventListener('click',()=>{
    document.getElementById('btn-mayusculas').classList.toggle('active')
    if( document.getElementById('btn-mayusculas').classList.contains('active')){
        configuracion.mayusculas = true
    }else{
        configuracion.mayusculas = false
    }
})

document.getElementById('btn-generar').addEventListener('click', ()=>{
    generarPasword()
})


//FUNCIONES--------------------------------


const generarPasword = ()=>{
    let caracteresFinales = ''
    let password = ''
    //recorro cada propiedad del objeto configuracion y si esta activado se lo sumo a caracteresfinales
    for(propiedad in configuracion){
        if(configuracion[propiedad] === true){
            caracteresFinales += caracteres[propiedad] + ' '
        }
    }
    caracteresFinales = caracteresFinales.trim()
    caracteresFinales = caracteresFinales.split(' ')
    //a cada vuelta del ciclo le sumo a password caracteresfinales en una posicion random
    for(let i = 0; i < configuracion.caracteres; i++){
        password = password + caracteresFinales[Math.floor(Math.random() * caracteresFinales.length)]
    }
    
    document.getElementById('input-password').value = password
    
}
