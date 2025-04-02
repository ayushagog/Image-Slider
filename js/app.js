var icns = document.querySelectorAll('.container i');

// console.log(icns);
var items = document.querySelectorAll('.item');
// console.log(items);

// var images = document.querySelectorAll('.item img');

var pos = 0;
icns[0].addEventListener('click',function(){
    if(items.length-5 <= pos )return
    pos++;
    // console.log(pos);
    for(var i = 0 ;i<items.length;i++){
        // console.log(items[i]);
        items[i].style.transform=`translateX(-${pos*200}px)`;
        
    }
    // console.log(i,items)
})

// pos = 0;
icns[1].addEventListener('click',function(){
    if(pos==0)return
    
    pos--;
    for(var i = 0 ;i<items.length;i++){
        // console.log(items[i]);
        items[i].style.transform=`translateX(-${pos*200}px)`;
        
    }
})