

//  "authorization": this.apiKey
class Api {

    #apiKey = "BEARER ";
    #header = {
        'Content-Type': 'application/json',
        'authorization': this.#apiKey
    }
    constructor(key) {
        this.#apiKey = "BEARER " + key;
        this.#header.authorization = this.#apiKey
    }
    setheader(key) {
        this.#apiKey = "BEARER " + key;
        this.#header.authorization = this.#apiKey
        return true;
    }

    async get(url) {
        const res = await fetch(url, {
            method: "get",
            headers: {
                ...this.#header
            }
        });
        if (!res.ok) {
            const err = await res.json();
            return err;
        }
        return await res.json();
    }
    async post(url, data) {
        const res = await fetch(url, {
            method: "post",
            headers: {
                ...this.#header,
            },
            body: JSON.stringify(data)
        })
        if (!res.ok) {
            const err = await res.json();
            throw new Error(JSON.stringify(err));
        }
        return await res.json();
    }
    filepost(url, data) {
        return fetch(url, {
            method: "post",
            headers: {
                'authorization': this.#apiKey
            },
            body: new FormData(data)
        }).then(res => res.json());
    }
    async put(url, data) {

        const res = await fetch(url, {
            method: "put",
            headers: {
                ...this.#header,
            },
            body: JSON.stringify(data)
        })
        if (!res.ok) {
            const err = await res.json();
            throw new Error(JSON.stringify(err));
        }
        return await res.json();

    }
    async delete(url, data) {
        const res = await fetch(url, {
            method: "delete",
            headers: {
                ...this.#header,
            },
            body: JSON.stringify(data)
        })
        if (!res.ok) {
            const err = await res.json();
            throw new Error(JSON.stringify(err));
        }
        return await res.json();
    }
}



function ApiAuth() {
    let admin
    const adminAuth = localStorage.getItem("admin-auth");
    const userInfo = localStorage.getItem("userInfo");

    if (adminAuth)
        admin = JSON.parse(adminAuth);

    const user = JSON.parse(userInfo);
    const token = admin?.token ? admin?.token : user?.token;
    return new Api(token);
}


const api = ApiAuth();

export default api;


