// console.log("Welcome to tic toc toe")
let music=new Audio("./media/music.mp3")
let winmusic=new Audio("./media/winmusic.mp3")
let turn="X"
let flag=false;
const changeTurn=()=>{
    return turn==="X"? "0":"X";
}
const checkWin=()=>{
    let boxtext=document.getElementsByClassName("boxtext");
    let win =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [1,4,7],
        [0,3,6],
        [2,5,8],
        [0,4,8],
        [2,4,6]
        
    ]
    win.forEach(e=>{
        if((boxtext[e[0]].innerHTML===boxtext[e[1]].innerHTML)&&(boxtext[e[1]].innerHTML===boxtext[e[2]].innerHTML)&&(boxtext[e[0]].innerHTML!=="")){
            document.querySelector('.info').innerHTML=boxtext[e[0]].innerHTML+"  is WINNER";
             winmusic.play();
            flag=true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="250px";
        }
    })
}
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',(e)=>{
        if(boxtext.innerHTML===''){
            boxtext.innerHTML=turn;
            turn=changeTurn();
            music.play();
            checkWin();
            if(!flag){

                document.getElementsByClassName("info")[0].innerHTML="Turn For"+ turn;
            }
        }
    })
})
reset.addEventListener('click',()=>{
    let boxtext=document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element=>{
        element.innerHTML="";
         winmusic.pause();
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px";

    });
    turn="X";
    flag=false;
    document.getElementsByClassName("info")[0].innerHTML="Turn For"+turn;

}) 
