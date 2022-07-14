<!-- markdownlint-disable MD024 MD034 MD033 -->

# Release Notes

## 2.2.2
- fix(android, build): set kotlin version, should fix #277 (thanks @mikehardy!)

## 2.2.1
- fix(android, build): remove jcenter from build repo list (#281) (thanks @maheshwarimrinal!)

## 2.2.0
- feat: react-native-macos support! (thanks @asabhaney!) 
- docs(example, android): include logos in all example buttons (thanks @mikehardy)
- chore(example): update podfile.lock with results of yarn in root (thanks @mikehardy)
- fix: default branch is now main (thanks @mikehardy)
- build(deps): bump workflow action versions to current (thanks @mikehardy)
- build(deps): yarn upgrade --latest except typedoc (thanks @mikehardy)
- docs: regenerate typedoc (thanks @mikehardy)
- docs(typedocs): forward-port to current typedocs, separate docs (thanks @mikehardy)
- chore(example, deps): use modern android versions in random values (thanks @mikehardy)
- docs: fix typo (thanks @pvinis!)
- docs(example): update example to rn68 (thanks @mikehardy)
- chore(ci): bump node in workflows to 16, JDK to temurin (thanks @mikehardy)
- build(android): remove buildToolsVersion (thanks @dulmandakh)
- build(deps): bump javascript dependencies (thanks @mikehardy)
- chore: ignore typedocs directory for npm publish (thanks @mikehardy)
- chore: update README (thanks @ehesp!)

## 2.1.6

- fix: default branch is now main (#244, thanks @mikehardy)
- docs(example, android): include logos in all example buttons (#237, thanks @mikehardy)

## 2.1.5

- fix(android): Updates to recommended way of importing context (#236, thanks @AndresPerezTesela!)

## 2.1.4

- fix(android): use function vs arrow for babel compat in AppleButton export (#234, thanks @EIrwin)

## 2.1.3

- chore: Adds rn's testID to the valid props, adds typescript exports (#233, thanks @doublethefish!)
- chore(example): allow test runs without react-native global install

## 2.1.2

- fix(android): add mavenCentral, remove jcenter before it stops (#206, thanks @maheshwarimrinal!)
- chore: bump dependencies to current stable everywhere possible (@mikehardy)
- chore: add basic quality assurance CI workflows (@mikehardy)

## 2.1.1

- fix(android, crash): call sign in with Apple service on UI thread (#196, thanks @yuri-lomashko-itechart!)

## 2.1.0

- feat(android): Nonce return and optional nonce generation (#153, thanks @dburdan!)
- docs(README): add info showing how to add pure web support (#148, thanks @A-Tokyo!)
- docs(README, logout): updated logout usage to match v2 API (#146, thanks @eraykose!)
- docs(README): add missing appleAuthAndroid import to sample code (#147, thanks @jheysoon!)

## 2.0.2

- fix(android, compile): assert webview context non-null for API30 compile (#143, thanks @dburdan!)

## 2.0.1

- fix(types): export interfaces (#140, thanks @mrousavy!)

## 2.0.0

- fix(ios): depend on React-Core directly, not React (#139, thanks @mikehardy!))
- docs(android): document kotlinVersion requirement (thanks @nastyakitsune!)

## 2.0.0-beta.1

- fix(android: add isSupported check, API19 required for android (thanks @dburdan!)

## 2.0.0-beta.0

- feat!: add android support (#136, thanks @dburdan!)
- docs(README): add info about 1000 error to troubleshouting section (#132, thanks @SnowLew!)
- docs: update troubleshooting error 1000 (#131, thanks @bell-steven!)
- docs: add comment that height style is required (#128, thanks @saintplay)
- docs: add missing installation instruction (#124, thanks @hwrdtm)

## 1.1.2

- fix(dependencies): move 'np' to devDependencies (thanks @mikehardy and @hsource!)

## 1.1.1

- fix(types): performRequest can accept state parameter (#94, thanks @skantus!)
- docs: warn getCredentialStateForUser is real device only (#97, thanks @magrinj!)
- chore: npm ignore, formatting, changelog (thanks @salakar!)
- release: add "shipit" run script to automate release (thanks @mikehardy!)

## 1.1.0

- feat: added validation to performRequest options (#59)
- feat: add ability to disable automatic nonce behaviour #52
- fix: update type definitions to fix module errors (#86), fixes #75.

## 1.0.0

- initial official release
- fix(ios): add missing import (#50, thanks @nhnam!)
- docs(README): add width+height in example button style (#55, thanks @jonstuebe!)
- chore: upgrade module dependencies (`yarn upgrade --latest`) (@mikehardy)
- chore: add typescript analyzer (`yarn analyze`) (@mikehardy)
