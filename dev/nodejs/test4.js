var http = require('http');
/*
On lance a méthode createServer qui prend pour argument une fonction de retour ayant pour parametre un objet request (ce que l'utilisateur qui se connecte a votre serveur vas envoyer) et un objet réponse (la réponse que vous allez renvoyer a votre utilisateur). Notez bien que nous appellons la méthode listen juste après, qui permet de définir sur quel port (gruiiik !) le serveur vas écouter (et donc sera accessible)
*/
http.createServer( function (request, response) {
        //Le type de contenu sera HTML, le code de réponse 200 (page correctement chargée)
        response.writeHead(200, {'Content-Type': 'text/html'});
        //
        response.end('Hello &lt;a href="http://blog.idleman.fr"&gt;Idle&lt;/a&gt;World :p\n');
    } ).listen(666);
//On affiche un ptit message funky dans la console histoire d'être sûr que le serveur est lancé
console.log('Idle Space Ship launched on http://localhost on evil port');
