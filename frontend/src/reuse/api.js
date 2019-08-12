export const base_URL = process.env.NODE_ENV === 'production' ? '' : "http://localhost:8555";
export const getFunc = () =>
    new Promise((resolve, reject) => {
        fetch(`${base_URL}/`, {
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
        fetch(`${base_URL}/input`, {
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
