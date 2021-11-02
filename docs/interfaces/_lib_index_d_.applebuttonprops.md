**[@invertase/react-native-apple-authentication](../README.md)**

# Interface: AppleButtonProps

The available props for the AppleButton view component.

## Hierarchy

* **AppleButtonProps**

## Index

### Properties

* [buttonStyle](_lib_index_d_.applebuttonprops.md#buttonstyle)
* [buttonType](_lib_index_d_.applebuttonprops.md#buttontype)
* [cornerRadius](_lib_index_d_.applebuttonprops.md#cornerradius)
* [leftView](_lib_index_d_.applebuttonprops.md#leftview)
* [onPress](_lib_index_d_.applebuttonprops.md#onpress)
* [style](_lib_index_d_.applebuttonprops.md#style)
* [testID](_lib_index_d_.applebuttonprops.md#testid)
* [textStyle](_lib_index_d_.applebuttonprops.md#textstyle)

## Properties

### buttonStyle

• `Optional` **buttonStyle**: [AppleButtonStyle](../enums/_lib_index_d_.applebuttonstyle.md)

*Defined in [lib/index.d.ts:83](https://github.com/invertase/react-native-apple-authentication/blob/91271b4/lib/index.d.ts#L83)*

See @{AppleButtonStyle}

___

### buttonType

• `Optional` **buttonType**: [AppleButtonType](../enums/_lib_index_d_.applebuttontype.md)

*Defined in [lib/index.d.ts:88](https://github.com/invertase/react-native-apple-authentication/blob/91271b4/lib/index.d.ts#L88)*

See @{AppleButtonType}

___

### cornerRadius

• `Optional` **cornerRadius**: undefined \| number

*Defined in [lib/index.d.ts:93](https://github.com/invertase/react-native-apple-authentication/blob/91271b4/lib/index.d.ts#L93)*

Corner radius of the button.

___

### leftView

• `Optional` **leftView**: React.ReactNode

*Defined in [lib/index.d.ts:113](https://github.com/invertase/react-native-apple-authentication/blob/91271b4/lib/index.d.ts#L113)*

Android-only. View on the left that can be used for an Apple logo.

___

### onPress

•  **onPress**: (event: GestureResponderEvent) => void

*Defined in [lib/index.d.ts:115](https://github.com/invertase/react-native-apple-authentication/blob/91271b4/lib/index.d.ts#L115)*

___

### style

• `Optional` **style**: StyleProp\<ViewStyle>

*Defined in [lib/index.d.ts:98](https://github.com/invertase/react-native-apple-authentication/blob/91271b4/lib/index.d.ts#L98)*

Styling for outside `TouchableOpacity`

___

### testID

• `Optional` **testID**: undefined \| string

*Defined in [lib/index.d.ts:103](https://github.com/invertase/react-native-apple-authentication/blob/91271b4/lib/index.d.ts#L103)*

Can be used in mock testing frameworks to inject / look up by id.

___

### textStyle

• `Optional` **textStyle**: StyleProp\<TextStyle>

*Defined in [lib/index.d.ts:108](https://github.com/invertase/react-native-apple-authentication/blob/91271b4/lib/index.d.ts#L108)*

Android-only. Styling for button text.
