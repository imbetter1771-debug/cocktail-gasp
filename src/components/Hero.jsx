import React from 'react';
import {useGSAP} from "@gsap/react";
import {SplitText} from "gsap/all";
import gsap from "gsap";

const Hero = () => {
    useGSAP(() => {
        const heroSplit = new SplitText('.title', {type: 'chars, words'});
        const paragraphSplit = new SplitText('.subtitle', {type: 'lines'});

        heroSplit.chars.forEach((char) => char.classList.add('text-gradient'))

        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.05
        })
        gsap.from(paragraphSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.05,
            delay: .25
        })
        gsap.timeline({
            scrollTrigger: {
                trigger: "#hero",
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        }).to('.right-leaf', {y: 200, rotate: -30, x: 200, scale: 0}, 0)
            .to('.left-leaf', {y: -200, rotate: 60, x: -300, scale: 0}, 0)
    }, [])

    return (
        <section id="hero" className="noisy">
            <h1 className="title">MO-jito</h1>
            <img className="left-leaf" src="/images/hero-left-leaf.png" alt="left-leaf"/>
            <img className="right-leaf" src="/images/hero-right-leaf.png" alt="right-leaf"/>

            <div className="body">
                <div className="content">
                    <div className="space-y-5 hidden md:block">
                        <p>Classic. Cool. Goat. Crips.</p>
                        <p className="subtitle">Sip the spirit <br/> Summer</p>
                    </div>
                    <div className="view-cocktails">
                        <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda,
                            porro?</p>
                        <a href="#cocktails">View Cocktails</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;