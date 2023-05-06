import { useEffect, useState } from 'react';
import getRepositories from '../../git/git';

const Repositories = () => {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        const fetchRepositories = async () => {
            const data = await getRepositories();
            setRepositories(data);
        };

        fetchRepositories();
    }, []);

    return (
        <section id="Seccion2">
            <h1>Mis Repositorios</h1>
            <div id="List">
                    {repositories.map((repo: any) => (
                        <div id="Object" key={repo.id}>
                            <h3>{repo.name}</h3>
                            <p>Descripcion:<br/>
                            {repo.description}</p>
                            <a href={repo.html_url} target="_blank" rel="noreferrer">
                                <img src="Carpeta.png" alt="Carpeta" />
                                Ver en GITHUD
                            </a>
                        </div>
                    ))}
            </div>
        </section>
    );
};

export default Repositories;