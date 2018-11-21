var publickey  = "6e30349a3bd8c7874a7d3632a366ec85";
var privatekey = "5f30def297608d0ca498e6c62cb296e1fc8523e5";
var apikey = publickey;
$(document).ready(function(){
    
    $("#submit").click(function(){
        var char= $("#char").val();
        var ts = new Date().getTime();
        var hash = md5(ts+privatekey+publickey);
        var url ="https://gateway.marvel.com/v1/public/characters";
        var html;
        $.ajax({
            type: 'GET',
            data : {
                name: char,
                apikey: apikey,
                ts: ts,
                hash: hash
            },
            url: url,
            success: function (response){
                var personaje = response.data.results[0];
                html = 'Nombre: ' + personaje.name + '</br>';
                html += '<img src="' + personaje.thumbnail.path + '.' + personaje.thumbnail.extension + '"/></br>';
                html += 'Descripcion: ' + personaje.description + '</br>';
                html += '<a href="' + personaje.urls[1].url + '">View more</a></br>';
                $('#resultados').append(html);
            }
        });
       
        
    });
});