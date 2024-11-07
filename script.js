allConutry();


async function allConutry() {
  let res = await fetch("https://restcountries.com/v3.1/all");
  let countries = await res.json();
  let body = "";
  countries.forEach(elements => {
    body += `<div class="col-lg-2 col-md-5 col-sm-12 p-2 ">
                    <div class="card" style="width: auto;">
                        <img src=${elements.flags.png} class="card-img-top" style="height: 8rem; width: auto;" alt="...">
                        <div class="card-body">
                            <h6 class="card-title">Card title</h6>
                            <p class="card-text"></p>
                            <a href="#" class="btn btn-primary p-2">Click</a>
                        </div>
                    </div>
                </div>`
  });

  document.getElementById("row").innerHTML=body;
}

function countrySearch(){
  
}



