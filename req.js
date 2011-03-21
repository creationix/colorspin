// Simple wrapper to make PamlBus requests.
function palmRequest(url, params, callback) {
  var req = new PalmServiceBridge();
  req.onservicecallback = function (result) {
    var data;
    try {
      data = JSON.parse(result);
    } catch (err) {
      callback(err);
      return;
    }
    callback(null, data);
  };
  req.call(url, JSON.stringify(params));
}


palmRequest("palm://com.palm.location/getCurrentPosition", { accuracy: 1, maximumAge: 0, responseTime: 3 }, function (err, data) {
  console.log("Final");
  if (err) { throw err; }
  console.log(JSON.stringify(data));
});

