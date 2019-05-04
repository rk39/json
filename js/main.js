
function ajax (url)
{
    return new Promise(function(mogvareba, uaryofa)
    {
        var xhr = new XMLHttpRequest();
            xhr.open("GET", url, false);
            xhr.onload = function (response) {
                mogvareba(xhr.response);
            }
            xhr.onerror = function (shecdoma){
                uaryofa("moxda shecdoma, bodishi servers ver davukavshirdit");
            }
            xhr.onreadystatechange = function () {
                if(xhr.readyState == 4) {
                    console.log("moxda gamosatani cvlileba");
                }
            }
            xhr.send();
    })
}



ajax("https://jsonplaceholder.typicode.com/posts")
.then(function(data){console.log(data)})
.catch(function(shecd){console.log(shecd)})