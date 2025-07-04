import React from 'react';

export default function RankBadge({ rank }: { rank: string }) {
  let bgColor = '#000';
  if (rank === 'S') {
    bgColor = '#ffcc00'; // Gold for S rank
  } else if (rank === 'A') {
    bgColor = '#686de0'; // Blue for A rank
  } else if (rank === 'B') {
    bgColor = '#6ab04c'; // Green for B rank
  } else if (rank === 'C') {
    bgColor = '#f0932b'; // Orange for C rank
  } else if (rank === 'D') {
    bgColor = '#303952'; // Red for D rank
  }
  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        fontSize: 12,
        fontWeight: 'bold',
        padding: '0 4px',
        backgroundColor: bgColor,
        color: 'white',
        borderBottomRightRadius: 2,
      }}
    >
      {rank}
    </div>
  );
}
