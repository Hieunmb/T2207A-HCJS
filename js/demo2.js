var obj= {
    name:'Phung Van Vu',
    age:18,
    mark:6,
    girlFriends:['Nguyen Thuy Kieu','Nguyen Thuy Van','Ngoc Trinh','Ky Duyen'],
    eat:function (){
        console.log(this.name+" dang an...");
    }
};
console.log(obj.name);
obj.name='Nguyen Viet Cuong';
console.log(obj.name)
for(var i=0;i<obj.girlFriends.length;i++){
    console.log(obj.girlFriends[i]);
}
obj.eat();
var f=1;
function demo() {
    var x = document.getElementById("abc");
    //x.innerText = "Xin chao tat ca cac sinh vien lop T2207A";//doi noi dung chu~;
   // x.innerHTML += '<i>Hello World!</i>';
    //x.style.color="red";
    //x.style.fontSize =f+ 'px';
    //f+=5;
    x.style.transform='rotate('+f+'deg)';
    f+=1;
}
setInterval(demo,15);