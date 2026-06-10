function StarsBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-white dark:bg-slate-950">
      <div className="hidden dark:block absolute top-[10%] right-[10%] w-[350px] h-[350px] bg-green-500/10 blur-[140px] rounded-full"></div>

      {/* BLUR STARS */}
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white blur-[1px]"
          style={{
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.6 + 0.2,

            boxShadow: `0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.4)`,
          }}
        />
      ))}
    </div>
  );
}

export default StarsBackground;
