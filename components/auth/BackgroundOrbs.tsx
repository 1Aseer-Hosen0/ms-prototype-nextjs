export function BackgroundOrbs() {
  return (
    <>
      {/* Orb 1 - Top Right */}
      <div
        className="fixed w-[500px] h-[500px] rounded-full pointer-events-none blur-[90px] z-0"
        style={{
          background: 'rgba(59, 130, 196, 0.12)',
          top: '-120px',
          right: '-80px',
        }}
        aria-hidden="true"
      />

      {/* Orb 2 - Bottom Left */}
      <div
        className="fixed w-[400px] h-[400px] rounded-full pointer-events-none blur-[90px] z-0"
        style={{
          background: 'rgba(13, 31, 60, 0.07)',
          bottom: '-80px',
          left: '-100px',
        }}
        aria-hidden="true"
      />

      {/* Orb 3 - Center */}
      <div
        className="fixed w-[300px] h-[300px] rounded-full pointer-events-none blur-[90px] z-0"
        style={{
          background: 'rgba(147, 197, 253, 0.10)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        aria-hidden="true"
      />
    </>
  );
}
