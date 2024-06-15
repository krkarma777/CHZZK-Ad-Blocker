# CHZZK-Ad-Blocker

이 스크립트는 chzzk.naver.com에서 광고 비디오를 빠르게 건너뛰기 위해 비디오 재생 속도를 최대한 빠르게 설정합니다.

## Installation

1. **Tampermonkey 설치**: 먼저 Tampermonkey 브라우저 확장 프로그램을 설치해야 합니다. 아래 링크에서 각 브라우저에 맞는 Tampermonkey를 설치할 수 있습니다:
   - [Chrome용 Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
   - [Firefox용 Tampermonkey](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
   - [Edge용 Tampermonkey](https://www.microsoft.com/store/productId/9NBLGGH5162S)
   - [Opera/OperaGX용 Tampermonkey](https://addons.opera.com/en/extensions/details/tampermonkey-beta/)

2. **스크립트 설치**: [여기](https://github.com/krkarma777/UltraFastAdSkipperFromCHZZK/raw/main/Ultra-Fast-Ad-Skipper-From-CHZZK.user.js)를 클릭하고 "설치" 버튼을 누릅니다.

3. **스크립트 활성화**: Tampermonkey 대시보드에서 스크립트 이름 옆에 있는 스위치를 클릭하여 스크립트를 활성화합니다.

## Features

1. **광고 비디오 식별**: 스크립트는 URL 패턴 목록을 사용하여 광고 비디오를 식별합니다.
2. **비디오 빨리 감기**: 비디오 요소의 `currentTime` 속성을 증가시켜 광고를 빠르게 건너뜁니다.
3. **변경 사항 감지**: 스크립트는 `MutationObserver`를 사용하여 동적으로 추가된 비디오 요소를 감지하고 처리합니다.

