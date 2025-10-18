
let names =JSON.parse(localStorage.getItem('updatednames')) || [];
let president_obj = JSON.parse(localStorage.getItem('updatedobj'))||{Peter:0,Goodluck:0,Tinubu:0}
let timeid;
let timeid2;
let vote_quest = false;
const vote_btn = document.querySelector('.vote_btn');
const tinubu_btn = document.querySelector('.tinubu.select');
const buhari_btn = document.querySelector('.buhari.select');
const goodluck_btn = document.querySelector('.goodluck.select');


function btn_toggle (element,fess,sess,tess) {

if (element.classList.contains('is-toggled')){
  element.classList.remove('is-toggled');
  element.innerHTML='SELECT'
} else {
  element.classList.add('is-toggled')
  element.innerHTML='SELECTED'
}
const itself = document.querySelector(`.${fess}`)
if (itself.classList.contains('is-toggled')) {
  document.querySelector(`.${sess}`).classList.remove('is-toggled');
  document.querySelector(`.${sess}`).innerHTML='SELECT'
  document.querySelector(`.${tess}`).classList.remove('is-toggled');
  document.querySelector(`.${tess}`).innerHTML='SELECT'
}
}


function vote_entry () {

  const voteinput= document.querySelector('.Name_collector')
const vote_name = voteinput.value;
if (vote_name==='')
 {
 alert('Please enter your name!');
 vote_quest=false;
 checking();
 return;
}
if(!isNaN(vote_name)){
  alert('Name cannot be a number!');
  voteinput.value='';
  vote_quest=false;
  checking();
  return;
};


const selected = document.querySelector('.select.is-toggled')
if(!selected){
 alert('You need to select a president!');
 vote_quest=false;
 checking();
 return;
}





/* if (selected.classList.contains('goodluck')){

  const confirm_vote =   confirm('Are you sure you want to vote for Goodluck Jonathan?\nPlease note that votes can\'t be deleted');
if(confirm_vote) { 
   if (names.includes(vote_name.toLowerCase())) {
alert('Duplicate vote detected - You can only vote once!');
voteinput.value='';
return;
}
  president_obj["Goodluck"]++;
}


}else if(selected.classList.contains('buhari')) {
      const confirm_vote =   confirm('Are you sure you want to vote for Peter Obi?\nPlease note that votes can\'t be deleted');
      if(confirm_vote){
        if (names.includes(vote_name.toLowerCase())) {
    alert('Duplicate vote detected - You can only vote once!');
    voteinput.value='';
    return;
    }
        president_obj["Peter"]++;
      }
 
  } else if(selected.classList.contains('tinubu')) {
      const confirm_vote =   confirm('Are you sure you want to vote for Bola Tinubu?\nPlease note that votes can\'t be deleted')

      if(confirm_vote){
        if (names.includes(vote_name.toLowerCase())) {
      alert('Duplicate vote detected - You can only vote once!');
      voteinput.value='';
      return;
      }
        president_obj["Tinubu"]++;
      }
        
}
 */


if (selected.classList.contains('goodluck')){

confirm_select('Goodluck Jonathan','Goodluck',vote_name,voteinput)

}else if(selected.classList.contains('buhari')) {
 
  confirm_select('Peter Obi','Peter',vote_name,voteinput)
  } else if(selected.classList.contains('tinubu')) {

    confirm_select('Bola Tinubu','Tinubu',vote_name,voteinput)
}

  console.log(president_obj);
  voteinput.value='';

  console.log(vote_quest);


 checking();
};


  function checking () {
const maybe = document.querySelector('.maybe')
    maybe.classList.remove('vote_info','vote_info_minus','extra');

      void maybe.offsetWidth; 

      if (vote_quest===true) {
  document.querySelector('.maybe').classList.add('vote_info');
    document.querySelector('.maybe').classList.remove('vote_info_minus');
  document.querySelector('.maybe').innerHTML='Vote Successful!';
  } else if (vote_quest === false) {
    document.querySelector('.maybe').classList.remove('vote_info');
   document.querySelector('.maybe').classList.add('vote_info_minus');
    document.querySelector('.maybe').innerHTML='Vote Unsuccessful!'
  }

  vote_btn.disabled = true;
  vote_btn.style.opacity = "0.6";
  vote_btn.style.cursor = "not-allowed"

    newed.disabled = true;
  newed.style.opacity = "0.9";
  newed.style.cursor = "not-allowed";


  clearTimeout(timeid);



  timeid= setTimeout(()=>{

    document.querySelector('.maybe').classList.add('extra');
    setTimeout(()=>{
   document.querySelector('.maybe').classList.remove('vote_info','extra');
      document.querySelector('.maybe').classList.remove('vote_info_minus');

      document.querySelector('.maybe').innerHTML='';
      vote_btn.disabled = false;
  vote_btn.style.opacity = "1";
  vote_btn.style.cursor = "pointer";

    newed.disabled = false;
  newed.style.opacity = "1";
  newed.style.cursor = "pointer";

  },1000);      
    },5000);
 
  }



