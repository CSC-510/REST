var request = require('request');

const chalk  = require('chalk');

var urlRoot = "https://api.github.com";
// NCSU Enterprise endpoint:
// https://github.ncsu.edu/api/v3

var config = {};
// Retrieve our api token from the environment variables.
config.token = process.env.GITHUBTOKEN;

if( !config.token )
{
	console.log(chalk`{red.bold GITHUBTOKEN is not defined!}`);
	console.log(`Please set your environment variables with appropriate token.`);
	console.log(chalk`{italic You may need to refresh your shell in order for your changes to take place.}`);
	process.exit(1);
}

console.log(chalk.green(`Your token is: ${config.token.substring(0,4)}...`));

(async () => {
    ////// UPDATE WITH YOUR username!:
    var userId = "chrisparnin";

    await listRepos(userId);
    //await listBranches(userId, "your repo");
    //await createRepo(userId,newrepo);
    //await createIssue(userId, repo, issue);
    //await enableWikiSupport(userId,repo);

})()

function listRepos(userName)
{

	var options = {
		url: urlRoot + '/users/' + userName + "/repos",
		method: 'GET',
		headers: {
			"User-Agent": "CSC510-REST-WORKSHOP",
			"content-type": "application/json",
			"Authorization": `token ${config.token}`
		}
	};

	// Send a http request to url and specify a callback that will be called upon its return.
	return request(options, function (error, response, body) 
	{
        if( error )
        {
            console.log( chalk.red( error ));
        }

		var obj = JSON.parse(body);
		// console.log( obj );
		for( var i = 0; i < obj.length; i++ )
		{
			var name = obj[i].name;
			console.log( name );
		}
	});

}

// 1. Write code for listBranches in a given repo under an owner. See list branches
async function listBranches(owner,repo)
{
	
}

// 2. Write code to create a new repo
async function createRepo(owner,repo)
{
	
}
// 3. Write code for creating an issue for an existing repo.
async function createIssue(owner,repo, issue)
{
	
}

// 4. Write code for editing a repo to enable wiki support.
async function enableWikiSupport(owner,repo)
{
	
}