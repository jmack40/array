var wrap = document.body.querySelector(".wrap");
var warriors = [
  {
    name:"Bob",
    damage:2,
    health:10,
    warrior:true
  },
  {
    name:"Mavis",
    damage:2,
    health:10,
    warrior:true
  },
  {
    name:"Morty",
    damage:4,
    health:10,
    warrior:true
  },
  {
    name:"Shorty",
    damage:10,
    health:3,
    warrior:false
  },
  {
    name:"Larry",
    damage:2,
    health:17,
    warrior:false
  }
]
for(var i=0; i<warriors.length; i++){
  var ele = document.createElement("div");
  var eleName = document.createElement("h1");
  var eleDamage = document.createElement("h2");
  var eleHealth = document.createElement("h2");
  
  if(warriors[i].name==="Mavis"){
    eleName.style.color="red";
  }
  
  if(warriors[i].name==="Larry"){
    eleName.style.color="red";
  }
  
  eleName.innerHTML=warriors[i].name;
  eleDamage.innerHTML="Damage: "+warriors[i].damage;
  eleHealth.innerHTML="Health: "+warriors[i].health;
  ele.appendChild(eleName);
  ele.appendChild(eleDamage);
  ele.appendChild(eleHealth);
  wrap.appendChild(ele);
}