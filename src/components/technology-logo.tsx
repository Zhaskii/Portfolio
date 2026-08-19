function NextLogo() {
  return (
    <svg viewBox="0 0 32 32" role="presentation">
      <circle cx="16" cy="16" r="15" fill="#ffffff" />
      <path d="M10.2 9.2h3.8l8.3 11.3V9.2h2v13.7h-3.5L12.2 11v11.9h-2z" fill="#111111" />
      <path d="m19.8 17.2 4.6 6.1" stroke="#ffffff" strokeWidth="1.2" />
    </svg>
  );
}

function ReactLogo() {
  return (
    <svg viewBox="0 0 32 32" role="presentation">
      <circle cx="16" cy="16" r="2.6" fill="#61dafb" />
      <g fill="none" stroke="#61dafb" strokeWidth="1.45">
        <ellipse cx="16" cy="16" rx="12" ry="4.7" />
        <ellipse cx="16" cy="16" rx="12" ry="4.7" transform="rotate(60 16 16)" />
        <ellipse cx="16" cy="16" rx="12" ry="4.7" transform="rotate(120 16 16)" />
      </g>
    </svg>
  );
}

function TypeScriptLogo() {
  return (
    <svg viewBox="0 0 32 32" role="presentation">
      <rect x="1" y="1" width="30" height="30" rx="2" fill="#3178c6" />
      <path d="M7.2 14.2h10.2v2.7h-3.6V27h-3V16.9H7.2zm10.8 9.1c1.1.7 2.4 1.1 3.7 1.1 1.2 0 1.9-.4 1.9-1.1 0-.6-.5-1-2.1-1.7-2.3-.9-3.8-2-3.8-4.1 0-2.4 2-4.2 5.3-4.2 1.6 0 2.8.3 3.7.8l-.8 2.6a7 7 0 0 0-3-.8c-1.1 0-1.7.5-1.7 1 0 .7.7 1 2.4 1.7 2.4.9 3.5 2.1 3.5 4.1 0 2.4-1.8 4.4-5.6 4.4-1.6 0-3.2-.4-4-1z" fill="#ffffff" />
    </svg>
  );
}

function NodeLogo() {
  return (
    <svg viewBox="0 0 32 32" role="presentation">
      <path d="M16 1.8 28.3 8.9v14.2L16 30.2 3.7 23.1V8.9z" fill="#5fa04e" />
      <path d="M11.1 11.1h2.4v8.4c0 3-1.7 4.4-4.4 4.4-.6 0-1.3-.1-1.7-.3l.3-2c.3.1.7.2 1.2.2 1.4 0 2.2-.7 2.2-2.4zm3.9 10c.8.5 2 1 3.3 1 1.6 0 2.5-.7 2.5-1.8 0-1-.7-1.6-2.5-2.3-2.3-.8-3.8-2-3.8-4 0-2.3 1.9-4 5-4 1.5 0 2.6.3 3.3.7l-.6 2.1a6 6 0 0 0-2.8-.7c-1.6 0-2.3.9-2.3 1.6 0 1 .8 1.5 2.7 2.2 2.5.9 3.6 2.1 3.6 4.1 0 2.2-1.7 4.2-5.4 4.2-1.5 0-3-.4-3.7-.9z" fill="#ffffff" />
    </svg>
  );
}

function ExpressLogo() {
  return (
    <svg viewBox="0 0 32 32" role="presentation">
      <circle cx="16" cy="16" r="15" fill="#f7f7f5" />
      <path d="M5.7 16.3c0-4.4 2.6-7 6.4-7 4 0 6.1 2.9 6.1 6.7v1.1H8.5c.2 2.5 1.6 4 3.9 4 1.6 0 2.7-.7 3.2-2h2.5c-.7 2.7-2.8 4.3-5.8 4.3-4.1 0-6.6-2.7-6.6-7.1m2.9-1.2h6.8c-.1-2.2-1.4-3.5-3.3-3.5-2 0-3.2 1.3-3.5 3.5m9.8-5.5h2.9l3 4.4 3-4.4h2.8l-4.4 6.3 4.7 7.1h-2.9l-3.3-5.1-3.4 5.1H18l4.7-7z" fill="#111111" />
    </svg>
  );
}

function MongoLogo() {
  return (
    <svg viewBox="0 0 32 32" role="presentation">
      <path d="M16.2 1.6c-.5 3.5-2.8 5.6-5 8.3-2.1 2.6-3.8 5.6-3.1 9.1.7 4 3.8 6.7 7.5 7.2l.2 4.1h1l.2-4.1c3.7-.5 6.7-3.2 7.4-7.2.7-3.6-1.1-6.6-3.3-9.3-2.1-2.6-4.4-4.7-4.9-8.1" fill="#47a248" />
      <path d="M16.2 3.2v22.9" fill="none" stroke="#ffffff" strokeWidth="1" opacity=".8" />
    </svg>
  );
}

function PayloadLogo() {
  return (
    <svg viewBox="0 0 32 32" role="presentation">
      <rect x="1" y="1" width="30" height="30" rx="3" fill="#ffffff" />
      <path d="M8 7.5h10.2c4.2 0 6.8 2.3 6.8 6 0 4-2.8 6.3-7.2 6.3h-4.4v4.7H8zm5.4 4.2v4.1h4.2c1.5 0 2.3-.7 2.3-2.1 0-1.3-.8-2-2.3-2z" fill="#111111" />
      <path d="m18.7 17.2 5.7 7.3h-5.7l-5.3-7.3z" fill="#2768a5" />
    </svg>
  );
}

export function TechnologyLogo({ technology }: { technology: string }) {
  const logo = (() => {
    switch (technology) {
      case "Next.js":
        return <NextLogo />;
      case "React & TypeScript":
        return (
          <>
            <ReactLogo />
            <TypeScriptLogo />
          </>
        );
      case "Node.js & Express":
        return (
          <>
            <NodeLogo />
            <ExpressLogo />
          </>
        );
      case "MongoDB":
        return <MongoLogo />;
      case "Payload CMS":
        return <PayloadLogo />;
      default:
        return null;
    }
  })();

  return (
    <span
      className={`technology-logo ${technology.includes("&") ? "technology-logo-pair" : ""}`}
      aria-hidden="true"
    >
      {logo}
    </span>
  );
}
