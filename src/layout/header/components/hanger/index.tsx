import { Globe } from './globe';

export function Hanger() {
  return (
    <div className="absolute left-0 top-1/2 inline-block -translate-y-1/2 max-[720px]:left-auto max-[720px]:right-0 max-[720px]:top-[100vh] max-[720px]:size-[6em] max-[720px]:-translate-y-[110%]">
      <p className="absolute left-0 top-1/2 m-0 -translate-y-1/2 pl-[clamp(1.5em,4vw,2.5em)] pr-[5em] leading-[1.2] max-[720px]:hidden">
        <span className="block">Located</span>
        <span className="block">in the</span>
        <span className="block">Netherlands</span>
      </p>

      <svg
        viewBox="0 0 300 121"
        xmlns="http://www.w3.org/2000/svg"
        className="block h-[6em] w-auto max-[720px]:hidden"
      >
        <path
          className="fill-foreground"
          fillRule="evenodd"
          d="M239.633657,0 C272.770742,1.0182436e-15 299.633657,26.862915 299.633657,60 C299.633657,93.137085 272.770742,120 239.633657,120 L0,120 L0,0 L239.633657,0 Z M239.633657,18.7755102 C216.866,18.7755102 198.409167,37.232343 198.409167,60 C198.409167,82.767657 216.866,101.22449 239.633657,101.22449 C262.401314,101.22449 280.858147,82.767657 280.858147,60 C280.858147,37.232343 262.401314,18.7755102 239.633657,18.7755102 Z"
        />
      </svg>

      <div className="absolute right-[0.9em] top-[0.9em] z-10">
        <Globe />
      </div>
    </div>
  );
}
