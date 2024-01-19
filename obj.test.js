const main = require('./obj') // Основной объект с набором функций

test('', ()=> { // Получение значений объекта
  expect(main.getPersonInfo(main.person)).toBe(`Имя:John Doe, Возраст:30`)
})
test('', ()=> { // Получение значений объекта (деструктуризация)
  expect(main.getPersonInfo2(main.person)).toBe(`Имя:John Doe, Возраст:30`)
})
test('', ()=> { // Получение площади прямоугольника
  expect(main.calculateArea({width:4,height:6})).toBe(24)
})
test('', ()=> { // Получение площади прямоугольника (деструктуризация)
  expect(main.calculateArea2({width:4,height:6})).toBe(24)
})
test('', ()=> { // Добавление свойства к объекту
  expect(main.addProperty({name:'Roma',age:27},'salary',0)).toEqual({name:'Roma',age:27,salary:0})
})
test('', ()=> { // Создание нового объекта на основе существующего с добавлением поля:id
  expect(main.addUserDetails(main.user)).toEqual({
    name: 'Alice',
    email: 'alice@example.com',
    id: Math.random()
  })
})
test('', ()=> { // Добавление свойства к объекту
  expect(main.getCarInfo(main.car)).toBe(`Марка:toyota модель:camry`)
})
test('', ()=> { // Добавление свойства к объекту
  expect(main.concatObjects({name:'Roma',age:27},{name:'Sasha',car:'ford',nation:'Norway'})).toEqual({
    name:'Roma',
    age:27,
    car:'ford',
    nation:'Norway'
  })
})
