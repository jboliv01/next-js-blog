// ClientSideChart.tsx
'use client'

import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { useTheme } from 'next-themes';
import 'chart.js/auto';

const ClientSideChart = ({ tagCounts, sortedTags }) => {
  const { theme, resolvedTheme } = useTheme();
  const isDarkMode = theme === 'dark' || resolvedTheme === 'dark';
  console.log(isDarkMode)
  // Function to generate color variations
  const generateColorVariations = (color: string, count: number): string[] => {
    let variations: string[] = []; // Explicitly type the array as string[]
    let opacityIncrement = 1 / count;
    for (let i = 0; i < count; i++) {
      const opacity = (i + 1) * opacityIncrement;
      // Generate color with opacity and push it to the variations array
      variations.push(`${color}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`);
    }
    return variations;
  };

  // Create variations for each of the two primary colors
  const colorVariationsLight = generateColorVariations('#98f1e4', Math.ceil(sortedTags.length / 2));
  const colorVariationsDark = generateColorVariations('#41b19f', Math.floor(sortedTags.length / 2));
  const colorVariations = [...colorVariationsLight, ...colorVariationsDark];

  const pieData = {
    labels: sortedTags.map(tag => tag.toUpperCase()),
    datasets: [
      {
        data: sortedTags.map(tag => tagCounts[tag]),
        backgroundColor: colorVariationsDark,
        borderColor: isDarkMode ? 'white' : 'black', // Using white for border to distinguish between similar colors
        borderWidth: 0,
        hoverBackgroundColor: isDarkMode ? 'white' : 'darkgray',
        borderRadius: 2,

      },
    ],
  };

  const options = {
    responsive: true,
    indexAxis: 'y',
    scales: {
      x: {
        display: false,
        stacked: false,
        ticks: {
          color: isDarkMode ? 'white' : 'black',

        },
        grid: {
          display: false,
          drawTicks: true,
        },
        border: {
        },
      },
      y: {
        stacked: false,
        ticks: {
          color: isDarkMode ? 'white' : '#41b19f',
          font: {
            size: 14,
            weight: 'normal',
          },
      },
        grid: {
          display: false,
        },
        border: {
        },
      },
    },
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: isDarkMode ? 'white' : 'black',
          font: {
            weight: 'bold',
          }

        },
        display: false,
      },
      title: {
        display: false,
        text: 'Blog Tags Distribution',
      },
    },
  };

  return <div className='chart-container pt-10' style={{ height: '420px', width: '420px' }}>
    <Bar data={pieData} options={options} />
  </div>;
};

export default ClientSideChart;
