import { useEffect, useState } from "react";
import RepoCard from "./RepoCard";

function RepoSection() {
    const [repoData, setRepoData] = useState([]);

    useEffect(() => {
        async function fetchRepos() {
            const data = await fetch('https://api.github.com/users/MedNourS/repos')
                .then(res => res.json());

            setRepoData(() => data);
        }

        fetchRepos();
    }, []);

    return (
        <>
            <div className="repo-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
                {
                    repoData.map((element, index) => {
                        return <RepoCard key={index} name={element["name"]} />
                    })
                }
            </div>
        </>
    )
}

export default RepoSection;