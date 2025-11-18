export default function Hero({
  title,
  subtitle,
  image = '/hero-maple.jpg',
  overlay = 'multi',
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
    <section className="relative w-full hero-bg" style={style}>
      <div className={`absolute inset-0 ${overlayClass}`} />
      <div className="relative z-10 py-28">
        <div className="site-container text-center text-white px-4">
          <h1 className="hero-title mb-4">{title}</h1>
          {subtitle && <p className="hero-sub max-w-3xl mx-auto mb-8">{subtitle}</p>}
        </div>
      </div>
    </section>
  );
}