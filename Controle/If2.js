function teste1(num) {
    if(num > 7)
        console.log(num); // Propriedade de JS

    console.log("Final");
}

teste1(6);
teste1(8);

function teste2(num) {
    if(num > 7); // Nunca tinha visto também
    
    {
        console.log(num);
    }
}

teste1(6);
teste1(8);