1
```javascript
    var noURL = (!sm2.url);
```
* Variable: "noUrl"
* Value: !sm2.url

2
```javascript
if (!window || !window.document) {
  throw new Error('SoundManager requires a browser with window and document objects.');
}
```
* string: "SoundManager requires a browser with window and document objects." Looks like part of an error message.

3
```javascript
this.setupOptions = {
    'url': (smURL || null),
    'flashVersion': 8,
    'debugMode': true,
    'debugFlash': false,
    'useConsole': true,
    'consoleOnly': true,
    'waitForWindowLoad': false,
    'bgColor': '#ffffff',
    'useHighPerformance': false,
    'flashPollingInterval': null,
    'html5PollingInterval': null,
    'flashLoadTimeout': 1000,
    'wmode': null,
    'allowScriptAccess': 'always',
    'useFlashBlock': false,
    'useHTML5Audio': true,
    'html5Test': /^(probably|maybe)$/i,
    'preferFlash': false,
    'noSWFCache': false,
    'idPrefix': 'sound'
  };
  ```
  * The text in red appears to be a series of True/False conditions. A bunch of booleans.

4
```javascript
this.defaultOptions = {
    'autoLoad': false,
    'autoPlay': false,
    'from': null,
    'loops': 1,
    'onid3': null,
    'onload': null,
    'whileloading': null,
    'onplay': null,
    'onpause': null,
    'onresume': null,
    'whileplaying': null,
    'onposition': null,
    'onstop': null,
    'onfailure': null,
    'onfinish': null,
    'multiShot': true,
    'multiShotEvents': false,
    'position': null,
    'pan': 0,
    'stream': true,
    'to': null,
    'type': null,
    'usePolicyFile': false,
    'volume': 100
  };
  ```
  * This block also has a number of booleans, but there are also numbers present: 0, 1, and 100 (should be highlighted in green. My guess is this is part of the tracking interface for the media player.)

5
```javascript
    for (i = 0; i < sm2.soundIDs.length; i++) {
```
* A couple of operators present in this line. "i=0", which sets value. i++ tells the code to increase the value of i.

6
```javascript
      for (i=j-1; i >= 0; i--) {
```
* More operators/equations
* i=j-1
* i-- (-- is a decrement, whatever value i is, will decrease)

7
```javascript
          s.durationEstimate = parseInt((s.bytesTotal / s.bytesLoaded) * s.duration, 10)
```
* A nice lookin' equation here, but with variables instead of straight numbers.
* Division: (s.bytesTotal / s.bytesLoaded)
* Multiplication (s.bytesTotal / s.bytesLoaded)* s.duration

8
```javascript
      type = 'application/x-shockwave-flash';
```
* A String. Or is it a division equation? My impulse is to call it a string as evidence'd by "application/x-shockwave-flash" is within single quote marks '...'

9
```javascript
    swfTitle = 'JS/Flash audio component (SoundManager 2)'
```
* A string: "JS/Flash audio component (SoundManager 2)"

10
```javascript
var soundManager = null;
```
* Variable: "soundManager" and it's in Camel Case
* Value: null, this variable "soundManager" is purposely not given value

11
```javascript
for (i = 0; i < sm2.soundIDs.length; i++) {
      if (sm2.soundIDs[i] === sID) {
        sm2.soundIDs.splice(i, 1);
        break;
      }
    }
```
* For loop. It refers to an array (sm2.soundIDs[]) and as long as the function satisfies
the terms in the loop, it splices the array. Then issues a break command, whatever that is.

12
```javascript
if (fV === 8) {
            flash._load(s.id, instanceOptions.url, instanceOptions.stream, instanceOptions.autoPlay, instanceOptions.usePolicyFile);
          } else {
            flash._load(s.id, instanceOptions.url, !!(instanceOptions.stream), !!(instanceOptions.autoPlay), instanceOptions.loops||1, !!(instanceOptions.autoLoad), instanceOptions.usePolicyFile);
          }
        }
```
* An if else conditional. Provided fv is strictly equal to 8, the line on 130 will run. If fv is not
strictly equal to eight, line 132 will run.

13
```javascript
if (!s.getAutoPlay()) {
          sm2._wD(fN +' Netstream not connected yet - setting autoPlay');
          s.setAutoPlay(true);
        }
```
* Another if-conditional. This time, its prompted to display/use a string (looks to be a loading/waiting
  message) provided...the function in parantheses next to if is true.

