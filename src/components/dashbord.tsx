import { Component } from 'react'
import ReactApexChart from 'react-apexcharts'

interface FrameworkData {
  id: string
  timestamp: string
  angular: number
  react: number
  vue: number
}

interface ApexChartProps {}

interface ApexChartState {
  series: { name: string, data: number[] }[]
  options: {
    chart: {
      height: number
      type: string
      zoom: { enabled: boolean }
    }
    dataLabels: { enabled: boolean }
    stroke: { width: number[], curve: string,  dashArray: number[] }
    title: { text: string,  align: string }
    legend: { tooltipHoverFormatter: Function }
    markers: { size: number,  hover: { sizeOffset: number } }
    xaxis: { categories: string[] }
    tooltip: { y: { title: { formatter: Function } }[] }
    grid: { borderColor: string }
  }
}

export class ApexChart extends Component<ApexChartProps, ApexChartState> {
  constructor(props: ApexChartProps) {
    super(props)
    this.state = {
      series: [],
      options: {
        chart: {
          height: 350,
          type: 'line',
          zoom: { enabled: false },
        },
        dataLabels: { enabled: false },
        stroke: { width: [5, 7, 5], curve: 'straight', dashArray: [0, 8, 5] },
        title: { text: 'Historico Anual', align: 'left' },
        legend: {
          tooltipHoverFormatter: function (val: any, opts: any) {
            return val + ' - <strong>' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + '</strong>'
          },
        },
        markers: { size: 0, hover: { sizeOffset: 6 } },
        xaxis: {
          categories: [
            '01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan',
            '07 Jan', '08 Jan', '09 Jan', '10 Jan', '11 Jan', '12 Jan'
          ],
        },
        tooltip: {
          y: [
            { title: { formatter: function (val: any) { return val + ' (mins)' } } },
            { title: { formatter: function (val: any) { return val + ' per session' } } },
            { title: { formatter: function (val: any) { return val } } },
          ],
        },
        grid: { borderColor: '#f1f1f1' },
      },
    }
  }

  async componentDidMount() {
    try {
      const response = await fetch('http://localhost:3001/frameworks') // Assuming '/api/data' is the endpoint for fake API
      const data: FrameworkData[] = await response.json()
      const categories = data.map(item => item.timestamp)
      const series = [
        { name: 'Angular', data: data.map(item => item.angular) },
        { name: 'React', data: data.map(item => item.react) },
        { name: 'Vue', data: data.map(item => item.vue) },
      ]

      this.setState({
        series: series,
        options: {
          ...this.state.options,
          xaxis: {
            categories: categories,
          },
        },
      })
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  render() {
    return (
      <div>
        <div id="chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
        </div>
        <div id="html-dist"></div>
      </div>
    )
  }
}