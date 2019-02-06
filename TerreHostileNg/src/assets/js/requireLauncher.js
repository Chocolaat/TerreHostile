console.log ("REQUIREJSLAUNCHER");


function launchRequire()
{
  console.log ("LAUNCH REQUIRE");



  require.config({
    baseUrl: "assets/js",
    paths: {
      mustache: "libs/mustache/mustache-wrap"
    }
});

function launchMap()
{
  require(
		[ "map/map" ],
		function() {
      console.log("RequireLauncher launched MAP");
		});

}
}

require(
		[],
		function() {
      console.log("RequireLauncher launched MAP");
		});

}
