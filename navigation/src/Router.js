import React from "react";
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from "./components/LoginForm";
import EmployeeList from "./components/EmployeeList";
import EmployeeCreate from "./components/EmployeeCreate";
import EmployeeEdit from "./components/EmployeeEdit";


const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 65, alignSelf: "center" }}>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene
                        key="login"
                        component={LoginForm}
                        title="Please login" />
                </Scene>

                <Scene key="main">
                    <Scene
                        rightTitle="Add"
                        onRight={() => {
                            Actions.employeeCreate()
                        }}
                        key="employeeList"
                        component={EmployeeList}
                        title="Employees"
                        initial
                    />
                    <Scene
                        back
                        key="employeeCreate"
                        component={EmployeeCreate}
                        title="Employee Create"
                    />
                    <Scene
                        back
                        key="employeeEdit"
                        component={EmployeeEdit}
                        title="Employee edit"
                    />
                </Scene>
            </Scene>
        </Router>
    )
}

export default RouterComponent