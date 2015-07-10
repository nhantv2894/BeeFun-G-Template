
<!--CREATE BY N-BEE--><!DOCTYPE html>
<html>
  <!--HEAD-->
  <head>
    <title>BeeFun</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;">
    <link rel="icon" href="images/favicon.ico" type="image/x-icon">
    <!--CSS-->
    <link rel="stylesheet" href="css/reset.css">
    <!-- Main css-->
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/slidebars.css">
    <link rel="stylesheet" href="css/font-awesome.css">
    <link rel="stylesheet" href="css/font-awesome.min.css">
    <!--SCRIPTS-->
    <script src="js/jquery-2.1.4.js"></script>
    <script src="js/jquery-2.1.4.min.js"></script>
    <script src="js/header.js"></script>
    <script src="js/slidebars.js"></script>
    <script src="js/main.js"></script>
  </head>
  <body>
    <!--LOADING-->
    <!--Created by khoinh on 7/2/2015.
    -->
    <div id="res-menu"><i class="fa fa-bars fa-2x"></i></div><span id="to_top"></span>
    <!--Loading-->
    <div class="content-loading">
      <div id="loader">
        <div class="circle"></div>
        <div class="dot"></div>
        <div class="circle1"></div>
        <h2 id="loading-text">Loading</h2>
      </div>
      <ul class="tab">
        <li id="1" class="tab1"><span class="yellow-b"></span><img src="images/tab_1.png"></li>
        <li id="2" class="tab2"><span class="yellow-b"></span><img src="images/tab_2.png"></li>
        <li id="3" class="tab3"><span class="yellow-b"></span><img src="images/tab_3.png"></li>
        <li id="4" class="tab4"><span class="yellow-b"></span><img src="images/tab_4.png"></li>
      </ul>
      <div class="clr"></div>
      <div class="bottom">
        <div id="icon-enter"><img src="images/left-wellcome.png" class="left">
          <input type="button" name="agreement" value="Enter" id="enter" class="left"><img src="images/right-wellcome.png" class="right">
          <div class="clr"></div>
        </div>
      </div>
    </div>
    <!--End Loading-->
    <!--p#test 123-->
    <!--CANVAS-->
    <div canvas="container" class="close-any">
      <!--HEADER + MENU-->
      <!--HEADER Normal-->
      <div class="head-normal">
        <header>
          <div class="top-bar">
            <div class="content">
              <div class="up-bar"><span id="img-up-bar" class="right"></span>
                <div class="clr"></div>
              </div>
              <div class="l-top-bar left"><img src="images/top-logo.png" alt="Top logo" id="logo"></div>
              <div class="r-top-bar left">
                <nav id="horizonal-menu">
                  <ul class="menu left">
                    <li class="li-normal"><span class="spread"></span><a href="#" onmousedown="autoScrollTo('feature_');" id="feature">Feature</a>
                      <div class="clr"></div>
                    </li>
                    <li class="li-normal"><span class="spread"></span><a href="#" onmousedown="autoScrollTo('service_');" id="service">Service</a>
                      <div class="clr"></div>
                    </li>
                    <li class="li-normal"><span class="spread"></span><a href="#" onmousedown="autoScrollTo('aboutus_');" id="aboutus">About us</a>
                      <div class="clr"></div>
                    </li>
                    <li class="li-normal"><span class="spread"></span><a href="#" onmousedown="autoScrollTo('contact_');" id="contact">Contact</a>
                      <div class="clr"></div>
                    </li>
                  </ul>
                </nav>
              </div>
              <div class="clr"></div>
            </div>
          </div>
        </header>
      </div>
      <!--END HEADER Normal-->
      <!--HEADER Respondsive-->
      <div class="head-res">
        <header>
          <div class="top-bar">
            <div class="up-bar"></div>
            <div class="l-top-bar"><img src="images/NewLogo.png" alt="Top logo" id="logo"></div>
          </div>
        </header>
      </div>
      <!--SLIDE-->
      <!--
      Created by NhanTK on 01-Jul-15.
      
      -->
      <div class="slide"></div>
      <!--BAR_1-->
      <div id="feature_" class="full-screen white-bg"><img src="images/BeeFeature.png" class="beeimg">
        <h3>FEATURE</h3><span class="arrDown"></span>
      </div>
      <ul class="bar-1">
        <li id="b_1" class="bar-item">
          <div class="box"><span class="img-box"></span>
            <p>BOX 1</p>
            <div class="clr"></div>
          </div>
        </li>
        <li id="b_2" class="bar-item">
          <div class="box"><span class="img-box"></span>
            <p>BOX 2</p>
            <div class="clr"></div>
          </div>
        </li>
        <li id="b_3" class="bar-item">
          <div class="box"><span class="img-box"></span>
            <p>BOX 3</p>
            <div class="clr"></div>
          </div>
        </li>
        <li class="clr"></li>
      </ul>
      <div class="space_1"></div>
      <!--BAR_2-->
      <!--
      Created by NhanTK on 04-Jul-15.
      
      -->
      <div id="service_" class="full-screen white-bg"><img src="images/BeeService.png" class="beeimg">
        <h3>SERVICE</h3><span class="arrDown"></span>
      </div>
      <div class="bar-2">
        <div class="content">
          <div id="blt_1" class="block-text">
            <h1>TITLE TOP</h1>
            <p>
              To alter a bounding box size,
              insert the type I-beam cursor in the text so its blinking,
              then hover your cursor over an edge of the bounding box.
              The cursor will change to an arrow indicator letting you know you
              can click-drag to resize the bounding box.
            </p>
          </div>
        </div>
      </div>
      <div class="bar-3">
        <div class="content">
          <div id="blt_2" class="block-text">
            <h1>TITLE TOP</h1>
            <p>
              To alter a bounding box size,
              insert the type I-beam cursor in the text so its blinking,
              then hover your cursor over an edge of the bounding box.
              The cursor will change to an arrow indicator letting you know you
              can click-drag to resize the bounding box.
            </p>
          </div>
        </div>
      </div>
      <div class="bar-4">
        <div class="content">
          <div id="blt_3" class="block-text">
            <h1>TITLE TOP</h1>
            <p>
              To alter a bounding box size,
              insert the type I-beam cursor in the text so its blinking,
              then hover your cursor over an edge of the bounding box.
              The cursor will change to an arrow indicator letting you know you
              can click-drag to resize the bounding box.
            </p>
          </div>
        </div>
      </div>
      <div class="space_2"></div>
      <!--ABOUTUS-->
      <!--
      Created by NhanTK on 04-Jul-15.
      
      -->
      <div id="aboutus_" class="full-screen white-bg"><img src="images/BeeAbout.png" class="beeimg">
        <h3>ABOUT US</h3><span class="arrDown"></span>
      </div>
      <div class="full-screen about"></div>
      <!--FOOTER-->
      <!--
      Created by NhanTK on 04-Jul-15.
      
      -->
      <div class="space_3">
        <div class="content"><img src="images/BeeTextLogo.jpg"></div>
      </div>
      <div class="space_4"></div>
      <div id="contact_" class="full-screen white-bg"><img src="images/BeeContact.png" class="beeimg">
        <h3>CONTACT</h3><span class="arrDown"></span>
      </div>
      <div class="contact">
        <div class="content">
          <form id="contactfrm" method="get" action="">
            <input id="name" file="text" name="name" minlength="2" type="text" placeholder="Your name...">
            <input id="email" file="text" name="email" minlength="2" type="text" placeholder="Your email...">
            <input id="phone" file="text" name="phone" minlength="2" type="text" placeholder="Your phone...">
            <textarea id="comment" name comment required placeholder="Your comment..." rows="4" cols="50"></textarea>
            <div class="submit">
              <input type="submit" name="submit" value="Submit">
              <input type="reset" name="reset" value="Reset">
            </div>
          </form>
        </div>
      </div>
      <footer>
        <div class="content">
          <div class="block-foot">
            <div class="column-foot"><img src="images/text_foot.png"></div>
          </div>
          <div class="block-foot">
            <div class="column-foot-center">
              <!--Left side-->
              <div class="left-side">
                <table>
                  <tr>
                    <td width="10%"><i class="fa fa-phone"></i></td>
                    <td>
                      <p>0932 533 670</p>
                    </td>
                  </tr>
                  <tr>
                    <td width="10%"><i class="fa fa-envelope-o"></i></td>
                    <td>
                      <p>beefun-team@gmail.com</p>
                    </td>
                  </tr>
                  <tr>
                    <td width="10%"><i class="fa fa-map-marker"></i></td>
                    <td>
                      <p>... Distric - Hai Chau Province - Da Nang City</p>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div class="block-foot">
            <div class="column-foot">
              <table>
                <tr><a href="#feature_" class="link-foot">Feature |</a><a href="#service_" class="link-foot">Service |</a><a href="#aboutus_" class="link-foot">About us</a>
                  <div class="clr"></div>
                </tr>
                <tr>
                  <div class="icon-foot">
                    <p class="left">Follow us:</p><a href="#"><span id="z-icon" class="right-icon"></span></a><a href="#"><span id="f-icon" class="right-icon"></span></a><a href="#"><span id="t-icon" class="right-icon"></span></a><a href="#"><span id="g-icon" class="right-icon"></span></a>
                    <div class="clr"></div>
                  </div>
                </tr>
                <tr>
                  <p>Design by .<i>BeeFun-G</i>. Copyright @2015</p>
                </tr>
              </table>
            </div>
          </div>
          <div class="clr"></div>
        </div>
      </footer>
    </div>
    <!--MENU RIGHT-->
    <!--Created by khoinh on 7/2/2015.
    -->
    <div off-canvas="sb-1 right reveal" class="right-menu">
      <div class="menu-content">
        <ul class="menu">
          <li class="li-normal"><a href="#" onmousedown="toTop();">Home</a></li>
          <li class="li-normal"><a href="#feature_">Feature</a></li>
          <li class="li-normal"><a href="#service_">Service</a></li>
          <li class="li-normal"><a href="#aboutus_">About us</a></li>
          <li class="li-normal"><a href="#contact_">Contact</a></li>
        </ul>
      </div>
      <div class="bottom-icon"><a href="#"><span id="f-icon" class="right-icon"></span></a><a href="#"><span id="g-icon" class="right-icon"></span></a><a href="#"><span id="t-icon" class="right-icon"></span></a><a href="#"><span id="z-icon" class="right-icon"></span></a>
        <div class="clr"></div>
      </div>
      <div class="block-foot">
        <div class="column-foot">
          <table>
            <tr>
              <td width="10%"><i class="fa fa-phone"></i></td>
              <td>
                <p>0932 533 670</p>
              </td>
            </tr>
            <tr>
              <td width="10%"><i class="fa fa-envelope-o"></i></td>
              <td>
                <p>beefun-team@gmail.com</p>
              </td>
            </tr>
            <tr>
              <td width="10%"><i class="fa fa-map-marker"></i></td>
              <td>
                <p>... Distric - Hai Chau Province - Da Nang City</p>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <!--END HEADER Respondsive-->
    </div>
  </body>
</html>