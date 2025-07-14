let perro = {
    nomnbre:"Maicol",
    color: "Colorado",
    edad: 4,
    esAmigable: false,

    ladrar(){
        return "wuau wuau wuau";
    },
    comer: function(){
        return "ñam ñam ñam";
    }
}

console.log(perro);
console.log(perro.nomnbre);
console.log(perro.comer());
console.log(perro.ladrar());