var main=$(".mainContent");
var journals=$(".journals");
var journal=$("#journalContent");
var books=$(".books");
var book=$(".book");
var search=$(".search");
var ywSearch=$(".ywSearch");
var article=$(".articleContent");
var all=[];
var title=$(".header-title p");
all.push(main);
all.push(journals);
all.push(journal);
all.push(books);
all.push(book);
all.push(search);
all.push(ywSearch);
all.push(article);
//初始化页面
function initPage(){
	
	$(all).each(function(index,item){
		item.hide();
	});
}
//每部分页面显示

/*下面为期刊目录页面及期刊详情页面展示 */
var journalData={
	journalName:"法律学刊",
	englishName:"Legal Journal",
	zbdw:"南京大学",
	cbdw:"南京大学出版社",
	cbzq:"6",
	issn:"001-002",
	cnID:"001-002",
	cbd:"南京",
	fldm:"I202",
	xkfl:"文科",
	cknd:"1993",
	tyyz:"0.1",
	bycs:"0.2",
	bygd:"0.3",
	jjlwb:"0.4",
	zzdqgd:"0.5"
}
var journalData1={
	journalName:"法律学刊",
	englishName:"Legal Journal",
	zbdw:"南京大学",
	cbdw:"南京大学出版社",
	cbzq:"6",
	issn:"001-002",
	cnID:"001-002",
	cbd:"南京",
	fldm:"I202",
	xkfl:"文科",
	cknd:"1993",
	tyyz:"0.1",
	bycs:"0.2",
	bygd:"0.3",
	jjlwb:"0.4",
	zzdqgd:"0.5"
}
var journalDatas=[];
journalDatas.push(journalData);
journalDatas.push(journalData1);

function journalsShow(){
	var journalsInfo='';
	console.log(journalDatas);
	$(journalDatas).each(function(index,item){
	journalsInfo+='<div class="content">';
	journalsInfo+='	<img />';
	journalsInfo+='	<h4><a onclick="journalShow()">'+item.journalName+'</a></h4>';
	
	journalsInfo+='<p>主办单位：'+item.zbdw+'</p>';
	journalsInfo+='<p>出版单位：<span>'+item.cbdw+'</span></p>';
	journalsInfo+='<p>出版地：<span>'+item.cbd+'</span></p>';
	journalsInfo+='<p>CN号： <span>'+item.cnID+'</span></p>';
	journalsInfo+='</div>';
	});
	initPage();
	title.text("精品期刊");
	journals.show();
	$("#journalsContent").html(journalsInfo);
}
function journalShow(){
	var journalDetail='';
	journalDetail+='<h3>期刊详情</h3>';
	journalDetail+=	'<div class="content"><img alt="中国法学" title="中国法学" /><div class="contentInfo"><h4>'+journalData.journalName;
	journalDetail+='</h4><h5>'+journalData.englishName+'</h5><ul><li>基本信息</li><li>主办单位：<span>'+journalData.zbdw+'</span></li><li>出版周期：<span>';
	journalDetail+=journalData.cbzq+'</span></li><li>ISSN：<span>'+journalData.issn+'</span></li><li>CN：<span>'+journalData.cnID;
	journalDetail+='</span></li><li>出版地：<span>'+journalData.cbd+'</span></li><li>创刊时间：<span>'+journalData.cknd+'</span></li><li>学科分类：<span>';
	journalDetail+=journalData.xkfl+'</span></li></ul><ul><li>评价信息</li><li>它引影响因子：<span>';
	journalDetail+=journalData.tyyz+'</span></li><li>总被引次数：<span>'+journalData.bycs+'</span></li><li>被引广度：<span>';
	journalDetail+=journalData.bygd+'</span></li><li>基金论文比：<span>'+journalData.jjlwb+'</span></li><li>作者地区广度：<span>';
	journalDetail+=journalData.zzdqgd+'</span></li></ul></div></div><p class="returnPage"><a onClick="returnListPage();">返回主页面</a></p>';
	journals.hide();
	$("#journalContent").show().html(journalDetail);
}
function returnListPage(){
	$("#journalContent").hide();
	journals.show();
}
/*下面为图书目录页面及图书详情页面展示*/
var bookData={
	bookName:"民法学",
	isbn:"1234-5678",
	price:"110",
	author:"王利民",
	publicitian:"法律出版社",
	address:"Beijing",
	tel:"110001001",
	publicDate:"2-544",
	cnId:"110",
	citations:"1111",
	storeNum:"10",
	content:"《民法学》教材有以下特点：1.参加编写的人员一定是有着多年教学的经验"
	}
