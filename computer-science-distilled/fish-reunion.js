let sea = ["Cod", "Herring", "Merlin"];
let fresh = ["Asp", "Carp", "Ide", "Trout"];

let fishReunion = (sea, fresh) => {
  let sortedFish = [];
//   let sortedFish = [...fresh, ...sea];
//   console.log(sortedFish.length)
//   sortedFish.sort();

  sortedFish.sort((a, b) => {});

  while (sea.length !== 0 && fresh.length !== 0) {
    if (sea[sea.length - 1] < fresh[fresh.length - 1]) {
      console.log("sea test");
      sortedFish.push(sea[sea.length - 1]);
      console.log("first if: " + sortedFish);
      sea.pop();
      console.log(sea)
    } else {
      console.log("fresh test");
      sortedFish.push(fresh[fresh.length - 1]);
      fresh.pop();
      console.log(fresh)
    }
    if (sea.length !== 0) {
      sortedFish.push(sea[sea.length - 1]);
      console.log("first if: " + sortedFish);
      sea.pop();
    }
    if (sea[sea.length - 1] > fresh[fresh.length - 1]) {
      console.log("fresh test");
      sortedFish.push(fresh[fresh.length - 1]);
      fresh.pop();
    }
  }

  console.log(sortedFish);
  return sortedFish;
};

console.log(fishReunion(sea, fresh));
// Expected outcome, list of sorted fresh and sea water fish
