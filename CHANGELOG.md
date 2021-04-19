<!-- markdownlint-disable MD024 MD034 MD033 -->

# Release Notes

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
