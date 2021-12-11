import * as React from 'react';

const TextLogo = (fill: string) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100.29 31.94">
    <g>
      <rect x="23.27" y="9.29" fill={fill} width="5.73" height="1.13" />
      <rect x="31.42" y="9.29" fill={fill} width="5.81" height="1.13" />
      <rect x="23.27" y="6.13" fill={fill} width="5.73" height="1.21" />
      <rect x="31.42" y="6.14" fill={fill} width="5.81" height="1.21" />
      <path
        fill={fill}
        d="M86.91,0.38L83.84,0.2L77,31.76l9.53,0.18l13.76-15.86L86.91,0.38z M86.29,28.32V22.3l5.12-6.54l-5.12-6.18
		V3.79l9.89,11.91L86.29,28.32z"
      />
      <path
        fill={fill}
        d="M13.76,0L0,15.86l13.39,15.71l60.02,0.18l6.84-31.57L13.76,0z M14.77,9.62l-5.12,6.54l5.12,6.17v5.8
		L4.89,16.22l9.89-12.61V9.62z M23.64,18.84v-1.88h11.6v-0.7h1.98v2.58H35.5h-0.26H23.64z M33.82,23.23l-1.93,1.26
		c0,0-2.06-2.45-3.49-3.72c0,0,0.93-0.7,1.74-1.33L33.82,23.23z M37.49,23.08c-0.18,2.17-0.5,3.37-1.02,3.92
		c-0.49,0.46-1.22,0.68-2.2,0.68h-7.28c-1.78,0-2.77-0.89-2.77-2.51v-4.56h2.48v4.24c0,0.49,0.19,0.66,0.73,0.66h6.55
		c0.5,0,0.61-0.15,0.65-0.2c0.11-0.15,0.31-0.69,0.45-2.72l0.04-0.57l2.39,0.7L37.49,23.08z M41.49,28.32l-3.68-5.98l1.28-0.74
		h-2.82l-0.52-2l2.8-0.03c0.21,0,0.58,0,0.58-0.79v-3.13h-7.78v0.91h-2.35v-0.91h-7.25v5.4h-1.55l2.33,0.44l-0.15,0.47
		c-0.68,2.15-1.67,4.06-2.92,5.67l-0.26,0.34l-2.06-1.22l0.31-0.39c1.17-1.45,2.06-3.1,2.63-4.91l0.13-0.4h-0.88v-7.51h9.68v-1.08
		h-8.19V4.11h18.88v8.35h-8.27v1.08h10.07v5.53c0,1.24-0.55,2.07-1.54,2.38l3.49,5.58L41.49,28.32z M43.44,21.6L53.84,3.9l1.73,2.97
		L45.13,24.5L43.44,21.6z M46.93,27.09L57.34,9.24l1.7,2.91L51.84,24.5l11.03-0.02l-3.82-6.39l1.73-2.97l6.98,11.97H46.93z
		 M69.57,24.5L59.12,6.87l1.73-2.97l10.41,17.7L69.57,24.5z"
      />
    </g>
  </svg>
);

