var listElm = document.querySelector('#infinite-list');

var nextItem=1;
var loadmore=function(){
    for(var i=0 ;i<20;i++){
        var item=document.createElement('li');
        item.innerText='item'+nextItem++;
        listElm.appendChild(item);
    }
}

listElm.addEventListener('scroll',function(){
    if(listElm.scrollTop+listElm.clientHeight>=listElm.scrollHeight){
        loadmore();
    }
});

loadmore();