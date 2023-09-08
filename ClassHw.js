var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Display class data using advanced features of typescript
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.speak = function () {
        console.log("".concat(this.name, " makes a sound"));
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, breed) {
        var _this = _super.call(this, name) || this;
        _this.breed = breed;
        return _this;
    }
    Dog.prototype.speak = function () {
        console.log("".concat(this.name, " barks"));
    };
    Dog.prototype.displayInfo = function () {
        console.log("Name: ".concat(this.name, ", Breed: ").concat(this.breed));
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name, color) {
        var _this = _super.call(this, name) || this;
        _this.color = color;
        return _this;
    }
    Cat.prototype.speak = function () {
        console.log("".concat(this.name, " meows"));
    };
    Cat.prototype.displayInfo = function () {
        console.log("Name: ".concat(this.name, ", Color: ").concat(this.color));
    };
    return Cat;
}(Animal));
var dog = new Dog("Buddy", "Golden Retriever");
var cat = new Cat("Whiskers", "Calico");
dog.displayInfo();
dog.speak();
cat.displayInfo();
cat.speak();
