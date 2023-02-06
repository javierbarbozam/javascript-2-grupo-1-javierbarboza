let add_number = document.getElementById("add");
let subst_number = document.getElementById("substract");

function newNumber () {

  sum = 0;

  const add = add_number.addEventListener("click", () => {
    sum++;
    console.log(sum);
  });

  const substr = subst_number.addEventListener("click", (event) => {
    sum--;
    console.log(sum);
  });


  add()
  substr()
}

newNumber()
