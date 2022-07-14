fetch("https://api.github.com/users/oscarflores1213/repos")
.then(info => {
    if (info.ok) {
        return info.json()
    } else {
        throw new Error("Não foi possivl obter a informação, Código " + resp.status)
    }
})
.then(data => {
    let inforepos = []
    data.forEach(repos => {
        inforepos.push({
            nome: repos.name,
            descricao: repos.description,
            url: repos.html_url,
            owner: repos.owner.login,
            avatarOwner: repos.owner.avatar_url,
            fork: repos.fork
        })
    })
    createList(inforepos);
})

function createList(inforepos) {
    let section = document.querySelector("#projeto")
    for ( let list of inforepos ) {
        if (list.descricao === null) {
            list.descricao = "Descrição indisponível"
        }
        let listRepos = document.createElement("article")
        listRepos.className = "card"
        if (list.fork === false) {
            list.fork = '';
        } else {
            list.fork = '<span class="badge badge-pill badge-dark">Fork</span>';
        }
        listRepos.innerHTML = `
        <img src="https://proj4.me/wp-content/uploads/2020/09/Ciclo-de-vida-de-um-projeto.png" alt="imagen" class="projeto__img">
        <h3 class="projeto__titulo">${list.nome}</h3>
        <p class="projeto__descricao">${list.descricao}</p>
        <div class="ancoras">
            <a href="${list.url}" class="projeto__ancora">Repositório</a>
            <a href="" class="projeto__ancora">Demo</a>
        </div>`;
        section.appendChild(listRepos);
        
        
    }  
};

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var nome = document.getElementById('nome').value;
    if(nome.length == 0) {
      alert('Nome inválido');
      return;
    }
    var email = document.getElementById('email').value;
    if (email.length == 0) {
      alert('Email inválido');
      return;
    }else if (email.search('@') == -1){
        alert('Email inválido');
        return;
    }else if (email.search('com') == -1){
        alert('Email inválido');
        return;
    }
    var assunto = document.getElementById('assunto').value;
    if(assunto.length == 0) {
      alert('Colocar assunto');
      return;
    }
    var menssagem = document.getElementById('menssagem').value;
    if(menssagem.length == 0) {
      alert('Escreva uma menssagem');
      return;
    }
    this.submit();
  }