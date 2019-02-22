function launchRequire()
{
  require.config({
    baseUrl: "assets/js",
    paths: {
      mustache: "libs/mustache/mustache-wrap"
    }
});
}

function launchMap(map)
{
    require(
      [ 'map/map' ],
      function(Map) {
        Map.launchGame(map);
      });
}
