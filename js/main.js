//! FIRST ADN SECOND TASKS
let firstUl = document.querySelector(".first-ul");
let data = fetch("https://rickandmortyapi.com/api/character");
data
  .then((response) => {
    return response.json();
  })
  .then((info) => {
    console.log(info);
    info.results.forEach((elem) => {
      elem.gender == "Male"
        ? (firstUl.innerHTML += `<li>
      <img src="${elem.image}" alt="">
      <br>
      FullName:${elem.name}
      <br>
      <span class='male' >Gender:${elem.gender}</span>
      <br>
      Species:${elem.species}
      <br>
      Status:${elem.status}
      <br>
      Id:${elem.id}</li>`)
        : elem.gender == "Female"
        ? (firstUl.innerHTML += `<li>
      <img src="${elem.image}" alt="">
      <br>
      FullName:${elem.name}
      <br>
      <span class='female' >Gender:${elem.gender}</span>
      <br>
      Species:${elem.species}
      <br>
      Status:${elem.status}
      <br>
      Id:${elem.id}</li>`)
        : (firstUl.innerHTML += `<li>
        <img src="${elem.image}" alt="">
        <br>
        FullName:${elem.name}
        <br>
        <span class='unknown' >Gender:${elem.gender}</span>
        <br>
        Species:${elem.species}
        <br>
        Status:${elem.status}
        <br>
        Id:${elem.id}</li>`);
    });
  });

//! THIRD AND FOURTH TASKS

// let data2 = fetch("https://rickandmortyapi.com/api/character");
// let arr = [];
// data2
//   .then((response) => {
//     return response.json();
//   })
//   .then((info) => {
//   // console.log(info);
//     let res = info.results;
//     console.log(res);
//     fetch("http://localhost:8000/characters", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(res),
//     });
//   });

//! ========================================================

let secondUl = document.querySelector(".second-ul");
let dataInJson = fetch("http://localhost:8000/characters");
dataInJson
  .then((response) => {
    return response.json();
  })
  .then((info) => {
    info[0].forEach((elem) => {
      elem.gender == "Male"
        ? (secondUl.innerHTML += `<li>
      <img src="${elem.image}" alt="">
      <br>
      FullName:${elem.name}
      <br>
      <span class='male' >Gender:${elem.gender}</span>
      <br>
      Species:${elem.species}
      <br>
      Status:${elem.status}
      <br>
      Id:${elem.id}</li>`)
        : elem.gender == "Female"
        ? (secondUl.innerHTML += `<li>
      <img src="${elem.image}" alt="">
      <br>
      FullName:${elem.name}
      <br>
      <span class='female' >Gender:${elem.gender}</span>
      <br>
      Species:${elem.species}
      <br>
      Status:${elem.status}
      <br>
      Id:${elem.id}</li>`)
        : (secondUl.innerHTML += `<li>
        <img src="${elem.image}" alt="">
        <br>
        FullName:${elem.name}
        <br>
        <span class='unknown' >Gender:${elem.gender}</span>
        <br>
        Species:${elem.species}
        <br>
        Status:${elem.status}
        <br>
        Id:${elem.id}</li>`);
    });
  });