function confirm_select (name,person,vote_name,voteinput) {
    const confirm_vote =   confirm(`Are you sure you want to vote for ${name}?\nPlease note that votes can\'t be deleted`);

    if (!confirm_vote) {
        vote_quest=false;
        return;
    }
    if(confirm_vote){
      if (names.includes(vote_name.toLowerCase())) {
  alert('Duplicate vote detected - You can only vote once!');
  voteinput.value='';
  vote_quest=false;
  return;
  }
      president_obj[person]++;
      vote_quest= true;
        names.push(vote_name.toLowerCase());
      localStorage.setItem('updatednames',JSON.stringify(names));
      localStorage.setItem('updatedobj',JSON.stringify(president_obj));
    }
}



function img_control_button(presi) {
    document.querySelector(`.pres_${presi}`).addEventListener('click',()=>{
      document.querySelector(`.${presi}`).click();
    }) 
}
img_control_button('goodluck');
img_control_button('buhari');
img_control_button('tinubu');

document.addEventListener('keydown',function (event) {
   if(event.key === 'T' || event.key === 't') {
     tinubu_btn.click();
   }
   else if(event.key === 'P' || event.key === 'p') {
     buhari_btn.click();
   }
  else if(event.key === 'g' || event.key === 'G'){
     goodluck_btn.click();
  }
   
})

const current_btn = document.querySelector('.current_vote');
const displayp = document.querySelector('.display_smth')

current_btn.addEventListener('click',function () {
  displayp.classList.remove('gridding','extrah')
  clearTimeout(timeid2);

  setTimeout(()=>{
   current_btn.innerHTML='Loaded' 
},2500)

    displayp.classList.add('gridding')
    displayp.innerHTML= `<p class="fess_red">Goodluck:${president_obj.Goodluck}</p><p class="sess_red">Peter:${president_obj.Peter}</p><p class="third_red">Tinubu:${president_obj.Tinubu}</p>`;

    if((president_obj.Peter < president_obj.Tinubu || president_obj.Peter<president_obj.Goodluck) || president_obj.Peter===0) {
document.querySelector('.sess_red').classList.add('red')
} else {
  document.querySelector('.sess_red').classList.remove('red');
}
 const obj2 = document.querySelector('.fess_red');
    if((president_obj.Goodluck < president_obj.Tinubu || president_obj.Goodluck<president_obj.Peter) || president_obj.Goodluck===0) {
    obj2.classList.add('red')
} else {
  obj2.classList.remove('red');
}
const obj3 = document.querySelector('.third_red');
    if((president_obj.Tinubu < president_obj.Peter || president_obj.Tinubu<president_obj.Goodluck) || president_obj.Tinubu===0) {
    obj3.classList.add('red')
    } else {
      obj3.classList.remove('red');
    }
    current_btn.innerHTML='Loading...'
  timeid2 = setTimeout(function(){
    
    displayp.classList.add('extrah');

    setTimeout(function(){
  displayp.innerHTML='';
  displayp.classList.remove('gridding');
  displayp.classList.remove('extrah');
  current_btn.innerHTML='View Current Votes'
  },1000)
  },5000)

});

const newed = document.querySelector('.newest');

