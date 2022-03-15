const mensj = document.querySelector('.card');
//const texticos = document.querySelector('.bottom-left');

const eule= document.getElementById('eule');

const scard= document.getElementById('scard');
const black= document.getElementById('black');

const tcard= document.getElementById('tcard');
const tus= document.getElementById('tus');

const fcard= document.getElementById('fcard');
const logods= document.getElementById('logods');

const ficard= document.getElementById('ficard');
const epa= document.getElementById('epa');

const sicard= document.getElementById('sicard');
const final= document.getElementById('final');

const xicard= document.getElementById('xicard');
const fi= document.getElementById('final2');

const wicard= document.getElementById('wicard');
const fin= document.getElementById('finalisimo');


var num=0, n=0, u=0, x=0, y=0, z=0, w=0, zi=0;
const menuB= document.querySelector('.menuB');
const barrita= document.querySelector('.barrita');


cargarEvents();

function cargarEvents(){ 

  console.log(scard);

    mensj.addEventListener('click', () =>{
      num++;
      if(num %2){
         eule.style.visibility = "visible";
         
      }else{
        eule.style.visibility = "hidden";
      }
      })

    scard.addEventListener('click', () =>{
       n++;
       if(n %2){
           black.style.visibility = "visible";
           console.log(black);
       }else{
          black.style.visibility = "hidden";
       }
    })

    tcard.addEventListener('click', () =>{
      u++;
      if(u %2){
          tus.style.visibility = "visible";
          console.log(black);
      }else{
         tus.style.visibility = "hidden";
      }
   })

   fcard.addEventListener('click', () =>{
    x++;
    if(x %2){
        logods.style.visibility = "visible";
        console.log(black);
    }else{
       logods.style.visibility = "hidden";
    }
 })


 ficard.addEventListener('click', () =>{
  y++;
  if(y %2){
      epa.style.visibility = "visible";
      console.log(black);
  }else{
     epa.style.visibility = "hidden";
  }
})

sicard.addEventListener('click', () =>{
  z++;
  if(z %2){
      final.style.visibility = "visible";
      console.log(black);
  }else{
     final.style.visibility = "hidden";
  }
})
    
xicard.addEventListener('click', () =>{
  zi++;
  if(zi %2){
      fi.style.visibility = "visible";
      console.log(black);
  }else{
     fi.style.visibility = "hidden";
  }
})

wicard.addEventListener('click', () =>{
  w++;
  if(w %2){
      fin.style.visibility = "visible";
      console.log(black);
  }else{
     fin.style.visibility = "hidden";
  }
})
    
    



  /*mensj.forEach(
    {
  mensj[i].addEventListener('click', () =>{
    console.log('miro')

    num++;
    if(num %2){
      
        texticos.style.visibility = "visible";
        console.log('aplica')
    }else{
      texticos.style.visibility = "hidden";
    }
  })
  })*/

  menuB.addEventListener("click", () => {
    menuB.classList.toggle("active");
    console.log('clickkkk');
    barrita.classList.toggle("active");
  })

}



function change(){
    console.log('miro')

    num++;
    if(num %2){
      for(var i=0; i<=texticos.length; i++){
        texticos[i].style.visibility = "visible";
        console.log('aplica')
      }
      texticos.style.visibility = "visible";
    }else{
      texticos.style.visibility = "hidden";
    }

}



document.querySelectorAll('.nav-link').forEach( e => e.addEventListener("click", () =>{
  menuB.classList.remove("active");
  barrita.classList.remove("active");
}))


