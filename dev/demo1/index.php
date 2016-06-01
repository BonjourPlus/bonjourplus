<!doctype html>
<html>
  <head>
    <title>Bonjour+</title>
    <script type="text/javascript" src="/jquery-1.11.3.min.js"></script>
    <script type="text/javascript" src="http://<?php echo $_SERVER['SERVER_NAME']; ?>:8087/socket.io/socket.io.js"></script>
    <style type="text/css">
        body {
            background: black;
        }

        h1 {
            color: white;
            font-size: 50px;
            width: 300px;
            text-align: center;
            margin: 20% auto 0;
        }

        .call img {
            width: 100%;
            height: auto;
        }
    </style>
    <script type="text/javascript">
      $(function() {
          var socket = io.connect("http://<?php echo $_SERVER['SERVER_NAME']; ?>:8087");
          socket.on("call", function() { $("h1").hide(); $(".call").show(); });
      });
    </script>
  </head>
  <body>
    <h1>Attente...</h1>
    <div class="call" style="display:none">
      <!-- <video width="1280" height="720" preload="false" controls="false" autoplay="true"><source src="http://<?php echo $_SERVER['SERVER_NAME']; ?>:8081" type="video/mp4"></video> -->
      <img src="http://<?php echo $_SERVER['SERVER_NAME']; ?>:8081" />
    </div>
  </body>
</html>
