javascript:(function () {
    var head = document.getElementsByTagName("body")[0];
    var js = document.createElement("script");
    js.type = "text/javascript";
    js.text = 'vvvvid.router.mainView.onDemandMainView.currentMode.showPlayerView.playerObj.initializePlayer(); setTimeout(function () { $("#advPlayer").remove(); $("#advPlayerClick").remove(); vvvvid.showActions(); $(document).trigger("player:showtopinfo"); $(document).trigger("menu:attachmenuvideoevents"); vvvvid.player.setPlay(); }, 500);';
    head.appendChild(js);
})();
