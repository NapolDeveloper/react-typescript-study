import CanvasPractice from '../components/CanvasPractice';

const BASE_CANVAS_HEIGHT = 400;

export default function CanvasPracticePage() {
  const drawArt = (context: CanvasRenderingContext2D) => {
    // sky
    context.fillStyle = 'blue';
    context.fillRect(0, 0, window.innerWidth, BASE_CANVAS_HEIGHT / 2);

    // grass
    context.fillStyle = '#72db1b';
    context.fillRect(0, BASE_CANVAS_HEIGHT / 2, window.innerWidth, BASE_CANVAS_HEIGHT / 2);

    context.fillStyle = '#5a3505';
    const centerPoint = {
      x: window.innerWidth / 2,
      y: BASE_CANVAS_HEIGHT / 2,
    };
  };
  const drawExample = (context: CanvasRenderingContext2D) => {
    context.fillStyle = 'rgba(255, 0, 0, 0.637)';
    context.fillRect(20, 20, 100, 120);

    context.fillStyle = '#00ff003b';
    context.fillRect(90, 95, 100, 100);
  };
  return (
    <>
      <h1>Example</h1>
      <CanvasPractice draw={drawExample} width={window.innerWidth} height={BASE_CANVAS_HEIGHT} />
      <h1>Art</h1>
      <CanvasPractice draw={drawArt} width={window.innerWidth} height={BASE_CANVAS_HEIGHT} />
    </>
  );
}
