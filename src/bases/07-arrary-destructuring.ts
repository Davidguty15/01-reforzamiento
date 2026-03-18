const characterNames = ["Goku", "Vegeta", "Trunks"];

// Sacar a Trunks
const [, , personaje3] = characterNames;
// imorimirlo en consola
console.log({ personaje3 });

const returnsArrayFn = () => {
  return ["ABC", 123] as const; //
};

const [letras, numeros] = returnsArrayFn();

const useState = (value: string) => {
  return [
    value,
    (newValue: string) => {
      console.log(newValue);
    },
  ] as const;
};

const[name, setName] = useState('Goku');

console.log(name);
setName('Vegeta');


