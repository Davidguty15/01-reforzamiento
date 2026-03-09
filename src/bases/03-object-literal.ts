interface Person {
    firstName:string;
    lastName:string;
    age:number;
    address:Address;
}

interface Address {
    postalCode : string;
    city:string;
}

const ironman:Person = {
    firstName: 'Tony',
    lastName : 'Stark',
    age : 45,
    address:{
        postalCode: 'ABC123',
        city:'New York',
    }
};


const spiderman: Person ={
    firstName: "Peter",
    lastName: "Parker",
    age: 22,
    address:{
        postalCode: 'ABC123',
        city:'New York',
    }
};


console.log(ironman, spiderman);

//const spiderman = {...ironman}; --> Esto es para agregarles los atributos de la primera linea osea postalCode y city no los coge

/*      
// Esto es para hacer el clon profundo
const spiderman= structuredClone(ironman);

spiderman.fisrtname = 'Peter';
spiderman.lastName = 'Parker';
spiderman.age = 22;
spiderman.address.city = 'San Jose';

console.log(ironman,spiderman); */