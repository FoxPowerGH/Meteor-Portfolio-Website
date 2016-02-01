 // set up the main template the the router will use to build pages
Router.configure({
  layoutTemplate: 'layout'
});


  // Prevent unauthorized access
  Router.onBeforeAction(function () {
    if (!Meteor.user()) {
      this.render("navbar", {to:"header"});
      this.render("AccessDenied");
    } else
    {
      this.next();
    }
  });
  

// specify the top level route, the page users see when they arrive at the site
	Router.route('/', function () {
		this.render("navbar", {to:"header"});
		this.render("home", {to:"main"});
 		this.render("navbar-bottom", {to:"footer"});  
	});


	Router.route('/news', function () {
		this.render("navbar", {to:"header"});
		this.render("news", {to:"main"});
 		this.render("navbar-bottom", {to:"footer"});  
	});


	Router.route('/blogIndex', function () {
		this.render("navbar", {to:"header"});
		this.render("blog", {to:"main"});
 		this.render("navbar-bottom", {to:"footer"});  
	});


