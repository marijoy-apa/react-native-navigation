import React, { Component } from "react";
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from "../actions";
import _ from 'lodash'
import ListItem from "./ListItem";

class EmployeeList extends Component {
    UNSAFE_componentWillMount() {
        this.props.employeesFetch();
        console.log(this.props.employees)

    }

    renderRow({ item }) {
        if (item) {
            return <ListItem employee={item} />
        }
        return null
    }

    render() {
        return (
            <FlatList
                extraData={this.props.employees}
                data={this.props.employees}
                keyExtractor={(employee) => employee.uid}
                renderItem={this.renderRow}
            />
        )
    }
}

const mapStateToProps = state => {
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid }
    })

    return { employees };
}

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);