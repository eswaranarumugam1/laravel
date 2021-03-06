<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta charset="utf-8">
<meta content="IE=edge" http-equiv="X-UA-Compatible">
<meta content="width=device-width, initial-scale=1" name="viewport">
<title>SmartHome</title>
{!! Html::style( ('css/bootstrap.css')) !!}
{!! Html::style( ('css/font-awesome/css/font-awesome.min.css')) !!}
{!! Html::style( ('css/style_new.css')) !!}

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
            <img src="images/logo.png" class="img-responsive" />
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
           <div class="col-sm-12">
           <h1>User List</h1>
           <div style="color:green"> {!! Session::get('message')!!}</div>
            <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>Firstname</th>
                    <th>Email</th>
                     <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                    @foreach($users as $stu)
                        <tr>
                            <td>{{$stu->full_name}}</td>
                            <td>{{$stu->email}}</td>
                            <td><a href="{{ URL::to('/edit/'.$stu->id) }}">Edit</a>&nbsp;
                            <a href="{{ URL::to('/delete/'.$stu->id) }}" onclick="return confirm('Are you sure you want to delete?');return false;">Delete</a></td>
                        </tr>
                    @endforeach
                </tbody>
            </table>

          </div> <!-- col -->
        </div>
    </div>
</div>

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
