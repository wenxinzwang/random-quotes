var content = '', author = '';

function newQuote() {
    // create script with passed in URL
    console.log("new quote");
    var script = document.createElement('script');
    var url = 
	  'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&q=' + 
	  Math.random() +
      '&_jsonp=processQuote';
    script.src = url;
  
    // after the script is loaded (and executed), remove it
    script.onload = function () {
        this.remove();
    };
  
    // insert script tag into the DOM (append to <head>)
    var head = document.getElementsByTagName('head')[0];
    head.insertBefore(script, null);
}

function processQuote(data) {
	var content = data[0].content.replace(/ *<\/*p>/g, "");
	var author = data[0].title;
	
    document.getElementById("quoteText").innerHTML = content;
    document.getElementById("quoteAuthor").innerHTML = author;
	console.log(content);
	
	document.getElementById("twitter").href = 
	  "https://twitter.com/intent/tweet?text=\"" + content + "\"" + 
	  " by " + author + "&hashtags=quotes";
	
}

newQuote();