MBP.scaleFix();
MBP.hideUrlBar();

mixpanel.track_links('.presentation .github a', 'Clicked GitHub link in presentation');
mixpanel.track_links('.presentation .twitter a', 'Clicked Twitter link in presentation');
mixpanel.track_links('.presentation .linkedin a', 'Clicked LinkedIn link in presentation');

mixpanel.track_links('.blog-posts .posts a', 'Clicked blog post link on front page');
mixpanel.track_links('.more-posts .posts a', 'Click blog post link on blog post page');

mixpanel.track_links('.rss-subscribe', 'Clicked RSS Subscribe button');

//mixpanel.track('page viewed', {'page name' : document.title, 'url' : window.location.pathname});
