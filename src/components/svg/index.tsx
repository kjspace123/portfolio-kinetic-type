import type { PropsWithChildren, SVGProps } from 'react';

interface ChildProps extends SVGProps<SVGElement> {
  name?: 'Circle' | 'Rectangle' | string;
}

function child({ name = '', ...props }: ChildProps) {
  switch (name) {
    case 'Circle':
      return <circle {...(props as SVGProps<SVGCircleElement>)} />;

    case 'Rectangle':
      return <rect {...(props as SVGProps<SVGRectElement>)} />;

    default:
      return <path {...(props as SVGProps<SVGPathElement>)} />;
  }
}

Svg.Child = child;

interface SvgProps extends PropsWithChildren<SVGProps<SVGSVGElement>> {
  id?: string;
  className?: string;
  width?: string | number;
  height?: string | number;
  viewBox?: string;
}

export function Svg({
  id,
  className,
  width = '100',
  height = '100',
  viewBox = '',
  children,
  ...props
}: SvgProps) {
  return (
    <svg
      id={id}
      className={className}
      width={width}
      height={height}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      {children}
    </svg>
  );
}