14
```javascript
if (s.paused && s.position >= 0 && (!s._iO.serverURL || s.position > 0)) {

        // https://gist.github.com/37b17df75cc4d7a90bf6
        sm2._wD(fN + 'Resuming from paused state', 1);
        s.resume();
      }
```
* Another if conditional. This one is interesting because it sets up several ways to satisfy the conditional
by using a combo of &&s and ||. s.paused and s.position both must satisfy their conditions, and then the
thir condition is satisfied provided either !s_io.serverURL is true OR s.position >0. Comboing comparative
operators in conditionals, that's pretty useful.

15
```javascript
s.eqData = [];

      s.eqData.left = [];
      s.eqData.right = [];
```
* A few arrays being declared, waiting to be filled with...elements. Array stuff. Yeah.

16)
```javascript
if (!iO || (!iO.type && !iO.url && !iO.serverURL)) {

      // nothing to check
      result = false;

    } else if (iO.serverURL || (iO.type && preferFlashCheck(iO.type))) {

      // RTMP, or preferring flash
      result = false;

    } else {

      // Use type, if specified. Pass data: URIs to HTML5. If HTML5-only mode, no other options, so just give 'er
      result = ((iO.type ? html5CanPlay({type:iO.type}) : html5CanPlay({url:iO.url}) || sm2.html5Only || iO.url.match(/data\:/i)));

    }

    return result;

  };
```
* An if-else if-else conditional.

17
```javascript
if (item.match(flashMIME)) {

          sm2.flash[item] = true;
          sm2.flash[lookup] = true;

        } else {

          sm2.flash[item] = false;
          sm2.flash[lookup] = false; }
```
* Another if else conditional, but it's affect the array sm2.flash at index locations
[item] and [lookup].

18
```javascript
strings = {

    // <d>
    notReady: 'Unavailable - wait until onready() has fired.',
    notOK: 'Audio support is not available.',
    domError: sm + 'exception caught while appending SWF to DOM.',
    spcWmode: 'Removing wmode, preventing known SWF loading issue(s)',
    swf404: smc + 'Verify that %s is a valid path.',
    tryDebug: 'Try ' + sm + '.debugFlash = true for more security details (output goes to SWF.)',
    checkSWF: 'See SWF output for more debug info.',
    localFail: smc + 'Non-HTTP page (' + doc.location.protocol + ' URL?) Review Flash player security settings for this special case:\nhttp://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html\nMay need to add/allow path, eg. c:/sm2/ or /users/me/sm2/',
    waitFocus: smc + 'Special case: Waiting for SWF to load with window focus...',
    waitForever: smc + 'Waiting indefinitely for Flash (will recover if unblocked)...',
    .
    .
    .
```
* A string bank/dictionary. The list goes on longer and this is just a snippet. But it would
appear whoever wrote this is going to call upon the keys to represent the various strings as messages
in the final code.

19)
```javascript
if (sm2.debugMode && !id(sm2.debugID) && (!hasConsole || !sm2.useConsole || !sm2.consoleOnly)) {

      oD = doc.createElement('div');
      oD.id = sm2.debugID + '-toggle';

      oToggle = {
        'position': 'fixed',
        'bottom': '0px',
        'right': '0px',
        'width': '1.2em',
        'height': '1.2em',
        'lineHeight': '1.2em',
        'margin': '2px',
        'textAlign': 'center',
        'border': '1px solid #999',
        'cursor': 'pointer',
        'background': '#fff',
        'color': '#333',
        'zIndex': 10001
      };
```
* What appears to be...declaring some style parameters. Yet in javascript. huh.

20
```javascript
if (window.sm2Debugger !== _undefined) {
      try {
        sm2Debugger.handleEvent(sEventType, bSuccess, sMessage);
      } catch(e) {
        // oh well
        return false;
      }
    }
```

```
* If conditional, with an unfamiliar command "try", that runs provided
that window.sm2Debugger is not equal to _undefined.
Then there's "catch" which is also unfamiliar and seems akin to "else." But
I could be wrong.

21
```
```javascript
while (i < l) {
          chr1 = input.charCodeAt(i++);
          chr2 = input.charCodeAt(i++);
          chr3 = input.charCodeAt(i++);
          enc1 = chr1 >> 2;
          enc2 = (chr1 & 3) << 4 | chr2 >> 4;
          enc3 = (chr2 & 15) << 2 | chr3 >> 6;
          enc4 = chr3 & 63;
          if (isNaN(chr2))
            enc3 = enc4 = 64;
          else if (isNaN(chr3))
            enc4 = 64;
          output = output + key.charAt(enc1) + key.charAt(enc2) + key.charAt(enc3) + key.charAt(enc4);
        }
        return output;
      };
```
* A while loop, that assigns lots of things to a number of variables as long
as it keeps looping. Note that isNaN is a function and is part of the condition
for the if and else if statements.

