# Enumeration: AppleButtonType

The Apple Button type to render, this controls the button text.

## Table of contents

### Enumeration members

- [CONTINUE](AppleButtonType.md#continue)
- [DEFAULT](AppleButtonType.md#default)
- [SIGN\_IN](AppleButtonType.md#sign_in)
- [SIGN\_UP](AppleButtonType.md#sign_up)

## Enumeration members

### CONTINUE

• **CONTINUE** = `"Continue"`

Renders the button with 'Continue with Apple'.

#### Defined in

[index.d.ts:41](https://github.com/invertase/react-native-apple-authentication/blob/86e8b17/lib/index.d.ts#L41)

___

### DEFAULT

• **DEFAULT** = `"SignIn"`

The default button, the same as `SIGN_IN`.

#### Defined in

[index.d.ts:31](https://github.com/invertase/react-native-apple-authentication/blob/86e8b17/lib/index.d.ts#L31)

___

### SIGN\_IN

• **SIGN\_IN** = `"SignIn"`

Renders the button with 'Sign in with Apple'.

#### Defined in

[index.d.ts:36](https://github.com/invertase/react-native-apple-authentication/blob/86e8b17/lib/index.d.ts#L36)

___

### SIGN\_UP

• **SIGN\_UP** = `"SignUp"`

Renders the button with 'Sign up with Apple'.

> Note: This only works on iOS 13.2+. To check if the current device supports this, use the
provided `isSignUpButtonSupported` flag from the AppleAuth module.

#### Defined in

[index.d.ts:48](https://github.com/invertase/react-native-apple-authentication/blob/86e8b17/lib/index.d.ts#L48)
