var dp = new DPlayer({
    container: document.getElementById('dplayer1'),
    preload: 'none',
    lang: 'zh-cn',
    screenshot: true,
    live: true,
    video: {
        // url: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
        quality: [
            // {
            //     name: '原始',
            //     url: 'https://livepull.troyyangdev.cn/live/myenglishtutor.m3u8',
            //     type: 'hls'
            // },
            {
                name: '标清',
                url: 'https://livepull.troyyangdev.cn/live/myenglishtutor_900.m3u8',
                type: 'hls'
            }, 
            {
                name: '流畅',
                url: 'https://livepull.troyyangdev.cn/live/myenglishtutor_550.m3u8',
                type: 'hls'
            }],
        defaultQuality: 0,
    },
    danmaku: {
        id: 'demo',
        api: 'http://littlebus.troyyangdev.cn:1207/'
    }
});

dp.on('error', function (e) {
    console.log('player ended' + e);
});