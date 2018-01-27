window.addEventListener('load',function(){
    var jdeffect = new jdEffect();
    jdeffect.searchGradient();
    jdeffect.timer();
    jdeffect.slidePlay();
})

//创建一个构造函数
var jdEffect = new Function();

//搜索框
jdEffect.prototype.searchGradient = function () {
    //要调用一次
    opacity();
    window.addEventListener('scroll', opacity);
    function opacity () {
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        var searchBox = document.querySelector('#search');
        var slideHeight = document.querySelector('#slide').offsetHeight;
        
        // 透明度等于滚下去的高度/轮播图的高度
        var searchOPC = scrollTop / slideHeight*0.8;

        // 背景透明度最大只能0.8
        if (searchOPC < 0.8) {
            searchBox.style.backgroundColor = "rgba(225,48,50,"+searchOPC+")";
        }else{
            searchBox.style.backgroundColor = "rgba(225,48,50,0.8)";
        }
    }
}

//倒计时
jdEffect.prototype.timer = function () {
    //获取当前时间
    var nowTime = new Date().getTime();
    // console.log(nowTime);

    //获取未来时间
    var newTime = new Date(2018,0,26,20,30,00).getTime();
    // console.log(newTime);
    
    //获取span 标签
    var span = document.querySelectorAll('.seckill .circle span');

    //计算小时 分 秒
    var secondsAll = (newTime - nowTime) / 1000;

    //倒计时  计时器
    var timeID = setInterval(clock,1000);
    clock();
    function clock() {
        secondsAll--;
        if(secondsAll<=0){
            clearInterval(timeID);
            secondsAll =0;
        }
        var hours = Math.floor(secondsAll / 60 / 60);
        var minute = Math.floor(secondsAll / 60 % 60);
        var seconds = Math.floor(secondsAll % 60);
        span[0].innerHTML = Math.floor(hours/10);
        span[1].innerHTML = Math.floor(hours % 10);
        span[3].innerHTML = Math.floor(minute/10);
        span[4].innerHTML = Math.floor(minute%10);
        span[6].innerHTML = Math.floor(seconds/10);
        span[7].innerHTML = Math.floor(seconds%10);
    }    
}

//轮播图
jdEffect.prototype.slidePlay = function () {
    
    
}