import * as React from "react"
const SvgComponent = (props) => (
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
      d="M100 25.39c0-1.916-1.628-3.47-3.636-3.47H3.636C1.628 21.92 0 23.474 0 25.39v71.14C0 98.446 1.628 100 3.636 100h92.728c2.008 0 3.636-1.554 3.636-3.47V25.39Zm-9.09 64.2c0 .958-.815 1.734-1.82 1.734H10.91c-1.005 0-1.82-.776-1.82-1.735V47.513c0-.958.815-1.735 1.82-1.735h78.18c1.005 0 1.82.777 1.82 1.735v42.076Zm0-54.223c0 .959-.815 1.735-1.82 1.735H10.91c-1.005 0-1.82-.776-1.82-1.735v-3.036c0-.958.815-1.735 1.82-1.735h78.18c1.005 0 1.82.777 1.82 1.735v3.036Z"
      clipRule="evenodd"
    />
    <path
      fill={props.fill || 'currentColor'}
      d="M13.636 69.636h18.182v4.338H13.636v-4.338ZM13.636 60.96h22.728v4.337H13.636V60.96ZM74.482 23.681c-.97-.248-1.546-1.2-1.286-2.125l5.692-20.27c.26-.925 1.256-1.474 2.226-1.226l.878.224c.97.248 1.546 1.2 1.286 2.125l-5.691 20.27c-.26.926-1.257 1.475-2.227 1.227l-.878-.225ZM70.096 23.906c-.97.248-1.967-.301-2.227-1.227L64.105 9.272c-.26-.926.315-1.878 1.285-2.126l.879-.224c.97-.248 1.966.301 2.226 1.227l3.765 13.408c.26.925-.316 1.877-1.286 2.125l-.878.224Z"
    />
  </svg>
)
export default SvgComponent
