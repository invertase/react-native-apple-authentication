[**@invertase/react-native-apple-authentication**](../README.md)

***

# Enumeration: AppleRealUserStatus

Defined in: [index.d.ts:192](https://github.com/invertase/react-native-apple-authentication/blob/3c27d80dde31265aa6877202b45eedba49452e96/lib/index.d.ts#L192)

## Enumeration Members

### LIKELY\_REAL

> **LIKELY\_REAL**: `2`

Defined in: [index.d.ts:209](https://github.com/invertase/react-native-apple-authentication/blob/3c27d80dde31265aa6877202b45eedba49452e96/lib/index.d.ts#L209)

A hint that there's high confidence that the user is real.

***

### UNKNOWN

> **UNKNOWN**: `1`

Defined in: [index.d.ts:204](https://github.com/invertase/react-native-apple-authentication/blob/3c27d80dde31265aa6877202b45eedba49452e96/lib/index.d.ts#L204)

Could not determine the value.

New users in the ecosystem will get this value as well, so you should not blacklist but
instead treat these users as any new user through standard email sign up flows

***

### UNSUPPORTED

> **UNSUPPORTED**: `0`

Defined in: [index.d.ts:196](https://github.com/invertase/react-native-apple-authentication/blob/3c27d80dde31265aa6877202b45eedba49452e96/lib/index.d.ts#L196)

Not supported on current platform, ignore the value.
