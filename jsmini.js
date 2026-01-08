let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function(event) {
      let item = document.createElement("li");
      item.innerText = inp.value;

      let del = document.createElement("button");
      del.innerText = "delete";
      del.classList.add("delete");

      item.appendChild(del);
      ul.appendChild(item);
      inp.value = "";
});

inp.addEventListener("keypress", function(event) {
      if (event.key == "Enter") {
            let item = document.createElement("li");
            item.innerText = inp.value;

            let del = document.createElement("button");
            del.innerText = "delete";
            del.classList.add("delete");
            item.appendChild(del);
            ul.appendChild(item);
            inp.value = "";
      }
});

// let delbtns = document.querySelectorAll(".delete");
// for (const delbtn of delbtns) {
//       delbtn.addEventListener("click", function() {
//             let par = this.parentElement;
//             par.remove();
//       })
// }

// using addEventListener to use on user created tasks which are added in list(i.e parent ele)and this parent ele is what needs to be removed when clicked on delete
ul.addEventListener("click", function (event) {
      if(event.target.nodeName == "BUTTON") {
            let listItem = event.target.parentElement;
            listItem.remove();
      };
});