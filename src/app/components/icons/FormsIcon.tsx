import * as React from "react"
const SvgComponent = (props) => (
  <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 100 100"
  width={'4vw'}
  height={'4vw'}
  fill="none"
  {...props}
>
    <path
      fill={props.fill || 'currentColor'}
      fillRule="evenodd"
      d="M88 15.911C88 13.751 86.567 12 84.8 12H3.2C1.433 12 0 13.751 0 15.911V96.09C0 98.249 1.433 100 3.2 100h81.6c1.767 0 3.2-1.751 3.2-3.911V15.91Zm-8 72.356c0 1.08-.716 1.955-1.6 1.955H9.6c-.884 0-1.6-.875-1.6-1.955V40.845c0-1.08.716-1.956 1.6-1.956h68.8c.884 0 1.6.875 1.6 1.955v47.423Zm0-61.111c0 1.08-.716 1.955-1.6 1.955H9.6c-.884 0-1.6-.875-1.6-1.955v-3.423c0-1.08.716-1.955 1.6-1.955h68.8c.884 0 1.6.875 1.6 1.955v3.423Z"
      clipRule="evenodd"
    />
    <path
      fill={props.fill || 'currentColor'}
      d="M12 75.556h64v4.888H12v-4.888ZM12 65.778h64v4.889H12v-4.89Z"
    />
    <path
      fill={props.fill || 'currentColor'}
      d="M12 65.778h64v4.889H12v-4.89ZM58.617 50.053 94.346.316a.4.4 0 0 1 .549-.098l4.765 3.225a.4.4 0 0 1 .101.564l-35.714 49.72-5.429-3.674ZM52 60.402l6.577-9.02 3.912 2.688-6.577 9.019-3.6.911L52 60.402Z"
    />
  </svg>
)
export default SvgComponent
