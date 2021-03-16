---
id: 17-listenable-events
title: 17 Listenable Events
date: 2021-03-07 19:38:23
---

In the last lecture, we saw that you can react to the onClick event - but to which other events can you listen? You can find a list of supported events here: <a href='https://reactjs.org/docs/events.html#supported-events' class='external'>reactjs.org</a>

## Clipboard Events

Event names:

```
onCopy onCut onPaste
```

Properties:

```
DOMDataTransfer clipboardData
```

## Composition Events

Composition Events <a href='https://reactjs.org/docs/events.html#composition-events' class='external'>reactjs.org</a>

Event names:

```
onCompositionEnd onCompositionStart onCompositionUpdate
```

Properties:

```
string data
```

## Keyboard Events

Keyboard Events <a href='https://reactjs.org/docs/events.html#keyboard-events' class='external'>reactjs.org</a>

Event names:

```
onKeyDown onKeyPress onKeyUp
```

Properties:

```
boolean altKey
number charCode
boolean ctrlKey
boolean getModifierState(key)
string key
number keyCode
string locale
number location
boolean metaKey
boolean repeat
boolean shiftKey
number which
```

## Focus Events

Focus Events <a href='https://reactjs.org/docs/events.html#focus-events' class='external'>reactjs.org</a>

Event names:

```
onFocus onBlur
```

These focus events work on all elements in the React DOM, not just form elements.

Properties:

```
DOMEventTarget relatedTarget
```

## Form Events

Form Events <a href='https://reactjs.org/docs/events.html#form-events' class='external'>reactjs.org</a>

Event names:

```
onChange onInput onInvalid onSubmit
```

For more information about the onChange event, see Forms <a href='https://reactjs.org/docs/forms.html' class='external'>reactjs.org</a>.

## Mouse Events

Mouse Events <a href='https://reactjs.org/docs/events.html#mouse-events' class='external'>reactjs.org</a>

Event names:

```
onClick onContextMenu onDoubleClick onDrag onDragEnd onDragEnter onDragExit
onDragLeave onDragOver onDragStart onDrop onMouseDown onMouseEnter onMouseLeave
onMouseMove onMouseOut onMouseOver onMouseUp
```

The `onMouseEnter` and `onMouseLeave` events propagate from the element being left to the one being entered instead of ordinary bubbling and do not have a capture phase.

Properties:

```
boolean altKey
number button
number buttons
number clientX
number clientY
boolean ctrlKey
boolean getModifierState(key)
boolean metaKey
number pageX
number pageY
DOMEventTarget relatedTarget
number screenX
number screenY
boolean shiftKey
```

## Selection Events

Selection Events <a href='https://reactjs.org/docs/events.html#selection-events' class='external'>reactjs.org</a>

Event names:

```
onSelect
```

## Touch Events

Touch Events <a href='https://reactjs.org/docs/events.html#touch-events' class='external'>reactjs.org</a>

Event names:

```
onTouchCancel onTouchEnd onTouchMove onTouchStart
```

Properties:

```
boolean altKey
DOMTouchList changedTouches
boolean ctrlKey
boolean getModifierState(key)
boolean metaKey
boolean shiftKey
DOMTouchList targetTouches
DOMTouchList touches
```

## UI Events

UI Events <a href='https://reactjs.org/docs/events.html#ui-events' class='external'>reactjs.org</a>

Event names:

```
onScroll
```

Properties:

```
number detail
DOMAbstractView view
```

## Wheel Events

Wheel Events <a href='https://reactjs.org/docs/events.html#wheel-events' class='external'>reactjs.org</a>

Event names:

```
onWheel
```

Properties:

```
number deltaMode
number deltaX
number deltaY
number deltaZ
```

## Media Events

Media Events <a href='https://reactjs.org/docs/events.html#media-events' class='external'>reactjs.org</a>

Event names:

```
onAbort onCanPlay onCanPlayThrough onDurationChange onEmptied onEncrypted
onEnded onError onLoadedData onLoadedMetadata onLoadStart onPause onPlay
onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend
onTimeUpdate onVolumeChange onWaiting
```

## Image Events

Image Events <a href='https://reactjs.org/docs/events.html#image-events' class='external'>reactjs.org</a>

Event names:

```
onLoad onError
```

## Animation Events

Animation Events <a href='https://reactjs.org/docs/events.html#animation-events' class='external'>reactjs.org</a>

Event names:

```
onAnimationStart onAnimationEnd onAnimationIteration
```

Properties:

```
string animationName
string pseudoElement
float elapsedTime
```

## Transition Events

Transition Events <a href='https://reactjs.org/docs/events.html#transition-events' class='external'>Transition Events</a>

Event names:

```
onTransitionEnd
```

Properties:

```
string propertyName
string pseudoElement
float elapsedTime
```

## Other Events

Other Events <a href='https://reactjs.org/docs/events.html#other-events' class='external'>Other Events</a>

Event names:

```
onToggle
```
