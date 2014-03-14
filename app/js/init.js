var Datastore = require('nedb')
	, path = require('path')
  	, db = new Datastore({ filename: path.join(require('nw.gui').App.dataPath, 'joffline.db'), autoload: true });

  	db.findOne({restApiUrl: {$exists: true}}, function(err, userDoc) {
  		if (!err && userDoc) {
  			$('.js-rest-api-url').val(userDoc.restApiUrl);
  			$('.js-username').val(userDoc.username);
  			$('.js-password').val(userDoc.password);
  		}
  	});


  	$('.js-login-btn').on('click', function() {
  		var val = $('.js-rest-api-url').val(),
  			userValue = $('.js-username').val(),
  			password = $('.js-password').val();

  		db.update({ restApiUrl: {$exists: true} }, { restApiUrl: val, username: userValue, password: password }, { upsert: true });
  	});


