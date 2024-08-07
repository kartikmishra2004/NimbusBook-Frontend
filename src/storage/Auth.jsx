import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

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
            const response = await fetch("https://nimbus-book-server.vercel.app/api/v1/auth/userauth", {
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
            const response = await fetch("https://nimbus-book-server.vercel.app/api/v1/notes/get", {
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
            const response = await fetch("https://nimbus-book-server.vercel.app/api/v1/notes/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(note),
            });
            const createdRes = await response.json();
            if (response.ok) {
                toast.success("Notes created successfully!!")
            } else {
                toast.error(createdRes.message)
            }
        } catch (error) {
            console.log("Failed to create notes!!", error);
        }
    }


    // Updating a note
    const updateNote = async ({ id, note }) => {
        try {
            const response = await fetch(`https://nimbus-book-server.vercel.app/api/v1/notes/update/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(note),
            });
            const updateRes = await response.json();
            if(response.ok){
                toast.success("Notes updated successfully!!");
            } else{
                toast.error(updateRes.message);
            }
        } catch (error) {
            console.log("Failed to update notes!!", error);

        }
    }

    // Deleting a notes
    const deleteNotes = async (_id) => {
        try {
            const deleteNote = await fetch(`https://nimbus-book-server.vercel.app/api/v1/notes/delete/${_id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            });
            const deleteRes = await deleteNote.json();
            if (deleteNote.ok) {
                toast.success("Notes deleted Successfully!!")
            } else {
                toast.error(deleteRes.message);
            }
        } catch (error) {
            log("Failed to delete notes!!", error);
        }
    }

    useEffect(() => {
        if (token) {
            fetchNotes();
        }
    }, [token, fetchNotes]);

    return <AuthContext.Provider value={{ storeTokenInLS, LogoutUser, isLoggedIn, user, notesData, ceateNotes, deleteNotes, updateNote }}>
        {children}
    </AuthContext.Provider>
}

// Consumer
export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    return authContextValue
}