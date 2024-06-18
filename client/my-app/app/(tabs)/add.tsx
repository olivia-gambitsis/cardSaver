import { Camera, CameraType } from 'expo-camera';
import {useRef, useState} from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {CameraPreview, IPhoto} from "../../components/cameraPreview";
import {IconCameraRotate} from "@tabler/icons-react-native";
import {PhotoStepper} from "../../components/photoStepper";


type CardImages = {
    front: string;
    innerLeft: string;
    innerRight: string;
    back: string;
}
export default function Add() {
    // const [type, setType] = useState(CameraType.back);
    // const [permission, requestPermission] = Camera.useCameraPermissions();
    //
    // const [previewVisible, setPreviewVisible] = useState(false)
    // const [capturedImage, setCapturedImage] = useState<IPhoto>()
    // const [isCameraReady, setIsCameraReady] = useState(false);
    // const [cardImages, setCardImages] = useState<CardImages>()

    //take front pic --> accept/reject, if (accept) take innerLeft if(reject) retake front
    //take innerLeft --> accept/reject, if (accept) take innerRight if(reject) retake innerLeft
    //take innerRight --> accept/reject, if(accept) take back if(reject) retake innerRight
    //take back --> accept/reject, if(accept) set card, if(reject) retake back.


    // const cameraRef = useRef();
    // const onCameraReady = () => {
    //     setIsCameraReady(true);
    // };
    // const takePicture = async () => {
    //     if (cameraRef.current) {
    //         const options = { quality: 0.5, base64: true, skipProcessing: true };
    //         const photo = await cameraRef.current.takePictureAsync(options);
    //         const source = photo.uri;
    //         if (source) {
    //             await cameraRef.current.pausePreview();
    //             setPreviewVisible(true);
    //             setCapturedImage(photo)
    //             setPhotoArray([...photoArray, photo])
    //             console.log("picture", source);
    //         }
    //     }
    // };
    //
    // if (!permission) {
        // Camera permissions are still loading
    //     return <View />;
    // }
    //
    // if (!permission.granted) {
        // Camera permissions are not granted yet
    //     return (
    //         <View style={styles.container}>
    //             <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
    //             <Button onPress={requestPermission} title="grant permission" />
    //         </View>
    //     );
    // }
    //
    // function toggleCameraType() {
    //     setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    // }
    //
    // const retakePicture = () => {
    //     setCapturedImage(undefined)
    //     setPreviewVisible(false)
    // }



    return (
        <View style={styles.container}>
            <PhotoStepper/>

            {/*{previewVisible && capturedImage ? (*/}
            {/*        <CameraPreview photo={capturedImage} retakePhoto={retakePicture} />*/}
            {/*    ) :*/}
            {/*(<Camera style={styles.camera} type={type} ref={cameraRef} onCameraReady={onCameraReady}>*/}
            {/*    <View style={styles.buttonContainer}>*/}
            {/*        <View*/}
            {/*            style={{*/}
            {/*                position: 'absolute',*/}
            {/*                bottom: 0,*/}
            {/*                flexDirection: 'row',*/}
            {/*                flex: 1,*/}
            {/*                width: '100%',*/}
            {/*                padding: 20,*/}
            {/*                justifyContent: 'space-between'*/}
            {/*            }}*/}
            {/*        >*/}
            {/*            <View*/}
            {/*                style={{*/}
            {/*                    alignSelf: 'center',*/}
            {/*                    flex: 1,*/}
            {/*                    alignItems: 'center'*/}
            {/*                }}*/}
            {/*            >*/}
            {/*                <TouchableOpacity*/}
            {/*                    onPress={takePicture}*/}
            {/*                    style={{*/}
            {/*                        width: 70,*/}
            {/*                        height: 70,*/}
            {/*                        bottom: 0,*/}
            {/*                        borderRadius: 50,*/}
            {/*                        backgroundColor: '#fff'*/}
            {/*                    }}*/}
            {/*                />*/}
            {/*            </View>*/}
            {/*        </View>*/}
            {/*        <TouchableOpacity style={styles.button} onPress={toggleCameraType}>*/}
            {/*            <IconCameraRotate color={'white'} size={'36px'}/>*/}
            {/*        </TouchableOpacity>*/}
            {/*    </View>*/}
            {/*</Camera>)}*/}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin: 64,
    },
    button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'flex-end',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
});
