export const getFunc = () =>
    new Promise((resolve, reject) => {
        fetch("http://localhost:8555/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                resolve({ data });
            })
            .catch(e => {
                reject({ e });
            });
    });

export const postFunc = payload =>
    new Promise((resolve, reject) => {
        fetch("http://localhost:8555/input", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        })
            .then(res => res.json())
            .then(data => {
                resolve({ data });
            })
            .catch(e => {
                reject({ e });
            });
    });
