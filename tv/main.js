var dp = new DPlayer({
    container: document.getElementById('dplayer1'),
    preload: 'none',
    // screenshot: true,
    live: true,
    video: {
        // url: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
        // thumbnails: 'https://moeplayer.b0.upaiyun.com/dplayer/hikarunara_thumbnails.jpg',
        url: 'http://livepull.troyyangdev.cn/live/myenglishtutor.m3u8',
        type: 'hls'
    }
});

dp.on('error', function (e) {
    console.log('player ended' + e);
});


//rtmp://livepull.troyyangdev.cn/live/myenglishtutor 
//http://livepull.troyyangdev.cn/live/myenglishtutor.m3u8
//http://livepull.troyyangdev.cn/live/myenglishtutor.flv