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
      subscriptionKey: ""
    }
  );

  const directLine = useMemo(() => createDirectLine({ token }), [token]);

  const styleSet = useMemo(() => {
    createStyleSet({ backgroundColor: "#eeeeee" });
  }, []);
  useEffect(() => {
    onFetchToken();
  }, [onFetchToken]);

  return token ? (
    <div className="webchat">
      <ReactWebChat
        className={`${className || ""} web-chat`}
        directLine={directLine}
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
