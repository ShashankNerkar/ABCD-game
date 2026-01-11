let Pump = document.getElementById("Pump");
let boxes = document.querySelectorAll(".balloon-box");
let air = document.querySelector(".air");

let currentIndex = 0;

let tapcount = 0;
let size = 50;
let rightSide = 17;


boxes.forEach(b => b.style.display = "none");

Pump.addEventListener("click", () => {

  if (!boxes.length) return;

  let box = boxes[currentIndex];

  box.style.display = "block";
  box.style.bottom = "18%";
  box.style.right = "17%";

  tapcount++;
  size += 16;
  rightSide -= 0.6;

  box.style.width = size + "px";
  box.style.height = size + "px";
  box.style.right = rightSide + "%";

  
  if (tapcount === 4) {

   
    startFlying(box);

   
    tapcount = 0;
    size = 50;
    rightSide = 17;

    
    currentIndex++;
    if (currentIndex >= boxes.length) {
      currentIndex = 0; 
    }
  }
});

function startFlying(box) {
  let bottomPos = 18;
  let rightPos = 17;

  let flyInterval = setInterval(() => {
    bottomPos += 0.4;
    rightPos += 0.4;

    box.style.bottom = bottomPos + "%";
    box.style.right = rightPos + "%";

    if (bottomPos > 80 || rightPos > 90) {
      clearInterval(flyInterval);
      box.style.display = "none"; 
    }
  }, 30);
}
