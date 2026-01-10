// now using axios 
// let btn = document.querySelector(".cat");
// btn.addEventListener("click", async () => { // async callback
//       let fact = await getFacts();
//       console.log(fact);
//       let p = document.querySelector("#fact");
//       p.innerText = fact;
// });

// let url = "https://catfact.ninja/fact";
// async function getFacts() {
//       try {
//             let res = await axios.get(url);
//             return res.data.fact;
//       } catch (error) {
//             console.log("No fact found", error);      
//       }
// }

// let url2 = "https://dog.ceo/api/breeds/image/random";
// let btn2 = document.querySelector(".dog");
// btn2.addEventListener("click", async () => { // async callback
//       let link = await getImg();
//       console.log(link);
//       let p = document.querySelector("#img");
//       p.setAttribute("src", link);
//       p.innerText = link;
// });

// async function getImg() {
//       try {
//             let res = await axios.get(url2);
//             console.log("img found");
//             return res.data.message;
//       } catch (error) {
//             console.log("No img found", error);      
//       }
// }

// sending headers with api request
// const url3 = "https://icanhazdadjoke.com/";

// async function getJokes() {
//       try {
//             const config = {Headers : {Accept: "application/json"}};
//             let res = await axios.get(url, config);
//             console.log(res.data);
//       } catch (error) {
//             console.log(error);
//       }
// }

let url = "http://universities.hipolabs.com/search";
let inp = document.querySelector("input");

inp.addEventListener("keydown", async (event) => {
      if (event.key == "Enter") {
            event.preventDefault();
            let state = inp.value;      
            let colleges = await getColleges();
            let statewise = statefilter(colleges, state);
            show(statewise);
      }
})

function statefilter(colleges, state) {
      return colleges.filter(col => 
            col["state-province"] && // to access only those which have state-province 
            col["state-province"].toLowerCase().includes(state.toLowerCase()) // to include user variations
      );
}

function show(colleges) {
      let list = document.querySelector("#list");
      list.innerHTML = ""; // to empty list n show only current search results
      for (let col of colleges) {            
            let li = document.createElement("li");
            li.innerText = `${col.name} (${col["state-province"] || "N/A"})`;
            list.appendChild(li);
      }
}

async function getColleges() {
      try {
            let res = await axios.get(url, {
                  params: {
                        country: "India"
                  }
            });
            return res.data;
      } catch (error) {
            console.log("error" , error);
            return [];
      }
}