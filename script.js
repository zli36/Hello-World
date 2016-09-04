var request = require('request');
var fs = require("fs");
var Promise = require('bluebird');
var parse = require('parse-link-header');


////// FILL IN THE BLANKS

var token = "token " + "6fd0f6e3ec1624bcfb2254b6e1e4129591ea84a6";
var userId = "zli36";
var repoo = "Hw1";

var urlRoot = "https://api.github.com";
// NCSU Enterprise endpoint:
// https://github.ncsu.edu/api/v3
//https://api.github.com

getYourRepos(userId);
//listBranches(userId,repoo);
//createRepos();
//createAnIssue(userId,repoo);
//Edit(userId,repoo);

function getYourRepos(userName)
{

	var options = {
		url: urlRoot + '/users/' + userName + "/repos",
		method: 'GET',
		headers: {
			"User-Agent": "EnableIssues",
			"content-type": "application/json",
			"Authorization": token
		}
	};

	// Send a http request to url and specify a callback that will be called upon its return.
	request(options, function (error, response, body) 
	{
		var obj = JSON.parse(body);
		console.log( obj );
		for( var i = 0; i < obj.length; i++ )
		{
			var name = obj[i].name;
			console.log( name );
		}
	});

}

function listBranches(owner,repo)
 {
 	var options = {
     		url: urlRoot + '/repos/' + owner + '/'+ repo + "/branches",
     		// /repos/:owner/:repo/branches
     		method: 'GET',
     		headers: {
     			"User-Agent": "EnableIssues",
     			"content-type": "application/json",
     			"Authorization": token
     		}

     	};

     	// Send a http request to url and specify a callback that will be called upon its return.
     	request(options, function (error, response, body)
     	{
     		var obj = JSON.parse(body);
     		console.log( obj );
     		for( var i = 0; i < obj.length; i++ )
     		{
     			var name = obj[i].name;
     			console.log( name );
     		}
     	});
 }


function createRepos()
{
	var options = {
    		url: urlRoot + '/user'  + "/repos",
    		// POST /user/repos
    		method: 'POST',
    		headers: {
    			"User-Agent": "EnableIssues",
    			"content-type": "application/json",
    			"Authorization": token
    		},
    		json: {
    			"name": "Hellooooo-World",
    			"description": 'This is the additional repo for Hw1.'
    		}
    		};


    	// Send a http request to url and specify a callback that will be called upon its return.
    	request(options, function (error, response, body)
    	{

    	});
}

function createAnIssue(owner,repo)
{
	var options = {
    		url: urlRoot + '/repos/' + owner + '/'+repo  + "/issues",
    		// POST /repos/:owner/:repo/issues
    		method: 'POST',
    		headers: {
    			"User-Agent": "EnableIssues",
    			"content-type": "application/json",
    			"Authorization": token
    		},
    		json: {
    			"title": "Hello-World",
    			"body": 'This is the additional issue for Hw1.'
    		}
    		};


    	// Send a http request to url and specify a callback that will be called upon its return.
    	request(options, function (error, response, body)
    	{

    	});
}

function Edit(owner,repo)
{
	var options = {
    		url: urlRoot + '/repos/' + owner + '/'+repo,
    		// PATCH /repos/:owner/:repo
    		method: 'PATCH',
    		headers: {
    			"User-Agent": "EnableIssues",
    			"content-type": "application/json",
    			"Authorization": token
    		},
    		json: {
    			"name": "Hello-World",
                  "description": "This is your first repository",
                  "homepage": "https://github.com",
                  "has_wiki": true
    		}
    		};


    	// Send a http request to url and specify a callback that will be called upon its return.
    	request(options, function (error, response, body)
    	{

    	});
}


