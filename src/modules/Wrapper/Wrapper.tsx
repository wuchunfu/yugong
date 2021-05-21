import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "~/redux/store";
import { AnyObjectType, AppDataElementsTypes } from "~/types/appData";
import styleCompiler from "~/compiler";
import s from "./Wrapper.module.less";
import usePostMessage from "~/hooks/usePostMessage";
import classNames from "classnames";

interface Props extends AppDataElementsTypes {
  id: string;
  maxWidth?: boolean;
  maxHeight?: boolean;
  itemAlign?: 'top'|'center'|'bottom'
}

const Wrapper: React.FC<Props> = ({
  id,
  style,
  children,
  layout,
  maxWidth,
  maxHeight,
  itemAlign="center",
}) => {
  /**
   * Wrapper 自身的样式
   */
  const [basicStyle, setBasicStyle] = useState<{ [keys: string]: any }>({});
  const actId = useSelector((state: RootState) => state.controller.editingId);
  const [wrapSize, setWrapSize] = useState<{width: string; height: string}>();
  const setEditingId = useDispatch<Dispatch>().controller.setEditingId;
  const currentLayout = useSelector((state: RootState) => state.appData).filter(item => item.moduleId === actId)?.[0]?.layout;
  
  const refWrap = useRef<HTMLDivElement>(null);
  const isEditing = useSelector(
    (state: RootState) => state.controller.isEditing
  );
  

  const sendMessage = usePostMessage(() => {});

  useEffect(() => {
    const { basic } = style;
    setBasicStyle(styleCompiler(basic));
    if (basic.display?.zIndex !== undefined) {
      document.getElementById(
        `wrap-${id}`
      )!.style.zIndex = `${basic.display.zIndex}`;
    }
  }, [id, style]);

  useEffect(() => {
    if (refWrap.current) {
      setWrapSize({
        width: `${refWrap.current.offsetWidth}px`,
        height: `${refWrap.current.offsetHeight}px`,
      });
      
    }
  }, [refWrap, currentLayout?.w, currentLayout?.h])

  /**
   * 图层被触发
   */
  const onLayoutClick = useCallback(() => {
    if (!isEditing) return;
    setEditingId(id);
    // 向父级窗口通知当前激活Id
    sendMessage({ tag: "id", value: id }, window.top);
  }, [isEditing, id, sendMessage, setEditingId]);
  /**设置预览状态下不接受编辑事件 */
  const pointerEvents: React.CSSProperties = {};
  if (isEditing) {
    pointerEvents.pointerEvents = "none";
  } else {
    delete pointerEvents.pointerEvents;
  }
  /*设置最大尺寸*/
  const defaultSize: AnyObjectType = {};
  if (maxWidth && wrapSize?.width) {
    defaultSize.width = wrapSize?.width;
  }
  if (maxHeight && wrapSize?.height) {
    defaultSize.height = wrapSize?.height;
  }
  /*是否为隐藏模块*/
  const isHide = (layout?.w === 0 || layout?.h === 0);
  if (isHide) {
    defaultSize.width = defaultSize.height = 'auto';
  }
  return (
    <div
      className={classNames(s.touchwrap, {
        [s.aligncenter]: itemAlign === 'center',
        [s.aligntop]: itemAlign === 'top',
        [s.alignbottom]: itemAlign === 'bottom',
      })}
      onTouchStart={onLayoutClick}
      onMouseDown={onLayoutClick}
      ref={refWrap}
    >
      {actId === id ? (
        <div
          className={classNames(s.actwrap, {
            [s.isedit]: isEditing,
            [s.iswiew]: !isEditing,
          })}
        />
      ) : null}
      <div
        id={id}
        className={s.secondwrap}
        style={{ ...basicStyle.style, ...pointerEvents }}
      >
          <div style={defaultSize}>
            {children}
          </div>
      </div>
    </div>
  );
};

export default Wrapper;
