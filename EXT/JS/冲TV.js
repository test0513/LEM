var rule={
		title:'冲TV',
		host:'https://chongtmtv.com',
		url:'/index.php/vod/show/id/fyclass/page/fypage.html',
		searchUrl:'/vod/search/page/fypage/wd/**.html',
		searchable:2,
		quickSearch:1,
		filterable:0,
		headers:{'User-Agent':'MOBILE_UA', },
		class_name:'电影&电视剧&综艺&动漫',
		class_url:'1&2&3&4',
		推荐:'.list-a.size;a&&title;.lazy&&data-original;.list-remarks&&Text;a&&href',
		一级:'.list-a.size&&ul li;a&&title;.lazy&&data-original;.list-remarks&&Text;a&&href',
		二级:{"title":"h2&&Text;.data:eq(0) a:eq(0)&&Text","img":".lazyload&&data-original","desc":".text-muted:eq(-1)&&Text;.text-muted:eq(-1)&&Text;.text-muted:eq(-1)&&Text;.play-top p:eq(0)&&Text;.play-top p:eq(1)&&Text","content":".play-bottom&&Text","tabs":".swiper-wrapper&&.swiper-slide","lists":".playlist-notfull&&.content-playlist:eq(#id) a"},
		//二级:{"title":"h2&&Text;.data:eq(0) a:eq(0)&&Text","img":".lazyload&&data-original","desc":";.data:eq(0) a:eq(2)&&Text;.data:eq(0) a:eq(1)&&Text;.data:eq(2)&&Text;.data:eq(3)&&Text","content":".text-collapse span&&Text","tabs":".swiper-slide a","lists":".content-playlist:eq(#id) a"},		
	搜索:'.myui-vodlist__media.clearfix li;*;*;*;*',
}
