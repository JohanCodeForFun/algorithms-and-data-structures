// Wherefore art thou
// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// current progress
function whatIsInAName(collection, source) {
  let result = [];

  console.log(Object.keys(source), Object.values(source));
  collection.forEach((element) =>
    console.log(Object.keys(element), Object.values(element))
  );

  return source;
  // collection.forEach(element => console.log(element.hasOwnProperty(Object.keys(element))))
  //console.log(result)
  //console.log(source)

  // checks each object in collection for object.values

  //console.log(Object.keys(element), Object.values(element)))

  return;
}

const result = whatIsInAName(
  [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
  { apple: 1, bat: 2 }
);
console.log(result);

// earlier beatiful code
function whatIsInAName(collections, source) {
  const result = [];

  collections.forEach((object) => {
    let index = 0;
    for (let key in source) {
      if (object[key] === source[key]) {
        index++;
      }
      if (index === Object.keys(source).length) {
        result.push(object);
      }
    }
  });
  return result;
}

console.log(whatIsInAName([{ a: 1, b: 2, c: 3 }], { a: 1, b: 9999, c: 3 }));
