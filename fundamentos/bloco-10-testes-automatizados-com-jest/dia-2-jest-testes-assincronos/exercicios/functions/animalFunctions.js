const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalsByType = (type) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.type === type);
      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      };

      return reject({ error: 'Não possui esse tipo de animal.' });
    }, 100);
  })
  );

const getListAnimals = (type) => (
  findAnimalsByType(type).then(list => list)
  );

const findAnimalByName = (name) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Animals.find(({ name : animalName }) => name === animalName));
      reject ('Nenhum animal com esse nome!');
    }, 200);
  })
);

const getAnimal = (name) => {
  return findAnimalByName(name).then(data => data)
};

const findAnimalByAge = (age) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Animals.filter(({ age : animalAge }) => age === animalAge));
      reject ('Nenhum animal com essa idade');
    }, 200);
  })
);

const getAnimalByAge = (age) => {
 return findAnimalByAge(age).then(data => data);
}

module.exports = {
  findAnimalsByType,
  findAnimalByName,
  getListAnimals,
  getAnimal,
  findAnimalByAge,
  getAnimalByAge,
}