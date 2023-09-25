"user:strict";
//-------for task-1----------------------------
// import * as mod from "./modul.mjs";
// console.log(mod.d);
// let dd = 5,
//   ss = 5;
// console.log(mod.sum(dd, ss));

//-----------for-task-2----------------------------
function chakDiv(mutationRecords) {
  let record = mutationRecords[0];
  console.log(record);
  if (record.target.textContent.length > 5) {
    document.getElementById("test").style.color = "green";
  } else {
    document.getElementById("test").style.color = "red";
  }
}

window.onload = function () {
  let observer = new MutationObserver(chakDiv);

  const config = {
    childList: true,
    subtree: true,
    characterData: true,
    attributes: true,
    characterDataOldValue: true,
  };
  observer.observe(document.getElementById("test"), config);
  // observer.disconnect();
};
