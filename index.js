let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  cartItem.classList.remove("active");
};

let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  navbar.classList.remove("active");
  cartItem.classList.remove("active");
};

let cartItem = document.querySelector(".cart-items-container");

document.querySelector("#cart-btn").onclick = () => {
  cartItem.classList.toggle("active");
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
  cartItem.classList.remove("active");
};

function arpita() {
  alert(
    "This is Arpita Varshneya , Student Coordinator at Training and Placement Cell B.Tech 3rd Year ECE , Done Frontend Developer Intern at SirpiDataScience"
  );
}

function bhavya () {
    alert(
      "This is Bhavya Verma B.Tech 3rd Year ECE, Executive Member at ECEs"
    );
  }
  

  function ishita () {
    alert(
      "This is Ishita Srivastava B.Tech 3rd Year ECE"
    );
  }
  
  function pragya  () {
    alert(
      "This is Pragya Gupta B.Tech 3rd Year EE"
    );
  }
  
  function mandavi () {
    alert(
      "This is Mandavi Srivastava B.Tech 3rd Year CSE, Student Coordinator at Training and Placement Cell"
    );
  }
  
  function aditya () {
    alert(
      "This is Aditya Kanojiya B.Tech 3rd Year ECE, Executive Member at ECEs, Member of Sports Sub Council and Frontend Web Developer at ReVision Ads and Problem Setter at iMocha"
    );
  }
  
  function shivam () {
    alert(
      "This is Shivam Kumar Singh B.Tech 3rd year ECE , Student Coordinator at Training and Placement Cell , Completed Full Stack Web developer role at DiscoverWeb and also completed Student Ambassador at iMochaWorks"
    );
  }
  
  function aman () {
    alert(
      "This is Aman Kumar Poddar B.Tech 3rd Year CSE, Member at IEEE , Frontend Web developer at Yarunara Technologies Pvt Ltd"
    );
  }
  
  function ashish () {
    alert(
      "This is Ashish Patel B.Tech 3rd Year ECE, Back end Developer at Digital Crew , Full Stack Developer at Remo Start , Problem Setter at iMocha and Member at Robotics Club"
    );
  }
  
 
  function shivang () {
    alert(
      "This is Shivang Dwivedi B.Tech 3rd Year ECE , Ex Student Coordinator at Training and Placement Cell"
    );
  }

  function ishika() {
    alert(
       "This is Ishika Gupta B.TEch 3rd Year ECE , Frontend Developer at Yarunara Technologies Pvt Ltd , Member at IEEE & Robotics Club" 
    )
  }

  function abhay() {
    alert(
        "This is Abhay Verma B.Tech 3rd Year ECE , Member at Sports Sub Council"
    )
  }