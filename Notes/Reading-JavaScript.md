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
* If conditional, with an unfamiliar command "try", that runs provided
that window.sm2Debugger is not equal to _undefined.
* Then there's "catch" which is also unfamiliar and seems akin to "else." But
I could be wrong.
