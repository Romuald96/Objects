const person = {
  name: 'John Doe',
  age:30
}
function getPersonInfo(obj) {
  return `Имя:${obj.name}, Возраст:${obj.age}`
}
function getPersonInfo2({name,age}) {
  return `Имя:${name}, Возраст:${age}`
}
function calculateArea(rectangle) {
  return rectangle.widht*rectangle.height
}
function calculateArea2({widht,height}) {
  return widht*height
}
function addProperty(obj, key, value) {
  obj[key]=value;
  return obj;
}
const user1 = {
  name: 'Alice',
  email: 'alice@example.com'
};
function addUserDetails(user) {
  const x = {};
  x.name = user.name;
  x.email = user.email;
  x.id = Math.round(Math.random()*100);
  return x;
}
const car = {
  brand: 'toyota',
  model:'camry'
}
function getCarInfo({brand,model}) {
  return `Марка:${brand} модель:${model}`
}
function concatObjects(obj1, obj2) {
  const Obj3 = {}
  for (let key in obj1) {
    Obj3[key] = obj1[key]
  };
  for (let key in obj2) {
    if (obj2[key]!=Obj3[key]) 
    Obj3[key] = obj2[key]
  }
  return Obj3;
}