import React, { ReactNode } from 'react'
import { StatusBar, View, Image,  StyleSheet } from 'react-native'
// import { color } from '../../config/Env'
// import { logo } from '../../assests'
import { responsiveScreenHeight } from 'react-native-responsive-dimensions'

type AuthWarperProps = {
  children: ReactNode;
};
const AuthWarper: React.FC<AuthWarperProps> = ({
  children,
}) => {
  return (
    <>
      <View style={{ backgroundColor: color.white, flex: 1, }}>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={"red"}
          translucent={false}
        />
        <View style={{ flex: 1, justifyContent: "center", }}>
          {/* <Image
            source={"logo"}
            style={{
              height: responsiveScreenHeight(12),
              width: '100%',
              resizeMode: 'contain',
            }}
          /> */}
        </View>
        <View style={ style.wrapper}>
          {children}
        </View>
      </View>

    </>
  )
}
const style = StyleSheet.create({
  wrapper: {
    flex: 2,
    backgroundColor: color.primary,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingTop: responsiveScreenHeight(5),
    paddingBottom: responsiveScreenHeight(3)
  }
})
export default AuthWarper
