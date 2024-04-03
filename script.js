const form = document.querySelector("form");
const OutPutBox = document.querySelector("#OutPutBox");
const ImgBox = document.querySelector(".img-box");
form.addEventListener("submit", ShowResult);
  
async function ShowResult(e) {
  e.preventDefault();
  const responce = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input.value}`);
  const result = await responce.json();
  if (result.meals == null) {
    alert("Not available recipe!");
  } else {
    HandleData(result);
  }
  input.value = "";
}

function HandleData(result) {
  ImgBox.classList.add('none');
  OutPutBox.innerHTML = "";

  for (let i = 0; i < result.meals.length; i++) {
    const Data = Object.values(result.meals[i]);
      const Link = Data[49];
    OutPutBox.innerHTML += `<div class="card box mb-3" style="max-width: 540px">
    <div class="row g-0"><div class="col-md-12">
    <img src="${Data[6]}"class="img-fluid border"alt="..."/></div>
    <div class="col-md-12"><div class="card-body">
    <h5 class="card-title">${Data[3]} ${Data[4]}</h5>
    <p class="card-text recipe">${Data[5]}</p></div></div
    <p class="YouTube"> <h6> more : </h6><a href="${Link}">${Link}</a> </p></div></div><hr></hr>`;
  }
}