var main=$(".mainContent");
var journals=$(".journals");
var journal=$(".journalContent");
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
function mainShow(){
	initPage();
	title.text("中国法律引证指数CLCI系统");
	main.show();
}
function journalsShow(){
	initPage();
	title.text("精品期刊");
	journals.show();
}
function journalShow(){
	initPage();
	title.text("精品期刊");
	journal.show();
}

function bookShow(){
	initPage();
	title.text("精品期刊");
	book.show();
}
function searchShow(){
	initPage();
	title.text("文献检索");
	search.show();
}
function ywSearchShow(){
	initPage();
	title.text("引文检索");
	ywSearch.show();
}

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
	console.log(bookDatas);
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
//	booksInfo+='<div class="content">';
//	booksInfo+='	<img />';
//	booksInfo+='	<h4><a onclick="bookShow()">'+bookData.bookName+'</a></h4>';
//	
//	booksInfo+='<p>主办单位：'+bookData.publicitian+'</p>';
//	booksInfo+='<p>通讯地址：<span id="address">'+bookData.address+'</span></p>';
//	booksInfo+='<p>联系电话：<span id="tel">'+bookData.tel+'</span></p>';
//	booksInfo+='<p>CN号： <span id="CNid">'+bookData.cnId+'</span></p>';
//	booksInfo+='</div>';
	initPage();
	title.text("精品图书");
	books.show();
	$(".journalsContent").html(booksInfo);
	
	
}
function bookShow(){
	var bookName=$(this).html();
	console.log(bookName);
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
	bookDetail+='		<p class="p2">'+bookData.content+'</p></div>';
	initPage();
	title.text("精品图书");
	book.show();
	$(".book").html(bookDetail);
	
	
}