var bookData1={
	bookName:"民法学",
	isbn:"1234-5678",
	price:"110",
	author:"王利民",
	publicitian:"法律出版社",
	address:"Beijing",
	tel:"110001001",
	publicDate:"2-544",
	cnId:"110",
	citations:"1111",
	storeNum:"10",
	content:"《民法学》教材有以下特点：1.参加编写的人员一定是有着多年教学的经验"
	}
var bookDatas=[];
bookDatas.push(bookData);
bookDatas.push(bookData1);
function booksShow(){
	//此处应从后台获取数据
	//传入参数 每页显示条数，页数
	//获得书记详细信息
	var booksInfo='';
	$(bookDatas).each(function(index,item){
	booksInfo+='<div class="content">';
	booksInfo+='	<img />';
	booksInfo+='	<h4><a onclick="bookShow()">'+item.bookName+'</a></h4>';
	
	booksInfo+='<p>主办单位：'+item.publicitian+'</p>';
	booksInfo+='<p>通讯地址：<span id="address">'+item.address+'</span></p>';
	booksInfo+='<p>联系电话：<span id="tel">'+item.tel+'</span></p>';
	booksInfo+='<p>CN号： <span id="CNid">'+item.cnId+'</span></p>';
	booksInfo+='</div>';
	});
	initPage();
	title.text("精品图书");
	books.show();
	$("#booksContent").html(booksInfo);
	
	
}
function bookShow(){
//	var bookName=$(this).val();
//	console.log(bookName);
	//此处应该根据booksShow函数中获得的数据提取数据
	
	var bookDetail='';
	
	bookDetail+='<h3>图书详情</h3>';
	bookDetail+='<div class="content">';
	bookDetail+='<img alt="" title="民法学" />';
	bookDetail+='<div class="contentInfo bookInfo">';
	bookDetail+='	<ul>';
	bookDetail+='		<li>基本信息</li>';
	bookDetail+='		<li>书名：<span>'+bookData.bookName+'</span></li>';
	bookDetail+='		<li>ISBN：<span>'+bookData.isbn+'</span></li>';
	bookDetail+='		<li>定价：<span>'+bookData.price+'元</li>';
	bookDetail+='		<li>作者/编者：<span>'+bookData.author+'</span>著</li>';
	bookDetail+='		<li>出版社：<span>'+bookData.publicitian+'</span></li>';
	bookDetail+='		<li>出版日期：<span>'+bookData.publicDate+'</span></li>';
	bookDetail+='		</ul>';
	bookDetail+='		<ul>';
	bookDetail+='			<li>总被引次数：<span>'+bookData.citations+'</span></li>';
	bookDetail+='			<li>馆藏数：&nbsp;&nbsp;<span>'+bookData.storeNum+'</span></li>';
	bookDetail+='		</ul>';
	bookDetail+='		</div>';
	bookDetail+='		</div>';
	bookDetail+='		<div class="recommend">';
	bookDetail+='		<p class="p1">内容推荐</p>';
	bookDetail+='		<p class="p2">'+bookData.content+'</p></div><p class="returnPage"><a onClick="returnBookListPage();">返回主页面</a></p>';
	initPage();
	title.text("精品图书");
	book.show();
	$(".book").html(bookDetail);
		
}
function returnBookListPage(){
	$(".book").hide();
	books.show();
}
/*文献详情页展示 */
//数据来自于后台，在检索后一次性载入以备文献详情查看。
var articleData={
	sno:"001",
	lypm:"sssssssssssss",
	ywpm:"lllllllllll",
	zzmc:"ddd",
	jgmc:"ggg",
	wxlx:"hhhhhh",
	xkfl:"jjjj",
	ztlh:"nnnn",
	jjlb:"mmmm",
	qkno:"123",
	lwnd:"1234",
	byc:"ss,ss,ss,ss",
	ckwx:["eeeee","rrrr","ttttt"]
	
}
var articleData1={
	sno:"001",
	lypm:"sssssssssssss",
	ywpm:"lllllllllll",
	zzmc:"ddd",
	jgmc:"ggg",
	wxlx:"hhhhhh",
	xkfl:"jjjj",
	ztlh:"nnnn",
	jjlb:"mmmm",
	qkno:"123",
	lwnd:"1234",
	byc:"ss,ss,ss,ss",
	ckwx:["eeeee","rrrr","ttttt"]
	
}
var articleDatas=[];
articleDatas.push(articleData);
articleDatas.push(articleData1);

