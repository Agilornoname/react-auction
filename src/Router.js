import React, { Suspense, lazy } from "react"
import { Router, Switch, Route } from "react-router-dom"
//import { history } from "./history"
//import { connect } from "react-redux"
//import { Redirect } from "react-router-dom"
import Spinner from "./components/@template/spinner/Loading-spinner"
// import knowledgeBaseCategory from "./views/pages/knowledge-base/Category"
// import knowledgeBaseQuestion from "./views/pages/knowledge-base/Questions"
import { ContextLayout } from "./utility/context/Layout"
import { history } from "./history"

// Route-based code splitting
const userList = lazy(() => import("./views/apps/user/list/List"))
const userEdit = lazy(() => import("./views/apps/user/edit/Edit"))
const userView = lazy(() => import("./views/apps/user/view/View"))
// Set Layout and Component Using App Route
const RouteConfig = ({ component: Component, fullLayout, ...rest }) => (
    <Route
        {...rest}
        render={props => {
            console.log(props)
            return (
                <ContextLayout.Consumer>
                    {context => {
                        let LayoutTag =
                            fullLayout === true
                                ? context.fullLayout
                                : context.state.activeLayout === "horizontal"
                                ? context.horizontalLayout
                                : context.VerticalLayout
                        return (
                            <LayoutTag  >
                                <Suspense fallback={<Spinner />}>
                                    <Component {...props} />
                                </Suspense>
                            </LayoutTag>
                        )
                    }}
                </ContextLayout.Consumer>
            )
        }}
    />
)
// const mapStateToProps = state => {
//     return {
//         user: state.auth.login.userRole
//     }
// }

const AppRoute = (RouteConfig)

class AppRouter extends React.Component {
    render() {
        return (
            // Set the directory path if you are deploying in sub-folder
            <Router history={history}>
                <Switch>
                    <AppRoute path="/app/user/list" component={userList} />
                    <AppRoute path="/app/user/edit" component={userEdit} />
                    <AppRoute path="/app/user/view" component={userView} />
                </Switch>
            </Router>
        )
    }
}

export default AppRouter
