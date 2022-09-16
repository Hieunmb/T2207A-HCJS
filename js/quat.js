 var f=1;
    function quay() {
        var x = document.getElementById("quat");
        x.style.transform='rotate('+f+'deg)';
        f+=1;
    }
    var at
    function quayTron1(){
        clearInterval(at);
        at=setInterval(quay,15);
    }function quayTron2(){
        clearInterval(at);
        at=setInterval(quay,10);
    }function quayTron3(){
        clearInterval(at);
        at=setInterval(quay,5);
    }
    function quatdung(){
        clearInterval(at);
    }
