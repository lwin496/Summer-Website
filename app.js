let img = document.getElementById('death'); 

let toggle = true; 
img.addEventListener('click', function(){ 
      toggle = !toggle;
      if(toggle){ 
            img.src = "https://images.unsplash.com/photo-1610396453031-c64b629c4b58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZWxlc3MlMjBtYW58ZW58MHx8MHx8&w=1000&q=80"
            console.log('test')
      }else{ 
            img.src = 'https://www.gannett-cdn.com/presto/2020/10/12/PAPN/b6d55690-e86b-490a-84b3-e4f21e101cea-APC_Best_Buy_4409_101220_wag.jpg'
      }
      img.src = 'https://www.gannett-cdn.com/presto/2020/10/12/PAPN/b6d55690-e86b-490a-84b3-e4f21e101cea-APC_Best_Buy_4409_101220_wag.jpg'
})


let looper;
let degrees = 0; 
function rotateAnimation(el,speed){
      let elem = document.getElementById('osu');
      if(navigator.userAgent.match("Chrome")){ 
            elem.style.WebkitTransform = "rotate("+degress+"deg)"
      }
      looper = setTimeout('rotateAnimation(\''+el+'\','+speed+')',speed) => {
            degrees++
            if(degrees > 359){ 
                  degrees = 1;
            }
      }, timeout);
      document.getElementById("status").innerHTML = "rotate("+degrees+"deg)";
}


let osu = document.getElementById('osu'); 

