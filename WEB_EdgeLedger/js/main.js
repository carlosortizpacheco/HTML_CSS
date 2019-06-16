function initMap() {
 const map = new google.maps.Map(document.querySelector('.map')
 , {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
const marker = new google.maps.marker({
  position:center,
  map:map
})
}

window.addEventListener("scroll", ()=> {
  if(window.scrollY > 150){
    document.querySelector("#navbar").style.opacity=0.9
  } else {
    document.querySelector("#navbar").style.opacity=1
  }
})

$("#navbar a, .btn").on("click", event => {
  if(this.hash !== ""){
    event.preventDefault();
    const hash = this.hash;
    $("html","body").animate({
      scrollTop: $(hash).offset().top-100
    },
    500
    )
  }
})