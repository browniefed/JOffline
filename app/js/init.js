var Datastore = require('nedb')
	, path = require('path')
  	, db = new Datastore({ filename: path.join(require('nw.gui').App.dataPath, 'joffline.db'), autoload: true });

  	db.findOne({restApiUrl: {$exists: true}}, function(err, restApiDoc) {
  		if (!err && restApiDoc) {
  			$('.js-rest-api-url').val(restApiDoc.restApiUrl);
  		}
  	});


  	$('.js-login-btn').on('click', function() {
  		var val = $('.js-rest-api-url').val();
  		db.update({ restApiUrl: {$exists: true} }, { restApiUrl: val }, { upsert: true });
  	});


