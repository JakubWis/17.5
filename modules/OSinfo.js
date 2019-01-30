var os = require('os');
var convertTo = require('./convertTime')
var colors = require('colors');

function getOSinfo() {
            //SYSTEM info
            var type = os.type();
            var release = os.release();
            if(type === 'Darwin') {
                type = 'OSX';
            } else if(type === 'Windows_NT') {
                type = 'Windows';
            }
            console.log('System: '.gray, type);
            console.log('Release: '.red, release);
            //CPU info
            var cpu = os.cpus()[0].model;
            console.log('CPU model: '.blue, cpu);
            //TIME SINCE LAST START OF SYSTEM info
            var uptime = os.uptime();
            console.log('Uptime: '.green + convertTo.niceTime(uptime));
            //USER info
            var userInfo = os.userInfo();
            console.log('User name: '.yellow, userInfo.username);
            console.log('Homedir: ', userInfo.homedir);
            process.exit();
}

exports.print = getOSinfo;