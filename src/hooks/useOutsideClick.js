import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
          // console.log("clicked outside");
        }
      }

      // Must intercept the event in capturing phase not bubbling phase that's why i used `true` property here.
      document.addEventListener("click", handleClick, listenCapturing);

      // unmount the useEffect
      return () =>
        document.removeEventListener("click", handleClick, listenCapturing);
    },
    [handler, listenCapturing]
  );

  return ref;
}
