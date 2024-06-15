// ==UserScript==
// @name         Ultra Fast Ad Skipper from CHZZK
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  광고를 빠르게 넘기기 위해 비디오 재생 속도를 최대한 빠르게 설정합니다
// @author       krkarma777
// @match        https://chzzk.naver.com/*
// @icon         https://ssl.pstatic.net/static/nng/glive/icon/favicon.png
// @updateURL    https://raw.githubusercontent.com/krkarma777/UltraFastAdSkipperFromCHZZK/main/UltraFastAdSkipperFromCHZZK.user.js
// @downloadURL  https://raw.githubusercontent.com/krkarma777/UltraFastAdSkipperFromCHZZK/main/UltraFastAdSkipperFromCHZZK.user.js
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 광고 비디오를 식별하기 위한 URL 패턴 목록
    const adVideoPatterns = [
        "*://*tvetamovie.pstatic.net/*",
        "*://*glad-vod.pstatic.net/*"
    ];

    // 와일드카드 패턴을 정규 표현식으로 변환
    const adVideoUrls = adVideoPatterns.map(pattern => new RegExp(pattern.replace(/\*/g, '.*').replace(/\./g, '\\.')));

    // URL이 광고 비디오인지 확인
    function isAdVideo(url) {
        return adVideoUrls.some(regex => regex.test(url));
    }

    // 비디오를 빠르게 진행하기 위해 currentTime을 증가시키는 함수
    function fastForwardVideo(video) {
        if (video && !video.dataset.adSkipperProcessed) {
            video.dataset.adSkipperProcessed = true;
            console.log(`비디오를 빠르게 진행 중: ${video.src}`);
            const interval = setInterval(() => {
                if (video.currentTime < video.duration) {
                    video.currentTime += 10.0; // 이 값을 증가시켜 더 빨리 넘기기
                } else {
                    clearInterval(interval);
                }
            }, 10); // currentTime 업데이트 빈도를 증가시켜 더 빨리 넘기기
        }
    }

    // 비디오 요소에 이벤트 리스너를 추가하는 함수
    function addVideoEventListeners(video) {
        video.addEventListener('loadedmetadata', () => {
            if (isAdVideo(video.src)) {
                fastForwardVideo(video);
            }
        });
    }

    // MutationObserver를 설정하여 새로운 비디오 요소를 감지하고 처리
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === 1 && node.tagName === 'VIDEO') {
                    addVideoEventListeners(node);
                } else if (node.nodeType === 1) {
                    node.querySelectorAll('video').forEach(addVideoEventListeners);
                }
            });
        });
    });

    observer.observe(document.documentElement, { childList: true, subtree: true });

    // 페이지 로드 시 비디오 요소 초기 스캔
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('video').forEach(addVideoEventListeners);
    });

    console.log("Ultra Fast Ad Skipper 스크립트가 실행 중입니다.");
})();
