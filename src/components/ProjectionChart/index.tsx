import React from 'react'
import ReactApexChart from 'react-apexcharts'
import './ProjectionChart.css'
import Reveal from '../Reveal'

const ProjectionChart: React.FC = () => {
  const backgroundColor = '#070A15'

  const options: ApexCharts.ApexOptions = {
    chart: {
      id: 'projection-chart',
      type: 'line',
      background: backgroundColor,
      foreColor: '#FFFFFF',
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 1800,
        animateGradually: {
          enabled: true,
          delay: 150,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350,
        },
      },
    },
    title: {
      text: 'Projeção da Taxa Selic - 2024',
      align: 'center',
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      style: {
        fontFamily: 'Baloo 2',
        fontWeight: 'bold',
        fontSize: '20px',
        color: '#FFFFFF',
      },
    },
    stroke: {
      curve: 'smooth',
    },
    markers: {
      size: 6,
      colors: ['#3dcf18'],
      strokeColors: '#FFFFFF',
      strokeWidth: 2,
      hover: {
        size: 8,
      },
    },
    xaxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      labels: {
        style: {
          colors: '#FFFFFF',
        },
      },
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left',
      offsetY: -20,
      markers: {
        width: 12,
        height: 12,
        strokeWidth: 0,
        strokeColor: '#FFFFFF',
        fillColors: ['#047CD8', '#4CAF50'],
      },
      itemMargin: {
        horizontal: 10,
        vertical: 5,
      },
      labels: {
        colors: '#FFFFFF',
      },
    },
  }

  const series: ApexAxisChartSeries = [
    {
      name: 'Taxa SELIC Real',
      data: [
        11.75,
        11.75,
        11.75,
        12.75,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
      ],
    },
    {
      name: 'Projeção Selic',
      data: [11, 11, 12, 11, 13, 11, 10, 10.75, 10.95, 11.25, 10.15, 9.25],
    },
  ]

  return (
    <div className="lg:w-[70%] m-auto w-full ">
      <Reveal>
        <ReactApexChart
          options={options}
          series={series}
          type="line"
          height={450}
        />
      </Reveal>
    </div>
  )
}

export default ProjectionChart