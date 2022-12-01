import api from "../services/api";

//retorna todas as perguntas
export async function findAllQuestions(auth, stateId) {
    try {
        const response = await api.get(`/questions/${stateId}`, {
            headers: {
                Authorization: auth,
            },
        });
        return response.data;
                
    } catch (err) {
        return err;
    }
}

export async function createQuestion(auth, stateId, name, value) {
    try {
        return await Axios.post(
            //aqui retorna a rota para criação de perguntas
            {
                name,
                baseValue: value,
            },
            {
                headers: {
                    Authorization: `Bearer ${auth.data.token}`,
                    "Content-Type": "application/json",
                },
            },
        );
    } catch (err) {
        return err.response;
    }
}

export async function editQuestion(auth, stateId, name, value) {
    try {
        return await Axios.put(
            //rota para editar a pergunta
            {
                name,
                baseValue: value,
            },
            {
                headers: {
                    Authorization: `Bearer ${auth.data.token}`,
                    "Content-Type": "application/json",
                },
            },
        );
    } catch (err) {
        return err.response;
    }
}

export async function deleteQustion(auth, stateId, name) {
    try {
        return await Axios.delete(
            // rota remover question
            {
                headers: {
                    Authorization: `Bearer ${auth.data.token}`,
                },
            },
        );
    } catch (err) {
        return err.response;
    }
}
