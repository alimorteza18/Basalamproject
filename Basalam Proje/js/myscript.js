
    var time1 = 1000;
    var time2 = .9;
    var time3 = 80;
      down = null,
      count = null,
      timer = null;
    function increment (time) {
      time = (time * time2 > time3) ? (time * time2) : time3;
      count.value ++ ;
      timer = setTimeout(
                function () {
                  increment(time);
                }, time);
    }
    function decrement (time) {
      time = time * time2 > time3 ? (time * time2) : time3;
     if(count.value > 0){
       count.value --;}
      timer = setTimeout(
                function () {
                  decrement(time);
                }, time);
   }
   window.onload = function () {
     count = document.getElementById('count');
     document.onmouseup = function () {
       clearTimeout(timer);
     }
   }
   count1 = null;
   count1 = document.getElementById('count1');
   function increment1 (time) {
    time = (time * time2 > time3) ? (time * time2) : time3;
    count1.value ++ ;
    timer = setTimeout(
              function () {
                increment1(time);
              }, time);
  }
  function decrement1 (time) {
    time = time * time2 > time3 ? (time * time2) : time3;
   if(count1.value > 0){
     count1.value --;}
    timer = setTimeout(
              function () {
                decrement1(time);
              }, time);
 }




 count2 = null;
 count2 = document.getElementById('count2');
 function increment2 (time) {
  time = (time * time2 > time3) ? (time * time2) : time3;
  count2.value ++ ;
  timer = setTimeout(
            function () {
              increment2(time);
            }, time);
}
function decrement2 (time) {
  time = time * time2 > time3 ? (time * time2) : time3;
 if(count2.value > 0){
   count2.value --;}
  timer = setTimeout(
            function () {
              decrement2(time);
            }, time);
}


  


 
  