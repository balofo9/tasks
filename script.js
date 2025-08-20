// Links Tarefas
const links = [
    {
        tarefa: 'A voz da critica',
        link: './edna/voz-da-critica/',
        professor: 'Edna'
    },
    {
        tarefa: 'Paises que falam portugues',
        link: './edna/paises-que-falam-portugues/',
        professor: 'Edna'
    },
    {
        tarefa: 'União Sovietica',
        link: './italo/uniao-sovietica',
        professor: 'Italo'
    }
]

// Links 
const ListLinks = document.getElementById("list")

// Exibindo links na tela
for (let x = 0; x < links.length; x++) {

    ListLinks.innerHTML += `
        <li>
            <a href=${links[x].link}>
                <p>${links[x].tarefa}</p>
                <p>${links[x].professor}</p>
            </a>
        </li>
    `
}