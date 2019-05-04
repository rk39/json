
function aiaqsi (url)
{
    new Promise(function(mogvareba, uaryofa)
    {
        var xhr = new XMLHttpRequest();
            xhr.open("GET", url, false);
            xhr.send();
            xhr.status();
            xhr.statusText();
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



aiaqsi("/js/employee.json", 
function(data){ console.log(data) }, 
function (shecdoma){ console.log(shecdoma) }
)