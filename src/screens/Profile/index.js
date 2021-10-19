import React, {useRef, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {RNCamera} from 'react-native-camera';
import styles from './styles';

const Profile = () => {
  const camera = useRef();
  const [showCamera, setShowCamera] = useState(false);
  const [newImage, setNewImage] = useState('');

  const takePicture = async () => {
    if (camera.current) {
      const options = {quality: 0.5, base64: true};
      const data = await camera.current.takePictureAsync(options);
      let extension = data.uri.split('.');
      extension = extension[extension.length - 1];
      setNewImage(`data:image/${extension};base64,${data.base64}`);
      setShowCamera(false);
    }
  };

  return (
    <>
      {showCamera ? (
        <View style={styles.container}>
          <RNCamera
            ref={camera}
            style={styles.preview}
            type={RNCamera.Constants.Type.front}
          />
          <View
            style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
            <TouchableOpacity
              onPress={() => takePicture()}
              style={styles.capture}>
              <Text style={{fontSize: 14}}> SNAP </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={styles.profileContainer}>
          {newImage === '' ? (
            <TouchableOpacity
              onPress={() => setShowCamera(true)}
              style={styles.capture}>
              <Text style={{fontSize: 14}}> Abrir Câmera </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => setShowCamera(true)}>
              <>
                <Image style={styles.avatar} source={{uri: newImage}} />
                <View style={styles.overlayContainer}>
                  <View style={styles.iconContainer}>
                    <Icon name="camera" size={20} color="#fff" />
                  </View>
                </View>
              </>
            </TouchableOpacity>
          )}
        </View>
      )}
    </>
  );
};

export default Profile;
