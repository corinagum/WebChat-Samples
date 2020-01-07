import React from "react";
import "./App.css";
import { createStore, createStyleSet } from "botframework-webchat";
import { useCallback, useMemo, useState } from "react";
import WebChat from "./WebChat";

const App = () => {
  const store = useMemo(
    () =>
      createStore({}, ({ dispatch }) => next => action => {
        if (action.type === "DIRECT_LINE/CONNECT_FULFILLED") {
          dispatch({
            type: "WEB_CHAT/SEND_EVENT",
            payload: {
              name: "webchat/join",
              value: {
                language: window.navigator.language
              }
            }
          });
        }
        return next(action);
      }),
    []
  );

  const styleSet = useMemo(
    () =>
      createStyleSet({
        backgroundColor: "Transparent"
      }),
    []
  );

  const [token, setToken] = useState();
  const handleFetchToken = useCallback(async () => {
    if (!token) {
      const res = await fetch(
        "https://webchat-mockbot.azurewebsites.net/directline/token",
        { method: "POST" }
      );
      const { token } = await res.json();

      setToken(token);
    }
  }, [setToken, token]);

  return (
    <WebChat
      className="react-web-chat"
      onFetchToken={handleFetchToken}
      store={store}
      styleSet={styleSet}
      token={token}
    />
  );
};

export default App;
