

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);
gsap.set(['#object1', '#object2'], { x: 0, y: 0, scale: 1, rotation: 0, opacity: 1 });

ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 4,            // Smoothness (higher is slower)
    effects: true,          // Enable data-speed & data-lag
});
// 초기 설정
gsap.set(['#object1', '#object2'], {
    x: 0,
    y: 0,
    scale: 1,
    rotation: 0,
    opacity: 1,
    zIndex: 1
});

ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 4,
    effects: true,
});

// 기존 ScrollTrigger 모두 제거
ScrollTrigger.getAll().forEach(trigger => trigger.kill());

// ani1 - 포스터에서 움직임 시작
gsap.timeline({
    scrollTrigger: {
        trigger: ".poster-container",
        start: "top top",
        end: "bottom top",
        scrub: 2,
        markers: false
    }
})
    .to("#object1", {
        x: -300,
        y: 150,
        scale: 0.7,
        rotation: 30,
        opacity: 0.6,
        zIndex: 1
    })
    .to("#object2", {
        x: 400,
        y: 200,
        scale: 0.8,
        rotation: -20,
        opacity: 0.7,
        zIndex: 2
    }, "<");

// ani2 - info-container에서 재배치
gsap.timeline({
    scrollTrigger: {
        trigger: ".info-container",
        start: "top center",
        end: "bottom center",
        scrub: 1.5,
        markers: false
    }
})
    .to("#object1", {
        x: -400,
        y: 100,
        scale: 0.5,
        rotation: 60,
        opacity: 0.5,
        zIndex: 1
    })
    .to("#object2", {
        x: 500,
        y: -150,
        scale: 0.9,
        rotation: -45,
        opacity: 0.6,
        zIndex: 2
    }, "<");

// ani3 - section1에서 크로스 이동
gsap.timeline({
    scrollTrigger: {
        trigger: ".section1",
        start: "top center",
        end: "bottom center",
        scrub: 2,
        markers: false
    }
})
    .to("#object1", {
        x: 200,
        y: -100,
        scale: 0.8,
        rotation: 90,
        opacity: 0.7,
        zIndex: 1
    })
    .to("#object2", {
        x: -300,
        y: 250,
        scale: 1.1,
        rotation: -60,
        opacity: 0.8,
        zIndex: 2
    }, "<");

// ani4 - section2에서 반대 방향 이동
gsap.timeline({
    scrollTrigger: {
        trigger: ".section2",
        start: "top center",
        end: "bottom center",
        scrub: 1.5,
        markers: false
    }
})
    .to("#object1", {
        x: 350,
        y: 300,
        scale: 0.6,
        rotation: 120,
        opacity: 0.6,
        zIndex: 1
    })
    .to("#object2", {
        x: -450,
        y: -200,
        scale: 1.3,
        rotation: -90,
        opacity: 0.7,
        zIndex: 2
    }, "<");

// ani5 - section3에서 원형 이동 (단순화)
gsap.timeline({
    scrollTrigger: {
        trigger: ".section3",
        start: "top center",
        end: "bottom center",
        scrub: 3,
        markers: false
    }
})
    .to("#object1", {
        x: -350,
        y: -250,
        scale: 0.4,
        rotation: 180,
        opacity: 0.5,
        zIndex: 1
    })
    .to("#object2", {
        x: 400,
        y: 300,
        scale: 1.2,
        rotation: -150,
        opacity: 0.6,
        zIndex: 2
    }, "<");

// ani6 - section4에서 레이어링 효과
gsap.timeline({
    scrollTrigger: {
        trigger: ".section4",
        start: "top center",
        end: "bottom center",
        scrub: 2.5,
        markers: false
    }
})
    .to("#object1", {
        x: -200,
        y: 400,
        scale: 1.5,
        rotation: 150,
        opacity: 0.4,
        zIndex: 1
    })
    .to("#object2", {
        x: 600,
        y: -100,
        scale: 0.4,
        rotation: -120,
        opacity: 0.8,
        zIndex: 2
    }, "<");

// ani7 - popup에서 퇴장
gsap.timeline({
    scrollTrigger: {
        trigger: ".popup",
        start: "top center",
        end: "bottom bottom",
        scrub: 1,
        markers: false
    }
})
    .to("#object1", {
        x: -800,
        y: -400,
        scale: 0.1,
        rotation: 360,
        opacity: 0,
        zIndex: 1
    })
    .to("#object2", {
        x: 900,
        y: 500,
        scale: 0.1,
        rotation: -360,
        opacity: 0,
        zIndex: 2
    }, "<0.2");

console.log("GSAP 애니메이션 설정 완료!");
console.log("ScrollTrigger 개수:", ScrollTrigger.getAll().length);

setInterval(() => {
    const obj1 = document.getElementById('object1');
    const obj2 = document.getElementById('object2');
    console.log('Object1 위치:', {
        x: obj1.style.transform,
        visible: getComputedStyle(obj1).opacity,
        zIndex: getComputedStyle(obj1).zIndex
    });
}, 2000);