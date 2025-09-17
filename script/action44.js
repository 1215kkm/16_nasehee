

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 4,            // Smoothness (higher is slower)
    effects: true,          // Enable data-speed & data-lag
});




// ani1 - 포스터 섹션에서 오브젝트들이 역동적으로 분산
const ani1 = gsap.timeline();
ani1.to("#object1", {
    y: 300,
    x: 600,
    scale: 0.6,
    rotation: 45,
    opacity: 0.8
})
ani1.to("#object2", {
    y: -150,
    x: -400,
    scale: 0.7,
    rotation: -30,
    opacity: 0.9
}, "<")

ScrollTrigger.create({
    animation: ani1,
    trigger: ".poster-container",
    start: "top top",
    end: "bottom top",
    scrub: 2,
    markers: false
});

// ani2 - info-container로 넘어가면서 오브젝트들이 새로운 위치로 재배치
const ani2 = gsap.timeline();
ani2.to("#object1", {
    y: 500,
    x: -300,
    scale: 0.4,
    rotation: 90,
    opacity: 0.6
})
ani2.to("#object2", {
    y: -200,
    x: 800,
    scale: 1.1,
    rotation: -60,
    opacity: 0.7
}, "<")

ScrollTrigger.create({
    animation: ani2,
    trigger: ".info-container",
    start: "top center",
    end: "bottom center",
    scrub: 1.5,
    markers: false
});

// ani3 - section1에서 오브젝트들이 텍스트 뒤로 숨었다가 나타나는 효과
const ani3 = gsap.timeline();
ani3.to("#object1", { x: -800, y: 200, scale: 0.8, rotation: 45, zIndex: -1 })
ani3.to("#object2", { x: 600, y: -150, scale: 1.2, rotation: -30, opacity: 0.7 }, "<")

ScrollTrigger.create({
    animation: ani3,
    trigger: ".section1",
    start: "top center",
    end: "bottom center",
    scrub: 2,
    markers: false
});

// ani4 - section2에서 오브젝트들이 반대 방향으로 크로스 이동
const ani4 = gsap.timeline();
ani4.to("#object1", { x: 400, y: -300, scale: 0.6, rotation: -60 })
ani4.to("#object2", { x: -500, y: 250, scale: 1.5, rotation: 90, opacity: 0.5 }, "<")

ScrollTrigger.create({
    animation: ani4,
    trigger: ".section2",
    start: "top center",
    end: "bottom center",
    scrub: 1.5,
    markers: false
});

// ani5 - section3에서 오브젝트들이 시계/반시계 원형 궤도 이동
const ani5 = gsap.timeline();
ani5.to("#object1", {
    motionPath: { path: "M0,0 Q-200,-200 -400,0 Q-200,200 0,0", autoRotate: true },
    scale: 0.4,
    opacity: 0.8
})
ani5.to("#object2", {
    motionPath: { path: "M0,0 Q200,200 400,0 Q200,-200 0,0", autoRotate: true },
    scale: 1.3,
    opacity: 0.6
}, "<")

ScrollTrigger.create({
    animation: ani5,
    trigger: ".section3",
    start: "top center",
    end: "bottom center",
    scrub: 3,
    markers: false
});

// ani6 - section4에서 오브젝트들이 깊이감 있게 레이어링
const ani6 = gsap.timeline();
ani6.to("#object1", { x: -300, y: 400, scale: 2, rotation: 120, zIndex: 10, opacity: 0.3 })
ani6.to("#object2", { x: 700, y: -100, scale: 0.3, rotation: -90, zIndex: -5, opacity: 0.9 }, "<")

ScrollTrigger.create({
    animation: ani6,
    trigger: ".section4",
    start: "top center",
    end: "bottom center",
    scrub: 2.5,
    markers: false
});

// ani7 - popup/banner 섹션에서 오브젝트들이 화면 밖으로 자연스럽게 퇴장
const ani7 = gsap.timeline();
ani7.to("#object1", { x: -1000, y: -500, scale: 0.1, rotation: 360, opacity: 0 })
ani7.to("#object2", { x: 1200, y: 600, scale: 0.1, rotation: -360, opacity: 0 }, "<0.2")

ScrollTrigger.create({
    animation: ani7,
    trigger: ".popup",
    start: "top center",
    end: "bottom bottom",
    scrub: 1,
    markers: false
});