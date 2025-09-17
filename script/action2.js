gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 4,            // Smoothness (higher is slower)
    effects: true,          // Enable data-speed & data-lag
});

gsap.registerPlugin(SplitText);

// gsap.set("h1", { opacity: 1 });

let split = SplitText.create(".title-group", { type: "chars" });
//now animate each character into place from 20px below, fading in:
gsap.from(split.chars, {
    y: 20,
    autoAlpha: 0,
    rotate:10,
    letterSpacing:'-0.2em',
    stagger: 0.05
});


gsap.timeline({
    scrollTrigger: {
        trigger: ".poster-container",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
    }).to("#object1", 
        {x:500, yPercent:80, scale:0.6, rotate:20},'aa')
        .to("#object2", 
        {x:500, yPercent:80, scale:0.6, rotate:20},'aa');

gsap.timeline({
    scrollTrigger: {
        trigger: ".info-container",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
    }).to("#object1", 
        {x:300, yPercent:170, scale:0.8, rotate:20},'dd'
    ).to("#object2", 
        {x:500, yPercent:170, scale:0.8, rotate:20},'dd'
    );;

gsap.timeline({
    scrollTrigger: {
        trigger: ".section1",
        start: "top top",
        end: "bottom top",
        scrub: true,
        // pin:true
    }
    }).to("#object1", 
        {x:0, yPercent:280, scale:0.6, rotate:60},'dd'
    ).to("#object2", 
        {x:0, yPercent:280, scale:0.6, rotate:60},'dd'
    );;

gsap.timeline({
    scrollTrigger: {
        trigger: ".section2",
        start: "top top",
        end: "100% top",
        scrub: true,
        // pin:true
    }
    }).to("#object1", 
        {x:200, yPercent:370, scale:0.6, rotate:60},'dd'
    ).to("#object2", 
        {x:200, yPercent:330, scale:0.6, rotate:60},'dd'
    );;
    
gsap.timeline({
    scrollTrigger: {
        trigger: ".section3",
        start: "top top",
        end: "100% top",
        scrub: true,
        // pin:true
    }
    }).to("#object1", 
        {x:-50, yPercent:465, scale:0.4, rotate:40},'dd'
    ).to("#object2", 
        {x:-600, yPercent:440, scale:0.4, rotate:40},'dd'
    );;





//팝업
const popup = gsap.timeline();
        popup.from(".popup li", {
            y: 100,              
            opacity: 0,          
            stagger: 0.2,        
            duration: 1,      
        })

        ScrollTrigger.create({
            animation: popup,
            trigger: ".popup",
            start: "top top",
            end: "100% top",  
            scrub: true,
            pin: true, 
            anticipatePin: 1,
            toggleActions: "play none none reset", 
            // markers: true
        });

//배너
const banner = gsap.timeline();
        banner.from(".banner h2", {
            top: 100,              
            position:'absolute'    
        })

        ScrollTrigger.create({
            animation: banner,
            trigger: ".banner",
            start: "top top",
            end: "70% top",  
            scrub: true,
            pin: ".banner h2",      // h2를 스크롤 동안 고정
            // anticipatePin: 1,
            markers: true
        });
        ScrollTrigger.create({
            animation: banner,
            trigger: ".banner",
            start: "top top",
            end: "150% bottom",  
            scrub: true,
            pin: ".view",      // h2를 스크롤 동안 고정
            // anticipatePin: 1,
            markers: true
        });
        gsap.utils.toArray(".banner .content ul li img").forEach(function(img) {
            ScrollTrigger.create({
              trigger: img,
              start: "top bottom",   // 이미지가 화면에 들어오기 시작할 때
              end: "bottom top",     // 이미지가 화면에서 사라질 때까지
              onUpdate: (self) => {
                // 이미지와 .view 박스의 위치 계산
                const view = document.querySelector(".banner .view");
                const viewRect = view.getBoundingClientRect();
                const imgRect = img.getBoundingClientRect();
          
                const isInside =
                  imgRect.top < viewRect.bottom &&   // 이미지 상단이 view 하단보다 위에 있고
                  imgRect.bottom > viewRect.top;     // 이미지 하단이 view 상단보다 아래에 있을 때
          
                if (isInside) {
                  img.classList.add("active");   // 칼라
                } else {
                  img.classList.remove("active"); // 다시 흑백
                }
              }
            });
          });
          
          
        // let panels = gsap.utils.toArray(".banner li");
        // let tops = panels.map(panel => ScrollTrigger.create({trigger: panel, start: "top top"}));

        // panels.forEach((panel, i) => {
        //     ScrollTrigger.create({
        //         trigger: panel,
        //         start: () => panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom",
        //         pin: true, 
        //         pinSpacing: false 
        //     });
        // });

        // ScrollTrigger.create({
        //     snap: {
        //         snapTo: (progress, self) => {
        //             let panelStarts = tops.map(st => st.start), 
        //             snapScroll = gsap.utils.snap(panelStarts, self.scroll()); 
        //             return gsap.utils.normalize(0, ScrollTrigger.maxScroll(window), snapScroll); 
        //         },
        //         duration: 0.5
        //     }
        // });


        