let input = document.getElementById("myInput");
let btn = document.getElementById("btn");
let show = document.getElementById("show");

btn.addEventListener("click", function(){
    function sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
    async function countDown(i) {
      while (i > 0) {
        document.getElementById("show").innerHTML = i;
        i--;
        await sleep(1000);
      }
      return "counter finished";
    }
    
    let counter = countDown(input.value);
    counter.then((msg) => {
      document.getElementById("show").innerHTML = msg;
    });
})
