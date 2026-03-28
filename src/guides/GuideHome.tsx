import React from 'react';
import { Button } from 'antd';

import SectBadge, { SECT } from './SectBadge';
import { heroes, Rank } from './heroes';
import HeroCard from './HeroCard';
import { loops } from './loops';

export default function GuideHome() {
  const [activeSects, setActiveSects] = React.useState<SECT[]>(
    Object.keys(SECT) as SECT[]
  );
  const [showRank, setShowRank] = React.useState(true);

  const selectedheroes = heroes.filter((hero) =>
    hero.sects.every((sect) => activeSects.includes(sect))
  );

  const selectedLoops = loops.filter((loop) =>
    loop.requiredSects.every((sect) => activeSects.includes(sect))
  );
  const blueLoops = selectedLoops.filter((l) => l.route === 'blue');
  const redLoops = selectedLoops.filter((l) => l.route === 'red');

  const sHero = selectedheroes.filter(({ rank }) => rank === Rank.S);
  const aHero = selectedheroes.filter(({ rank }) => rank === Rank.A);
  const bHero = selectedheroes.filter(({ rank }) => rank === Rank.B);
  const cHero = selectedheroes.filter(({ rank }) => rank === Rank.C);
  const dHero = selectedheroes.filter(({ rank }) => rank === Rank.D);

  return (
    <div>
      <section
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          padding: 12,
          gap: 12,
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

      <section
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 8,
          padding: 16,
          borderTop: '1px solid #a5b1c2',
          borderBottom: '1px solid #a5b1c2',
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
        <Button onClick={() => setShowRank((prev) => !prev)}>
          {showRank ? '隐藏' : '显示'}评级
        </Button>
      </section>

      {/* Empty */}
      {selectedheroes.length === 0 && (
        <div style={{ padding: 16, textAlign: 'center' }}>
          <h2>未找到符合所选流派的英雄</h2>
          <p>请选择其他流派以查看可用的英雄。</p>
        </div>
      )}

      {/* Hero Cards */}
      {[sHero, aHero, bHero, cHero, dHero]
        .filter((list) => list.length)
        .map((heroGroup, index) => (
          <section
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginTop: 10,
            }}
            key={index}
          >
            {heroGroup.map((hero) => (
              <HeroCard hero={hero} showRank={showRank} />
            ))}
          </section>
        ))}

      {/* Loop Chains */}
      {selectedLoops.length > 0 && (
        <section style={{ padding: '16px 12px', borderTop: '1px solid #a5b1c2', marginTop: 12 }}>
          <h3 style={{ margin: '0 0 12px', textAlign: 'center', color: '#333' }}>循环链路</h3>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
            {blueLoops.length > 0 && (
              <div style={{ flex: '1 1 280px', maxWidth: 480 }}>
                <div style={{ fontWeight: 'bold', color: '#47a1af', marginBottom: 8, fontSize: 14 }}>
                  🔵 经由 魔能爆轰 回路
                </div>
                {blueLoops.map((loop) => (
                  <div key={loop.id} style={{ marginBottom: 8, fontSize: 13, display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 4 }}>
                    <span style={{ fontWeight: 'bold', marginRight: 2 }}>{loop.label.split(' ')[0]}</span>
                    {loop.requiredSects.map((sect) => (
                      <SectBadge key={sect} sect={sect} height={22} fontSize={11} />
                    ))}
                    <span style={{ color: '#666', fontSize: 12 }}>{loop.label.split(/^[①-⑫]\s*/)[1]}</span>
                  </div>
                ))}
              </div>
            )}
            {redLoops.length > 0 && (
              <div style={{ flex: '1 1 280px', maxWidth: 480 }}>
                <div style={{ fontWeight: 'bold', color: '#b34e49', marginBottom: 8, fontSize: 14 }}>
                  🔴 经由 物理暴击 回路
                </div>
                {redLoops.map((loop) => (
                  <div key={loop.id} style={{ marginBottom: 8, fontSize: 13, display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 4 }}>
                    <span style={{ fontWeight: 'bold', marginRight: 2 }}>{loop.label.split(' ')[0]}</span>
                    {loop.requiredSects.map((sect) => (
                      <SectBadge key={sect} sect={sect} height={22} fontSize={11} />
                    ))}
                    <span style={{ color: '#666', fontSize: 12 }}>{loop.label.split(/^[①-⑫]\s*/)[1]}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
}
