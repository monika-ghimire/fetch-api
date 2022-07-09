function loadMemes()
{
  var memeImage="";
var parent=document.getElementById("meme-box");

fetch("https://api.imgflip.com/get_memes").then((res)=>
                                         {
   return res.json();
  
}).then((mn)=>{
 // console.log(mn.data.memes);
  for(var i=0;i<5;i++)
    {
      console.log(mn.data.memes[i].url)
      
    var imgElm=document.createElement('img');
      imgElm.src=mn.data.memes[i].url;
      imgElm.classList.add("meme-holder");
      
      parent.appendChild(imgElm);
    }
  
 
  
});
}


let meme=document.getElementById("meme-button");
meme.addEventListener("click",function(){

  
  if(meme.innerText==="click to loadmemers")
    {
      meme.innerText="click to remove"
      
      
    }
  
  else
    {
      meme.innerText="click to loadmemers"
      parent.innerHTML="";
    }
});


