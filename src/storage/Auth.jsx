import { createContext, useContext, useEffect, useState } from "react";

// Context
export const AuthContext = createContext();

// Provider
export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem('token') || '');
    const [user, setUser] = useState({});

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

    return <AuthContext.Provider value={{ storeTokenInLS, LogoutUser, isLoggedIn, user }}>
        {children}
    </AuthContext.Provider>
}

// Consumer
export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    return authContextValue
}