22
```javascript
for (i = 0; i < netsize; i++) {
        network[i] = new Array(4);
        p = network[i];
        p[0] = p[1] = p[2] = (i << netbiasshift + 8) / netsize | 0;
        freq[i] = intbias / netsize | 0;
        bias[i] = 0;
      }
```
* For loop. Network is an array. It loops through that array as long as i is less
than netsize. Several things happen: a new Array is formed, p is assigned the elements
of the array network, the first 3 elements of p are equivalent, and...I'm not sure what
single pipe means. Also all elements in array bias are assigned 0.

23
```javascript
 for (i = 0; i < rad; i++) {
        radpower[i] = alpha * ((rad * rad - i * i) * radbias / (rad * rad));
      }
```
* For loop, with interesting group of operators. If I'm reading this correctly via order
of operations: rad is squared, i is squared, and their difference is calculated. Rad is
squared a second time at the right end of this equation. Then from left to right, alpha is
multiplied by the rad^2 i^2 difference, that result is multiplied by radbias, and that
result is divided by rad squared.

24
```javascript
if (i % delta === 0) {
          alpha -= alpha / alphadec;
          radius -= radius / radiusdec;
          rad = radius >> radiusbiasshift;
```
* if conditional statement with a modulus. If delta can be divided into i evenly, alpha is
decremented, radius is decremented, and rad is assigned radius shifted to radiusbias.

25
```javascript
 for (i = 0; i < netsize; i++) {
        network[i][0] >>= netbiasshift;
        network[i][1] >>= netbiasshift;
        network[i][2] >>= netbiasshift;
        network[i][3] = i;
      }
```
* A for loop, but it operates on network which judging by this snippet, is an array of
arrays. I'm not entirely sure what >>= is... >> means shift, >= is greater than or equal
to....but combined. Hum. In any case, the first element in the first array is changed,
the second element in the second array is changed, third element in third array, and fourth
element in the fourth array is changed, all of this occuring within network.

26
```javascript
if (j < hi) {
          p = network[j++];
          try {
            p[0] -= a * (p[0] - b) / alpharadbias | 0;
            p[1] -= a * (p[1] - g) / alpharadbias | 0;
            p[2] -= a * (p[2] - r) / alpharadbias | 0;
          } catch (e) {
          }
```
* If conditional. There are a couple of commands I haven't encountered yet, try, and catch.
My guess is try does what it does, try to run the sequence it's describing. And cath...maybe
it's similar to array.push somehow.
p is a variable for the network array so whoever wrote this would have less typing to do.

27
```javascript
    function altersingle(alpha, i, b, g, r) {
      var n = network[i];
      var alphaMult = alpha / initalpha;
      n[0] -= alphaMult * (n[0] - b) | 0;
      n[1] -= alphaMult * (n[1] - g) | 0;
      n[2] -= alphaMult * (n[2] - r) | 0;
    }
```
* A function altersingle() which has inputs alpha, i, b, g, r. Which could mean anything.
The function declares two variables, n which is assigned the network array, and alphaMult,
which is assigned alpha divided by initalpha. The network array's elements are decremented
as this function runs.

28
```javascript
 'componentizedPaletteToArray': function (paletteRGB) {
        var paletteArray = [], i, r, g, b;
        for (i = 0; i < paletteRGB.length; i += 3) {
          r = paletteRGB[i];
          g = paletteRGB[i + 1];
          b = paletteRGB[i + 2];
          paletteArray.push(r << 16 | g << 8 | b);
        }
        return paletteArray;
      },
```

* Declared a key, 'componentizedPaletteToArray' which has been defined as a function accepting
input palletteRGB. It declares a variable paletteArray which is assigned an empty array, and
i, r, g, b. R, g, and b are assigned new values depending on the where the loop is, those results
are pushed into the new array under paletteArray.

29
```javascript
      'processFrameWithQuantizer': function (imageData, width, height, sampleInterval) {
        var rgbComponents = this.dataToRGB(imageData, width, height), nq = new NeuQuant(rgbComponents, rgbComponents.length, sampleInterval), paletteRGB = nq.process(), paletteArray = new Uint32Array(this.componentizedPaletteToArray(paletteRGB)), numberPixels = width * height, indexedPixels = new Uint8Array(numberPixels), k = 0, i;
        for (i = 0; i < numberPixels; i++) {
          r = rgbComponents[k++];
          g = rgbComponents[k++];
          b = rgbComponents[k++];
          indexedPixels[i] = nq.map(r, g, b);
        }
        return {
          pixels: indexedPixels,
          palette: paletteArray
        };
      },
```

