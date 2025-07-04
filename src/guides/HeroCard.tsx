import React from 'react';
import RankBadge from './RankBadge';
import SectBadge from './SectBadge';
import { Hero } from './heroes';

export default function HeroCard({
  hero,
  showRank = true,
}: {
  hero: Hero;
  showRank?: boolean;
}) {
  return (
    <div
      style={{
        margin: 6,
        border: '1px solid #ccc',
        borderRadius: 3,
        width: 125,
        overflow: 'hidden',
      }}
    >
      {/* Image */}
      <div
        style={{
          width: 125,
          height: 70,
          position: 'relative',
          overflow: 'hidden',
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
  );
}
