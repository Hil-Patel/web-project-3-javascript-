function assign(n,op){
    if(n==1){
        document.querySelector(".img1").setAttribute("src","./images/dice1.png");
    }
    else if(n==2){
        document.querySelector(".img1").setAttribute("src","./images/dice2.png");
    }
    else if(n==3){
        document.querySelector(".img1").setAttribute("src","./images/dice3.png");
    }
    else if(n==4){
        document.querySelector(".img1").setAttribute("src","./images/dice4.png");
    }
    else if(n==5){
        document.querySelector(".img1").setAttribute("src","./images/dice5.png");
    }
    else if(n==6){
        document.querySelector(".img1").setAttribute("src","./images/dice6.png");
    }

    if(op==1){
        document.querySelector(".img2").setAttribute("src","./images/dice1.png");
    }
    else if(op==2){
        document.querySelector(".img2").setAttribute("src","./images/dice2.png");
    }
    else if(op==3){
        document.querySelector(".img2").setAttribute("src","./images/dice3.png");
    }
    else if(op==4){
        document.querySelector(".img2").setAttribute("src","./images/dice4.png");
    }
    else if(op==5){
        document.querySelector(".img2").setAttribute("src","./images/dice5.png");
    }
    else if(op==6){
        document.querySelector(".img2").setAttribute("src","./images/dice6.png");
    }
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
