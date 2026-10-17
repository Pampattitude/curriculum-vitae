export const Languages = () => (
  <div className="languages">
    <h2 className="section-title">Languages</h2>

    <div className="px-4 py-2 inline-grid grid-cols-2 gap-x-8 print:inline-flex print:gap-x-1 print:px-0">
      <div className="print:after:content-[',']">
        <span className="print:hidden">🇫🇷 </span>Français
      </div>
      <div className="print:mr-2 text-gray-400 print:after:content-[';']">
        <span className="not-print:text-xs">native</span>
      </div>
      <div className="print:after:content-[',']">
        <span className="print:hidden">🇬🇧 </span>English
      </div>
      <div className="print:mr-2 text-gray-400">
        <span className="not-print:text-xs">fluent</span>
      </div>
      {/* <div>
        <span className="print:hidden">🇧🇷 </span>Português
      </div>
      <div className="print:mr-8 text-gray-400">
        <span className="not-print:text-xs">A2, learning</span>
      </div> */}
    </div>
  </div>
);
