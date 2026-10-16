export const Languages = () => (
  <div className="languages">
    <h2>Languages</h2>

    <div className="px-4 py-2 inline-grid grid-cols-2 gap-x-8">
      <div>
        <span className="print:hidden">🇫🇷 </span>Français
      </div>
      <div className="print:mr-8 text-gray-400">
        <span className="not-print:text-xs">native</span>
      </div>
      <div>
        <span className="print:hidden">🇬🇧 </span>English
      </div>
      <div className="print:mr-8 text-gray-400">
        fluent
      </div>
      {/* <div>
        <span className="print:hidden">🇧🇷 </span>Português
      </div>
      <div className="print:mr-8 text-gray-400">
        A2<span className="text-xs">, learning</span>
      </div> */}
    </div>
  </div>
);
