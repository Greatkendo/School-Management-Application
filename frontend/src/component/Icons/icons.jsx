'use client'
import React from 'react';
import { createFromIconfontCN } from '@ant-design/icons';
import { Space } from 'antd';
import Link from 'next/link';
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});
const Icons = () => (
  <Space>
    <Link href='/#'><IconFont type="icon-tuichu" /></Link>
    <Link href='/#'>
      <IconFont
      type="icon-facebook"
      style={{
        color: '#1877F2',
      }}
    />
    </Link>
    <Link href='/#'>
      <IconFont type="icon-twitter" />
    </Link>
  </Space>
);
export default Icons;