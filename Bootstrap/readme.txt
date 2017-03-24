1. <div class="container"></div> restricted area
   <div class="container-fluid"><div> the entire screen width

2. bootstrap has 12 columns, 12 is a magic number 
   xs extreme small  phone
   sm small          tablet
   md medium         laptop
   lg large          Imax

    <div class="container-fluid">
    <div class="row">
      <div class="col-md-4" style="background-color: #FF9999">Left</div>
      <div class="col-md-4" style="background-color: #99CCEE">Middle</div>
      <div class="col-md-4" style="background-color: #00CC99">Right</div>
    </div>
   </div>

   col - md(medium)-4( one of third of screen width)

 3. Text
    <mark>text using the mark</mark>  

    (quote)
    <blockquote>
    <p>Day one or one day, you decide!</p>
    <footer>Jane Doyle</footer>  
    </blockquote>
    
    (list)
    <dl>
      <dt>BasketBall</dt>
      <dd>-Nets</dd>
      <dd>-Knicks</dd>
      <dt>Football</dt>
      <dd>-Gaint</dd>
      <dd>-Jets</dd>
    </dl> 
    
    (code and multi codes)
    <code>SetUserWeight(374);</code>

    <p>For multi line code use the pre tags</p>
    <pre>
      for n in range(101):
       if(n % 4 is 0):
       print(n);
    </pre>

    (kbd)
    <p>This one is supposed to be keyboard input <kbd>Ctrl+Alt+Del</kbd> </p>
     
    (gray green & red)
    <p class="text-muted">Text Muted</p>
    <p class="text-success">Conrgats, you fill out the form correctly</p>
    <p class="text-danger">Wrong input</p>
    <p class="bg-success">Conrgats, you fill out the form correctly</p>
    <p class="bg-danger">Wrong input</p>


4. table
    <table class="table">
    <table class="table table-condensed">
    <table class="table table-striped">

5. image  
    
    class="img-rounded" 
    class="img-circle"
    class="img-responsive"  => The image size will changed according to the page size 

6. video 
    
     <div class="embed-responsive embed-responsive-16by9">  
     <iframe src=""  class="embed-responsive-item"></iframe> //size change
     </div> 

7.  Top Menu
     <nav class="navbar navbar-inverse"> black and white
    <div class="navbar navbar-default"> gray and white

     <div class="navbar-header">
       <a href="#" class="navbar-brand">Captial Energy LLC</a>   =>Logo
     </div>
    
    <ul class="nav navbar-nav">
    <li class="active"><a href="#">Home</a></li>              =>Top Menu Bar
    <li ><a href="#">About</a></li>  


    <li class="dropdown">
    <a href="#" class="dropdown-toggle" data-toggle="dropdown">My Profile <span class="caret"></span></a>   =>drop down menu
    <ul class="dropdown-menu">


    ul class="nav navbar-nav navbar-right">                  =>right menu


8.  responsive top menu(toggle menu)
    
     <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#mainNavBar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button> 

      <div  class="collapse navbar-collapse" id="mainNavBar">

9.   Well alert box

10.      


