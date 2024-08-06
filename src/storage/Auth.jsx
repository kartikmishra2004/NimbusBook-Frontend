import { createContext, useContext, useEffect, useState } from "react";

// Context
export const AuthContext = createContext();

// Provider
export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem('token') || '');
    const [user, setUser] = useState({});
    const [notesData, setNotesData] = useState([])

    const storeTokenInLS = (serverToken) => {
        localStorage.setItem('token', serverToken);
        setToken(serverToken);
    }

    let isLoggedIn = !!token;

    // Logout functionality
    const LogoutUser = () => {
        setToken("");
        localStorage.removeItem('token');
        setUser({});
    }

    // JWT Authentication - to get the currently logged in user data
    const userAuthentication = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/v1/auth/userauth", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (response.ok) {
                const data = await response.json();
                setUser(data.userData);
            } else {
                LogoutUser();
            }

        } catch (error) {
            console.log("error fetching user data!!");
        }
    }
    useEffect(() => {
        if (token) {
            userAuthentication();
        }
    }, [token]);

    // Verification of user for fetching notes
    const fetchNotes = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/v1/notes/get", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const notesData = await response.json();
            setNotesData(notesData);
        } catch (error) {
            console.log("Error fetching Notes!!");

        }
    }

    // Creating a notes
    const ceateNotes = async (note) => {
        try {
            const response = await fetch("http://localhost:3000/api/v1/notes/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(note),
            });
        } catch (error) {
            console.log("Failed to create notes!!", error);
        }
    }

    // Deleting a notes
    const deleteNotes = async (_id) => {
        try {
            const deleteNote = await fetch(`http://localhost:3000/api/v1/notes/delete/${_id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            });
        } catch (error) {
            log("Failed to delete notes!!", error);
        }
    }

    useEffect(() => {
        if (token) {
            fetchNotes();
        }
    }, [token, fetchNotes]);

    return <AuthContext.Provider value={{ storeTokenInLS, LogoutUser, isLoggedIn, user, notesData, ceateNotes, deleteNotes }}>
        {children}
    </AuthContext.Provider>
}

// Consumer
export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    return authContextValue
}