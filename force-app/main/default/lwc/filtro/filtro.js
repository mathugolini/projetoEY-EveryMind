import { LightningElement } from 'lwc';

import Everymindassets from '@salesforce/resourceUrl/Everymindassets';

export default class Filtro extends LightningElement {

    everymindlogo = `${Everymindassets}/EYassets/everymind.png`;
    modelo = `${Everymindassets}/EYassets/modelo.png`;

    candidato1 = `${Everymindassets}/EYassets/matheusLogo.png`;
    candidato2 = `${Everymindassets}/EYassets/Cahue.jpg`;
    candidato3 = `${Everymindassets}/EYassets/Gabriel.jpg`;
    candidato4 = `${Everymindassets}/EYassets/Gustavo.jpg`;
    candidato5 = `${Everymindassets}/EYassets/Vinicius.jpg`;
    candidato6 = `${Everymindassets}/EYassets/Sofia.jpg`;
    candidato7 = `${Everymindassets}/EYassets/Ricardo.jpg`;
    candidato8 = `${Everymindassets}/EYassets/Laura.jpg`;
    
    searchText = '';

    handleSearchKeyUp(event) {
        this.searchText = event.target.value.toLowerCase();
    }

    handleSearchEnter(event) {
        if (event.key === 'Enter') {
            this.sendQuestion();
        }
    }

    sendQuestion() {
        var searchInput = "Analise os currículos e responda apenas com o nome dos candidatos mais adequados:"
        searchInput += this.curriculums();
        searchInput += this.template.querySelector('input[name="search"]').value;

        const OPENAI_API_KEY = "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";

        const candidatos = {};
        candidatos["matheus"] = this.template.querySelector('div[class="matheus"]');
        candidatos["cahue"] = this.template.querySelector('div[class="cahue"]');
        candidatos["gabriel"] = this.template.querySelector('div[class="gabriel"]');
        candidatos["gustavo"] = this.template.querySelector('div[class="gustavo"]');
        
        fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + OPENAI_API_KEY,
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                max_tokens: 100, // tamanho da resposta
                temperature: 0.5,
                messages: [{"role": "user", "content": searchInput}] // criatividade na resposta
            }),
        })
        .then((response) => response.json())
        .then((json) => {
            if (json.error?.message) {
                console.log(`Error: ${json.error.message}`);
            } else if (json.choices?.[0].message) {
                var text = json.choices[0].message.content || "Sem resposta";
                const responseSplit = text.replaceAll("e ", ',').split(",");
                console.log(text);
                console.log(responseSplit[1]);
                
                for (var key in candidatos) {
                    if (key != text.toLowerCase())
                        candidatos[key].style.display = 'none';
                }

            }
        })
        .catch((error) => console.error("Error:", error))
        .finally(() => {
            console.log('finally')
        });
        
    }

    curriculums() {
        var curriculums = "Currículo Matheus:  \n Desenvolvedor de Aplicações \n Experiência como Desenvolvedor e Quality Assurance há 4 anos, atuando em projetos para empresas na área de telecomunicações e petrolífera. Aprimorando minhas habilidades para atender as necessidades do cliente e auxiliar a equipe, utilizando metodologias ágeis. Com sólida experiência internacional e Inglês fluente. Especialidade em Salesforce, Java e Cloud. \n";
        curriculums += "Currículo Cahue: \n Desenvolvedor de Aplicações \n Minha exposição internacional em uma idade jovem me deu uma profunda experiência cobrindo vários aspectos da vida profissional, como atendimento ao cliente, vendas e estratégia. De volta ao Brasil desde 2019, iniciei meus estudos e carreira na Tecnologia da Informação. Atualmente atuando como iOS Developer Trainee, utilizando a linguagem de programação Swift (Storyboard, UIKit, Auto Layout, ViewCode e MVC Design Pattern) e a IDE XCode com 2 anos de experiência. \n";
        curriculums += "Currículo Gabriel: \n Desenvolvedor de Aplicações \n Experiência como Desenvolvedor e Quality Assurance, atuando em projetos para empresas na área de jogos, com 3 anos de experiência. Aprimorando minhas habilidades para atender as necessidades do cliente e auxiliar a equipe, utilizando metodologias ágeis. Com sólida experiência internacional e Inglês fluente. Especialidade em C#, Java e Cloud. \n"
        curriculums += "Currículo Gustavo: \n Analista de banco de dados \n Experiência como DBA, atuando em projetos para empresas na área de telecomunicações e petrolífera por 5 anos. Conhecimentos avançados em SQL e banco de dados Oracle, além de data warehousing."
        return curriculums;
    }

}
