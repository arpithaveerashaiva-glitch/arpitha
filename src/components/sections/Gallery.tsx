// Placeholder tiles. Real work samples replace these later.
export function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-16 py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <h2 className="font-display text-4xl font-light sm:text-6xl">Gallery</h2>
        <p className="mt-4 text-lg text-ivory-300">
          Work samples and session highlights will appear here.
        </p>
      </div>
      <ul
        className="mt-10 flex snap-x gap-4 overflow-x-auto px-6 pb-4 sm:px-10"
        aria-label="Gallery placeholders"
      >
        {Array.from({ length: 6 }, (_, i) => (
          <li
            key={i}
            className="flex aspect-[4/5] w-60 shrink-0 snap-start items-end border border-dashed border-copper-500/50 bg-forest-900 p-4 sm:w-72"
          >
            <span className="text-sm text-ivory-300">[Work sample {i + 1}]</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
