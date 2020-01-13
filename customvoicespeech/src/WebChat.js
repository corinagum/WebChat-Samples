import React, { useEffect, useMemo } from "react";
import ReactWebChat, {
  createDirectLine,
  createStyleSet,
  createCognitiveServicesSpeechServicesPonyfillFactory
} from "botframework-webchat";

import "./WebChat.css";

const WebChat = ({ className, onFetchToken, token, store }) => {
  // const [webSpeechPonyfillFactory, setWebSpeechPonyfillFactory] = useState();

  // useEffect(() => {
  //   (async function() {
  //     setWebSpeechPonyfillFactory(
  //       await createCognitiveServicesSpeechServicesPonyfillFactory({
  //         // We are passing the Promise function to the authorizationToken field.
  //         // This function will be called every time the token is being used.
  //         authorizationToken: await createFetchSpeechServicesCredentials()
  //           .token,

  //         // In contrast, we are only fetching the region once.
  //         region: await createFetchSpeechServicesCredentials().region
  //       })
  //     );
  //   })();
  // }, [setWebSpeechPonyfillFactory]);

  const webSpeechPonyfillFactory = createCognitiveServicesSpeechServicesPonyfillFactory(
    {
      region: "westus",
      subscriptionKey: "5e400984609949e0bf6c56f19c19a618",
      speechRecognitionEndpointId: "7b1af7fb-8678-4b5a-bc3d-70f2ed10218c",
      speechSynthesisDeploymentId: "c1fa8d04-7348-4593-8150-6587330251c0"
    }
  );

  const directLine = useMemo(() => createDirectLine({ token }), [token]);

  const styleSet = useMemo(() => {
    createStyleSet({ backgroundColor: "#eeeeee" });
  }, []);
  useEffect(() => {
    onFetchToken();
  }, [onFetchToken]);

  const selectVoice = () => ({ voiceURI: "Corina voice training model" });

  return token ? (
    <div className="webchat">
      <ReactWebChat
        className={`${className || ""} web-chat`}
        directLine={directLine}
        selectVoice={selectVoice}
        store={store}
        styleSet={styleSet}
        webSpeechPonyfillFactory={webSpeechPonyfillFactory}
      />
    </div>
  ) : (
    <div className={`${className || ""} connect-spinner`}>
      <div className="content">
        <div className="icon">
          <span className="ms-Icon ms-Icon--Robot" />
        </div>
        <p>Please wait while we are connecting.</p>
      </div>
    </div>
  );
};

export default WebChat;
