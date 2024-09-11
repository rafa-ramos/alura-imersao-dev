function search() {
    let section = document.getElementById("resultados-pesquisa");
    let inputSearch = document.getElementById("input-search").value;
    
    inputSearch = inputSearch.toLowerCase();

    let results = "";
    let name = "";
    let description = "";
    let tags = "";

    if (inputSearch == "") {
        section.innerHTML = "<p>Nada foi encontrado, você precisa digitar o nome de um atleta ou esporte.</p>"
        return;
    } else { 
        for (let athlete of athletes) {
            
            name = athlete.name.toLowerCase();
            description = athlete.description.toLocaleLowerCase();
            tags = athlete.tags.toLocaleLowerCase();

            if (name.includes(inputSearch) || description.includes(inputSearch) || tags.includes(inputSearch)) {
                results += `
                <div class="item-resultado">
                    <h2><a href="#" target="_blank">${athlete.name}</a></h2>
                    <p class="descricao-meta">${athlete.description}</p>
                    <a href="${athlete.link}" target="_blank">Saiba mais</a>
                </div>
                `;
            };
        };
        
        section.innerHTML = results;
        
        if (!results) {
            section.innerHTML = "<p>Nada foi encontrado para sua pesquisa</p>"
        }
    };
};


