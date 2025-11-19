export default function Hero({
  title,
  subtitle,
  image = '/hero-maple.jpg',
  overlay = 'black',
}: {
  title: string;
  subtitle?: string;
  image?: string;
  overlay?: 'multi' | 'red' | 'white' | 'black';
}) {
  const style = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
  } as React.CSSProperties;

  const overlayClass = {
    multi: 'hero-overlay-multi',
    red: 'hero-overlay-red',
    white: 'hero-overlay-white',
    black: 'hero-overlay-black',
  }[overlay || 'multi'];

  return (
    <section className="relative w-full hero-bg min-h-[350px]" style={style}>
      <div className={`absolute inset-0 ${overlayClass}`} />
      <div className="relative z-10 flex items-center justify-center min-h-[350px] w-screen">
        <div className="flex flex-col items-center justify-center w-screen px-4 text-center text-white">
          <h1 className="hero-title mb-4">{title}</h1>
          {subtitle && <p className="hero-sub max-w-3xl mx-auto mb-8">{subtitle}</p>}
        </div>
      </div>
    </section>
  );
}