var prettyStatus = function(tweet) {
  var pretty = tweet.replace(/(^|\s)@(\S+)/g, '$1<em>@$2</em>');
  pretty = pretty.replace(/(^|\s)(http\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?)/g, '$1<a href="$2" target="_blank">$2</a>');
  return pretty.replace(/(^|\s)#(\S+)/g, '$1<strong>#$2</strong>');
}