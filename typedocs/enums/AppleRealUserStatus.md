# Enumeration: AppleRealUserStatus

## Table of contents

### Enumeration members

- [LIKELY\_REAL](AppleRealUserStatus.md#likely_real)
- [UNKNOWN](AppleRealUserStatus.md#unknown)
- [UNSUPPORTED](AppleRealUserStatus.md#unsupported)

## Enumeration members

### LIKELY\_REAL

• **LIKELY\_REAL** = `2`

A hint that there's high confidence that the user is real.

#### Defined in

[index.d.ts:204](https://github.com/invertase/react-native-apple-authentication/blob/be79317/lib/index.d.ts#L204)

___

### UNKNOWN

• **UNKNOWN** = `1`

Could not determine the value.

New users in the ecosystem will get this value as well, so you should not blacklist but
instead treat these users as any new user through standard email sign up flows

#### Defined in

[index.d.ts:199](https://github.com/invertase/react-native-apple-authentication/blob/be79317/lib/index.d.ts#L199)

___

### UNSUPPORTED

• **UNSUPPORTED** = `0`

Not supported on current platform, ignore the value.

#### Defined in

[index.d.ts:191](https://github.com/invertase/react-native-apple-authentication/blob/be79317/lib/index.d.ts#L191)
