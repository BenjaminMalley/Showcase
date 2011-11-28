Showcase is a jQuery-based slideshow for both text and image content.  It has a few features I was having trouble finding in existing jQuery slideshows:

1. Variable width
2. Variable slide count--add as many slides as you want.
3. Infinite bi-directional scrolling--when it gets to the end (or beginning) of the slide-reel, it loops back.
4. Combination of manual and auto-advancing slides.

That said, it's fairly basic at this point.  I'll probably be adding features as the need arises.  For completeness, I've included the svg and png graphics I use.

Showcase is variable width, but not variable height--it's set statically to 300px.  Modifying the height requires modifying the slide-height class in showcase.css as well as recalculating the margins for the slide buttons. 

Two variables in showcase.js control the animations: animation_time, which is the duration of the advancement animation and interval_time, which is the time that Showcase spends on each slide before advancing.