import React from 'react';
import SectBadge, { SECT } from './SectBadge';
import { heros } from './heros';
import { Button } from 'antd';

export default function GuideHome() {
  const [activeSects, setActiveSects] = React.useState<SECT[]>(
    Object.keys(SECT) as SECT[]
  );

  const selectedHeros = heros.filter((hero) =>
    hero.sects.some((sect) => activeSects.includes(sect))
  );

  return (
    <div>
      <section
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          padding: '16px',
          gap: 16,
        }}
      >
        {Object.keys(SECT).map((sect) => (
          <div
            style={{
              cursor: 'pointer',
              opacity: activeSects.includes(sect as SECT) ? 1 : 0.3,
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
      <section
        style={{
          padding: '0 16px',
          display: 'flex',
          justifyContent: 'center',
          gap: 8,
        }}
      >
        <Button
          onClick={() => setActiveSects([])}
          disabled={activeSects.length === 0}
        >
          全清
        </Button>
        <Button
          onClick={() => setActiveSects(Object.keys(SECT) as SECT[])}
          disabled={activeSects.length === Object.keys(SECT).length}
        >
          全选
        </Button>
      </section>

      <hr />

      <section
        style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}
      >
        {/* Empty */}
        {selectedHeros.length === 0 && (
          <div style={{ padding: 16 }}>
            <h2>未找到符合所选流派的英雄</h2>
            <p>请选择其他流派以查看可用的英雄。</p>
          </div>
        )}

        {/* Hero Cards */}
        {selectedHeros.map((hero) => {
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
