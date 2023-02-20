import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes";

const Navigation: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                {
                    routes.map((item, index) => (
                        <Route key={index} path={item.path} element={<item.element />} />
                    ))
                }
            </Routes>
        </BrowserRouter>
    );
}

export default Navigation;