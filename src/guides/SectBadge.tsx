import React from 'react';

export enum SECT {
  ATTACK = 'ATTACK',
  CRIT = 'CRIT',
  EVADE = 'EVADE',
  FURY = 'FURY',
  HEALTH = 'HEALTH',
  FROST = 'FROST',
  VULNERABLE = 'VULNERABLE',
  POISON = 'POISON',
  REGEN = 'REGEN',
  SHIELD = 'SHIELD',
  ULTI = 'ULTI',
  WARD = 'WARD',
  CHAOS = 'CHAOS',
  NONE = 'NONE',
}

const sectInfo: Record<SECT, { label: string; color: string }> = {
  [SECT.ATTACK]: { label: '普', color: '#554a8a' },
  [SECT.CHAOS]: { label: '混', color: '#a3a0de' },
  [SECT.CRIT]: { label: '暴', color: '#da8841' },
  [SECT.EVADE]: { label: '闪', color: '#9343ab' },
  [SECT.FURY]: { label: '火', color: '#b34e49' },
  [SECT.HEALTH]: { label: '命', color: '#f4be01' },
  [SECT.FROST]: { label: '冰', color: '#47a1af' },
  [SECT.VULNERABLE]: { label: '伤', color: '#ce33b3' },
  [SECT.POISON]: { label: '毒', color: '#3f9b65' },
  [SECT.REGEN]: { label: '回', color: '#b3ca2f' },
  [SECT.SHIELD]: { label: '盾', color: '#8c623a' },
  [SECT.ULTI]: { label: '大', color: '#5d8ed2' },
  [SECT.WARD]: { label: '卫', color: '#d5798a' },
  [SECT.NONE]: { label: '无', color: '#9ec7d2' },
};

export default function SectBadge({
  sect,
  height = 24,
  fontSize = 12,
}: {
  sect: SECT;
  height?: number;
  fontSize?: number;
}) {
  return (
    <div
      style={{
        height,
        fontSize,
        aspectRatio: 'cos(30deg)',
        clipPath: 'polygon(-50% 50%,50% 100%,150% 50%,50% 0)',
        background: sectInfo[sect].color,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 'bold',
        textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2), 0 2px 4px rgba(0,0,0,0.1)',
      }}
    >
      {sectInfo[sect].label}
    </div>
  );
}
