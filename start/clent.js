var http = require("http");

http.request({
    host: "ecuat.tk.cn",
    port: "80",
    path: "/hera_insure/api/insure/v2/element/serverInfo"
}, function(res) {
    var receiveData = "";
    res.on('data', function(data) {
        receiveData += data;
    });

    res.on('end', function() {
        receiveData = JSON.parse(receiveData);
        //console.log(receiveData);
    });
}).end();


var reqData = '{"age":"1","insurePeriod":"D1","planId":"1117A00701","planLiabilityList":[{"liabilityId":"1117006","amount":200000},{"liabilityId":"1117007","amount":10000},{"liabilityId":"1117010","amount":600},{"liabilityId":"1117013","amount":673000},{"liabilityId":"1117014","amount":200000},{"liabilityId":"1117019","amount":1000}],"gender":"","buyNumber":"1","familytype":"","cardcode":""}';
var req = http.request({
    hostname: 'ecuat.tk.cn',
    port: 80,
    path: '/hera_insure/api/insure/v2/productMetadata/S20160422/wap/calculator',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': reqData.length
    }
}, function(res) {
    console.log(res.statusCode);
    console.log(res.headers);
    var receiveData = "";
    res.on('data', function(data) {
        receiveData += data;
    });

    res.on('end', function() {
        receiveData = JSON.parse(receiveData);
        //console.log(receiveData);
    });
});

req.write(reqData);
req.end();
