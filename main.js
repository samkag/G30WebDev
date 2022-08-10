const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', function() {
	this.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

var testimonial = document.getElementById("testimonial");
      var control1 = document.getElementById("control1");
      var control2 = document.getElementById("control2");
      var control3 = document.getElementById("control3");

      control1.onclick = function(){
        testimonial.style.transform = "translateX(870px)";
        control1.classList.add("active1");
        control2.classList.remove("active1");
        control3.classList.remove("active1");
      }
      control2.onclick = function(){
        testimonial.style.transform = "translateX(0px)";
        control1.classList.remove("active1");
        control2.classList.add("active1");
        control3.classList.remove("active1");
      }
      control3.onclick = function(){
        testimonial.style.transform = "translateX(-870px)";
        control1.classList.remove("active1");
        control2.classList.remove("active1");
        control3.classList.add("active1");
      }