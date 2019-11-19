export default ({ body, title }) => {
  return `<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta charset="UTF-8" />
    <title>Grommet</title>
    <meta name="description" content="Grommet version 2 documentation" />
    <meta name="fragment" content="!" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="theme-color" content="#865CD6" />
    <meta
      name="google-site-verification"
      content="shJGDc1jnWglPRw_VtQnMTqvcai0Br5JBFX1gVrQg-U"
    />
    <link rel="shortcut icon" type="image/png" href="/img/shortcut-icon.png" />
    <link
      rel="apple-touch-icon"
      sizes="196x196"
      type="image/png"
      href="/img/mobile-app-icon.png"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
    />
    <link rel="manifest" href="/manifest.json" />
    <style>
      body {
        margin: 0;
      }
      body.loading #content {
        position: relative;
        width: 100%;
        height: 100%;
        font-size: 0px;
      }
      body.loading #logo {
        position: absolute;
        display: block;
        width: 140px;
        height: 140px;
        top: calc(50vh - 70px);
        left: calc(50vw - 70px);
      }
      body.loading #noscript {
        position: relative;
        font-family: Arial;
        font-size: 20px;
        margin: 0 auto;
        text-align: center;
        max-width: 384px;
        padding: 48px;
        height: 100vh;
      }
      div.t {
        display: inline-block;
        box-sizing: border-box;
        margin: 0px;
        width: 10vw;
        height: 10vh;
        background-color: #f2f2f2;
      }
      div.t.on {
        -webkit-animation: pulse 3s infinite linear alternate;
        -moz-animation: pulse 3s infinite linear alternate;
        animation: pulse 3s infinite linear alternate;
      }
      div.t.on:hover {
        -webkit-animation: none;
        background-color: #eee;
      }
      @-webkit-keyframes pulse {
        100% {
          background-color: #fff;
        }
      }
      @-moz-keyframes pulse {
        100% {
          background-color: #fff;
        }
      }
      @keyframes pulse {
        100% {
          background-color: #fff;
        }
      }
    </style>
  </head>
  <body class="loading">
    <div id="content" tabindex="-1" style="outline: none;">
      <svg id="logo" viewBox="0 0 182 182" version="1.1" role="img">
        <path
          role="presentation"
          d="M 91,91 m 0,-82 a 82,82 0 1,1 0,164 a 82,82 0 1,1 0,-164"
          stroke-width="18"
          stroke="#865CD6"
          fill="none"
        ></path>
      </svg>
      <noscript>
        <p id="noscript">
          This Grommet documentation site requires javascript to show off what
          can be done with Grommet. You must enable javascript to proceed.
        </p>
      </noscript>
      <script>
        var c = document.getElementById('content');
        for (var i = 0; i < 100; i += 1) {
          c.insertAdjacentHTML('beforeend', '<div class="t off"></div>');
        }
        var timer = setInterval(function() {
          var again = false;
          if (document.body.classList.contains('loading')) {
            var ts = c.querySelectorAll('div.t.off');
            if (ts.length > 0) {
              var index = Math.floor(Math.random() * ts.length);
              ts[index].classList.remove('off');
              ts[index].classList.add('on');
              if (ts.length > 1) {
                again = true;
              }
            }
          }
          if (!again) {
            clearInterval(timer);
          }
        }, 100);
      </script>
    </div>
  </body>
</html>`;
};
