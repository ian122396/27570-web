import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface MDXContentProps {
  source: string
}

export function MDXContent({ source }: MDXContentProps) {
  return (
    <article className="surface" style={{ boxShadow: 'none' }}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ node, ...props }) => (
            <h2 style={{ marginTop: '1.5rem' }} {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h3 style={{ marginTop: '1.5rem' }} {...props} />
          ),
          a: ({ node, ...props }) => (
            <a {...props} target="_blank" rel="noreferrer" style={{ color: 'var(--brand)' }} />
          ),
          table: ({ node, ...props }) => (
            <div style={{ overflowX: 'auto' }}>
              <table {...props} />
            </div>
          ),
        }}
      >
        {source}
      </ReactMarkdown>
    </article>
  )
}
