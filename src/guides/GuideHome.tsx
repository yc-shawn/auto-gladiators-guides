import React from 'react';
import SectBadge, { SECT } from './SectBadge';
import { heros } from './heros';

export default function GuideHome() {
  const [activeSects, setActiveSects] = React.useState<SECT[]>(
    Object.keys(SECT) as SECT[]
  );

  return (
    <div>
      <section
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          padding: '16px',
          gap: 16,
        }}
      >
        {Object.keys(SECT).map((sect) => (
          <div
            style={{
              cursor: 'pointer',
              opacity: activeSects.includes(sect as SECT) ? 1 : 0.5,
            }}
            key={sect}
            onClick={() => {
              setActiveSects((prev) =>
                prev.includes(sect as SECT)
                  ? prev.filter((s) => s !== sect)
                  : [...prev, sect as SECT]
              );
            }}
          >
            <SectBadge sect={sect as SECT} height={48} fontSize={16} />
          </div>
        ))}
      </section>

      <hr />

      <section>
        {heros.map((hero) => {
          return (
            <div style={{ margin: 12, border: '1px solid #ccc', width: 125 }}>
              {/* Image */}
              <div
                style={{
                  width: 125,
                  height: 70,
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <img src={hero.image} alt={hero.name} width="100%" />
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
                    {guide.sets.map((sect) => (
                      <SectBadge
                        key={sect}
                        sect={sect}
                        height={22}
                        fontSize={10}
                      />
                    ))}
                    <span style={{ fontSize: 13 }}>{guide.description}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
