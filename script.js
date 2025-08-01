const respositories = document.querySelector('.lista-de-projetos');




function getApiGitHub() {
  fetch('https://api.github.com/users/NaayFonseca/repos')
    .then(async res => {
      if (!res.ok) {
        throw new Error(res.status);
      }

      let data = await res.json();

      // Pega só os 3 primeiros repositórios
      data.slice(0, 3).map(item => {
        let project = document.createElement('div');
        project.classList.add('col');

        project.innerHTML = `
          <div class="card h-100">
            <img src="/WhatsApp Image 2025-07-27 at 14.48.06.jpeg" class="card-img-top" alt="${item.name}" style="object-fit: cover; height: 280px; width: 100%;">
            <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
              <p class="card-text">${item.description || "Projeto sem descrição"}</p>
              <a href="${item.html_url}" target="_blank" class="btn btn-primary">Ver no GitHub</a>
            </div>
          </div>
        `;

        

        respositories.appendChild(project);
      });
    });
}

getApiGitHub();








const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }

    })

})

const elements = document.querySelectorAll('.projetos')

elements.forEach((element) => myObserver.observe(element)
)


const nome = document.getElementById('nome')
const mensagem = document.getElementById('mensagem')
const telefone = '5585985663812';

const texto = `Olá! Me chamo, ${nome}, ${mensagem}`
const msgFormatada = encodeURIComponent(texto)

const url = ''
