# Interface: AppleButtonProps

The available props for the AppleButton view component.

## Table of contents

### Properties

- [buttonStyle](AppleButtonProps.md#buttonstyle)
- [buttonType](AppleButtonProps.md#buttontype)
- [cornerRadius](AppleButtonProps.md#cornerradius)
- [leftView](AppleButtonProps.md#leftview)
- [style](AppleButtonProps.md#style)
- [testID](AppleButtonProps.md#testid)
- [textStyle](AppleButtonProps.md#textstyle)

### Methods

- [onPress](AppleButtonProps.md#onpress)

## Properties

### buttonStyle

• `Optional` **buttonStyle**: [`AppleButtonStyle`](../enums/AppleButtonStyle.md)

See @{AppleButtonStyle}

#### Defined in

[index.d.ts:83](https://github.com/invertase/react-native-apple-authentication/blob/be79317/lib/index.d.ts#L83)

___

### buttonType

• `Optional` **buttonType**: [`AppleButtonType`](../enums/AppleButtonType.md)

See @{AppleButtonType}

#### Defined in

[index.d.ts:88](https://github.com/invertase/react-native-apple-authentication/blob/be79317/lib/index.d.ts#L88)

___

### cornerRadius

• `Optional` **cornerRadius**: `number`

Corner radius of the button.

#### Defined in

[index.d.ts:93](https://github.com/invertase/react-native-apple-authentication/blob/be79317/lib/index.d.ts#L93)

___

### leftView

• `Optional` **leftView**: `ReactNode`

Android-only. View on the left that can be used for an Apple logo.

#### Defined in

[index.d.ts:113](https://github.com/invertase/react-native-apple-authentication/blob/be79317/lib/index.d.ts#L113)

___

### style

• `Optional` **style**: `StyleProp`<`ViewStyle`\>

Styling for outside `TouchableOpacity`

#### Defined in

[index.d.ts:98](https://github.com/invertase/react-native-apple-authentication/blob/be79317/lib/index.d.ts#L98)

___

### testID

• `Optional` **testID**: `string`

Can be used in mock testing frameworks to inject / look up by id.

#### Defined in

[index.d.ts:103](https://github.com/invertase/react-native-apple-authentication/blob/be79317/lib/index.d.ts#L103)

___

### textStyle

• `Optional` **textStyle**: `StyleProp`<`TextStyle`\>

Android-only. Styling for button text.

#### Defined in

[index.d.ts:108](https://github.com/invertase/react-native-apple-authentication/blob/be79317/lib/index.d.ts#L108)

## Methods

### onPress

▸ **onPress**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `GestureResponderEvent` |

#### Returns

`void`

#### Defined in

[index.d.ts:115](https://github.com/invertase/react-native-apple-authentication/blob/be79317/lib/index.d.ts#L115)
