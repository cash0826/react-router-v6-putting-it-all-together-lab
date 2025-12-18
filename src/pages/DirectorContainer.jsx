import { useEffect, useState } from 'react';
import { Outlet } from "react-router-dom";
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

    return (
        <>
            <NavBar />
            <main>
                <h1>Welcome to the Director's Directory!</h1>
                {/* all director components should render here depending on route */}
                <Outlet context={{ directors }} />
            </main>
        </>
    );
}

export default DirectorContainer;