/*主页面及主页面检索之后页面展示 */
//检索条件转换
function convertSearchCondition(searchCondition){
	switch(searchCondition){
		case "作者":
		searchCondition="zzmc";
		break;
		case "机构":
		searchCondition="jgmc";
		break;
		case "篇名":
		searchCondition="lypm";
		break;
		case "关键词":
		searchCondition="byc";
		break;
		case "来源期刊":
		searchCondition="qkno";
		break;
	}
	return searchCondition;
}
function convertLuoJiFu(luojifu){
	switch(luojifu){
		case "或":
		luojifu="or";
		break;
		case "和":
		luojifu="and";
		break;
		case "非":
		luojifu="not";
		break;
	}
}
//主页面简单检索
function mainPageArticleShow(){
	var articleDetail='';
	articleDetail+='<table><tr><td>篇名</td><td>'+articleData.lypm+'</td></tr><tr><td>英文篇名</td><td>'+articleData.ywpm
					+'</td></tr><tr><td>作者及机构</td><td>'+articleData.zzmc+'</td></tr><tr><td>文献类型</td><td>'+articleData.wxlx
					+'</td></tr><tr><td>学科类别</td><td>'+articleData.xkfl+'</td></tr><tr><td>中图类号</td><td>'+articleData.ztlh
					+'</td></tr><tr><td>基金项目</td><td>'+articleData.jjlb+'</td></tr><tr><td>来源期刊</td><td>'+articleData.qkno
					+'</td></tr><tr><td>年代</td><td>'+articleData.lwnd+'</td></tr><tr><td>关键词</td><td>'+articleData.byc
					+'</td></tr><tr><td>参考文献</td><td>'+articleData.ckwx+'</td></tr></table><p class="returnPage"><a onClick="returnMainPage();">返回检索页面</a></p>';
	initPage();
	title.text("文献详情");
	article.show();
	$(".articleContent").html(articleDetail);
}
function mainShow(){
	initPage();
	title.text("中国法律引证指数CLCI系统");
	main.show();
	$(".visualPart").show();
	$("#mainPageResult").hide();
}
function mainPageSearch(){
	//判断检索条件并转换为属性名
	var searchCondition=$("#searchCondition").val();
	searchCondition=convertSearchCondition(searchCondition);
	//检索字段
	var searchWord=$("#searchWord").val();
	//根据检索条件获得articleDatas
	console.log($("#form1").serialize());
	
	var searchResult='';
	searchResult+='<p>检索结果：</p><table><tr><td>来源作者</td><td>来源篇名</td><td>来源期刊</td><td>出版时间</td></tr>';
	$(articleDatas).each(function(index,item){
		searchResult+='<tr onclick="mainPageArticleShow();"><td>'+item.zzmc+'</td><td>'+item.lypm+'</td><td>'+item.qkno+'</td><td>'+
					item.lwnd+'</td></tr>';
	});
	
	searchResult+='</table>';
	$(".visualPart").hide();
	$("#mainPageResult").show();
	$("#mainPageResult").html(searchResult);

}
function returnMainPage(){
	title.text("中国法律引证指数CLCI系统");
	main.show();
	$("#mainPageResult").show();
	$(".articleContent").hide();
	
}
//高级检索页面显示
function searchPageArticleShow(){
	var articleDetail='';
	articleDetail+='<table><tr><td>篇名</td><td>'+articleData.lypm+'</td></tr><tr><td>英文篇名</td><td>'+articleData.ywpm
					+'</td></tr><tr><td>作者及机构</td><td>'+articleData.zzmc+'</td></tr><tr><td>文献类型</td><td>'+articleData.wxlx
					+'</td></tr><tr><td>学科类别</td><td>'+articleData.xkfl+'</td></tr><tr><td>中图类号</td><td>'+articleData.ztlh
					+'</td></tr><tr><td>基金项目</td><td>'+articleData.jjlb+'</td></tr><tr><td>来源期刊</td><td>'+articleData.qkno
					+'</td></tr><tr><td>年代</td><td>'+articleData.lwnd+'</td></tr><tr><td>关键词</td><td>'+articleData.byc
					+'</td></tr><tr><td>参考文献</td><td>'+articleData.ckwx+'</td></tr></table><p class="returnPage"><a onClick="returnSearchPage();">返回检索页面</a></p>';
	initPage();
	title.text("文献详情");
	article.show();
	$(".articleContent").html(articleDetail);
}
function searchShow(){
	initPage();
	title.text("文献检索");
	search.show();
	$("#searchPageResult").hide();
}
function searchPageShow(){
	//检索字段提取
//	var selectCondition1=convertSearchCondition($("#searchCondition1").val()),
//		select1=$("#search1").val();
//	var selectCondition2=convertSearchCondition($("#searchCondition2").val()),
//		select2=$("#search2").val();
//	var selectCondition3=convertSearchCondition($("#searchCondition3").val()),
//		select3=$("#search3").val();
//	var luojifu1=convertLuoJiFu(("#luojifu1").val());
//	var luojifu2=convertLuoJiFu(("#luojifu2").val());

	var searchResult='';
	searchResult+='<p>检索结果：</p><table><tr><td>来源作者</td><td>来源篇名</td><td>来源期刊</td><td>出版时间</td></tr>';
	$(articleDatas).each(function(index,item){
		searchResult+='<tr onclick="searchPageArticleShow();"><td>'+item.zzmc+'</td><td>'+item.lypm+'</td><td>'+item.qkno+'</td><td>'+
					item.lwnd+'</td></tr>';
	});
	
	searchResult+='</table>';
	$("#searchPageResult").show().html(searchResult);
}
function returnSearchPage(){
	title.text("文献检索");
	search.show();
	$("#searchPageResult").show();
	$(".articleContent").hide();
}
//引文页面检索显示,引文文献详情与来源文献详情不一样
var ywArticleData={
	ywzz:"sssssss",
	ywpm:"uuuuuu",
	ywqk:"nnnnnn",
	ywnd:"gggggg",
	ywcbd:"kkkkk",
	ywcbs:"yyyyy",
	wzdm:"uuuuu"
}
var ywArticleData1={
	ywzz:"sssssss",
	ywpm:"uuuuuu",
	ywqk:"nnnnnn",
	ywnd:"gggggg",
	ywcbd:"kkkkk",
	ywcbs:"yyyyy",
	wzdm:"uuuuu"
}
var ywArticleDatas=[];
ywArticleDatas.push(ywArticleData);
ywArticleDatas.push(ywArticleData1);
function ywArticleShow(){
	var articleDetail='';
	articleDetail+='<table><tr><td>引文作者</td><td>'+ywArticleData.ywzz+'</td></tr><tr><td>引文篇名</td><td>'+ywArticleData.ywpm
					+'</td></tr><tr><td>引文期刊</td><td>'+ywArticleData.ywqk+'</td></tr><tr><td>引文年代</td><td>'+ywArticleData.ywnd
					+'</td></tr><tr><td>引文出版地</td><td>'+ywArticleData.ywcbd+'</td></tr><tr><td>引文出版社</td><td>'+ywArticleData.ywcbs
					+'</td></tr><tr><td>文种代码</td><td>'+ywArticleData.wzdm+'</td></tr></table><p class="returnPage"><a onClick="returnywSearchPage();">返回检索页面</a></p>';
	initPage();
	title.text("文献详情");
	article.show();
	$(".articleContent").html(articleDetail);
}
function ywSearchShow(){
	initPage();
	title.text("引文检索");
	ywSearch.show();
	$("#ywSearchResult").hide();
}
function ywSearchPageShow(){
	var searchResult='';
	searchResult+='<p>检索结果：</p><table><tr><td>引文作者</td><td>引文篇名</td><td>引文期刊</td><td>引文年代</td></tr>';
	$(ywArticleDatas).each(function(index,item){
		searchResult+='<tr onclick="ywArticleShow();"><td>'+item.ywzz+'</td><td>'+item.ywpm+'</td><td>'+item.ywqk+'</td><td>'+
					item.ywnd+'</td></tr>';
	});
	
	searchResult+='</table>';
	$("#ywSearchResult").show().html(searchResult);
}
function returnywSearchPage(){
	title.text("引文检索");
	ywSearch.show();
	$("#ywSearchResult").show();
	$(".articleContent").hide();
}
