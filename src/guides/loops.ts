import { SECT } from './SectBadge';

export type Loop = {
  id: number;
  label: string;
  summary: string;
  route: 'blue' | 'red';
  requiredSects: SECT[];
};

export const loops: Loop[] = [
  // 🔵 经由 魔能爆轰 回路（法伤→暴击）
  // 魔能爆轰属于大招流（ULTI），所有蓝色路线都需要大招流
  {
    id: 1,
    label: '① 爆裂冰霜 → 刺骨严寒 → 魔能爆轰',
    summary: '暴击→寒霜→法伤→暴击',
    route: 'blue',
    requiredSects: [SECT.CRIT, SECT.FROST, SECT.ULTI],
  },
  {
    id: 2,
    label: '② 爆裂怒火 → 折磨绝咒 → 魔能爆轰',
    summary: '暴击→怒火→法伤→暴击',
    route: 'blue',
    requiredSects: [SECT.CRIT, SECT.FURY, SECT.ULTI],
  },
  {
    id: 3,
    label: '③ 爆裂回复 → 暗影射线 → 魔能爆轰',
    summary: '暴击→回复→法伤→暴击',
    route: 'blue',
    requiredSects: [SECT.CRIT, SECT.REGEN, SECT.ULTI],
  },
  {
    id: 4,
    label: '④ 爆裂回复 → 极寒疗愈 → 刺骨严寒 → 魔能爆轰',
    summary: '暴击→回复→寒霜→法伤→暴击',
    route: 'blue',
    requiredSects: [SECT.CRIT, SECT.REGEN, SECT.FROST, SECT.ULTI],
  },
  {
    id: 5,
    label: '⑤ 爆裂回复 → 愈合之焰 → 折磨绝咒 → 魔能爆轰',
    summary: '暴击→回复→怒火→法伤→暴击',
    route: 'blue',
    requiredSects: [SECT.CRIT, SECT.REGEN, SECT.FURY, SECT.ULTI],
  },
  {
    id: 6,
    label: '⑥ 爆裂护盾 → 寒冰护盾 → 刺骨严寒 → 魔能爆轰',
    summary: '暴击→护盾→寒霜→法伤→暴击',
    route: 'blue',
    requiredSects: [SECT.CRIT, SECT.SHIELD, SECT.FROST, SECT.ULTI],
  },
  {
    id: 7,
    label: '⑦ 爆裂护盾 → 燃烧护盾 → 折磨绝咒 → 魔能爆轰',
    summary: '暴击→护盾→怒火→法伤→暴击',
    route: 'blue',
    requiredSects: [SECT.CRIT, SECT.SHIELD, SECT.FURY, SECT.ULTI],
  },
  {
    id: 8,
    label: '⑧ 爆裂回复 → 疗伤护盾 → 寒冰护盾 → 刺骨严寒 → 魔能爆轰',
    summary: '暴击→回复→护盾→寒霜→法伤→暴击',
    route: 'blue',
    requiredSects: [SECT.CRIT, SECT.REGEN, SECT.SHIELD, SECT.FROST, SECT.ULTI],
  },
  {
    id: 9,
    label: '⑨ 爆裂回复 → 疗伤护盾 → 燃烧护盾 → 折磨绝咒 → 魔能爆轰',
    summary: '暴击→回复→护盾→怒火→法伤→暴击',
    route: 'blue',
    requiredSects: [SECT.CRIT, SECT.REGEN, SECT.SHIELD, SECT.FURY, SECT.ULTI],
  },
  // 🔴 经由 物理暴击 回路（物理→暴击）
  // 物理攻击为常驻，无需选择物理流派也可触发，故不列入 requiredSects
  {
    id: 10,
    label: '⑩ 爆裂护盾 → 护盾重击 → (物理暴击)',
    summary: '暴击→护盾→物理→暴击',
    route: 'red',
    requiredSects: [SECT.CRIT, SECT.SHIELD],
  },
  {
    id: 11,
    label: '⑪ 爆裂回复 → 疗伤护盾 → 护盾重击 → (物理暴击)',
    summary: '暴击→回复→护盾→物理→暴击',
    route: 'red',
    requiredSects: [SECT.CRIT, SECT.REGEN, SECT.SHIELD],
  },
  {
    id: 12,
    label: '⑫ 爆裂回复 → 圣光爆破 → (物理暴击)',
    summary: '暴击→回复→物理→暴击',
    route: 'red',
    requiredSects: [SECT.CRIT, SECT.REGEN],
  },
];
