import { useEffect } from "react";

interface Result {
    tag: 'updateAppData' | 'updateActivationItem';
    value: any;
}

/**
 * 处理消息推送
 * @param fn Function
 */
export const useSetMessageReceiver = (fn: (result: Result) => void) => {
    useEffect(() => {
        const handler = (event: { data: any; }) => {
          if (fn instanceof Function) {
            fn(event.data)
          }
        }
        
        window.addEventListener("message", handler)
        // clean up
        return () => window.removeEventListener("message", handler)
      }, [fn]) // empty array => run only once
}

/**
 * 处理消息推送，暂定同域下处理
 * @param data 推送标签与值{tag, value}
 * @param wind 目标窗口
 */
export const useSendMessage = ({tag, value}: Result, wind: Window) => {
  useEffect(() => {
    wind.postMessage({tag, value}, window.location.origin);
  }, [tag, value, wind])
}