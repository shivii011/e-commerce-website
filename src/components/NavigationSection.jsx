import React from 'react';
import 'antd/dist/antd.css';

import { Tabs } from 'antd';

function NavigationSection() {
  return (
  <div>
 <Tabs defaultActiveKey="1">
    <Tabs.TabPane tab="Tab 1" key="1">
  
    </Tabs.TabPane>
    <Tabs.TabPane tab="Tab 2" key="2">
      Content of Tab Pane 2
    </Tabs.TabPane>
    <Tabs.TabPane tab="Tab 3" key="3">
      Content of Tab Pane 3
    </Tabs.TabPane>
  </Tabs>
  </div>
  )
}

export default NavigationSection