var random1 = Math.floor(Math.random()*7)+1
if (random1==7)random1-=1

document.getElementsByClassName('img2')[0].setAttribute('src','images/dice'+random1+'.png')

var random2 = Math.floor(Math.random()*7)+1
if (random2==7)random2-=1


document.getElementsByClassName('img1')[0].setAttribute('src','images/dice'+random2+'.png')


if (random2 > random1) {
    document.getElementsByTagName('h1')[0].innerText='Player 1 wins';
}
else if (random2==random1){
    document.getElementsByTagName('h1')[0].innerText='Draw ';

}
else{
    document.getElementsByTagName('h1')[0].innerText='Player 2 wins';
}
