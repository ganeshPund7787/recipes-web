const form = document.querySelector("form");
const OutPutBox = document.querySelector("#OutPutBox");
form.addEventListener("submit", ShowResult);
  
async function ShowResult(e) {
  e.preventDefault();
  const responce = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input.value}`);
  const result = await responce.json();
  console.log(result);
  HandleData(result);
  input.value = "";
}

function HandleData(result) {
  OutPutBox.innerHTML = "";

  for (let i = 0; i < result.meals.length; i++) {
    OutPutBox.innerHTML += `<div class="card box mb-3" style="max-width: 540px"><div class="row g-0"><div class="col-md-12">
    <img src="https://media0.giphy.com/media/j2dv7H2pgFyoICoD6E/200w.gif"class="img-fluid border"alt="..."/></div>
    <div class="col-md-12"><div class="card-body"> <h5 class="card-title"></h5> <p class="card-text recipe"></p>
   </div></div><p class="YouTube"></p></div></div><hr></hr>`;
  }
  InsertData(result);
}

function InsertData(result) {
  const CardImg = document.querySelectorAll("#OutPutBox img");
  const CardTitle = document.querySelectorAll(".card-title");
  const Recipe = document.querySelectorAll(".recipe");
  const YouTubeSrc = document.querySelectorAll(".YouTube");
  
  for (let i = 0; i < result.meals.length; i++) {
    const Data = Object.values(result.meals[i]);
    
    CardImg[i].src = Data[6];
    CardTitle[i].innerHTML = `${Data[3]} ${Data[4]}`;
    Recipe[i].innerText = Data[5];
    const Link = Data[49];
    console.log(Link);
    YouTubeSrc[i].innerHTML = `<h6> more : </h6><a href="${Link}">${Link}</a>`;
  }
}

