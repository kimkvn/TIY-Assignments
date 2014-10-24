<!-- examples of css we find -->

###First round: all methods that will affect the color of things

####1) ``background-color``
* sets the background color of an element

```html
  1) background-color: red;

  2) background-color: CD6090;

  3) background-color: green;
```

####2) ``blend-mode``
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

####3) ``border-bottom-color``
* sets the color of the bottom border of an element

####4) ``border-left-color``
* sets the color of the left border of an element

####5) ``border-color``
* sets the color for the four sides of an element's border

####6) ``border-right-color``
* sets the color for the right side border of an element

####7) ``border-top-color``
* sets the color for the top side border of an element

####8) ``color``
* sets the foreground color of an element's text content and its decorations.

####9) ``<color>``
* denotes a color in the sRGB color space. A color can be described by: a keyword, using the RGB cubic coordinate
system, or using the HSL cylindrical-coordinate

####10) ``column-rule-color``
* sets the color of the rule drawn between columns in multi-column layouts

####11) ``filter``
* provides effects like blurring or color shifting on an element's rendering before said element is
displayed. Commonly used to adjust the rendering of an image, background, or border.

####12) ``grayscale()``
* converts the input image to grayscale. Input 'amount' is a percentage which determines how much gray-ing
is done to the image.

###13) ``hue-rotate()``
* applies hue rotation to the input image. Input 'angle' ('x'deg) determines how much of the image's
hue is altered

####14) ``invert()``
* inverts the samples in the input image. Input 'amount' is a percentage and a value of 100% completely
inverts the image's colors.

####15) ``saturate()``
* saturates the input image...input 'amount' is a percentage that determines how much of the image will
be saturated. 0% is unsaturated, 100% is original, anything beyond that leads to super-saturated results

####16) ``sepia()``
* converts the input image to sepia. Input 'amount' is a percentage, 100% value returns an image that is
completely sepia.

####17) ``hsl()``
* Color values based on the Hue-saturation-lightness model. Hue is represented as an angle of the color circle.
Saturation and lightness are represented as percentages.
Ex: red = hsl(0, 100%, 50%), green = hsl(120, 100%, 50%), blue = hsl(240, 100%, 50%)

####18) ``hsla()``
* another model to defined colors, hue-saturation-lightness-alpha model. Like an extension of hsl() by adding
the alpha channel, allows to specify the opacity of a color.

####19) ``outline color``
* Sets the color of the outline of an element. It's drawn outside of the border edge and helps make the element
stand out.

####20) ``rgb()``
* a mode to define colors, 2 ways: Hexadecimal notation (#RGB, or #RRGGBB), and Functional notation ("rgb" followed
by 3 integers or 3 percentage values).


###Font/Text-affecting rules

####21) ``text-align``
* describes how text should be aligned in its parent block element. Does not affect block alignment.
Examples:
```html
 text-align: right
 text-align: center
 text-align: justify
```

####22)``text-decoration-color``
* sets the color for underlines, overlines, strike
-throughs. This is preferable to trying to combo other html elements

Examples
```html
  text-decoration-color: blue
  text-decoration-color: #90EE90
  text-decoration-color: transparent
```
####23) ``text-decoration``
* allows one to format text, using things like underline, overline, line-through, or blink.

Examples
```html
  text-decoration: underline
  text-decoration: none
  text-decoration: line-through
```
####24) ``text-shadow``
* adds shadow(s) to text. Will accept a list of shadows to be applied to the text and text-decorations

Examples:
```html
  text-shadow: red 0 -2px
  text-shadow: 1px 1px, 0 0 1em
  text-shadow: rgba(0,0,0,0.1) -1px 0
```
####25)``text-indent``
* specifies how much space should be left before the beginning of the first line of text.
Basically, how far do you want to indent a particular line of text.

Examples:
```html
  text-indent: 2mm
  text-indent: 10px
  text-indent:25%
```
####26)``font-family``
* allows you to give your site a list of fonts to use in case particular browsers don't recognize some
of the fonts you want to use because the browser war is annoying.

Examples:
```html
  font-family: serif, verdana
  font-family: Courier, Times, Georgia
  font-family: Sans-serif, cursive, Courier
```
####27)``font-size``
* specifies a size for your font

Examples:
```html
  font-size: large <!-- an absolute -->
  font-size: 35px
  font-size: 100%
```
####28)``font-style``
* allows you to use italics or oblique faces in conjunction with font-family.

Examples:
```html
  font-style: italic
  font-style: oblique
  font-style: normal
```
####29)``font-weight``
* specifies how fat your font is. That is, the weight or boldness of your font. Does not apply to all
font types.

Examples
```html
  font-weight: bolder
  font-weight: 300
  font-weight: normal
```
####30)``font-stretch``
* adjusts the font by selecting normal, condensed, or expanded face.

Examples:
```html
  font-stretch: ultra-condensed
  font-strecth: expanded
  font-stretch: extra-expanded
```

####31)``float``
* takes an element from default positioning and places it along the left or right side of its container, and text
and other inline elements will wraparound it. 

```html
  float: right
  float: left
  float: none
```
####32)``clear``
* determines whether an element can be next to a floating element, or be moved down below it (cleared)

```html
  clear: none
  clear: right
  clear: both
```

####33)``background-position``
* sets initial position relative to background layer (which is defined by background-origin) for each
defined background image. 
```html
  background-position: 0px 0px, center;
  background-position: 10mm, 10mm, right
  background-position: 5px, 2px, left
```
####34)``position``
* chooses different rules for positioning designated elements, mostly useful for scripted animation effects
```html
  position: relative
  position: absolute
  position: static
```

####35)``list-style-position``
* specifies position of the marker box in the pincipal block box
```html
  list-style-position: outisde
  list-style-position: inside
  list-style-position: inherit
```