newed.addEventListener('click', ()=> {

const maybe = document.querySelector('.maybe');


    maybe.classList.remove('vote_info','vote_info_minus','extra','red');

      void maybe.offsetWidth; 


if (president_obj.Peter> president_obj.Goodluck && president_obj.Peter>president_obj.Tinubu) {
  maybe.innerHTML='Congratulations!\n Peter is the new president';
  maybe.classList.add('vote_info');
} else if (president_obj.Tinubu> president_obj.Goodluck && president_obj.Tinubu>president_obj.Peter) {
  maybe.innerHTML='Congratulations!\n Tinubu is the new president';
  maybe.classList.add('vote_info');
} else if (president_obj.Goodluck> president_obj.Tinubu && president_obj.Goodluck>president_obj.Peter) {
  maybe.innerHTML='Congratulations!\n Goodluck is the new president';
  maybe.classList.add('vote_info');
};


if(president_obj.Peter===president_obj.Goodluck&& president_obj.Goodluck===president_obj.Tinubu&&president_obj.Goodluck!==0) {
  maybe.innerHTML='Total Tie. Cast one more vote!';
    maybe.classList.add('vote_info','red');
}else if((president_obj.Peter===president_obj.Goodluck)&&(president_obj.Peter&&president_obj.Goodluck>president_obj.Tinubu)){
  maybe.innerHTML='Partial Tie. Cast one more vote!';
     maybe.classList.add('vote_info','red');
}else if((president_obj.Tinubu===president_obj.Peter)&&(president_obj.Peter&&president_obj.Tinubu>president_obj.Goodluck)){
  maybe.innerHTML='Partial Tie. Cast one more vote!';
     maybe.classList.add('vote_info','red');

}else if((president_obj.Goodluck===president_obj.Tinubu)&&(president_obj.Goodluck&&president_obj.Tinubu>president_obj.Peter)){
  maybe.innerHTML='Partial Tie. Cast one more vote!';
     maybe.classList.add('vote_info','red');
}else if (
    president_obj.Peter === 0 &&
    president_obj.Tinubu === 0 &&
    president_obj.Goodluck === 0
  ) {
    maybe.innerHTML = "No votes have been casted yet!";
    maybe.classList.add("vote_info_minus");

  }

      vote_btn.disabled = true;
      vote_btn.style.opacity = "0.6";
      vote_btn.style.cursor = "not-allowed";

      reset_btn.disabled=true;
      reset_btn.style.opacity='0.9';
      reset_btn.style.cursor='not-allowed';

  clearTimeout(timeid);



  timeid= setTimeout(()=>{

    document.querySelector('.maybe').classList.add('extra');
    setTimeout(()=>{
   document.querySelector('.maybe').classList.remove('vote_info','extra','red');
      document.querySelector('.maybe').classList.remove('vote_info_minus');

      document.querySelector('.maybe').innerHTML='';
      vote_btn.disabled = false;
      vote_btn.style.opacity = "1";
      vote_btn.style.cursor = "pointer";


      reset_btn.disabled=false;
      reset_btn.style.opacity='1';
      reset_btn.style.cursor='pointer';
  },1000);      
    },5000);

});

const reset_btn= document.querySelector('.resetter');

reset_btn.addEventListener('click',function(){

  if(    president_obj.Peter === 0 &&
    president_obj.Tinubu === 0 &&
    president_obj.Goodluck === 0) {
         alert('Vote box is currently empty!');
         return;
    };
  const confirm_reset = confirm('Note: All votes will be reseted!');
  if(confirm_reset){
president_obj={Peter:0,Goodluck:0,Tinubu:0};
 names=[];
  localStorage.removeItem('updatedobj');
  localStorage.removeItem('updatednames');

const maybe = document.querySelector('.maybe');
    maybe.classList.remove('vote_info','vote_info_minus','extra','red');

      void maybe.offsetWidth; 

maybe.innerHTML='Votes successfully reseted.';
maybe.classList.add('vote_info');


      vote_btn.disabled = true;
      vote_btn.style.opacity = "0.6";
      vote_btn.style.cursor = "not-allowed";



  clearTimeout(timeid);



  timeid= setTimeout(()=>{

    document.querySelector('.maybe').classList.add('extra');
    setTimeout(()=>{
   document.querySelector('.maybe').classList.remove('vote_info','extra','red');
      document.querySelector('.maybe').classList.remove('vote_info_minus');

      document.querySelector('.maybe').innerHTML='';
      vote_btn.disabled = false;
      vote_btn.style.opacity = "1";
      vote_btn.style.cursor = "pointer";


  },1000);      
    },5000);
  }


}  
);

document.querySelector('.back').addEventListener('click',()=>{
        setTimeout(() => {
        document.querySelector('.Name_collector').focus();
      }, 50);
}
  )