const DefaultLogo = (fill: string) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100.29 93.89">
    <g>
      <rect x="23.27" y="71.24" fill={fill} width="5.73" height="1.13" />
      <rect x="31.42" y="71.24" fill={fill} width="5.81" height="1.13" />
      <rect x="23.27" y="68.08" fill={fill} width="5.73" height="1.21" />
      <rect x="31.42" y="68.09" fill={fill} width="5.81" height="1.21" />
      <path
        fill={fill}
        d="M86.91,62.33l-3.07-0.18L77,93.71l9.53,0.18l13.76-15.86L86.91,62.33z M86.29,90.26v-6.02l5.12-6.54
		l-5.12-6.18v-5.79l9.89,11.91L86.29,90.26z"
      />
      <path
        fill={fill}
        d="M13.76,61.95L0,77.8l13.39,15.71l60.02,0.18l6.84-31.57L13.76,61.95z M14.77,71.57l-5.12,6.54l5.12,6.17v5.8
		L4.89,78.17l9.89-12.61V71.57z M23.64,80.78V78.9h11.6v-0.7h1.98v2.58H35.5h-0.26H23.64z M33.82,85.17l-1.93,1.26
		c0,0-2.06-2.45-3.49-3.72c0,0,0.93-0.7,1.74-1.33L33.82,85.17z M37.49,85.03c-0.18,2.17-0.5,3.37-1.02,3.92
		c-0.49,0.46-1.22,0.68-2.2,0.68h-7.28c-1.78,0-2.77-0.89-2.77-2.51v-4.56h2.48v4.24c0,0.49,0.19,0.66,0.73,0.66h6.55
		c0.5,0,0.61-0.15,0.65-0.2c0.11-0.15,0.31-0.69,0.45-2.72l0.04-0.57l2.39,0.7L37.49,85.03z M41.49,90.26l-3.68-5.98l1.28-0.74
		h-2.82l-0.52-2l2.8-0.03c0.21,0,0.58,0,0.58-0.79v-3.13h-7.78v0.91h-2.35v-0.91h-7.25v5.4h-1.55l2.33,0.44l-0.15,0.47
		c-0.68,2.15-1.67,4.06-2.92,5.67l-0.26,0.34l-2.06-1.22l0.31-0.39c1.17-1.45,2.06-3.1,2.63-4.91l0.13-0.4h-0.88v-7.51h9.68V74.4
		h-8.19v-8.35h18.88v8.35h-8.27v1.08h10.07v5.53c0,1.24-0.55,2.07-1.54,2.38l3.49,5.58L41.49,90.26z M43.44,83.55l10.41-17.7
		l1.73,2.97L45.13,86.45L43.44,83.55z M46.93,89.04l10.41-17.86l1.7,2.91l-7.21,12.35l11.03-0.02l-3.82-6.39l1.73-2.97l6.98,11.97
		H46.93z M69.57,86.45L59.12,68.82l1.73-2.97l10.41,17.7L69.57,86.45z"
      />
      <polygon fill={fill} points="31.06,58.58 39.29,59.42 35.67,55.87 	" />
      <polygon
        fill={fill}
        points="40.86,25.7 32.24,28.58 31.34,21.96 35.37,19.79 30.76,18.07 30.75,18.05 27.88,30.04 36.12,30.74 	
		"
      />
      <path
        fill={fill}
        d="M37.92,53.22c-0.74-4.93-5.25-8.63-10.8-9.34l10.6,13.03C38.03,55.72,38.11,54.48,37.92,53.22z"
      />
      <polygon
        fill={fill}
        points="57.2,30.87 64.44,21.2 54.34,3.45 47.73,6.02 54.91,8.95 	"
      />
      <polygon fill={fill} points="73.96,49.45 69.3,51.13 75.17,59.67 	" />
      <polygon fill={fill} points="71.25,55.22 67.24,59.17 74.5,59.77 	" />
      <path
        fill={fill}
        d="M33.81,45.12l6.68-1.79l4.67,5.21c0.39,0.42,0.94,0.73,1.56,0.87l24.24,5.31l-0.12-0.17
		c-2.56-3.44-6.15-6.16-10.84-7.19c-1.78-0.39-3.19-0.56-4.99-0.58c-0.11,0-6.39-5.62-6.39-5.62l7.06-1.89l-1.65-18.81l-5.21-3.12
		L28.59,42L33.81,45.12z"
      />
      <polygon fill={fill} points="89.65,3.25 82.35,0 88.81,4.03 	" />
      <path
        fill={fill}
        d="M49.15,8.89L46.87,7.3c-5.54,2.2-10.27,5.62-13.76,9.83l1.88,0.71C38.44,13.78,43.68,10.89,49.15,8.89z"
      />
      <path
        fill={fill}
        d="M43.06,20.92c-0.34,0.37-0.73,0.71-1.17,1c-0.44,0.3-0.84,0.51-1.2,0.64l0.15,1c0.75-0.24,1.46-0.59,2.13-1.06
		c0.67-0.46,1.24-0.99,1.71-1.58c0.47-0.59,0.83-1.21,1.07-1.87c0.24-0.66,0.32-1.32,0.22-2c-0.13-0.88-0.5-1.59-1.1-2.14
		c-0.6-0.55-1.4-0.76-2.4-0.64c-0.65,0.08-1.2,0.37-1.64,0.87c-0.45,0.5-0.62,1.06-0.53,1.67c0.09,0.63,0.4,1.09,0.91,1.38
		c0.51,0.29,1.08,0.4,1.71,0.32c0.2-0.02,0.41-0.04,0.64-0.05c0.23-0.01,0.37,0.03,0.44,0.11c0.1,0.37,0.06,0.76-0.13,1.17
		C43.67,20.16,43.4,20.55,43.06,20.92z"
      />
      <path
        fill={fill}
        d="M59.12,7.01c6.67-0.35,12.57,1.56,17.87,4.31l-0.48,2.01l3.74,1.46l7.62-9.76l-6.35-3.7L78.5,7.58
		c0.82,0.44,1.26,0.66,2.04,1.18l-0.53,0.82c-6.24-3.58-13.51-5.51-21.89-4.86C58.51,5.89,58.87,7.02,59.12,7.01z"
      />
    </g>
    <g opacity={0.3}>
      <polygon
        fill={fill}
        points="15.33,59.42 24.22,59.42 30.06,54.56 25.13,46.83 	"
      />
      <polygon
        fill={fill}
        points="58.35,34.55 59.32,42.73 67.29,46.45 75.23,47.2 60.93,29.49 	"
      />
      <polygon fill={fill} points="75.23,47.2 80.99,59.42 85.39,59.77 	" />
      <polygon
        fill={fill}
        points="41.13,53.13 42.1,57.5 41.9,59.42 63.77,59.42 63.77,56.91 43.15,51.6 	"
      />
    </g>
  </svg>
);

const style = {
  display: 'block',
  height: '100%',
};

interface Props {
  fill?: string;
  text?: boolean;
}

const Logo: React.FC<Props> = ({ fill = 'currentColor', text }) => {
  return !text ? DefaultLogo(fill) : TextLogo(fill);
};
export default Logo;
