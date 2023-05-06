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
        <section id="Seccion2" className="px-6 py-4 ">
            <h2>Mis Repositorios en carrusel:</h2>
            <div>
                <ul>
                    {repositories.map((repo: any) => (
                        <li key={repo.id}>
                            <a href={repo.html_url} target="_blank" rel="noreferrer">
                                {repo.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Repositories;