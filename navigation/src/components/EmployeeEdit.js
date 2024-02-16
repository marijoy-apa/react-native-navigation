import React, { Component } from "react";
import { Card, CardSection, Button, Confirm } from "./common";
import { connect } from "react-redux";
import EmployeeForm from "./EmployeeForm";
import _ from 'lodash';
import { employeeUpdate, employeeSave, employeeDelete } from "../actions";
import { textWithoutEncoding } from 'react-native-communications'
import { Linking } from "react-native";
class EmployeeEdit extends Component {
    state = { showModal: false }
    UNSAFE_componentWillMount() {
        console.log('component will mount', this.props)
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value })
        })
    }

    onButtonPress() {
        const { name, phone, shift, } = this.props;
        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid })
    }

    onTextPress() {
        const { phone, shift } = this.props;
        Linking.openURL(`sms:${phone}?body=Your upcoming shift is on ${shift}`)
    }

    onDeletePress() {
        this.setState({ showModal: !this.state.showModal })
    }

    onAccept() {
        this.setState({ showModal: false })

        const { uid } = this.props.employee
        this.props.employeeDelete({ uid })
    }

    onDecline() {
        this.setState({ showModal: false })

    }

    render() {
        return (
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>
                        Text Schedule
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onDeletePress.bind(this)}>
                        Fire Employee
                    </Button>
                </CardSection>


                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >Are you sure you want to delete this?
                </Confirm>
            </Card>
        )
    }
}

const mapStateToProps = state => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift }
}
export default connect(mapStateToProps, {
    employeeUpdate,
    employeeSave,
    employeeDelete
})(EmployeeEdit);