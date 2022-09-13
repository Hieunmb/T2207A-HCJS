var a=10;
var b=0;
function demo() {
    if (b == 0) {
        a=a-1;
        b=59;}
        var h= document.getElementById("hour");
        var m= document.getElementById("minutes");
        h.innerText=a;
        m.innerText=b;
        console.log(a);
        console.log(b);
        b--;
        if(a==0&&b==0){
            clearInterval(at);
            console.log(a);
            console.log(b);
        }
}
var at = setInterval(demo, 500)