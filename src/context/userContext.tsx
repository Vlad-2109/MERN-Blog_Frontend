import { createContext, useEffect, useState} from 'react';
import { UserContextProviderInterface, UserContextInterface } from '../types/pagesTypes';

export const UserContext = createContext<UserContextInterface>({ currentUser: null, setCurrentUser: () => {}});

    const UserProvider: React.FC<UserContextProviderInterface> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(() => {
        const storedUser = localStorage.getItem('user');
        return storedUser ? JSON.parse(storedUser) : null;
    });

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(currentUser));
    }, [currentUser])

    return <UserContext.Provider value={{currentUser, setCurrentUser}}>{children}</UserContext.Provider>;
};

export default UserProvider;