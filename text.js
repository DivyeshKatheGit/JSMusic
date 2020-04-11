window.addEventListener('load',()=>
{
    const pads= document.querySelectorAll('.pad');
    const colors1 = ['#60d394','#d36060','#c060d3','#d3d160','#6860d3','#60b2d3'];
    const colors2= ['#35f089','#cf4444','#9535a8','#e4e136','#4a42c4','#337a96'];
    const sounds = document.querySelectorAll('.sound');
    for(let i=0;i<pads.length;i++)
    {
        pads[i].addEventListener('click',()=>
        {
            //Sound
            sounds[i].currentTime = 0;
            sounds[i].play();
            //creating Bubble
            const bubble = document.createElement('div');
            bubble.classList.add('bubble');
            pads[i].appendChild(bubble);
            let x=Math.floor(Math.random()*80);
            bubble.style.width = x+'px';
            bubble.style.height = x+'px';
            bubble.style.background = 'radial-gradient('+colors1[i]+','+colors2[i]+')';
            bubble.style.boxShadow = '0px 0px 30px'+colors1[i];
        })
    }
});