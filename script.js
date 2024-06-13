gsap.registerPlugin(ScrollTrigger);
function logomotivejs(){
// Initialize Locomotive Scroll
const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
  multiplier: 1.5,
});

// Update ScrollTrigger on Locomotive Scroll events
locoScroll.on("scroll", ScrollTrigger.update);

// Set up ScrollTrigger to use Locomotive Scroll
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

// Refresh ScrollTrigger and Locomotive Scroll after setup
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();
}
logomotivejs();

gsap.registerPlugin(ScrollTrigger);

const page1content = document.querySelector(".page1content");
const cursor = document.querySelector("#cursor");

page1content.addEventListener("mousemove", (dets) => {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 1,
  });
});

page1content.addEventListener("mouseenter", () => {
  gsap.to(cursor, {
    opacity: 1,
    scale: 1,
  });
});

page1content.addEventListener("mouseleave", () => {
  gsap.to(cursor, {
    opacity: 0,
    scale: 0,
  });
});

function page2animation() {
  gsap.from([".a h6", ".a h7", "p", "hr"], {
    y: 120,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
      trigger: ".page2",
      scroller: ".main",
      start: "top 47%",
      end: "top 46%",

      scrub: 2,
    },
  });
}

page2animation();


document.addEventListener("mousemove", function(details) {
  document.querySelectorAll(".img").forEach((element) => {
      const position = element.getAttribute("value");
      var x = (window.innerWidth - details.clientX * position) / 45;
      var y = (window.innerHeight - details.clientY * position) / 45;

      element.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
});

gsap.registerPlugin(ScrollTrigger);

var cursor1 = document.querySelector(".cursor1");
var imgContain = document.querySelector(".img-contain");

imgContain.addEventListener("mousemove", function(event) {
  gsap.to(cursor1, {
      x: event.clientX,
      y: event.clientY,
      duration: 0.5,
  });
});


gsap.from(".page5contain h0",
  {
    y:-1000,
    delay:0.3,
    duration:1,
    opacity:0,
    scrollTrigger:
    {
      trigger:".page5contain",
      markers:true,
      scroller:".main",
      start:"top 100%",
      end:"top 105%",
    }

  }
)

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 'auto',
  spaceBetween: 30,
  loop: true,
  autoplay:
  {
    delay:2500,
    disableOnInteraction:false,
  },
  
});


var tl=gsap.timeline()
tl.from("#loader h3",
  {
    x:40,
    opacity:0,
    duration:1,
    stagger:0.1
  }
)
tl.to("#loader h3",
  {
    opacity:0,
    x:-10,
    duration:1,
    stagger:0.1,
  }
)
tl.to("#loader",
  {
    opacity:0,
  }
)
tl.to("#loader",
  {
    display:"none",

  }
)

gsap.registerPlugin(ScrollTrigger);

const topic = document.querySelector("h1");
const h1Text = topic.textContent;
const splittedText = h1Text.split("");
const halfvalue = splittedText.length / 2;
let clutter = "";

splittedText.forEach((e, idx) => {
  if (idx < halfvalue) {
    clutter += `<span class="a">${e}</span>`;
  } else {
    clutter += `<span class="b">${e}</span>`;
  }
});

topic.innerHTML = clutter;

gsap.from("h1 .a", {
  y: 40,
  duration: 0.5,
  delay: 0.2,
  stagger: 0.15,
  opacity: 0,
});

gsap.from("h1 .b", {
  y: 40,
  duration: 0.5,
  delay: 0.1,
  stagger: -0.2,
  opacity: 0,
});

gsap.from("nav h3", {
  y: 40,
  opacity: 0,
  duration: 1,
  delay: 0.3,
  stagger: 0.15,
});




 var rightElems=document.querySelectorAll(".right-elem")

 rightElems.forEach(function(elem)
{
  elem.addEventListener("mouseenter",function()
{  
  console.log(elem.getBoundingClientRect())
  gsap.to(elem.childNodes[3],
    {
      opacity:1,
      scale:1,
    }
  )
})
elem.addEventListener("mouseleave",function()
{
  gsap.to(elem.childNodes[3],
    {
      opacity:0,
      scale:0,
    }
  )
})

elem.addEventListener("mousemove",function(dets)
{
  gsap.to(elem.childNodes[3],
    {
      x:dets.x-elem.getBoundingClientRect().x-50,
      y:dets.y-elem.getBoundingClientRect().y-120,

    }
  )
})
})
var svg = document.querySelector(".page7top svg");

svg.addEventListener("mouseenter", function() {
  svg.style.transform = `rotate(-46deg) scale(0.8)`;


});

gsap.from(svg,
  {
    scale:0.5,
    opacity:0,
  }
)

svg.addEventListener("mouseleave", function() {
  svg.style.transform = ""; // Reset transformation when mouse leaves
});


