import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 dot-grid" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent/8 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="text-center max-w-md relative z-10">
        {/* Glitch-style 404 */}
        <div className="relative mb-6">
          <h1
            className="text-[10rem] sm:text-[12rem] font-black leading-none gradient-text select-none"
            style={{ lineHeight: 0.85 }}
          >
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <span className="text-[10rem] sm:text-[12rem] font-black text-accent blur-xl" style={{ lineHeight: 0.85 }}>
              404
            </span>
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
          Page Not Found
        </h2>
        <p className="text-muted mb-4 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <p className="text-xs text-muted/60 font-mono mb-8">
          Error: ENOENT — No such route in this portfolio
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent hover:bg-accent-dark text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
