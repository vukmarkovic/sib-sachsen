import { ErrorPage } from '../Pages/ErrorPage'
import { PublicSurveyPage } from '../Pages/PublicSurveyPage'
import { LoadDemoDataPage } from '../Pages/LoadDemoDataPage'

import ThankuSurveyPage from '../Pages/ThankuSurveyPage'
import FakeLoginPage from '../Pages/FakeLoginPage'

export const routes = {
    publicSurvey: {
        path: '/arbeitszufriedenheit',
        component: <PublicSurveyPage />,
        errorElement: <ErrorPage />,
        layout: 'auth',
        children: [],
    },
    graph: {
        path: '/dashboard',
        component: <FakeLoginPage />,
        errorElement: <ErrorPage />,
        layout: 'auth',
        children: [],
    },
    compsurvey: {
        path: '/vielen-dank',
        component: <ThankuSurveyPage />,
        errorElement: <ErrorPage />,
        layout: 'auth',
        children: [],
    },
    demo: {
        path: '/demo',
        component: <LoadDemoDataPage />,
        errorElement: <ErrorPage />,
        layout: 'auth',
        children: [],
    },
}
