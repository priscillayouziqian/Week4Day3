
const button = document.querySelector("button");
const h2 = document.querySelector("h2");

function btnClick(){
    console.log("button clicked");

    axios.get(" https://swapi.dev/api/planets/?search=Alderaan")
    .then((res) => {
        // console.log(res.data.results[0].residents);

        const arr = res.data.results[0].residents;
        
        for(let i=0; i<arr.length; i++){
           console.log(arr[i]);
           
           axios.get(arr[i])
                .then((response) => {
        
                   h2.textContent = response.data.name;
                })
        }

    })

}


button.addEventListener("click", btnClick);