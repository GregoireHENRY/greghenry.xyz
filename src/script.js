$(function(){
    $('[id$="include "]').each(function (e){
	$(this).load("src/" + $(this).attr("id").replace("include ", "") +  ".html");
    });
    console.log("src/" + $(this).attr("id").replace("include ", "") +  ".html")
});
