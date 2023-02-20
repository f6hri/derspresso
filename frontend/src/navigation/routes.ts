import { ROUTES } from "../config/ROUTES";
import Article from "../pages/Article";
import Index from "../pages/Index";

interface IRoute {
    path: string,
    name?: string,
    element: any
}

const routes: IRoute[] = [
    {
        path: ROUTES.INDEX,
        name: "Ana Sayfa",
        element: Index
    },
    {
        path: ROUTES.ARTICLE,
        element: Article
    }
]

export default routes;
