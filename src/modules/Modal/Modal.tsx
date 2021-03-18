import { useCallback, useEffect, useMemo, useRef } from "react";
import { AppDataElementsTypes } from "~/types/appData";
import Core from "@eightfeet/modal";
import styleCompiler from "~/compiler";
import EventEmitter from "~/core/EventEmitter";
import { ModulesProps } from "~/types/modules";
import getResult from '~/core/getDataFromRunningTime'
import Wrapper from "../Wrapper";

interface Props extends AppDataElementsTypes {
  id: string;
  eventEmitter: EventEmitter;
}

const Modal: ModulesProps<Props> = (props) => {
  const { style, eventEmitter } = props;
  const show = useCallback((parames) => {
    const {
      header,
      article,
      footer
    } = parames || {};
    if (!ref.current) return;
    ref.current.create({
      header: getResult(header),
      article: getResult(article),
      footer: getResult(footer),
    });
  }, []);

  const hide = useCallback(() => {
    if (!ref.current) return;
    ref.current.remove();
  }, []);

  const ref = useRef<Core>();
  const { overlay, header, footer, content, article, close } = style;
  useEffect(() => {
    // 创建弹窗
    ref.current = new Core({
      style: {
        overlay: styleCompiler(overlay).style as any,
        content: styleCompiler(content).style as any,
        footer: styleCompiler(footer).style as any,
        header: styleCompiler(header).style as any,
        article: styleCompiler(article).style as any,
        close: styleCompiler(close).style as any,
      },
      shouldCloseOnOverlayClick: true,
    });

    // 事件订阅
    return () => {
      if (ref.current) {
        if (!document.querySelector(`#${ref.current.state.id}`)) return;
        ref.current.remove();
      }
    };
  }, [article, close, content, footer, header, overlay]);

  //事件发布
  useMemo(() => {
    eventEmitter.addEventListener("show", show);
    eventEmitter.addEventListener("hide", hide);
  }, [eventEmitter, hide, show]);

  return <Wrapper {...props} />;
};

Modal.exposeFunctions = [
  {
    name: "show",
    description: "显示弹窗",
    arguments: [{
      type: 'object',
      name: '弹窗内容',
      describe: 'header：头部，article：内容，footer：底部',
      data: {
        header: '<h3>header</h3>',
        article: '<p>article</p>',
        footer: '<p>footer</p>'
      }
    }]
  },
  {
    name: "hide",
    description: "隐藏弹窗",
  },
];

Modal.exposeEvents = [
  {
    name: "onClose",
    description: "关闭弹窗时",
  },
];

export default Modal;
