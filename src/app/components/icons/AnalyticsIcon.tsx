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
      d="M100 4.444C100 1.99 98.372 0 96.364 0H3.636C1.628 0 0 1.99 0 4.444v91.112C0 98.01 1.628 100 3.636 100h92.728c2.008 0 3.636-1.99 3.636-4.444V4.444Zm-9.09 82.223c0 1.227-.815 2.222-1.82 2.222H10.91c-1.005 0-1.82-.995-1.82-2.222v-53.89c0-1.227.815-2.221 1.82-2.221h78.18c1.005 0 1.82.994 1.82 2.222v53.889Zm0-69.445c0 1.227-.815 2.222-1.82 2.222H10.91c-1.005 0-1.82-.994-1.82-2.222v-3.889c0-1.227.815-2.222 1.82-2.222h78.18c1.005 0 1.82.995 1.82 2.222v3.89Z"
      clipRule="evenodd"
    />
    <path
      fill={props.fill || 'currentColor'}
      d="M29.09 81.818A1.818 1.818 0 0 1 27.274 80V38.182c0-1.004.814-1.818 1.818-1.818h5.454c1.005 0 1.819.814 1.819 1.818V80a1.818 1.818 0 0 1-1.819 1.818h-5.454ZM47.273 81.818A1.818 1.818 0 0 1 45.454 80V47.273c0-1.004.815-1.819 1.819-1.819h5.454c1.004 0 1.819.815 1.819 1.819V80a1.818 1.818 0 0 1-1.819 1.818h-5.454ZM65.454 81.818A1.818 1.818 0 0 1 63.636 80V51.818c0-1.004.814-1.818 1.818-1.818h5.455c1.004 0 1.818.814 1.818 1.818V80a1.818 1.818 0 0 1-1.818 1.818h-5.455Z"
    />
  </svg>
)
export default SvgComponent
