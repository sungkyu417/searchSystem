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
function initPage(){
	
	$(all).each(function(index,item){
		item.hide();
	});
}

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
function booksShow(){
	initPage();
	title.text("精品图书");
	books.show();
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
