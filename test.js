const spawn = require('cross-spawn');

let child = spawn('vue',['serve'],{cwd:'./http-server/app/assets/src'});
child.stdout.setEncoding('utf8');

child.on('error',err=>{
    throw err;
})
child.stderr.on('data', function(data){
    console.log('Error msg from process 2: ' + data);
});

child.stdout.on('data', function(data){
    console.log(data);
});

