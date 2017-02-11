lgtv = require("lgtv");
/*---------------------------------------------------------------------------*/
var retry_timeout = 10;
var run_test = function() {
  var ipaddr = "192.168.2.2";

        lgtv.connect(ipaddr, function(err, response){
          if (!err) {
            lgtv.set_input("HDMI_1", function(err, response){
              lgtv.disconnect();
            });
          }
        });
};

run_test();
