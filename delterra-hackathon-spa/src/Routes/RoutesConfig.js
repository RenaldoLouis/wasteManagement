import { Each } from "../Components/Each/Each";
import MainPage from "../Pages/MainPage";
import ListPage from "../Pages/ListPage";
import MenuPage from "../Pages/MenuPage";
import ProcessWastePage from "../Pages/ProcessWastePage";
import ListOfWastePage from "../Pages/ListOfWastePage";
import { ROUTE_PATH } from "../Constants/RoutePath";
import { Route, Switch } from "react-router-dom";
import AddInboundPage from "../Pages/AddInboundPage";

const MAIN_ROUTES = [
    {
        path: ROUTE_PATH.MAIN,
        exact: true,
        component: () => <MainPage />
    },
    {
        path: ROUTE_PATH.LIST,
        component: () => <ListPage />
    },
    {
        path: ROUTE_PATH.MENU,
        exact: true,
        component: () => <MenuPage />
    },
    {
        path: ROUTE_PATH.ADDINBOUND,
        exact: true,
        component: () => <AddInboundPage />
    },
    {
        path: ROUTE_PATH.PROCESS_WASTE,
        exact: true,
        component: () => <ProcessWastePage />
    },
    {
        path: ROUTE_PATH.LIST_OF_WASTE,
        exact: true,
        component: () => <ListOfWastePage />
    },
]

export const RenderRoutes = () => {
    return (
        <Switch>
            <Each of={MAIN_ROUTES} render={(route, i) =>
                <Route
                    path={route.path}
                    exact={route.exact}
                    render={props => <route.component {...props} routes={route.routes} />}
                />
            } />
        </Switch>
    );
}