$(document).ready(function(){
    fetch('https://api.github.com/users/LucasVoyager', {
        headers: {
            'Accept': 'application/vnd.github+json' 
        }
    })
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        const avatar = $('#avatar');
        const name = $('#name');
        const username = $('#username');
        const repositories = $('#repositories');
        const followers = $('#followers');
        const following = $('#following');
        const link = $('#link');

        avatar.attr('src', json.avatar_url)
        name.text(json.name);
        username.text(json.login);
        repositories.text(json.public_repos);
        followers.text(json.followers);
        following.text(json.following);
        link.attr('href', json.html_url);
    })
    .catch(function(erro) {
        alert(`Tivemos o seguinte erro: ${erro}`);
    })
    .finally(function(){});
})