import React, { useCallback, useState } from "react";
import ConfigurationController from "~/components/MiniDashboard/ConfigurationController";
import s from "./Dashboard.module.less";
import { Menu, Select, Tooltip, Modal } from "antd";
import {
  CodeOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
  FormatPainterOutlined,
  ToolOutlined,
} from "@ant-design/icons";
import reject from 'lodash/reject';
import { useDispatch, useSelector } from "react-redux";
import { RootState, Dispatch } from "~/redux/store";
import StyleController from "../StyleController";
import usePostMessage from "~/hooks/usePostMessage";
import CodeEditor from "../CodeEditor";

const { confirm } = Modal;
interface Props {}

const Dashboard: React.FC<Props> = () => {
  // appdata
  const appData = useSelector((state: RootState) => state.appData);

  // 模板ID
  const moduleId = useSelector(
    (state: RootState) => state.activationItem.moduleId
  );

  const activationItem = useSelector(
    (state: RootState) => state.activationItem
  );

  const updateActivationItem = useDispatch<Dispatch>().activationItem
    .updateActivationItem;
  const removeActivationItem = useDispatch<Dispatch>().activationItem
  .removeActivationItem;

  // 样式与设置菜单面板
  const [mainTag, setMainTag] = useState("style");
  const onSelectMainTag = useCallback((e) => {
    setMainTag(e.key);
  }, []);

  const sendMessage = usePostMessage(() => {});
  //
  // 收发处理，子窗口onload时向子窗口发送信息, 通知当前正处于编辑模式下，

  // 重置当前被选择项
  const onChangeSelect = useCallback(
    (e) => {
      if (activationItem.moduleId === e) return;
      for (let index = 0; index < appData.length; index++) {
        const element = appData[index];
        if (element.moduleId === e) {
          const value = { ...element };
          updateActivationItem(value);
          const win = (document.getElementById(
            "wrapiframe"
          ) as HTMLIFrameElement).contentWindow;
          if (win) {
            sendMessage({ tag: "id", value: element.moduleId }, win);
          }
          break;
        }
      }
    },
    [activationItem.moduleId, appData, sendMessage, updateActivationItem]
  );

  const delModule = useCallback(
    () => {
      const optAppData = reject([...appData], { moduleId });
      const win = (document.getElementById(
        "wrapiframe"
      ) as HTMLIFrameElement).contentWindow;
      sendMessage({
        tag: 'updateAppData',
        value: optAppData
      }, win);
      sendMessage({
        tag: 'removeActivationItem',
        value: undefined
      }, win);
      removeActivationItem();
    },
    [appData, moduleId, removeActivationItem, sendMessage],
  )

  return (
    <div className={s.root} style={{ height: `${window.innerHeight - 80}px` }}>
      <div className={s.headtab}>
        <div className={s.moduleselect}>
          <Select
            onChange={onChangeSelect}
            className={s.select}
            value={moduleId}
            showSearch
            placeholder="请选择编辑模块"
            optionFilterProp="children"
            filterOption={
              (input, option) => {
                const str = option?.children.join("").toLowerCase();
                if (str.indexOf(input) !== -1) {
                  return true;
                }
                return false;
              }
              // option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {appData.map((item) => (
              <Select.Option value={item.moduleId} key={item.moduleId}>
                {item.moduleName || "(未标题)"}-{item.type}
              </Select.Option>
            ))}
          </Select>
        </div>

        <Menu
          onClick={() => setMainTag("style")}
          onSelect={onSelectMainTag}
          selectedKeys={[mainTag]}
          mode="horizontal"
          className={s.contentmenu}
        >
          <Menu.Item key="style" icon={<FormatPainterOutlined />}>
            样式
          </Menu.Item>
          <Menu.Item key="config" icon={<ToolOutlined />}>
            设置
          </Menu.Item>
          <Menu.Item key="code" icon={<CodeOutlined />}>
            code
          </Menu.Item>
        </Menu>
        <div className={s.info}>
          <Tooltip
            title={
              <div>
                moduleId: <br />
                {activationItem.moduleId}
              </div>
            }
          >
            <ExclamationCircleOutlined />
          </Tooltip>
        </div>
        <div>
          <Tooltip
            title={`删除 ${
              activationItem.moduleName || activationItem.moduleId
            }`}
          >
            <DeleteOutlined
              className={s.delete}
              onClick={() =>
                confirm({
                  content: (
                    <div>
                      <h3>确定删除</h3>
                      <br />
                      模块名称：{activationItem.moduleName}
                      <br />
                      Id: {activationItem.moduleId}
                    </div>
                  ),
                  okText: '确定',
                  cancelText: '取消',
                  onOk: delModule
                })
              }
            />
          </Tooltip>
        </div>
      </div>
      <div
        className={s.controllerwrap}
        style={{ display: mainTag === "style" ? "block" : "none" }}
      >
        <StyleController />
      </div>
      <div
        className={s.controllerwrap}
        style={{ display: mainTag === "config" ? "block" : "none" }}
      >
        <ConfigurationController />
      </div>
      <div
        className={s.controllerwrap}
        style={{ display: mainTag === "code" ? "block" : "none" }}
      >
        <CodeEditor />
      </div>
    </div>
  );
};

export default Dashboard;
