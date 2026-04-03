import React from 'react';

const products = [
  {
    id: 1,
    name: 'Resume Review Pro',
    description: 'Professional feedback to sharpen your resume and improve your callbacks.',
    price: 19.99,
    image: '📝',
    rating: 4.7,
    reviews: 1284
  },
  {
    id: 2,
    name: 'Interview Prep Kit',
    description: 'Mock questions, answer frameworks, and interview confidence boosters.',
    price: 29.99,
    image: '💼',
    rating: 4.8,
    reviews: 932
  },
  {
    id: 3,
    name: 'Application Tracker Pro',
    description: 'Track applications, follow-ups, interviews, and offers in one dashboard.',
    price: 9.99,
    image: '📊',
    rating: 4.6,
    reviews: 2011
  },
  {
    id: 4,
    name: 'Cover Letter Pack',
    description: 'Editable templates for tailored job applications across different roles.',
    price: 14.99,
    image: '📄',
    rating: 4.5,
    reviews: 744
  },
  {
    id: 5,
    name: 'Networking Scripts',
    description: 'Helpful outreach messages for recruiters, hiring managers, and referrals.',
    price: 12.99,
    image: '🤝',
    rating: 4.4,
    reviews: 560
  },
  {
    id: 6,
    name: 'Salary Negotiation Guide',
    description: 'Learn how to negotiate compensation with confidence and clarity.',
    price: 24.99,
    image: '💰',
    rating: 4.9,
    reviews: 1502
  }
];

const StoreFront = ({ addToCart }) => {
  return (
    <main style={{ background: '#eaeded', minHeight: 'calc(100vh - 108px)' }}>
      <section
        style={{
          background:
            'linear-gradient(to bottom, rgb(196, 233, 245), rgb(234, 237, 237))',
          padding: '36px 24px 120px'
        }}
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div
            style={{
              background: '#fff',
              padding: '20px 24px',
              fontSize: '15px',
              boxShadow: '0 1px 2px rgba(0,0,0,0.08)'
            }}
          >
            You are on trackr.com. Shop career tools, interview prep, and job search resources.
          </div>
        </div>
      </section>

      <section style={{ maxWidth: '1400px', margin: '-80px auto 0', padding: '0 24px 32px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px'
          }}
        >
          {products.map((product) => (
            <article
              key={product.id}
              style={{
                background: '#fff',
                border: '1px solid #ddd',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                minHeight: '420px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.08)'
              }}
            >
              <h2
                style={{
                  fontSize: '20px',
                  lineHeight: 1.3,
                  margin: '0 0 12px'
                }}
              >
                {product.name}
              </h2>

              <div
                style={{
                  height: '180px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#f7f7f7',
                  fontSize: '72px',
                  borderRadius: '6px',
                  marginBottom: '14px'
                }}
              >
                {product.image}
              </div>

              <div style={{ color: '#007185', fontSize: '14px', marginBottom: '8px' }}>
                {'★'.repeat(4)}☆ <span style={{ marginLeft: '6px' }}>{product.rating}</span>{' '}
                <span style={{ marginLeft: '6px' }}>({product.reviews.toLocaleString()})</span>
              </div>

              <p
                style={{
                  color: '#0f1111',
                  fontSize: '14px',
                  lineHeight: 1.5,
                  flexGrow: 1,
                  margin: '0 0 14px'
                }}
              >
                {product.description}
              </p>

              <div style={{ marginBottom: '8px' }}>
                <span style={{ fontSize: '28px' }}>${product.price.toFixed(2)}</span>
              </div>

              <div style={{ color: '#067d62', fontSize: '14px', marginBottom: '12px' }}>
                In Stock
              </div>

              <button
                type="button"
                onClick={() => addToCart(product)}
                style={{
                  background: '#ffd814',
                  border: '1px solid #fcd200',
                  borderRadius: '20px',
                  padding: '10px 16px',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
              >
                Add to Cart
              </button>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default StoreFront;