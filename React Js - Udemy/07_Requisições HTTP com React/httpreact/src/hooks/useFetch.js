import { useState, useEffect } from "react";

// aula 4 - Custom hook

export const useFetch = (url) => {
    const [data, setData] = useState(null);

    // aula 5 - refatorando o post
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(false)

    // aula 6 - loading
    const [loading, setLoanding] = useState(false);

    // aula 7 - tratando erros
    const [error, setError] = useState(null)

    // aula 8 - desafio de deletar 
    const [itemId, setItemid] = useState (null)

    const httpConfig = (data, method) => {
        if(method === "POST") {
            setConfig({
                method,
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(data)

            })

            setMethod(method);
        } else if (method === "DELETE") {

            setConfig({
                method,
                headers: {
                    "Content-Type" : "application/json"
                },
            })
            setMethod(method)
            setItemid(data)
        }
    }

    useEffect(() => {

        const fetchData = async () => {

            //  6 - loading
            setLoanding(true)

            try {
                const res = await fetch(url)

                const json = await res.json()

                setData(json)

            } catch (error) {
                console.log(error.message);
                setError("Houve algum erro ao carregar os dados!")

            }


            setLoanding(false)

        }

        fetchData();

    }, [url, callFetch]);

    //5 - refatorando post 
    useEffect(() => {

        const httpRequest = async () => {

            let json 

            if(method === "POST") {
                let fetchOptions =[url, config]

                const res = await fetch(...fetchOptions)

                json = await res.json()

            } else if (method === "DELETE") {

                const deleteUrl = `${url}/${itemId}`

                const res = await fetch(deleteUrl, config)

                json = await res.json()

            }

            setCallFetch(json)

        }

        httpRequest()

    }, [config, method, url])

    return { data, httpConfig , loading, error};
};