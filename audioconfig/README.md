# Web Chat - Speech AudioConfig

## Overview

This sample utilizes the Cognitive Services Speech Services SDK to allow the user to specify the microphone input among a list on the computer.

## How to run this sample

1. Clone this repo
1. Navigate to the repo directory in terminal
1. run `npx serve`
1. Navigate to [https://localhost:5000/index.html](https://localhost:5000/index.html)

## Notes

1. This is using a manual build of Web Chat, which may or may not be up-to-date. See webchatjs.txt in the root directory for current build date.
1. Due to the error linked here: [CognitiveServices Speech SDK issue 96](https://github.com/microsoft/cognitive-services-speech-sdk-js/issues/96), this sample is also using a manual build of the Speech SDK. To see that change, please see `line 3037` of `microsoft.cognitiveservices.speech.sdk.bundle.js`. Please track the bug with the Cognitive Services team.

## Further reading

- [6.c](https://github.com/microsoft/BotFramework-WebChat/tree/master/samples/06.c.cognitive-services-speech-services-js) - Cognitive Services Speech Services
