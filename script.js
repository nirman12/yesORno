let para=["Are your sure?😩","itni jaldi jhutt bat bolo😚","kyu esa kar rahi ho","boht glt baat h yr🥺"]
let head=["Please think again!😟","Ek aur baar soch lo!🥹","Bbg man jao naa kitni bhao khaogi☹️"]
let img=["hugs.gif","jump."]




document.querySelector(".no").addEventListener("click",()=>{
    let paraRandom=para[Math.floor(Math.random()*para.length)]
    let headRandom=head[Math.floor(Math.random()*head.length)]
    document.querySelector('.head').innerText=headRandom;
    document.querySelector('.para').innerText=paraRandom;
    document.querySelector('.image').src="jump.gif";
})

document.querySelector(".yes").addEventListener("click",()=>{
    document.querySelector(".head").innerText="Hehehe, I knew it! Love you alot😘"
    document.querySelector('.para').innerText=""
    document.querySelector('.buttons').innerText=""

})


// 😮‍💨😩🤭🫣🫢