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
        searchInput += this.template.querySelector('input[name="search"]').value + '\n';
        searchInput += "Responda apenas com o nome dos candidatos!"

        const OPENAI_API_KEY = "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";

        const candidatos = {};
        candidatos["matheus"] = this.template.querySelector('div[class="candidato-1"]');
        candidatos["cahue"] = this.template.querySelector('div[class="candidato-2"]');
        candidatos["gabriel"] = this.template.querySelector('div[class="candidato-3"]');
        candidatos["gustavo"] = this.template.querySelector('div[class="candidato-4"]');
        candidatos["vinicius"] = this.template.querySelector('div[class="candidato-5"]');
        candidatos["sofia"] = this.template.querySelector('div[class="candidato-6"]');
        candidatos["ricardo"] = this.template.querySelector('div[class="candidato-7"]');
        candidatos["laura"] = this.template.querySelector('div[class="candidato-8"]');
        
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
                const responseSplit = text.replaceAll(" e ", ', ').replace(".", "").split(", ");
                console.log(text);
                console.log(responseSplit[0]);
                console.log(responseSplit[1]);
                
                for (var key in candidatos) {
                    candidatos[key].style.display = 'none';
                    for (var resp in responseSplit) {
                        if (key == responseSplit[resp].toLowerCase()) {
                            candidatos[key].style.display = 'inline';
                            break;
                        }
                    }
                }

            }
        })
        .catch((error) => console.error("Error:", error))
        .finally(() => {
            //console.log('finally')
        });
        
    }

    curriculums() {
        var curriculums = "Currículo Matheus:  \n Desenvolvedor de Aplicações \n Experiência como Desenvolvedor e Quality Assurance há 4 anos, atuando em projetos para empresas na área de telecomunicações e petrolífera. Aprimorando minhas habilidades para atender as necessidades do cliente e auxiliar a equipe, utilizando metodologias ágeis. Com sólida experiência internacional e Inglês fluente. Especialidade em Salesforce, Java e Cloud. \n";
        curriculums += "Currículo Cahue: \n Desenvolvedor de Aplicações \n Minha exposição internacional em uma idade jovem me deu uma profunda experiência cobrindo vários aspectos da vida profissional, como atendimento ao cliente, vendas e estratégia. De volta ao Brasil desde 2019, iniciei meus estudos e carreira na Tecnologia da Informação. Atualmente atuando como iOS Developer Trainee, utilizando a linguagem de programação Swift (Storyboard, UIKit, Auto Layout, ViewCode e MVC Design Pattern) e a IDE XCode com 2 anos de experiência. \n";
        curriculums += "Currículo Gabriel: \n Desenvolvedor de Aplicações \n Experiência como Desenvolvedor e Quality Assurance, atuando em projetos para empresas na área de jogos, com 3 anos de experiência. Aprimorando minhas habilidades para atender as necessidades do cliente e auxiliar a equipe, utilizando metodologias ágeis. Com sólida experiência internacional e Inglês fluente. Especialidade em C#, Java e Cloud. \n"
        curriculums += "Currículo Gustavo: \n Analista de banco de dados \n Experiência como DBA, atuando em projetos para empresas na área de telecomunicações e petrolífera por 5 anos. Conhecimentos avançados em SQL e banco de dados Oracle, além de data warehousing."
        curriculums += "Currículo Sofia: \n Designer UX \n Designer dedicada a criar experiências digitais envolventes e intuitivas. Minha paixão pela psicologia cognitiva me ajuda a compreender as necessidades dos usuários e a traduzi-las em interfaces amigáveis. Tenho experiência em colaborar com equipes de desenvolvimento ágil para criar produtos digitais visualmente atraentes e funcionais. \n"
        curriculums += "Currículo Ricardo: \n Engenheiro de Controle e Automação \n Engenheiro apaixonado por automação industrial e controle de processos. Com experiência em projetar, implementar e otimizar sistemas de automação para indústrias de manufatura. Forte histórico em integração de PLCs, programação de CLPs e supervisórios. Busco constantemente aplicar tecnologias emergentes para melhorar a eficiência e a qualidade dos processos industriais. \n"
        curriculums += "Currículo Laura: \n Analista de Dados \n Profissional com vasta experiência em análise de dados e criação de visualizações impactantes. Trabalhei em diversos projetos multidisciplinares, colaborando com equipes para extrair insights acionáveis de conjuntos de dados complexos. Minha abordagem orientada a resultados e habilidades avançadas em ferramentas de visualização, como Tableau e Power BI, me permitem transformar dados em narrativas claras. \n"
        return curriculums;
    }

}
