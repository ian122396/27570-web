import { useI18n } from '../hooks/useI18n'

const galleryImages = [
  { src: '/gallery/2025-07-chassis-lin.jpg', caption: 'Chassis Lab' },
  { src: '/gallery/2025-07-driver-chen.jpg', caption: 'Drive Team' },
  { src: '/gallery/2025-08-electronics-tang.jpg', caption: 'Electronics' },
  { src: '/gallery/2025-08-vision-wang.jpg', caption: 'Vision Calibration' },
  { src: '/gallery/2025-09-brand-zhao.jpg', caption: 'Brand Workshop' },
  { src: '/gallery/2025-09-cad-guo.jpg', caption: 'CAD Review' },
  { src: '/gallery/2025-06-lab-night.jpg', caption: 'Lab Night' },
  { src: '/gallery/2025-05-outreach.jpg', caption: 'Outreach' },
]

export default function GalleryPage() {
  const { pick } = useI18n()

  return (
    <div className="container">
      <section style={{ marginBottom: '2rem' }}>
        <h1 className="section-heading">{pick({ zh: '图库', en: 'Gallery' })}</h1>
        <p className="section-subtitle">
          {pick({
            zh: '赛事、训练与日常瞬间（占位图，后续替换为真图）。',
            en: 'Competition, practice, and daily life photos (placeholders to be replaced).',
          })}
        </p>
      </section>

      <div
        className="grid"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}
      >
        {galleryImages.map((image) => (
          <figure
            key={image.src}
            className="surface"
            style={{ padding: 0, overflow: 'hidden', borderRadius: '1rem', boxShadow: 'none' }}
          >
            <img src={image.src} alt={image.caption} style={{ display: 'block', width: '100%' }} />
            <figcaption style={{ padding: '0.75rem 1rem', fontSize: '0.9rem' }}>
              {image.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}
