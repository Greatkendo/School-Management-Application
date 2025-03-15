// import React from 'react';
// import { DownOutlined, SmileOutlined } from '@ant-design/icons';
// import { Dropdown, Space } from 'antd';
// const items = [
//   {
//     key: '1',
//     label: (
//       <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
//         1st menu item
//       </a>
//     ),
//   },
//   {
//     key: '2',
//     label: (
//       <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
//         2nd menu item (disabled)
//       </a>
//     ),
//     icon: <SmileOutlined />,
//     disabled: true,
//   },
//   {
//     key: '3',
//     label: (
//       <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
//         3rd menu item (disabled)
//       </a>
//     ),
//     disabled: true,
//   },
//   {
//     key: '4',
//     danger: true,
//     label: 'a danger item',
//   },
// ];
// const DropDown = () => (
//   <Dropdown
//     menu={{
//       items,
//     }}
//   >
//     <a onClick={(e) => e.preventDefault()}>
//       <Space>
//         Hover me
//         <DownOutlined />
//       </Space>
//     </a>
//   </Dropdown>
// );
// export default DropDown;
'use client'

import { useState } from "react";
import Link from "next/link";

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
      >
        Accounts ▼
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
          <ul className="py-2">
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
              <Link href="/studentaccount">Student Accounts</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
              <Link href="/staffaccount">Staff Accounts</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDown;
