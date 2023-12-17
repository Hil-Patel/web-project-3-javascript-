function assign(n,op){
    document.querySelector(".img1").setAttribute("src","./images/dice"+n+".png");
    document.querySelector(".img2").setAttribute("src","./images/dice"+op+".png");
}
var num1=Math.floor(Math.random()*6)+1;
var num2=Math.floor(Math.random()*6)+1;
if(num1>num2)
{
    document.querySelector("h1").innerText="🏆 Player 1 Wins!";
}
else if(num1<num2)
{
    document.querySelector("h1").innerText="Player 2 Wins! 🏆";
}
else{
    document.querySelector("h1").innerText="Draw!";
}
assign(num1,num2);
