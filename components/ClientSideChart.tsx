// ClientSideChart.tsx
'use client'

import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const ClientSideChart = ({ tagCounts, sortedTags }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
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
    labels: sortedTags,
    datasets: [
      {
        data: sortedTags.map(tag => tagCounts[tag]),
        backgroundColor: isDarkMode ? colorVariationsDark : colorVariationsLight,
        borderColor: isDarkMode ? 'white' : 'black', // Using white for border to distinguish between similar colors
        borderWidth: 1,
        hoverBackgroundColor: isDarkMode ? 'darkgray' : 'gray',
        
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
          stacked: false,
          ticks: {
            color: isDarkMode ? 'white' : 'black',
           
          }
      },
      y: {
          stacked: false,  
          ticks: {
            color: isDarkMode ? 'white' : 'black',
          }
      },
    },
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: isDarkMode ? 'white' : 'black'
          
        },
        display: false,
      },
      title: {
        display: false,
        text: 'Blog Tags Distribution',
      },
    },
  };

  return <div className='mt-5' style={{ maxWidth: '500px', maxHeight: '500px'}} >
    <Bar data={pieData} options={options} />
  </div>;
};

export default ClientSideChart;
