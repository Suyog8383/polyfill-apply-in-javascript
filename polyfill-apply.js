let obj = { name: "suyog" };
const greeting = function (a, b) {
  return a + this.name + b;
};

Function.prototype.myApply = function (scope, args) {
  scope._this = this;
  return scope._this(...args);
};

console.log(greeting.myApply(obj, ["hello ", ", How are you?"]));
console.log(greeting.apply(obj, ["hello ", ", How are you?"]));
