var Datastore = require('nedb'),
    path = require('path'),
    request = require('request'),
    db = new Datastore({
        filename: path.join(require('nw.gui').App.dataPath, 'joffline.db'),
        autoload: true
    }),
    jar = request.jar();


db.findOne({
    restApiUrl: {
        $exists: true
    }
}, function(err, userDoc) {
    if (!err && userDoc) {
        $('.js-rest-api-url').val(userDoc.restApiUrl);
        $('.js-username').val(userDoc.username);
        $('.js-password').val(userDoc.password);
    }
});


$('.js-login-btn').on('click', function() {
    var restApiUrl = $('.js-rest-api-url').val(),
        userValue = $('.js-username').val(),
        password = $('.js-password').val();

    db.update({
        restApiUrl: {
            $exists: true
        }
    }, {
        restApiUrl: restApiUrl,
        username: userValue,
        password: password
    }, {
        upsert: true
    });

    var options = {
        method: 'post',
        rejectUnauthorized: false,
        url: 'https://www.jamaland.com/j_acegi_security_check',
        form : {
                j_username:userValue,
                j_password:password,
                _spring_security_remember_me:'on',
                submit:'Login'
        },
        headers: {
            'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.146 Safari/537.36',
            'Referer' : 'https://www.jamaland.com/login.req',
            'Host': 'www.jamaland.com',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        jar:jar
    };

    request(options, function() {
        //Check for error
        global.jamaJar = jar;
        window.location.href = 'index.html';
    });
    
});


