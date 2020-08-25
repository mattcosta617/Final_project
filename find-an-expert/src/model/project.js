const url = `http://localhost:4000/api/v1/projects`

class ProjectModel {
    static getAllProjects = () => {
        return fetch(url)
        .then((response) => response.json())
    }

    static getProjectById = (projecteId) => {
        return fetch(`${url}/${projectId}`)
        .then((response) => response.json())
    }

    static createProject = (project) => {
        return fetch(url, {
            method: 'POST',
            header: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project)
        })
        .then((response) => response.json())
    }
}

export default ProjectModel;
