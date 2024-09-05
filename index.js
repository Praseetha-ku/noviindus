
    var states = [
   
        { name: "General Medicines", image: "/first.png", url:"kerala.html" },
        { name: "Pediatrics",  image:"/pediatris.png",ur:"" },
        { name: "Gynaecology",  image: "/gyna.jpeg" ,url:""},
        { name: "Internal Medicine", image: "/internal.jpeg",url:"" },
        { name: "Dermatology",  image: "/dermatology.png",url:"" },
        { name: "Labservices", image: "/lab.jpeg" ,url:""},
        
    ];
    
    
    function createStates() {
        var container = document.getElementById("ciris");
        states.forEach(function(state) {
            var card = document.createElement("div");
            card.classList.add("state-card");
    
            var image = document.createElement("img");
            image.src = state.image;
            card.appendChild(image);
    
            var name = document.createElement("h2");
            name.textContent = state.name;
            name.addEventListener("click", function() {
                window.location.href = state.url;
            });
            card.appendChild(name);
    
            
    
            container.appendChild(card);
        });
    }

   
createStates();

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("img");
  if (n > x.length) {slideIndex = 3}
  if (n < 3) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}


function createdivs() {
    var mains = document.getElementById("doctorslist");
    states.forEach(function(state) {
        var card = document.createElement("div");
        card.classList.add("state-card");

        var image = document.createElement("img");
        image.src = state.image;
        card.appendChild(image);

        var name = document.createElement("h2");
        name.textContent = state.name;
        name.addEventListener("click", function() {
            window.location.href = state.url;
        });
        card.appendChild(name);

        

        mains.appendChild(card);
    });
}


createdivs();