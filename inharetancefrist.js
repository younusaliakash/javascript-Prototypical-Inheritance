//**Prototype 1st Implement */
// function Shape (){

// }
// Shape.prototype = {
//     common : function(){
//         console.log('I am Common')
//     }
// }

// function Squre (width){
//     this.width = width
// }

// Squre.prototype = Object.create(Shape.prototype)
// Squre.prototype.draw = function(){
//         console.log('I am Draw')
//     }

// var sap = new Shape()
// var sqr = new Squre(5)

// function Circle(){

// }
// Circle.prototype = Object.create(Shape.prototype)

// var cir = new Circle()

//**Rest Constructor in prototype */
// function Shape (){

// }
// Shape.prototype.common = function(){
//         console.log('I am Common')
//     }


// function Squre (width){
//     this.width = width
// }

// Squre.prototype = Object.create(Shape.prototype)
// Squre.prototype.constructor = Squre
// Squre.prototype.draw = function(){
//         console.log('I am Draw')
//     }

// var sap = new Shape()
// var sqr = new Squre(5)

// function Circle(){

// }
// Circle.prototype = Object.create(Shape.prototype)

// var cir = new Circle()

//**Super callling Method in Prototype */

// function Shape (color){
//     this.color = color
// }
// Shape.prototype.common = function(){
//         console.log('I am Common')
//     }


// function Squre (width){
//     Shape.call(this, 'Turkish Blue')
//     this.width = width
// }

// Squre.prototype = Object.create(Shape.prototype)
// Squre.prototype.constructor = Squre
// Squre.prototype.draw = function(){
//         console.log('I am Draw')
//     }

// // var sap = new Shape()
// var sqr = new Squre(5, 'green')

// function Circle(){

// }
// Circle.prototype = Object.create(Shape.prototype)

// var cir = new Circle()

//**Extends Function for use prototypeing  */
// function extend (parents, child){
//     child.prototype = Object.create(parents.prototype)
//     child.prototype.constructor = child
// }

// function Shape (color){
//     this.color = color
// }
// Shape.prototype.common = function(){
//         console.log('I am Common')
//     }


// function Squre (width){
//     Shape.call(this, 'Turkish Blue')
//     this.width = width
// }

// extend(Shape, Squre)
// Squre.prototype.draw = function(){
//         console.log('I am Draw')
//     }

// // var sap = new Shape()
// var sqr = new Squre(5, 'green')

// function Circle(redius, color){
//     Shape.call (this,color)
//     this.redius = redius
// }
// extend(Shape, Circle)

// // var cir = new Circle()

//**Method Overriding */
// function extend (parents, child){
//     child.prototype = Object.create(parents.prototype)
//     child.prototype.constructor = child
// }

// function Shape (color){
//     this.color = color
// }
// Shape.prototype.common = function(){
//         console.log('I am Common')
//     }


// function Squre (width){
//     Shape.call(this, 'Turkish Blue')
//     this.width = width
// }

// extend(Shape, Squre)
// Squre.prototype.draw = function(){
//         console.log('I am Draw')
//     }

// // var sap = new Shape()
// var sqr = new Squre(5, 'green')

// function Circle(redius, color){
//     Shape.call (this,color)
//     this.redius = redius
// }

// extend(Shape, Circle)

// Circle.prototype.common = function(){  //Override or Update 
//     Shape.prototype.common.call(this)
//     console.log('I am Change')
// }

// var cir = new Circle()

//**Polymarfusom */
// function extend (parents, child){
//     child.prototype = Object.create(parents.prototype)
//     child.prototype.constructor = child
// }

// function Shape (color){
//     this.color = color
// }
// Shape.prototype.common = function(){
//         console.log('I am Common')
//     }


// function Squre (width){
//     Shape.call(this, 'Turkish Blue')
//     this.width = width
// }

// extend(Shape, Squre)
// Squre.prototype.draw = function(){
//         console.log('I am Draw')
//     }
// Squre.prototype.common = function(){ 
//     console.log('I am Change from Squre')
// }
// // var sap = new Shape()
// var sqr = new Squre(5, 'green')

// function Circle(redius, color){
//     Shape.call (this,color)
//     this.redius = redius
// }

// extend(Shape, Circle)

// Circle.prototype.common = function(){  //Override or Update 
//     // Shape.prototype.common.call(this)
//     console.log('I am Change')
// }
// var cir = new Circle(65, 'green')
// var sap = new Shape ('Pirple')

// var arr = [sap, sqr, cir]
// for (var i of arr){
//     i.common()
// }

//**Inhararitance and composition mixing */
function mixing(terget, ...source){
    Object.assign(terget, ...source)
}

var canWalk = {
    walk: function () {
        console.log('Walking')
    }
}

var canEat = {
    eat : function () {
        console.log('Eating')
    }
}
var canSwim ={
    swim: function (){
        console.log('Swiming..')
    }
}
// var person = Object.assign({}, canWalk, canEat)
// person.name = 'Ya Akash'
// console.log(person)

function Person(name){
    this.name = name
}

// Object.assign(Person.prototype, canWalk, canEat) /this code include mixxing functon

mixing(Person, canWalk, canEat)
var person = new Person('Ya AKAsh')
console.log(person)

function Goldfish (name){
    this.name = name
}

mixing(Goldfish.prototype, canEat, canSwim)

var fish = new Goldfish('Bal Bla Bla')
console.log(fish)
