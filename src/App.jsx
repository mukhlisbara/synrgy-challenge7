import './App.css';
import AdminRoute from './routes/AdminRoute';
import UserRoute from './routes/UserRoute';

export default function App() {
    return (
        <>
            <UserRoute />

            <AdminRoute />
        </>
    );
}
