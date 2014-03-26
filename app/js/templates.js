Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  stack1 = helpers._triageMustache.call(depth0, "appName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});

Ember.TEMPLATES["login"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"row\">\n	<div class=\"large-12\">\n		<img src=\"img/jama-logo.png\" class=\"jama-logo-login\">\n	</div>\n</div>\n<div class=\"login-form\">\n	<form>\n	  <div class=\"row\">\n	    <div class=\"large-12 columns\">\n	      <label class=\"\">\n	      	Username\n	        <input type=\"text\" name=\"username\" class=\"js-username\" />\n	      </label>\n	    </div>\n	    <div class=\"large-12 columns\">\n	      <label>\n	      	Password\n	        <input type=\"password\" name=\"password\"  class=\"js-password\" />\n	      </label>\n	    </div>\n	    <div class=\"large-12 columns\">\n	      <label>\n	      	Jama URL\n	        <input class=\"js-rest-api-url\" type=\"text\" name=\"jamaurl\" />\n	      </label>\n	    </div>\n	    <div class=\"large-12 columns\">\n	        <a class=\"button expand js-login-btn\">Login</a>\n	    </div>\n	  </div>\n	</form>\n</div>");
  
});

Ember.TEMPLATES["item/baseitem"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '';


  return buffer;
  
});