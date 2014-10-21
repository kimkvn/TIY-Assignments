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

####3)
