import * as React from "react"
const SvgComponent = (props:any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width={'4vw'}
    height={'4vw'}
    fill="none"
    className={props.className}
    {...props}
  >
    <path
      fill={props.fill || 'currentColor'}
      fillRule="evenodd"
      d="M100 4.444C100 1.99 98.372 0 96.364 0H3.636C1.628 0 0 1.99 0 4.444v91.112C0 98.01 1.628 100 3.636 100h92.728c2.008 0 3.636-1.99 3.636-4.444V4.444Zm-9.09 82.223c0 1.227-.815 2.222-1.82 2.222H10.91c-1.005 0-1.82-.995-1.82-2.222v-53.89c0-1.227.815-2.221 1.82-2.221h78.18c1.005 0 1.82.994 1.82 2.222v53.889Zm0-69.445c0 1.227-.815 2.222-1.82 2.222H10.91c-1.005 0-1.82-.994-1.82-2.222v-3.889c0-1.227.815-2.222 1.82-2.222h78.18c1.005 0 1.82.995 1.82 2.222v3.89Z"
      clipRule="evenodd"
    />
    <path
      fill={props.fill || 'currentColor'}
      d="M13.636 72.222h18.182v5.556H13.636v-5.556ZM13.636 61.111h18.182v5.556H13.636V61.11Z"
    />
    <path fill={props.fill || 'currentColor'} d="M13.636 61.111h18.182v5.556H13.636V61.11Z" />
    <path
      fill={props.fill || 'currentColor'}
      fillRule="evenodd"
      d="M57.273 44.444c-1.507 0-2.728 1.493-2.728 3.334v26.666c0 1.841 1.221 3.334 2.728 3.334h26.363c1.507 0 2.728-1.493 2.728-3.334V47.778c0-1.841-1.221-3.334-2.728-3.334H57.273Zm6.818 8.334c-1.506 0-2.727 1.492-2.727 3.333v11.667c0 .92.61 1.666 1.363 1.666h15.455c.753 0 1.364-.746 1.364-1.666V56.11c0-1.84-1.222-3.333-2.728-3.333H64.091Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgComponent
