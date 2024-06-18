import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {IPhoto} from "./cameraPreview";
import {IconCheck} from "@tabler/icons-react-native";
import {useStepperStore} from "../stores/stepperStore";

interface IStepIcon {
    isActiveStep: boolean,
    isCompletedStep: boolean,
    isFirstStep: boolean,
    isLastStep: boolean,
    stepNumber: number,
    label: string
}


export const StepIcon = ({isActiveStep, isFirstStep, isCompletedStep, isLastStep, stepNumber, label}: IStepIcon) => {
    const {setCurrentStep, currentStep} = useStepperStore()

    return (
        <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <TouchableOpacity onPress={() => setCurrentStep(stepNumber)}>
                <View
                    style={[styles.circleStyle, isCompletedStep && styles.completedCircle, isActiveStep && styles.activeCircle]}>
                    <Text style={styles.circleText}>
                        {isCompletedStep ? (
                            <IconCheck color={'white'}/>
                        ) : (
                            <Text style={styles.stepNum}>{stepNumber}</Text>
                        )}
                    </Text>
                </View>
            </TouchableOpacity>
            <Text style={styles.labelText}>{label}</Text>
            {!isFirstStep && <View style={[styles.leftBar, isCompletedStep && styles.completedLeftBar, isActiveStep && styles.activeLeftBar]}/>}
            {!isLastStep && <View style={[styles.rightBar, isCompletedStep && styles.completedRightBar, isActiveStep && styles.activeRightBar]}/>}
        </View>
    );
}


const styles = StyleSheet.create({
    circleStyle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'gray',
        borderColor: 'gray',
        borderWidth: 5,
        bottom: 2,
    },
    circleText: {
        alignSelf: 'center',
        marginTop: 3
    },
    labelText: {
        textAlign: 'center',
        flexWrap: 'wrap',
        width: 100,
        paddingTop: 4,
        color: '#686868',
    },
    leftBar: {
        position: 'absolute',
        top: 40 / 2.22,
        left: 0,
        right: 40 + 8,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: 'gray',
        marginRight: 40 / 2 + 2,
    },
    rightBar: {
        position: 'absolute',
        top: 40 / 2.22,
        right: 0,
        left: 40 + 8,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: 'gray',
        marginLeft: 40 / 2 + 2,
    },
    completedCircle: {
        backgroundColor: '#40c057',
        borderColor: '#40c057',
    },
    completedLeftBar: {
        backgroundColor: '#40c057',
        borderColor: '#40c057',
    },
    completedRightBar: {
        backgroundColor: '#40c057',
        borderColor: '#40c057',
    },
    activeCircle: {
        backgroundColor: 'orange',
        borderColor: 'orange',
    },
    activeRightBar: {
        backgroundColor: 'orange',
        borderColor: 'orange',
    },
    activeLeftBar: {
        backgroundColor: 'orange',
        borderColor: 'orange',
    },
    stepNum: {
        color: 'white',
        fontWeight: '700'
    },
});
