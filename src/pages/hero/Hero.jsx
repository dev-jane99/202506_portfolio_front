function Hero() {
    return (
      <section className="bg-white dark:bg-zinc-900 text-zinc-800 dark:text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">JANE RYO</h1>
  
          <div className="w-16 h-[2px] bg-gray-400 dark:bg-gray-600 mx-auto" />
  
          <div className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
            <p>
              Born in <span className="font-bold text-black dark:text-white">Korea</span>
            </p>
            <p>
              Studied in <span className="font-bold">Ireland</span> & <span className="font-bold">The Netherlands</span>
            </p>
            <p>
              Worked in <span className="font-bold">New York</span>
            </p>
          </div>
  
          <div className="mt-6 flex justify-center gap-[61px] flex-wrap">
            <button
              onClick={() => window.open('/assets/hero/resume_en.pdf', '_blank')}
              className="inline-flex justify-center items-center border border-black dark:border-white px-5 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition min-w-[140px] font-medium"
            >
              English Resume
            </button>
            <button
              onClick={() => window.open('/assets/hero/resume_jp.pdf', '_blank')}
              className="inline-flex justify-center items-center border border-black dark:border-white bg-black text-white dark:bg-white dark:text-black px-5 py-2 rounded hover:opacity-90 transition min-w-[140px] font-medium"
            >
              日本語履歴書
            </button>
          </div>
        </div>
      </section>
      
    );
  }
  
  export default Hero;
  