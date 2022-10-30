var request = new XMLHttpRequest(); //XMLHttpRequest object

//using API key as the parameter
request.open('GET','https://api.giphy.com/v1/gifs/random?api_key=rFhx9BvSMSkBMWw1tO3GnvhiD56nCLjw&tag=cat&rating=g');
request.onload = function(){
    var response = request.response;
    var parsedData = JSON.parse(response);
    console.log(parsedData);
    var originalUrl = parsedData.data.images.original.url;
    console.log(originalUrl);

    var gif = document.createElement("img");
    gif.setAttribute('src', originalUrl);
    document.body.appendChild(gif);
};

//use event handler called onerror
request.onerror = function(){
    console.log("ERROR!!!");
}

request.send();