export function Globe() {
  return (
    <div className="group relative size-[4.2em] overflow-hidden rounded-full bg-primary">
      <div className="absolute inset-0 animate-globe-pulse opacity-0 transition-opacity duration-1000 ease-in-out group-hover:opacity-100" />

      <div className="absolute left-1/2 top-1/2 size-[2.5em] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full text-[0.8em] max-[720px]:size-[3em]">
        <div className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 animate-globe-tilt overflow-hidden rounded-full shadow-[inset_0_0_0_.125em_hsl(var(--background))]">
          <div className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 animate-globe-sweep rounded-full text-[0.75em] shadow-[inset_.1em_0_0_.08em_hsl(var(--background))] [animation-delay:-1.8s]" />
          <div className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 animate-globe-sweep rounded-full text-[0.75em] shadow-[inset_.1em_0_0_.08em_hsl(var(--background))] [animation-delay:-0.9s]" />
          <div className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 animate-globe-sweep rounded-full text-[0.75em] shadow-[inset_.1em_0_0_.08em_hsl(var(--background))]" />
          <div className="absolute left-1/2 top-1/2 h-[55%] w-[150%] -translate-x-1/2 -translate-y-1/2 rounded-full text-[0.75em] shadow-[inset_0_0_0_.15em_hsl(var(--background))]" />
          <div className="absolute left-1/2 top-1/2 h-[0.15em] w-[150%] -translate-x-1/2 -translate-y-1/2 bg-background text-[0.75em]" />
        </div>
      </div>
    </div>
  );
}
