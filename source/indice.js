function CalculaDefinitiva(arreglo) {
    let definitiva = (n1,n2,n3,n4,n5)=>{
        let nota=(n1+n2+n3+n4+n5)/5
        return nota
    }
    return definitiva
}
function CalculaNotaMayor(arreglo) {
    for (let i = 0; i < arreglo["estudiantes"].length; i++) {
        let notamayor
        if (arreglo["estudiantes"][i] > notamayor) {
            notamayor = arreglo["estudiantes"][i]
        }
    }
    return notamayor
}
function Repitentes(definitiva, arreglo) {
    let repitentes=[]
    for(let i = 0; i < definitiva.length; i++){
        if(definitiva[i]<2.0){
            repitentes[i]=arreglo["estudiantes"].nombre
        }
    }
    return repitentes
}
function Habilitan(definitiva, arreglo){
    let recuperan=[]
    for(let i = 0; i < definitiva.length; i++){
        if(definitiva[i]<3 && definitiva[i]>2.0){
            recuperan[i]=arreglo["estudiantes"].nombre
        }
    }
    return recuperan
}
function Aprueban(definitiva,arreglo){
    let aprueban=[]
    for(let i = 0; i < definitiva.length; i++){
        if(definitiva[i]<3 && definitiva[i]>2.0){
            aprueban[i]=arreglo["estudiantes"].nombre
        }
    }
    return aprueban
}
