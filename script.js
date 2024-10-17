const input = document.querySelector('input') ;
const lowerCaseOutput = document.querySelector('#lowerCase span') ;
const upperCaseOutput = document.querySelector('#upperCase span') ;
const camelCaseOutput = document.querySelector('#camelCase span') ;
const pascalCaseOutput = document.querySelector('#pascalCase span') ;
const snakeCaseOutput = document.querySelector('#snakeCase span') ;
const kebabCaseOutput = document.querySelector('#kebabCase span') ;
const trimOutput = document.querySelector('#trim span') ;

function capitalizeString(str){
    const firstChr = str[0].toUpperCase() ;
    return firstChr + str.slice(1,str.length) ;
}

function camelCase(str) {
    const lowerString = str.toLowerCase() ;
    const array = lowerString.split(' ') ;
    const finalArray = array.map(function(word,i){
        // console.log(i,'=>',word);
        if(i===0) {
            return word ;
        }
        else{
            return capitalizeString(word) ;
        }
    })
    return (finalArray.join('')) ;
}

function pascalCase(str) {
    const lowerString = str.toLowerCase() ;
    const array = lowerString.split(' ') ;
    const finalArray = array.map(function(word){
            return capitalizeString(word) ;
    })
    return (finalArray.join('')) ;
}

function snakeCase(str) {
    // const array = str.split(' ') ;
    // return (array.join('_')) ;

    return str.replaceAll(' ','_')
}

function kebabCase(str) {
    // const array = str.split(' ') ;
    // return (array.join('-')) ;

    return str.replaceAll(' ','-') ;
}

function trimCase(str){
    return str.replaceAll(' ' , '') ;
}



// lowerCaseOutput.innerText = input.value.toLowerCase()
// upperCaseOutput.innerText = input.value.toUpperCase()
// camelCaseOutput.innerText = camelCase(input.value)
// pascalCaseOutput.innerText = pascalCase(input.value)


input.addEventListener('input' , function(e){
    lowerCaseOutput.innerText = input.value.toLowerCase().trim()
    upperCaseOutput.innerText = input.value.toUpperCase().trim()
    camelCaseOutput.innerText = camelCase(input.value.trim())
    pascalCaseOutput.innerText = pascalCase(input.value.trim())
    snakeCaseOutput.innerText = snakeCase(input.value.trim()) 
    kebabCaseOutput.innerText = kebabCase(input.value.trim()) 
    trimOutput.innerText = trimCase(input.value.trim()) ;
})

let clear = document.querySelector('#clear') ;
clear.addEventListener('click',
    function(){
        input.value = '' ;
        lowerCaseOutput.innerText = '' ;
        upperCaseOutput.innerText = '' ;
        camelCaseOutput.innerText = '' ;
        pascalCaseOutput.innerText = '' ;
        snakeCaseOutput.innerText = '' ;
        kebabCaseOutput.innerText = '' ;
        trimOutput.innerText = '' ;
    }
)
