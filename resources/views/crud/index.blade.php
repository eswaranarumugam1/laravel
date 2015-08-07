<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta charset="utf-8">
<meta content="IE=edge" http-equiv="X-UA-Compatible">
<meta content="width=device-width, initial-scale=1" name="viewport">
<title>SmartHome</title>
{!! Html::style( 'css/bootstrap.css') !!}
{!! Html::style('css/font-awesome/css/font-awesome.min.css') !!}
{!! Html::style( 'css/style_new.css') !!}

<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
<![endif]-->

</head>

<body>
<div class="headerWrap">
  <div class="container-fluid">
        <div class="col-md-4 left_menu">
        {!! Html::image( 'images/logo.png') !!}

            <div class="slogon">
              Provided to you by Natasha Smith
           </div>
        </div>

        <div class="col-md-8 right_menu">
            <nav class="navbar navbar-default">
              <div class="container-fluid pRight">
                <!-- Brand and toggle get grouped for better mobile display -->
                    <div class="navbar-header">
                      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                      </button>
                    </div>
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                      <ul class="nav navbar-nav">
                        <li class="active"><a href="{{ URL::to('/home') }}">Home</a></li>
                        <li><a href="{{ URL::to('/') }}">Register</a></li>
                        <li><a href="{{ URL::to('/login') }}">Login</a></li>
                      </ul>



                    </div><!-- /.navbar-collapse -->
              </div><!-- /.container-fluid -->
            </nav>
        </div>

  </div>

</div>


<div class="container-fluid">
    <div class="col-md-12" style="padding:0px 20px">
       <div class="row" style="margin-top:40px">
           <div class="col-sm-9">
            <h1>New User</h1>
           	 <div style="color:green"> {!! Session::get('message')!!}</div>
              {!! Form::open(array('url'=> 'save_user'))!!}
                    <div class="form-group">
                      <label for="first_name">First Name</label>
                      <input type="text" class="form-control" id="first_name" name="first_name">
                    </div>
                    <div class="form-group">
                      <label for="email">Email address:</label>
                      <input type="email" class="form-control" id="email" name="email">
                    </div>
                    <div class="form-group">
                      <label for="pwd">Password:</label>
                      <input type="password" class="form-control" id="pwd" name="password">
                    </div>

                    <button type="submit" class="btn btn-default">Submit</button>

              {!! Form::close()!!}
          </div> <!-- col -->
        </div>
    </div>
</div>

<footer class="footer footerWrap">
  <div class="container-fluid" >
    <div class="col-md-12 mt10 txtCenter pL0">
            <div class="col-md-9">
              <img src="images/footer_logo.png" class="img-responsive" />
            </div>
            <div class="col-md-3 fs12 txtRight alignCenter">
                 Join us &nbsp;<i class="fa fa-facebook-official fa-lg"></i>
                 &nbsp;<i class="fa fa-twitter-square fa-lg"></i>
                 &nbsp;<i class="fa fa-linkedin-square fa-lg"></i>
                 &nbsp;<i class="fa fa-google-plus-square fa-lg"></i>
                 <p class="pT10 fs12 alignCenter"> Terms and Conditions &emsp; Affliates</p>
            </div>
     </div>
        <div class="col-md-12 fs12 txtCenter mb20">
                @2015. All rights reserved. Smart Home Resourse
        </div>
 </div>
</footer>


</body>

{!! Html::script( ('js/jquery.min.js')) !!}
{!! Html::script( ('js/bootstrap.js')) !!}
<script>
  // Window load event used just in case window height is dependant upon images
$(window).bind("load", function() {

       var footerHeight = 0,
           footerTop = 0,
           $footer = $(".footer");

       positionFooter();

       function positionFooter() {

                footerHeight = $footer.height();

                footerTop = ($(window).scrollTop()+$(window).height()-footerHeight)+"px";

               if ( ($(document.body).height()+footerHeight) < $(window).height()) {
                   $footer.css({
                        position: "absolute"
                   }).animate({top: footerTop}, 0)
               } else {
                   $footer.css({
                        position: "static"
                   })
               }

       }

       $(window)
               .scroll(positionFooter)
               .resize(positionFooter)

});
</script>
</html>