var _classes    = {
        http  		    : require('http'),
        fs              : require('fs'),
        url             : require('url'),
        os              : require('os'),
        util            : require('util'),
        path            : require('path'),
        mime		    : require('mime') 
};

var _config= {
		resources: __dirname+'/public/',
		views: __dirname+'/views/',
		controllers:__dirname+'controllers'
};

var http = require('http'),
    port = 3000;

var server = http.createServer(function (request, response) {
	  console.log('------------- main function ------------------');
	  console.log(__dirname+''+request.url);
	  var file = __dirname+'/'+request.url;

	  if(_classes.fs.existsSync(file)){
		  console.log('resource found');
		  var mimetype = _classes.mime.lookup(file);

		  _classes.fs.readFile(__dirname+''+request.url,{flag:'r'}, function(data){
			  response.setHeader('Content-type', mimetype);		  
			  response.statusCode = 200;
			  response.write(data);
			  response.end();
		  });
		  
		  
	  }else{
		  console.log('resource not found');
		  response.statusCode = 404;		
	  }
//				  response.writeHead(200, {"Content-Type": "text/plain"});
//	  			  response.end('Hello World!\n');

});

server.on('request',function(request,response){
	  console.log('------------- request event ------------------');
	  console.log(request.url);
	  console.log('----------------------------------------------------------');
//	  console.log(_classes.util.inspect(request,{ showHidden:false, depth: null }));
//    console.log(_classes.util.inspect(response,{ showHidden: false, depth: null }));
});

server.on('connection',function(socket){
	  console.log('------------- connection event ------------------');
});

server.on('close',function(){
	  console.log('------------- close event ------------------');
});

server.on('checkContinue',function(request,response){
	  console.log('------------- checkContinue event ------------------');
});

server.on('connect',function(request,socket,head){
	  console.log('------------- connect event ------------------');
});

server.on('upgrade',function(request,socket,head){
	  console.log('------------- upgrade event ------------------');
});

server.on('clientError',function(exception,socket){
	  console.log('------------- clientError event ------------------');
});

server.listen(port);
console.log("Listening on <insert your favorite ip>:" + port);

