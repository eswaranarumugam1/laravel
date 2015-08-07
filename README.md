# laravel

Laravel Framework :
  Laravel PHP Framework is built with the focus of writing code syntax that is simple and expressive. This will provide the advantage of having a Web Application that is developer friendly and code that is maintainable.
it has been built with a focus of being superior over the other PHP frameworks, with better code foundation, maintainability and more robust features.
When it comes to code reliability and maintainability, Laravel has a good foundation and great community support behind its PHP Framework.
Laravel Framework Advantages :
Laravel PHP Framework also offers many features such as:
1.	MVC, HMVC
2.	Bundles
3.	RESTful Routing
4.	The Eloquent ORM
5.	Application Logic
6.	Beautiful Templating
7.	Migrations
8.	Unit Testing
9.	Authentication
10.	ACI
11.	Caching
12.	Hooks / Events
13.	Admin Generation
14.	Scaffolding
15.	Validation
16.	Automatic Pagination
Artisan:
Artisan is the name of the command-line interface included with Laravel. It provides a number of helpful commands for your use while developing your application. It is driven by the powerful Symfony Console component.
Ex. 


Laravel Installation Steps :
1.	Download composer File from https://getcomposer.org/
2.	install the composer where the php.exe file located.
3.	In command prompt enter the location of project. 
4.	type in cmd prompt D:\xampp\htdocs\projects > composer create-project laravel/laravel laravel-demo (laravel-demo  is your project name).
5.	After creating project you have to run the project http://localhost/projects/laravel-demo/public (You can copy all the files reside in public and paste it outside public folder then you can delete public )
6.	You can create controller via composer through cmd prompt D:\xampp\htdocs\projects\laravel-demo> php artisan make: controller controllerName.(like model also can create via same instead of controller we will put php artisan make:model  modelName).

Note : You can also create a controller manually and model also.

7.	After creating controller and model you should create file for view page or folder at 
	\\NOVEL12\projects2\demo-laravel\resources\views 
i.	Ex. : index.blade.php (blade is must while create php file)

8.	To include external css and html file you should install 

D:\xampp\htdocs\projects > composer require illuminate/html. 

After installed this you have to include in config /app.php under
 provider :
i.	Illuminate\Html\HtmlServiceProvider::class, and in


b.	Alias :
i.	'Html'     => Illuminate\Html\HtmlFacade::class,
ii.	'Form'  => Illuminate\Html\FormFacade::class
To include css like { !! Html::style(‘css/style.css’) !! }
To include Js like { !! Html::script(‘js/jquery.js’) !! }

9.	Then update the composer via D:\xampp\htdocs\projects > composer update.
10.	You can create a table via migration file. To create migration file via D:\xampp\htdocs\projects >php artisan make:migration table_name
11.	After creating migration file that resides in database/migrations.
To create table 
     Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('full_name', 100);
            $table->string('username', 100);
            $table->string('password', 100);
            $table->timestamps();
        });
12.	 Before creating table you must change the database name, username, password in .env file.

