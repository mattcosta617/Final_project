const url = 'http://localhost:4000/api/v1/experts'

class ExpertModel {
    static getAllExperts = () => {
        return fetch(url)
        .then((response) => response.json())
    }

    static getExpertById = (expertId) => {
        return fetch(`${url}/${expertId}`)
        .then((response) => response.json())
    }

    static createExpert = (expert) => {
        return fetch(url, {
            method: 'POST',
            header: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(expert)
        })
        .then((response) => response.json())
    }
}

export default ExpertModel;