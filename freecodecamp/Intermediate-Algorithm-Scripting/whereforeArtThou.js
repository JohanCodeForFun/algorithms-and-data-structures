// Wherefore art thou
// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

function whatIsInAName(collection, source) {
  const result = collection.filter((element) => {
    for (let i in source) {
      if (source[i] !== element[i]) {
        return false;
      }
    }
    return true;
  });
  return result;
}

// current progress
function whatIsInAName(collection, source) {
  let result = [];

  // 16/1/2023

  const obj1Keys = Object.keys(collection[2]);
  const srcKeys = Object.keys(source);

  //console.log(obj1Keys)
  //console.log(srcKeys)

  for (let objKey of obj1Keys) {
    if (obj1Keys[objKey] === srcKeys[objKey]) {
      result.push(collection[2]);
    }
  }

  const collectionArr = Object.entries(collection);
  const collectionValues = Object.values(collection);
  const collectionKeys = Object.keys(collection);
  //console.log(collectionValues)

  collection.filter((element) => {
    const elementValues = Object.values(element);
    const sourceValues = Object.values(source);
    if (elementValues[0] !== sourceValues[0]) {
      //console.log(false)
    }

    //console.log(Object.keys(element))
    //console.log(Object.keys(source))
    //console.log(Object.hasOwn(element, 'last'))
    //console.log(Object.hasOwn(source, 'last'))
  });
  let col1 = Object.keys(collection[0]);
  let col2 = Object.keys(collection[0]);
  let src = Object.keys(source);
  console.log(JSON.stringify(col1) === JSON.stringify(src));
  //console.log(JSON.stringify(col1))
  //console.log(JSON.stringify(src))

  collection.filter((element) => {
    const searchElement = JSON.stringify(element);
    const sourceElement = JSON.stringify(source);
    console.log(searchElement.includes("last"), "includes");

    if (searchElement.includes("last") === sourceElement.includes("last")) {
      result.push(element);
    }
    console.log(sourceElement);
    console.log(searchElement);
    //console.log(searchElement, " <00")
    //console.log(sourceElement, "<11")
  });

  return result;

  // 14/1/2023
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
