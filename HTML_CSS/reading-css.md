<!-- examples of css we find -->

###First round: all methods that will affect the color of things

####1) background-color
* sets the background color of an element

####2) blend-mode
* a catalog of different methods that will affect how two layers mix together

They include:
* *normal* - no blending will happen, whichever layer is on top will be the default color
* *multiply* - the blended color will be the multiplication of the front and background colors. Resulting
color will always be as dark as the original ones
* *screen* - the blended color simulates the result of both colors being projected at the same time. Result
is always as light as the original ones
* *overlay* - acts as multiply or screen, but the background color takes precedence
* *darken* - selects, for each pixel, the darkest color of the front image or backdrop
* *lighten* - selects, for each pixel, the lightest color of the front image or backdrop
* *color-dodge* - lightens the backdrop according to the value of the front color. Brighter =
bigger effect on the backdrop.
* *color-burn* - darkens the backdrop according the value of the front color. Darker = bigger
effect on the backdrop
* *hard-light* - acts as multiply or screen, depending on the color of the front. Produces an effect similar to
shining a harsh spotlight on the backdrop.
* *soft-light* -  similar to hard-light and will darken or lighten, depending on the front color. Has an effect
like shining a diffused spotlight on the backdrop.
* *difference* - subtracts the darker color to the lighter one.
* *exclusion* - similar to difference, but produces smaller contrast.
* *hue* - keeps the hue of the foreground while using saturation and luminosity of the background
* *saturation* - keeps the saturation of the front color while using hue and luminosity of the background
* *color* - keeps the saturation and hue of the front color while using the luminosity of the background
* *luminosity* - keeps the luminosity of the front color while using the saturation and hue of the background

####3) border-bottom-color
* sets the color of the bottom border of an element

####4) border-left-color
* sets the color of the left border of an element

####5) border-color
* sets the color for the four sides of an element's border

####6) border-right-color
* sets the color for the right side border of an element

####7) border-top-color
* sets the color for the top side border of an element

####8) color
* sets the foreground color of an element's text content and its decorations.

####9) <color>
* denotes a color in the sRGB color space. A color can be described by: a keyword, using the RGB cubic coordinate
system, or using the HSL cylindrical-coordinate

####10) column-rule-color
* sets the color of the rule drawn between columns in multi-column layouts

####11) filter
* provides effects like blurring or color shifting on an element's rendering before said element is
displayed. Commonly used to adjust the rendering of an image, background, or border.

####12) grayscale()
* converts the input image to grayscale. Input 'amount' is a percentage which determines how much gray-ing
is done to the image.

###13) hue-rotate()
* applies hue rotation to the input image. Input 'angle' ('x'deg) determines how much of the image's
hue is altered

####14) invert()
* inverts the samples in the input image. Input 'amount' is a percentage and a value of 100% completely
inverts the image's colors.

####15) saturate()
* saturates the input image...input 'amount' is a percentage that determines how much of the image will
be saturated. 0% is unsaturated, 100% is original, anything beyond that leads to super-saturated results

####16) sepia()
* converts the input image to sepia. Input 'amount' is a percentage, 100% value returns an image that is
completely sepia.
