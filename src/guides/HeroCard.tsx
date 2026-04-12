import React, { useState } from 'react';
import RankBadge from './RankBadge';
import SectBadge, { sectInfo } from './SectBadge';
import { Hero } from './heroes';

export default function HeroCard({
  hero,
  showRank = true,
}: {
  hero: Hero;
  showRank?: boolean;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleCardClick = () => {
    openModal();
  };

  return (
    <>
      <div
        onClick={handleCardClick}
        style={{
          margin: 6,
          border: '1px solid #ccc',
          borderRadius: 3,
          width: 125,
          overflow: 'hidden',
          cursor: 'pointer',
          transition: 'transform 0.2s ease-in-out',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        {/* Image */}
        <div
          style={{
            width: 125,
            height: 70,
            position: 'relative',
            overflow: 'hidden',
            background: hero.remoteImage
              ? `center / contain no-repeat url(${hero.remoteImage})`
              : undefined,
            backgroundColor: `${sectInfo[hero.sects[0]].color}40`, // Fallback color
          }}
        >
          {showRank && <RankBadge rank={hero.rank} />}

          <img src={hero.image} alt={hero.name} width="100%" />
          <div
            style={{
              position: 'absolute',
              left: 2,
              bottom: 2,
              color: 'white',
              fontSize: 10,
              fontWeight: 'bold',
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
            }}
          >
            {hero.name}
          </div>
          <div style={{ position: 'absolute', right: 1, bottom: 1 }}>
            {hero.sects.map((sect) => (
              <SectBadge sect={sect} height={30} fontSize={15} />
            ))}
          </div>
        </div>

        <div
          style={{
            padding: 4,
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
          }}
        >
          {hero.guides.map((guide, index) => (
            <div
              key={index}
              style={{ display: 'flex', alignItems: 'center', gap: 4 }}
            >
              {guide.sects.map((sect) => (
                <SectBadge key={sect} sect={sect} height={22} fontSize={10} />
              ))}
              <span style={{ fontSize: 13 }}>{guide.description}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
          onClick={closeModal}
        >
          <div
            style={{
              backgroundColor: 'white',
              borderRadius: 8,
              maxWidth: '600px',
              maxHeight: '80vh',
              overflow: 'hidden',
              position: 'relative',
              margin: '20px',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '20px 24px',
                borderBottom: '1px solid #e9ecef',
                backgroundColor: '#f8f9fa',
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
              }}
            >
              <h2 style={{ margin: 0, fontSize: 28, color: '#333' }}>
                {hero.name}
              </h2>
              <button
                onClick={closeModal}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: 24,
                  cursor: 'pointer',
                  color: '#666',
                  padding: '4px 8px',
                  borderRadius: 4,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#e9ecef';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                ×
              </button>
            </div>

            {/* Modal Content */}
            <div
              style={{
                padding: 24,
                overflow: 'auto',
                maxHeight: 'calc(80vh - 80px)',
              }}
            >
              {/* Hero details */}
              <div style={{ display: 'flex', gap: 20, marginBottom: 20 }}>
                {/* Hero image */}
                <div
                  style={{
                    width: 200,
                    height: 120,
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: 8,
                    background: hero.remoteImage
                      ? `center / cover no-repeat url(${hero.remoteImage})`
                      : undefined,
                    backgroundColor: `${sectInfo[hero.sects[0]].color}40`,
                  }}
                >
                  <img
                    src={hero.image}
                    alt={hero.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                  {showRank && (
                    <div style={{ position: 'absolute', top: 8, left: 8 }}>
                      <RankBadge rank={hero.rank} />
                    </div>
                  )}
                </div>

                {/* Hero info */}
                <div style={{ flex: 1 }}>
                  <div style={{ marginBottom: 16 }}>
                    <h4 style={{ margin: '0 0 8px 0', color: '#666' }}>
                      Sects:
                    </h4>
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                      {hero.sects.map((sect, index) => (
                        <SectBadge
                          key={index}
                          sect={sect}
                          height={36}
                          fontSize={16}
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 style={{ margin: '0 0 4px 0', color: '#666' }}>
                      Rank: <span style={{ color: '#000' }}>{hero.rank}</span>
                    </h4>
                  </div>
                </div>
              </div>

              {/* Guides section */}
              <div>
                <h3
                  style={{
                    margin: '0 0 16px 0',
                    borderBottom: '2px solid #eee',
                    paddingBottom: 8,
                  }}
                >
                  Guides ({hero.guides.length})
                </h3>
                <div
                  style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
                >
                  {hero.guides.map((guide, index) => (
                    <div
                      key={index}
                      style={{
                        padding: 16,
                        backgroundColor: '#f8f9fa',
                        borderRadius: 8,
                        border: '1px solid #e9ecef',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 12,
                          marginBottom: 8,
                        }}
                      >
                        <span style={{ fontWeight: 'bold', color: '#666' }}>
                          Guide {index + 1}:
                        </span>
                        {guide.sects.map((sect, sectIndex) => (
                          <SectBadge
                            key={sectIndex}
                            sect={sect}
                            height={28}
                            fontSize={12}
                          />
                        ))}
                      </div>
                      {guide.description && (
                        <p style={{ margin: 0, fontSize: 15, lineHeight: 1.4 }}>
                          {guide.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
