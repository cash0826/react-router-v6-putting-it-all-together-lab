import { useOutletContext } from "react-router-dom";

const DirectorList = () => {
    // Replace me
    const { directors } = useOutletContext();

    const displayDirectors = directors.map(d => (
        <li key={d.id}><a>{d.name}</a></li>
    ))

    return (
        <ul>
            {displayDirectors}
        </ul>
    );
}

export default DirectorList;
