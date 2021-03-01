var score = 0;
const state=document.getElementById("state");
const answer=document.getElementById("answer");
const option1=document.getElementById("option1");
const option2=document.getElementById("option2");
const option3=document.getElementById("option3");
const option4=document.getElementById("option4");
const button=document.getElementById("button");

var staticGK=[
  {
    state:"Andhra Pradesh",
  capital:"Amaravati",
  governor:"Shri Biswa Bhusan Harichandan"
  },
  {
    state:"Arunachal Pradesh",
  capital:"Itanagar",
  governor:"Brig. (Dr.) B. D. Mishra (Retd.)"
  },
  {
    state:"Assam",
  capital:"Dispur",
  governor:"Prof. Jagdish Mukhi"
  },
  {
    state:"Bihar",
  capital:"Patna" ,
  governor: "Shri Phagu Chauhan"
  },
  {
    state:"Chhattisgarh",
  capital:"Raipur"  ,
  governor:"Sushri Anusuiya Uikey"
  },
  {
    state:"Goa",
  capital:"Panaji" ,
  governor: "Shri Bhagat Singh Koshyari"
  },
  {
    state:"Gujarat",
  capital:"Gandhinagar",
  governor:  "Shri Acharya Dev Vrat"
  },
  {
    state:"Haryana",
  capital:"Chandigarh"  ,
  governor:"Shri Satyadeo Narain Arya"
  },
  {
    state:"Himachal Pradesh",
  capital:"Shimla"  ,
  governor:"Shri Bandaru Dattatraya"
  },
  {
    state:"Jharkhand",
  capital:"Ranchi"  ,
  governor:"Shrimati Droupadi Murmu"
  },
  {
    state:"Karnataka",
  capital:"Bengaluru" ,
  governor: "Shri Vajubhai Vala"
  },
  {
    state:"Kerala",
  capital:"Thiruvananthapuram"  ,
  governor:"Shri Arif Mohammed Khan"
  },
  {
    state:"Madhya Pradesh",
  capital:"Bhopal"  ,
  governor:"Smt. Anandiben Patel"
  },
  {
    state:"Maharashtra",
  capital:"Mumbai"  ,
  governor:"Shri Bhagat Singh Koshyari"
  },
  {
    state:"Manipur",
  capital:"Imphal"  ,
  governor:"Dr. Najma Heptulla"
  },
  {
    state:"Meghalaya",
  capital:"Shillong" ,
  governor: "Shri Satya Pal Malik"
  },
  {
    state:"Mizoram",
  capital:"Aizawl"  ,
  governor:"Shri P.S. Sreedharan Pillai"
  },
  {
    state:"Nagaland",
  capital:"Kohima"  ,
  governor:"Shri R. N. Ravi"
  },
  {
    state:"Odisha",
  capital:"Bhubaneswar" ,
  governor: "Prof. Ganeshi Lal"
  },
  {
    state:"Punjab",
  capital:"Chandigarh" ,
  governor: "Shri V.P. Singh Badnore"
  },
  {
    state:"Rajasthan",
  capital:"Jaipur"  ,
  governor:"Shri Kalraj Mishra"
  },
  {
    state:"Sikkim",
  capital:"Gangtok"  ,
  governor:"Shri Ganga Prasad"
  },
  {state:"Tamil Nadu",
  capital:"Chennai",
  governor:"Shri Banwarilal Purohit"
  },
  {
    state:"Telangana",
  capital:"Hyderabad"  ,
  governor:"Dr. Tamilisai Soundararajan"
  },
  {
    state:"Tripura",
  capital:"Agartala"  ,
  governor:"Shri Ramesh Bais"
  },
  {
    state:"Uttar Pradesh",
  capital:"Lucknow"  ,
  governor:"Smt. Anandiben Patel"
  },
  {
    state:"Uttarakhand",
  capital:"Dehradun (Winter) Gairsain (Summer)" ,
  governor: "Smt. Baby Rani Maurya"
  },
  {
    state:"West Bengal",
  capital:"Kolkata"  ,
  governor:"Shri Jagdeep Dhankhar"
  }
]

var i=0;
function randomise(){
  console.log(i);
    var j = Math.round(Math.random() * 27);
    var k = Math.round(Math.random() * 27);
    var l = Math.round(Math.random() * 27);
    
    if(i==j||i==k ||i==l || j==k || j==l || k==l || j==0 || k==0 ||l==0){
      answer.innerHTML="";
      randomise();
  }else{
    console.log(staticGK[i].state);
      state.innerHTML=staticGK[i].state; 
      option1.innerHTML=staticGK[i].governor;
      option2.innerHTML=staticGK[j].governor;
      option3.innerHTML=staticGK[k].governor;
      option4.innerHTML=staticGK[l].governor;
      var m = Math.round(Math.random() * 100);
option1.style.order=m;
answer.innerHTML="";
  }
}
  option1.onclick=()=>{
    score++;
    if(i==27){
      answer.style.display="block";
      answer.innerHTML="You have mastered all the State Governors name, Awesome 🤩"
    }else{
      i++;
      randomise();
      resetTime(timerId)
    }
}

option2.onclick=()=>{
  answer.innerHTML="Sorry 😅 the answer is" +" "+ staticGK[i].governor;
  button.style.display="block";
  time=3;
}

option3.onclick=()=>{
  answer.innerHTML="Sorry 😅 the answer is" +" "+ staticGK[i].governor;
  button.style.display="block";
  time=3;
}

option4.onclick=()=>{
  answer.innerHTML="Sorry 😅 the answer is" +" " + staticGK[i].governor;
  button.style.display="block";
  time=3;
}

button.onclick=()=>{
  location.href = "gameover.html?score=" + score;
}
randomise();
var time = 20;
var timerId;

function startTimer() {
    time = 20;
    timer.innerHTML = time;
    timerId = setInterval(() => {
        time--;
        if (time == 0) location.href = "./gameover.html?score=" + score;
        timer.innerHTML = time;
    }, 1000);
}

function resetTime(intervalId) {
    clearInterval(intervalId);
    startTimer();
}

startTimer();