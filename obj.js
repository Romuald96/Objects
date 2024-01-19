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
  return rectangle.width*rectangle.height
}
function calculateArea2({width,height}) {
  return width*height
}
function addProperty(obj, key, value) {
  obj[key]=value;
  return obj;
}
const mockMath = Object.create(global.Math);
mockMath.random = () => 0.5;
global.Math = mockMath;
const user = {
  name: 'Alice',
  email: 'alice@example.com'
};
function addUserDetails(user) {
  const x = {};
  for (let key in user) {
    x[key] = user[key]
  }
  x.id = Math.random();
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
  const obj3 = {};
  let arr1 = Object.entries(obj1);
  let arr2 = Object.entries(obj2);
  let concatedArr = arr2.concat(arr1);
  for (let [key,value] of concatedArr){
    obj3[key]=value;
  }
  return obj3;
}
module.exports= {getPersonInfo,getPersonInfo2,getCarInfo,concatObjects,addUserDetails,addProperty,calculateArea,calculateArea2,person,user,car,mockMath}
