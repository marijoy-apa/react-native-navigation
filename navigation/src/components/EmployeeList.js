import React, { Component } from "react";
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from "../actions";
import  ListView  from 'deprecated-react-native-listview'
import _ from 'lodash'

class EmployeeList extends Component {
    componentWillMount() {
        this.props.employeesFetch();
        this.createDataSource(this.props)

    }

    // componentWillReceiveProps(nextProps) {
    //     this.createDataSource(nextProps)

    // }

    createDataSource({ employees }) {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) });

        this.dataSource = ds.cloneWithRows(employees);
    }


    render() {
        console.log(this.props)
        return (
            <View>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
            </View>
        )
    }
}

const mapStateToProps = state => {
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid }
    }
    )
    return { employees }
}

export default connect(null, { employeesFetch })(EmployeeList);