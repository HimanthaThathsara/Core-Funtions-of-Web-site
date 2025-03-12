let parent = document.querySelectorAll("[data-collapse");
      parent.forEach((element) => {
        let clickTarget = element.querySelector("*");
        let collapseElement = element.nextElementSibling;
        let collapseElementChildren = collapseElement.children;
        let tl = new TimelineMax({
          reversed: true,
          paused: true,
        });

        tl.from(
          collapseElement,
          1.6,
          {
            className: "+=heightZero",
            ease: Expo.easeInOut,
          },
          "open"
        );
        tl.staggerFrom(
          collapseElementChildren,
          1,
          {
            autoAlpha: 0,
            y: "40%",
            ease: Expo.easeInOut,
          },
          0.08,
          "open+=.1"
        );

        clickTarget.addEventListener("click", () => {
          tl.reversed() ? tl.play() : tl.reverse();
        });
      });