import { useEffect, useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import NavBar from '../components/NavBar';

const DirectorContainer = () => {
    const [directors, setDirectors] = useState([])

    useEffect(() => {
        fetch("http://localhost:4000/directors")
        .then(r => {
            if (!r.ok) { throw new Error("failed to fetch directors") }
            return r.json()
        })
        .then(data => setDirectors(data))
        .catch(error => console.error("Error fetching directors:", error))
    }, [])

    const addDirector = (newDirector) => {
        setDirectors(previous => [...previous, newDirector]);
    }

    const updatedDirectors = (updatedDirector) => {
        setDirectors(previous => previous.map(d => {
            if (d.id === updatedDirector.id) {
                return updatedDirector;
            }
            return d;
        }));
    }

    return (
        <>
            <NavBar />
            <main>
                <h1>Welcome to the Director's Directory!</h1>
                <Link to="/directors/new">Add New Director</Link>
                {/* all director components should render here depending on route */}
                <Outlet context={{ directors, addDirector, updatedDirectors }} />
            </main>
        </>
    );
}

export default DirectorContainer;
