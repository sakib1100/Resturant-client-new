import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { auth } from '../../firebase.init';

const RequireAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();

    // Check for loading state or error
    if (loading) {
        // You may want to show a loading indicator here
        return <div>Loading...</div>;
    }

    if (error) {
        console.error("Authentication error:", error);
        // Handle error accordingly
        return <div>Error while authenticating</div>;
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return <>{children}</>;
};

export default RequireAuth;
