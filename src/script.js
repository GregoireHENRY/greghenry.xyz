function addScrollEmptySpace() {
    var scrollableContainer = document.querySelector(".grid.body .experiences .text.heading");
    var hasVerticalScroll = scrollableContainer.scrollHeight > scrollableContainer.clientHeight;
    if (hasVerticalScroll) {
	var scrollbarWidth = scrollableContainer.offsetWidth - scrollableContainer.clientWidth;
    }
    var emptySpace = scrollableContainer.offsetWidth - scrollableContainer.scrollWidth;
    if (scrollbarWidth > emptySpace) {
	scrollbarWidth = emptySpace;
    }
    scrollableContainer.style.minWidth = scrollbarWidth + 'px';
}

$(document).ready(function() {
    // $(".announce .text.main").load("src/header-announce-text.html");
    addScrollEmptySpace();
    window.addEventListener('resize', addScrollEmptySpace, false);
});

$("a.extern").attr({target:"_black", rel:"noopener noreferrer"});
