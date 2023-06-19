/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
};

function generateDomain(pronoun, adjective, noun, extension) {
  let result = [];
  for (const a in pronoun) {
    for (const b in adjective) {
      for (const c in noun) {
        for (const d in extension) {
          const pron = pronoun[a];
          const adj = adjective[b];
          const noun1 = noun[c];
          const ext = extension[d];
          let domain = pron + adj + noun1 + ext;
          +result.push(domain);
        }
      }
    }
  }
  return result;
}

let genericPronoun = ["the", "a", "my"];
let funAdjective = ["rambunctious", "lively", "wacky", "mischievous"];
let randomNoun = ["potato", "escalator", "illustration", "marshmallow", "cone"];
let randomExtension = [".com", ".art", ".shop", ".move"];

let domains = generateDomain(
  genericPronoun,
  funAdjective,
  randomNoun,
  randomExtension
);

document.querySelector("#domain").innerHTML = domains
  // Remove commas from the array
  .map(domain => '<li class="list-group-item">' + domain + "</li>")
  .join("");
