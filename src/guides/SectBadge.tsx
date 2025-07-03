import React from 'react';

export enum SECT {
  ATTACK = 'ATTACK', // 普攻
  CRIT = 'CRIT', // 暴击
  EVADE = 'EVADE', // 闪避
  FURY = 'FURY', // 怒火
  HEALTH = 'HEALTH', // 生命
  FROST = 'FROST', // 冰霜
  VULNERABLE = 'VULNERABLE', // 易伤
  POISON = 'POISON', // 中毒
  REGEN = 'REGEN', // 生命回复
  SHIELD = 'SHIELD', // 盾牌
  ULTI = 'ULTI', // 大招
  WARD = 'WARD', // 守卫
  CHAOS = 'CHAOS', // 混沌
  NONE = 'NONE', // 无流派
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
