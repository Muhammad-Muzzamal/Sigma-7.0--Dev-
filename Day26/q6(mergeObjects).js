let mergeObjects = (object1, object2) => ({ ...object1, ...object2 });

const obj1 = {
  a: 1,
  b: 2,
};

const obj2 = {
  c: 3,
  d: 4,
};

console.log(mergeObjects(obj1, obj2));
