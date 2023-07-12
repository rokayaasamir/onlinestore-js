//toggle the ligh & dark mode
{const dark = document.getElementById("dark");
const body = document.getElementById("body");

dark.addEventListener("click",(eo)=>{
  body.classList.toggle("dark");
});}

//when hover on  header=>change-color

{const hiddenul= document.getElementById("hiddenul")

const changecolor= document.getElementById("changecolor")

changecolor.addEventListener("mousemove",(eo) => {
  hiddenul.style.display="block" 
})




changecolor.addEventListener("mouseout",(eo) => {
  hiddenul.style.display="none" 
})}

//change header background color when click on "header Bg"

Headerbg.addEventListener("click",(eo) => {
  const random=Math.round(Math.random()*360)
  header.style.backgroundColor=`hsl(${random},44%,55%)`

  const websiteTitle=document.querySelector("#header>h1")
  websiteTitle.style.backgroundColor=`hsl(${random},44%,55%)`
  dark.style.backgroundColor=`hsl(${Math.round(Math.random()*100)},44%,55%)`
  
})

//change title background color when click on "title Bg"

titlebg.addEventListener("click",(eo) => {
  const allTitle=document.querySelectorAll("h1:not(#header>h1)")
  const random=Math.round(Math.random()*360)
allTitle.forEach(item=>  {
item.style.backgroundColor=`hsl(${random},44%,55%)`
});
  
})

//change title color when click on "title color"
 const changeColor=()=>{
  return Math.round(Math.random()*360)
 }
 titlecolor.addEventListener("click",(eo) => {
 const allTitle=document.querySelectorAll("h1:not(#header>h1)")

 allTitle.forEach(item=>{
  item.style.color=`hsl(${changeColor()},44%,55%)`
 });
  
})

//change section
sectionbg.addEventListener("click",(eo) => {
  const allSections=document.querySelectorAll("section")
  const random=Math.round(Math.random()*360)
allSections.forEach(item=>  {
item.style.backgroundColor=`hsl(${random},44%,55%)`
});
  
})


let i=0
randomvideo?.addEventListener("click",(eo) => {

  const videoArr=[
    `<iframe id="myiframe" width="560" height="315" src="https://www.youtube.com/embed/HBY7kuwxLTE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    `<iframe id="myiframe"  width="560" height="315" src="https://www.youtube.com/embed/elKpkk_I-_U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    `<iframe id="myiframe" width="560" height="315" src="https://www.youtube.com/embed/8DhVDh96Ps8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    `<iframe id="myiframe" width="560" height="315" src="https://www.youtube.com/embed/NOQsLM0xJw4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    `<iframe id="myiframe" width="560" height="315" src="https://www.youtube.com/embed/BTICpPmf1yA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
  ]





  containeriframe.innerHTML=videoArr[i]
  i++

  if (i>(videoArr.length-1)) {
    i=0
  }
});
 //Math.floor(Math.random()*videoArr.length)

//random writing&quotes

let y=0
randomquote.addEventListener("click",(eo) => {
  const quotearr=[
    `    <blockquote lang="ar" dir="rtl" class="sidekick">
    أبلغ عزيزا فى ثنايا القلب منزله
    أني وإن كنت لا ألقاه ألقاه
    وإن طرفي موصول برؤيته
    وإن تباعد عن سكناي سكناه
    يا ليته يعلم أني لست أذكره
    وكيف أذكره إذ لست أنساهُ
    يا من توهم أني لست أذكره
    والله يعلم أني لست أنساه
    إن غاب عني فالروح مسكنه
    من يسكن الروح كيف القلب ينساه؟
    <br>
    <cite lang="ar" dir="rtl">المتنبي</cite>
 </blockquote>`,

 `    <blockquote lang="ar" dir="rtl" class="sidekick">

 يا ليته يعلم أني لست أذكره
 وكيف أذكره إذ لست أنساهُ
 يا من توهم أني لست أذكره
 والله يعلم أني لست أنساه
 إن غاب عني فالروح مسكنه
 من يسكن الروح كيف القلب ينساه؟
 <br>
 <cite lang="ar" dir="rtl">المتنبي</cite>
</blockquote>`,
  ]
  parentquote.innerHTML=quotearr[y]
  y++

  if(y>(quotearr.length-1)){
    y=0
  }
});

//rendom heart
randomhearts.addEventListener("click",(eo) => {

  const parentHeart = document.createElement("div");
  congratulations.append(parentHeart);


const createRandomHeart=  setInterval(()=>{
//  const heart=`<div class="heart">&#129505;</div>`
const heart=document.createElement("div");
heart.classList.add("heart")
heart.innerHTML="&#129505;"
  heart.style.left=`${Math.random()*100}%`;




parentHeart.append(heart);

  },50);


  setTimeout(() => {
      clearInterval(createRandomHeart)
  }, 3000);

  setTimeout(() => {
    parentHeart.remove()
  }, 4000);
  
});

//accordion

const allplus = document.querySelectorAll(".plus")

allplus.forEach(item => {
  item.addEventListener("click",(eo) => {
    const contenty=eo.target.parentElement.parentElement.getElementsByClassName("contenty")[0]
contenty.classList.toggle("active");
//بتاعت الارتفاع
contenty.style.height=`${contenty.scrollHeight}px`
//بتاعت السالب و الموجب
item.classList.toggle("hide-plus");

if (item.classList.contains("hide-plus")) {
    item.innerText="_";
  item.style.transform="translateY(-11px)"  
}else{
  item.innerText="+";
  item.style.transform="translateY(0)"; 
}
} );

});


//digital-clock
const digitalClock=() => {
  const now =new Date();

  let sec=now.getSeconds();
  let min=now.getMinutes();
  let hours=now.getHours();
  let date=now.toDateString();
  let pmam="am";

if (hours>12) {
  hours=hours-12;
  pmam="pm";
}

if(sec<10){
sec=`0${sec}`;
}

if(hours<10){
  hours=`0${hours}`;
  }

  if(min<10){
    min=`0${min}`;
    }

    if(hours == 0){
      hours=`12`;
      }



  const clock=`  
  <div class="date">
  ${date}  
  </div>
  <div class="time">
  ${hours}: ${min}: ${sec}: ${pmam};
  </div>`;
  clockcontainer.innerHTML=clock;
};

setInterval(digitalClock,1000);

//silder

const arrimg=[
`  <img src="1.png" alt="" class="img-slider">`,
  `<img src="2.png" alt="" class="img-slider">`,
`  <img src="3.png" alt="" class="img-slider">`,
`  <img src="4.png" alt="" class="img-slider">`,
`  <img src="5.png" alt="" class="img-slider">`,
]
slidercontainer.innerHTML +=arrimg[0]

