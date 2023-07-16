function fn_sendFB(sns) {
  var thisUrl = document.URL;
  var snsTitle = "MoodCraft - '오늘 나의 기분에 어울리는 술은?'";
  if (sns == "facebook") {
    var url =
      "http://www.facebook.com/sharer/sharer.php?u=" +
      encodeURIComponent(thisUrl);
    window.open(url, "", "width=486, height=286");
  } else if (sns == "twitter") {
    var url =
      "http://twitter.com/share?url=" +
      encodeURIComponent(thisUrl) +
      "&text=" +
      encodeURIComponent(snsTitle);
    window.open(url, "tweetPop", "width=486, height=286,scrollbars=yes");
  } else if (sns == "band") {
    var url =
      "http://www.band.us/plugin/share?body=" +
      encodeURIComponent(snsTitle) +
      "&route=" +
      encodeURIComponent(thisUrl);
    window.open(url, "shareBand", "width=400, height=500, resizable=yes");
  }
}
