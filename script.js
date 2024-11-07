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
                            <h6 class="card-title">${elements.name.common}</h6>
                            <p class="card-text"></p>
                            <a href="${elements.maps.googleMaps}" class="btn btn-primary p-1">Click to find on map</a>
                        </div>
                    </div>
                </div>`
  });

  document.getElementById("row").innerHTML = body;
}

function countrySearch() {
  let countryName = document.getElementById("countryName").value;
  console.log(countryName);

  fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then(res => res.json())
    .then(data => {
      let body = "";
      data.forEach(element => {
        body += `
                  <div>
                  <div class="card mb-3 mx-auto" style="max-width: 540px;">
                      <div class="row g-0">
                        <div class="col-md-4">
                          <img src=${element.flags.png} class="img-fluid rounded-start" alt="...">
                      </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">${element.name.common}</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                      </div>
                  </div>
                  </div>
                    </div>
                  </div>`
      });
      document.getElementById("serachCountryBody").innerHTML = body;
    })

}



