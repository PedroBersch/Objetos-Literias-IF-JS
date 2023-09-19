//objeto heroi
const hero = {
    name : "Gerald",
    energy: 100,
    reduceEnergy: function(damage){
        this.energy - this.energy - damage;
    },
    getStatus: function(){
        if(this.energy > 0) return 1;
        else if(this.energy <= 0) return -1 
    },
    power: 10,
    atack: function(power){
        return randomNumber = Math.floor(Math.random() * power) + 1;
    }
}
const villian = Object.create(hero);
villian.name = "Ciri";
villian.energy = 80;
villian.power = 20;

console.log(villian.energy)

arrayA = [1, 2, 3, 4, 5];
arrayB = [1, 2, 3, 4, 5];
console.log(compareArrays(arrayA, arrayB));
const obj1 = { name: "John", age: 30, city: "New York" };
const obj2 = { name: "John", age: 30, city: "New York" };
const obj3 = { name: "Alice", age: 25, city: "Los Angeles" };
console.log(compareObjects(obj1, obj2));
console.log(compareObjects(obj1, obj3));

//functions
function compareArrays(arrayA, arrayB) {
  if (arrayA.length != arrayB.length) return false;
  let i;
  for (i = 0; i < arrayA.length; i++) {
    if (arrayA[i] != arrayB[i]) {
      return false;
    }
    if (arrayB[i] != arrayA[i]) {
      return false;
    }
  }
  return false;
}
function compareObjects(objA, objB) {
  let keysA = Object.keys(objA);
  let keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;
  for (let i = 0; i < keysA.length; i++) {
    let key = keysA[i];
    if (objA[key] !== objB[key]) return false;
  }
  return true;
}
