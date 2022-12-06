import api from "../services/api";

export async function findperguntas() {
    try {
        const response = await api.get(`/randomProblem/${1}`);
        //console.log(response.data);

        const teste = [
            {
                pergunta: response.data.problems[0].description,
                opcoesResposta: [
                    {resposta: response.data.options[0].description, correta: response.data.options[0].correct, alternativa: "A)"},
                    {resposta: response.data.options[1].description, correta: response.data.options[1].correct, alternativa: "B)"},
                    {resposta: response.data.options[2].description, correta: response.data.options[2].correct, alternativa: "C)"},
                    {resposta: response.data.options[3].description, correta: response.data.options[3].correct, alternativa: "D)"},
                ]
            }
        ];
        return teste;  

    } catch (err) {

    }
};

