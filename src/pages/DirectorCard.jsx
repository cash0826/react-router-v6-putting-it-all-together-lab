import { Link, Outlet, useOutletContext, useParams } from "react-router-dom";

function DirectorCard() {
    // Replace me
    const { directors, updatedDirectors } = useOutletContext();
    const { id } = useParams();

    // show a loading state while directors are being fetched
    if (directors.length === 0) {
        return <h2>Loading directors...</h2>
    }

    const director = directors.find(d => d.id === id);

    if (!director) {
        return <h2>Director not found.</h2>
    }

    return (
        <div>
        <h2>{director.name}</h2>
        <p>{director.bio}</p>
        <h3>Movies:</h3>
        <ul>
            {director.movies.map((movie) => (
            <li key={movie.id}>
                <Link to={`movies/${movie.id}`}>{movie.title}</Link>
            </li>
            ))}
        </ul>
        <Link to={`movies/new`}>Add New Movie</Link>
        {/* Movie components should render here depending on route */}
        <Outlet context={{ directors, updatedDirectors }}/>
        </div>
    )
}

export default DirectorCard
