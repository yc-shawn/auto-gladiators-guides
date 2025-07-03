import React from 'react';
import { Breadcrumb, Layout, theme } from 'antd';

const { Content, Footer } = Layout;

const items = [
  { key: 'ATTACK', label: '攻', color: '#554a8a' },
  { key: 'CHAOS', label: '混', color: '#a3a0de' },
  { key: 'CRIT', label: '暴', color: '#da8841' },
  { key: 'DODGE', label: '闪', color: '#9343ab' },
  { key: 'FIRE', label: '火', color: '#b34e49' },
  { key: 'HEALTH', label: '命', color: '#f4be01' },
  { key: 'ICE', label: '冰', color: '#47a1af' },
  { key: 'INJURY', label: '伤', color: '#ce33b3' },
  { key: 'POISON', label: '毒', color: '#3f9b65' },
  { key: 'RECOVERY', label: '回', color: '#b3ca2f' },
  { key: 'SHIELD', label: '盾', color: '#8c623a' },
  { key: 'SPELL', label: '法', color: '#5d8ed2' },
  { key: 'GUARD', label: '卫', color: '#d5798a' },
  { key: 'NONE', label: '无', color: '#9ec7d2' },
];

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <div
        style={{
          display: 'flex',
          padding: '16px',
          gap: 16,
        }}
      >
        {items.map((item) => (
          <div
            key={item.key}
            style={{
              height: 48,
              aspectRatio: 'cos(30deg)',
              clipPath: 'polygon(-50% 50%,50% 100%,150% 50%,50% 0)',
              background: item.color,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '16px',
              fontWeight: 'bold',
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2), 0 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            {item.label}
          </div>
        ))}
      </div>
      <Content style={{ padding: '0 48px' }}>
        <Breadcrumb
          style={{ margin: '16px 0' }}
          items={[{ title: 'Home' }, { title: 'List' }, { title: 'App' }]}
        />
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          Content
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Auto Gladiators Guides</Footer>
    </Layout>
  );
};

export default App;
