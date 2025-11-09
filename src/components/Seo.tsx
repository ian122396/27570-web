import { Helmet } from 'react-helmet-async'
import { buildSeo, buildOrganizationSchema, buildEventSchema } from '../lib/seo'

interface SeoProps {
  title?: string
  description?: string
  url?: string
  image?: string
}

export function Seo(props: SeoProps) {
  const meta = buildSeo(props)
  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      {meta.url && <meta property="og:url" content={meta.url} />}
      {meta.image && <meta property="og:image" content={meta.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      {meta.image && <meta name="twitter:image" content={meta.image} />}
      <script type="application/ld+json">
        {JSON.stringify(buildOrganizationSchema())}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(buildEventSchema())}
      </script>
    </Helmet>
  )
}
