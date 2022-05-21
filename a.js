var Proxy = require('../');
var proxy = Proxy();
var fs = require("fs");


proxy.onError(function(ctx, err) {
  console.error('proxy error:', err);
});


var inject_youtube = function(chunk){

	chunk = new Buffer(chunk.toString().replace("</head>", fs.readFileSync("inject.youtube.js")+fs.readFileSync("inject.start.js")+"</head>"));
	console.log("[www.youtube.com]Hack up");
	return chunk;

};

var inject_other = function(chunk){
	chunk = new Buffer(chunk.toString().replace("</head>", fs.readFileSync("inject.other.js")+fs.readFileSync("inject.start.js")+"</head>"));	
	return chunk;
};


var inject = function(ctx, chunk, callback){
	if(chunk.toString().indexOf("</head>") != -1)
	{
		if(ctx.clientToProxyRequest.headers.host == "www.youtube.com")
			chunk = inject_youtube(chunk);
		else
			chunk = inject_other(chunk);
	        		
	}
	
	return callback(null, chunk);
};


proxy.onResponseData(inject);

proxy.onRequest(function(ctx, callback){

        ctx.use(Proxy.gunzip);
        return callback();
});

proxy.listen({port: 8080});
