function moveNavbar(){
  let windowInnerWidth = window.innerWidth;
  let navbar = $("#navbar");
  if(windowInnerWidth <= 993) {
      navbar.addClass("fixed-bottom");
      navbar.addClass("bg-dark");
  }
  if(windowInnerWidth >= 993){
      navbar.removeClass("fixed-bottom");
      navbar.removeClass("bg-dark");
  }
}

function showDropdown(navbarDropdown, list){
  $(navbarDropdown).addClass("show");
  $(navbarDropdown).prop("aria-expanded", true);
  $(list).addClass("show");
}

function hideDropdown(navbarDropdown, list){
  let windowInnerWidth = window.innerWidth;
  if(windowInnerWidth >= 993) {
      $(navbarDropdown).removeClass("show");
      $(navbarDropdown).prop("aria-expanded", false);
      $(list).removeClass("show");
  }
}

$(document).ready(function () {
  moveNavbar();
    $(window).resize((event)=>{
        moveNavbar();
    });
  $(".navbar-toggler").click(event => {
        showDropdown('#navbarDropdown-1','#list-1');
        showDropdown('#navbarDropdown-2','#list-2');
    });
  
  $(".navbar-toggler").click(event => {
        hideDropdown('#navbarDropdown-1','#list-1');
        hideDropdown('#navbarDropdown-2','#list-2');
    });
  
 $(".reviews-slide").slick({
    nextArrow: '<button id="next" type="button" class="btn btn-juliet"><i class="fas fa-chevron-right" aria-hidden="true"></i></button>',
    prevArrow: '<button id="prev" type="button" class="btn btn-juliet"><i class="fas fa-chevron-left" aria-hidden="true"></i> </button>',
    appendArrows: $(".arrows-block"),
    adaptiveHeight: true,
    dots: false,
    infinite: true,
    mobileFirst: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    fade: true,
});
$(".reviews-slide").on("afterChange", function() {
    let dataId = parseInt($(".slick-current").attr("data-slick-index"));    
    console.log(dataId);
    $(".current").html("0"+(dataId+=1))
});
  
  $(".PartnersSlider1").slick({
    adaptiveHeight: false,
    mobileFirst: true,
    dots: false,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding:"16%",
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
            centerPadding:"10%",
          }
        },
     ]
}
);
$(".PartnersSlider2").slick({
    adaptiveHeight: false,
    mobileFirst: true,
    dots: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding:"33%",
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
            centerPadding:"2%",
          }
        },
     ]
}); 
  
$("#check").change(function () {
  if ($("#check").is(":checked")) {
      $("#Button").prop("disabled", false);
  } else {
      $("#Button").prop("disabled", true);
  }
});

let data = document.querySelectorAll(".info");
const ajaxSend = (formData) => {
  fetch("https://formcarry.com/s/0tAvUSy9qZ1", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
      },
      body: JSON.stringify(formData)
  })
      .then(function (response) {
          alert("Сообщение отправлено");
          data.forEach((element) => { element.value = ""; });
          $("#check").prop("checked", false);
          $("#Button").prop("disabled", true);
          localStorage.clear();
      })
      .catch((error) => {alert(error);})
};

const forms = $("#Form");
for (let i = 0; i < forms.length; i++) {
  $("#Button").click(function (e) {
      e.preventDefault();

      let formData = new FormData(forms[i]);
      formData = Object.fromEntries(formData);

      ajaxSend(formData);
  });
}
  
});