import ReactDOM from 'react-dom';
import './index.css';
import React, {Suspense, lazy} from "react"
import {Layout} from "./utility/context/Layout"
import {IntlProviderWrapper} from "./utility/context/Internationalization"
import Spinner from "./components/@template/spinner/Fallback-spinner"
import * as serviceWorker from "./serviceWorker"
import "./index.scss"


const NextApp = lazy(() => import("./NextApp"))

// configureDatabase()

ReactDOM.render(

    <Suspense fallback={<Spinner/>}>
        <Layout>
            <IntlProviderWrapper>
                <NextApp/>
            </IntlProviderWrapper>
        </Layout>
    </Suspense>,
    document.getElementById("root")
)
serviceWorker.unregister()
