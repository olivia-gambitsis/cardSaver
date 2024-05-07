import {ImageBackground, TouchableOpacity, View} from "react-native";

export interface IPhoto{
    height: number,
    uri: string,
    width: number,
}

interface ICameraPreview{
    photo: IPhoto,
    retakePhoto: () => void
}

export const CameraPreview = ({photo, retakePhoto}: ICameraPreview) => {

    return (
        <View
            style={{
                backgroundColor: 'transparent',
                flex: 1,
                width: '100%',
                height: '100%'
            }}
        >
            <ImageBackground
                source={{uri: photo && photo.uri}}
                style={{
                    flex: 1
                }}
            />
            <View
                style={{
                    position: 'absolute',
                    bottom: 0,
                    flexDirection: 'row',
                    flex: 1,
                    width: '100%',
                    padding: 20,
                    justifyContent: 'space-between'
                }}
            >
                <View
                    style={{
                        alignSelf: 'center',
                        flex: 1,
                        alignItems: 'center'
                    }}
                >
                    <TouchableOpacity
                        onPress={retakePhoto}
                        style={{
                            width: 70,
                            height: 70,
                            bottom: 0,
                            borderRadius: 50,
                            backgroundColor: '#fff'
                        }}
                    />
                </View>
            </View>

        </View>
    )
}