import React from 'react'
import PrimeReact from 'primereact/api'
// get our fontawesome imports
import './App.scss'
import AppRoutes from './AppRoutes'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { ProvidersRoot } from './Providers/ProvidersRoot'
import * as am5 from '@amcharts/amcharts5'

library.add(fas, far, fab)

const App = () => {
    PrimeReact.ripple = true

    am5.addLicense("AM5C390452210");

    return (
        <ProvidersRoot>
            <AppRoutes />
        </ProvidersRoot>
    )
}

export default App
