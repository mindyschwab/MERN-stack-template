import { Link } from 'react-router-dom';
import "./styles.css";

function NotFoundPage() {
    return (
        <>
            <h1>404: Page Not Found</h1>
            <Link to="/">Return to home page</Link>
        </>
    )
};

export default NotFoundPage;