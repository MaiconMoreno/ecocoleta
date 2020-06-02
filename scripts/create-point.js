
function populaUF() {

    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")

        .then(res => res.json())
        .then(estados => {


            // mesma coisa que 
            // for (let i = 0; i < estados.length; i++) {
            //     ufSelect.innerHTML += `<option value="${estados[i].id}">${estados[i].nome}</option>`
            // }

            for (const estado of estados) {
                ufSelect.innerHTML += `<option value="${estado.id}">${estado.nome}</option>`;
            }
        })
}

function buscaCidades(event) {

    const cidadeSelect = document.querySelector("select[name=cidade]");
    const ufInput = document.querySelector("input[name=estado]");

    const uf = event.target.value;


    const indexOfSelectedUf = event.target.selectedIndex;


    ufInput.value = event.target.options[indexOfSelectedUf].text;

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`


    try {
        fetch(url)

            .then(res => res.json())
            .then(cidades => {

                for (const cidade of cidades) {
                    cidadeSelect.innerHTML += `<option value="${cidade.id}">${cidade.nome}</option>`;
                }
                cidadeSelect.disabled = false;
            })

    } catch (error) {
        return error;
    }
};

document.querySelector("Select[name=uf]").addEventListener("change", buscaCidades);


// function buscaLista(url) {

//     try {
//         return fetch(url)
//             .then(res => res.json())
//             .then(dados => dados)
//     } catch (error) {
//         return error
//     }
// }

populaUF();