* Declared 'processFrameWithQuantizer' which is defined as a function that has inputs imageData,
width, height, sampleInterval. Variable rgbComponents is assigned this.dataToRGB - oh hey, that this-dot
thing we've been learning! - it also declares another variable np, which is....really fucking long.
* Goes into a for loop that reassigns new values to rgbComponents.
* Then there's an nq.map(r, g, b) which is totally an array method. It applies r, g, b to each element
of nq, which is an array.
* The function returns the keys pixels and palette.

30
```javascript
 if (palette === undefined || palette === null)
      throw 'Must supply either a local or global palette.';
```

* If palette is strictly equal to undefined, OR palette is null, then this part of the code will
'throw' this...message. Not sure what throw does, but it sounds pretty neat.


31
```javascript
if( headerEnd >= sections[ix].start && headerStart <= sections[ix].end){

}
```
* If conditional statement, two parts: headerEnd must be greater than or equal to the array sections,
element location dictinoary, key= start. AND, headerStart must be lesser than or equal to array dictinoary
sections element index ix, key = end..

32
```javascript
  this.audioFormats = {
    'mp3': {
      'type': ['audio/mpeg; codecs="mp3"', 'audio/mpeg', 'audio/mp3', 'audio/MPA', 'audio/mpa-robust'],
      'required': true
    },
```
* this.audioFormats is an object in a larger function (not copied here). It has a key, 'mp3', which is
further defined by 'type', which has an array of more string values. A second key under mp3 is mapped to
the boolean true.

33
```javascript
this.unload = function(sID) {
    if (!idCheck(sID)) {
      return false;
    }
    return sm2.sounds[sID].unload();
  };
```
* this.unload is an object defined as a function, taking the input sID. sID is run through an if conditional,
which returns false if the condition is true, otherwise returns sm2.sounds[sID].unload();

34go
```javascript
this.resumeAll = function() {
    var i;
    for (i = sm2.soundIDs.length-1; i >= 0; i--) {
      sm2.sounds[sm2.soundIDs[i]].resume();
    }
  };
```
* this.resumeAll is an object defined as a function which runs a for loop. sm2.soundsIDs appears to be
an array, and as long as the loop continues, sm2sounds[sm2.soundsIDs[i]] will run .resume(), which might
be another object-function under sm2.sounds.

35
```javascript
this.togglePause = function(sID) {
    if (!idCheck(sID)) {
      return false;
    }
    return sm2.sounds[sID].togglePause();
  };
```
* this.togglePause is an object defined as a function that accepts an input, sID. idCheck(sID) is evaluated
and if true will return false (wut). Otherwise if true, it returns sm2.sounds[siD].togglePause(), which appears
to be as togglepause is a function-key of sounds[], which in turn is defined under sm2.

36
```javascript
   this.setPosition = function(nMsecOffset) {
      if (nMsecOffset === _undefined) {
        nMsecOffset = 0;
      }
```
* this.setPosition is an object defined as a function that accepts an input, nMsecOffset. If nMsecOffset
is strictly equal to undefined, nMsecOffset is assigned 0.

37
```javascript
wrapCallback = function(oSound, callback) {
    if (!oSound.isHTML5 && fV === 8) {
      window.setTimeout(callback, 0);
    } else {
      callback();
    }
  };
```
* wrapCallback is an object defined as a function that accepts inputs oSound, and callback.
If oSound.isHTML5 evaluates true AND fv is strictly equal to 8, window.setTimeout is a function that
will run inputs callback, and 0. Else, callback will run.

38
```javascript
 event = (function() {
    var old = (window.attachEvent),
    evt = {
      add: (old?'attachEvent':'addEventListener'),
      remove: (old?'detachEvent':'removeEventListener')
    };
```
* event is an object defined as a function. In this first part of event, variables old and evt are
declared. Old is assigned window.attachEvent. evt is assigned a dictionary with keys add and remove.

39
```javascript
 html5_events = {
    abort: html5_event(function() {
    }),
    canplay: html5_event(function() {
      var s = this._s,
          position1K;
      if (s._html5_canplay) {
        return true;
      }
```
* html5_events is assigned a dictionary. It has the keys abort, which is mapped to html5_event(function()),
and canplay, which is mapped html5_event(function()) which runs an if conditional statement.

40
```javascript
  this.flash9Options = {
    'isMovieStar': null,
    'usePeakData': false,
    'useWaveformData': false,
    'useEQData': false,
    'onbufferchange': null,
    'ondataerror': null
  };
```
* this.flash90Options is an object defined as a dictionary, which has the keys 'isMOveStar', 'usePeakData',
'useWaveformData', useEQData', 'onbufferchange', 'ondataerror', all of which are assigned to either null or
false values.
