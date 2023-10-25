import { useState } from 'react';

// Define data type for Box's props
type boxType = {
	children: string;
	color: string;
	position: {x: number, y: number};
	onMove: (dx: number, dy: number) => void
}

interface ICoordinates {
	x: number;
	y: number;
}

export function Box({children, color, position, onMove}: boxType) {
	// Define data type for useState React Hook as *Interface for Object or null*
  const [lastCoordinates, setLastCoordinates] = useState<ICoordinates | null>(null);

	// Define data type for event as Pointer event on Div-Element / e.target as HTML-Div-Element
  function handlePointerDown(e: React.PointerEvent<HTMLDivElement>) {
    (e.target as HTMLDivElement).setPointerCapture(e.pointerId);
    setLastCoordinates({
      x: e.clientX,
      y: e.clientY,
    });
  }

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (lastCoordinates) {
      setLastCoordinates({
        x: e.clientX,
        y: e.clientY,
      });
      const dx = e.clientX - lastCoordinates.x;
      const dy = e.clientY - lastCoordinates.y;
      onMove(dx, dy);
    }
  }

  function handlePointerUp() {
    setLastCoordinates(null);
  }

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      style={{
        width: 100,
        height: 100,
        cursor: 'grab',
        backgroundColor: color,
        position: 'absolute',
        border: '1px solid black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transform: `translate(
          ${position.x}px,
          ${position.y}px
        )`,
      }}
    >{children}</div>
  );
}
