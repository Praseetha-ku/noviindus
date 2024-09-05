var doctors = [
   
    { name: "General Medicines", image: "/first.png", url:"kerala.html" },
    { name: "Pediatrics",  image:"india/maharasthra.png",url:"" },
    { name: "Gynaecology",  image: "india/gurjath.jpeg" ,url:""},
    { name: "Internal Medicine", image: "india/karnataka.jpeg",url:"" },
    { name: "Dermatology",  image: "india/Rajasthan.png",url:"" },
    { name: "Labservices", image: "india/telegana.jpeg" ,url:""},
    
];


function createDoctors() {
    var containers = document.getElementById("doctors-grid");
    doctors.forEach(function(doctors) {
        var cards = document.createElement("div");
        cards.classList.add("doctors");

        var images = document.createElement("img");
        images.src = doctors.image;
        cards.appendChild(images);

        var names = document.createElement("head");
        names.textContent = doctors.name;
        names.addEventListener("click", function() {
            window.location.href = doctors.url;
        });
        cards.appendChild(names);

        

        containers.appendChild(cards);
    });
}