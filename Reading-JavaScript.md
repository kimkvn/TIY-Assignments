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
