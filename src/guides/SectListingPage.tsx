import React from 'react';
import SectBadge, { sectInfo } from './SectBadge';
import { sectCardSections } from './sectCards';
import './SectListingPage.css';

export default function SectListingPage() {
  return (
    <div className="sect-listing-page">
      <header className="sect-listing-header">
        <div className="sect-listing-header-inner">
          <a className="sect-listing-back" href={process.env.PUBLIC_URL || '/'}>
            <span aria-hidden="true">←</span> 英雄指南
          </a>
          <p className="sect-listing-eyebrow">AUTO GLADIATORS · 卡片图鉴</p>
          <h1>流派卡片</h1>
          <p className="sect-listing-intro">
            按流派查看卡片效果与关联流派。
          </p>
        </div>
      </header>

      <main className="sect-listing-content">
        {sectCardSections.map((section) => (
          <section className="sect-card-section" key={section.sect}>
            <div className="sect-card-section-heading">
              <SectBadge sect={section.sect} height={42} fontSize={20} />
              <div>
                <p className="sect-card-section-kicker">SECT.{section.sect}</p>
                <h2>{section.title}</h2>
              </div>
              <span className="sect-card-count">{section.cards.length} 张卡片</span>
            </div>

            <div className="sect-card-grid">
              {section.cards.map((card) => (
                <article className="sect-card" key={card.id}>
                  <div className="sect-card-top">
                    <img className="sect-card-icon" src={card.image} alt="" />
                    <div className="sect-card-identity">
                      <h3>{card.name}</h3>
                      <div
                        className="sect-card-tags"
                        aria-label={`关联流派：${card.sects
                          .map((sect) => sectInfo[sect].label)
                          .join('、')}`}
                      >
                        {card.sects.map((sect, index) => (
                          <div key={`${sect}-${index}`} title={sectInfo[sect].label}>
                            <SectBadge sect={sect} height={27} fontSize={13} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="sect-card-description">{card.description}</p>
                </article>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
