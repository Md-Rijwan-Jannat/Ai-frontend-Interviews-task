import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <div className='text-center text-5xl h-72 flex-col items-center justify-center'>
            <p>Loading...</p>
        </div>
    }
    if (user) {
        return children;
    }
    return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;