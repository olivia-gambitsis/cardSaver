import {ImageBackground, TouchableOpacity, View, StyleSheet, Pressable} from "react-native";
import {useStepperStore} from "../stores/stepperStore";
import {StepIcon} from "./stepIcon";

export interface IPhoto {
    height: number,
    uri: string,
    width: number,
}

interface ICameraPreview {
    photo?: IPhoto,
    retakePhoto?: () => void
}

const stepArr = [1, 2, 3, 4]
export const PhotoStepper = ({photo, retakePhoto}: ICameraPreview) => {

    const {setCurrentStep, currentStep} = useStepperStore()

    const handleStepClick = (step: number) =>{
        setCurrentStep(step);
    }

    console.log(currentStep)

    return (
        <View style={styles.addContainer}>
            <View style={styles.stepperButtonContainer}>
                {stepArr.map((step: number) => {
                    const isCompletedStep = step < currentStep;

                    const isActiveStep = step === currentStep;

                        return (
                            <>
                                <StepIcon stepNumber={step} isActiveStep={isActiveStep} isCompletedStep={isCompletedStep} label={step.toString()} isLastStep={step === 4} isFirstStep={step ===1} />
                            </>
                        )
                    })
                }
            </View>

            <View>

            </View>
            <View>

            </View>

            <View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    stepperButton: {
        borderRadius: 50,
        width: 50,
        height: 50,
        backgroundColor: 'grey',
        alignItems: "center",
        justifyContent: 'center',
        fontSize: 18,
        color: 'white'
    },
    stepperDivider:{
        height: 10,
        width: 40,
        backgroundColor: 'gray'
    },
    stepperButtonActive: {
        backgroundColor: 'blue'
    },
   stepperButtonContainer:{
        flexDirection: "row",
       justifyContent: "center",
   },
    addContainer:{
        height: '100%',
        justifyContent: 'flex-start',
        marginTop: 50
    }
});