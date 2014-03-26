JOffline.User = DS.Model.extend({

	username: DS.attr('string'),
	password: DS.attr('string'),
	rest_url: DS.attr('string');
});