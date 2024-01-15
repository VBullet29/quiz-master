import Confirm from '../pages/confirm';
import Questionnaire from '../pages/questionnaire';
import { routes } from '../constants/route-constants';
import {
    Route,
    Routes,
    BrowserRouter
} from 'react-router-dom';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={routes.confirm} element={<Confirm />} />
                <Route path={routes.questionnaires} element={<Questionnaire />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;