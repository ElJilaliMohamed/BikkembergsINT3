import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const init = function () {
  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: '+=550',
      pin: true,
      pinSpacing: false,
      scrub: true,
    },
  });

  gsap.fromTo(
    '.hero__antwerp',
    { filter: 'blur(100px)', backgroundColor: 'transparent' },
    {
      filter: 'blur(0px)',
      duration: 0.7,
      stagger: 0.15,
    }
  );
  gsap.fromTo('.hero__pattern', { opacity: 0 }, { opacity: 1, duration: 1, ease: 'none', delay: 1 });
  gsap.fromTo(
    '.hero__flash1, .hero__flash2, .hero__flash3, .hero__flash4, .hero__overlay',
    { opacity: 0 },
    {
      opacity: 1,
      stagger: 0.3,
      duration: 0.5,
      repeat: 1,
      yoyo: true,
      scrollTrigger: {
        trigger: '.hero',
        start: '-=100',
        end: '+=400',
        scrub: true,
      },
    }
  );
  gsap.fromTo(
    '.hero__overlay ',
    { opacity: 0 },
    {
      opacity: 0.8,
      stagger: 1,
      duration: 1.2,

      scrollTrigger: {
        trigger: '.hero',
        start: '-=100',
        end: '+=600',
        scrub: true,
      },
    }
  );
  gsap.fromTo(
    '.hero__overlay--mobile ',
    { opacity: 0 },
    {
      opacity: 0.6,
      stagger: 1,
      duration: 1.2,

      scrollTrigger: {
        trigger: '.hero',
        start: '-=100',
        end: '+=600',
        scrub: true,
      },
    }
  );
  gsap.fromTo(
    '.section__flash',
    { opacity: 0 },
    {
      opacity: 1,
      stagger: 0.03,
      duration: 0.2,
      repeat: 1,
      yoyo: true,
      scrollTrigger: {
        trigger: '.section-puntjes',
        start: 'top 80%',
        end: '+=300',
        scrub: true,
      },
    }
  );

  gsap.from('.gsap-title', {
    x: -100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    delay: 0.6,
    ease: 'power3.out',
  });
  gsap.fromTo(
    '.section__text, .section__digicam',
    { filter: 'blur(3px)', opacity: 0.2 },
    {
      filter: 'blur(0px)',
      opacity: 1,
      duration: 1.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.section-puntjes',
        start: '-=900',
        end: 'top 10%',
        scrub: true,
      },
    }
  );
  gsap.from('.gsap-runway', {
    x: 100,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.section-runways',
      start: '-=460',
      end: '+=10px',
    },
  });
  gsap.from('.gsap-jackets', {
    x: -700,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.section-runways',
      start: '-=460',
      end: '+=10px',
    },
  });
  gsap.from('.gsap-title-effect', { opacity: 0, delay: 0.3, duration: 0.6, y: 200, stagger: 0.1, scrollTrigger: { trigger: '.section-runways', start: '+=110px', end: 'bottom' } });
};

document.addEventListener('DOMContentLoaded', init);
