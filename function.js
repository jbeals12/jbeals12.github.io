object.addEventListener("load", myScript);
<script>
  object.onload = function(){myScript};
      function openColorBox(){
        $.colorbox({iframe:true, width:"80%", height:"80%", href: "http://www.sitepoint.com"});
      }
      
      function countDown(){
        seconds--
        $("#seconds").text(seconds);
        if (seconds === 0){
          openColorBox();
          clearInterval(i);
        }
      }

      var seconds = 5,
          i = setInterval(countDown, 1000);
    </script>
