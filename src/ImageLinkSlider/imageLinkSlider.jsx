/*=====================================================================================================//
 * Image Link Slider
 * by Kadence Neuens
 * 
 * Check my repo at https://github.com/KadenceNeuens/image-link-slider for more information and updates
 *====================================================================================================*/

import React from 'react';
import './slider.css';
import { useRef, useState, useEffect } from 'react';
import { useSpring, useTrail, animated } from 'react-spring';
import { useDrag } from 'react-use-gesture';

import arrow from './arrow.png'

import SliderItem from './sliderItem';

export default function ImageLinkSlider(props)
{
    // Get data from array file
    const sliderItems = props.data;

    // Grab props
    var sliderHeight = props.height;
    var sliderWidth = props.width;

    // Slider spring configs
    var springConfig = {
        tension: 100,
        friction: 15
    }

    // Default values
    if (sliderHeight === undefined) sliderHeight = '20rem';
    if (sliderWidth === undefined) sliderWidth = '30rem';

    const noArrow = props.arrow === "none" ? true : false
    const noAnim = props.easeIn === "none" ? true : false

    // Ref for image component width
    const componentWidth = useRef(0);
    const parentWidth = useRef(0);

    // get width of all image items mapped
    const getItemsWidth = () => {return (componentWidth.current.clientWidth * sliderItems.length)};

    // Calculate bounds for Carousel
    const [leftBound, setLeftBound] = useState((
        (sliderItems.length * componentWidth.current.clientWidth) - parentWidth.current.clientWidth) * -1);
    const updateLeftBound = () => { setLeftBound((
        (sliderItems.length * componentWidth.current.clientWidth) - parentWidth.current.clientWidth) * -1)};

    // Ease in animation on mount
    const easeIn = useTrail(sliderItems.length, {
        from: {
            transform: noAnim ? 'translate3d(0,0,0)' : 'translate3d(100vw,0,0)'
        },
        to: {
            transform: 'translate3d(0,0,0)'
        }
    });

    // Animation for drag
    const [ { x }, setLocation] = useSpring(() => ({ x: 0, config: springConfig }));

    // bind dragging actions
    const bindDraggable = useDrag(({ offset: [x] }) =>
    {
        console.log(parentWidth.current.clientWidth)
        // Only allow dragging if items exceed window width
        if ( getItemsWidth() > parentWidth.current.clientWidth )
        {
            setLocation({x})
            updateLeftBound()
            updateArrows();
        }
    },
    {
        bounds: {right: 0, left: leftBound},
        rubberband: true
    }
    );

    // Arrow indicator states
    const [leftArrowToggle, setLeftArrowToggle] = useState( x.value < 0 );
    const [rightArrowToggle, setRightArrowToggle] = useState( x.value > leftBound);
    const updateArrows = () =>
    {
        setLeftArrowToggle(x.value < 0);
        setRightArrowToggle(x.value > leftBound);
    }

    // Arrow animation springs
    const leftArrowSpring = useSpring({opacity: leftArrowToggle ? 0.8 : 0});
    const rightArrowSpring = useSpring({ opacity: rightArrowToggle ? 0.8 : 0 })

    // Update left bound and arrows on mount
    useEffect(() => {
        updateLeftBound()
        updateArrows()
    })

    return (
        <div ref={parentWidth} className="ArrowWrapper" style={{height: sliderHeight}}>
            <animated.div className="Nav-Image-Container" {...bindDraggable()}
            style={{
                transform: x.interpolate((x) => `translateX(${x}px)`)
            }}>
                {
                    easeIn.map((item, index) =>
                        (
                            <animated.div ref={componentWidth} className="Nav-Image-Item-Container" key={index} style={item}>
                                <SliderItem name={sliderItems[index].title} src={sliderItems[index].image} route={sliderItems[index].link}
                                style={{width: sliderWidth}}/>
                            </animated.div>
                        )
                    )
                }
            </animated.div>
            { noArrow ? null :
            <>
            <div className="LeftArrow"><animated.div style={leftArrowSpring}><img src={arrow}/></animated.div></div>
            <div className="RightArrow"><animated.div style={rightArrowSpring}><img src={arrow}/></animated.div></div>
            </>
            }
        </div>
    )
}