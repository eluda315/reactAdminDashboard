import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
    BarElement,
    plugins,
} from 'chart.js';
import { faker } from '@faker-js/faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
    BarElement,
);

export const mainChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false
        },
        title: {
            display: false
        }
    },
    scales: {
        y: {
            beginAtZero: true,
            position: 'right',
            ticks: {
                maxTicksLimit: 6
            }
        },
        x: {
            grid: {
                display: false
            },
            ticks: {
                maxTicksLimit: 3,
                align: 'inner'
            }
        }
    },
    point: false,
    elements: {
        point: {
            pointStyle: false
        },
        line: {
            borderColor: 'rgb(95, 158, 199)',
            fill: true,
            borderWidth: 1.5
        }
    }
}

const days = ['June 25, 2024', 'June 26, 2024', 'June 27, 2024', 'June 28, 2024', 'June 29, 2024', 
    'June 30, 2024','Jul 1, 2024', 'Jul 2, 2024', 'Jul 3, 2024', 'Jul 4, 2024', 'Jul 5, 2024', 
    'Jul 6, 2024', 'Jul 7, 2024', 'Jul 8, 2024', 'Jul 9, 2024', 'Jul 10, 2024', 'Jul 11, 2024', 
    'Jul 12, 2024', 'Jul 13, 2024', 'Jul 14, 2024', 'Jul 15, 2024', 'Jul 16, 2024'];

export const getMainChartData= ()=>{
    return {
        labels: days,
        datasets: [
            {
                label: 'Value',
                data: days.map(()=>faker.datatype.number({ min: 600, max: 1000})),
                backgroundColor: 'rgb(161, 207, 237, 0.5)',
                animation: false
            }
        ]
    }
}


const realtimeChartLabels = [
    '-48h', '-46h', '-45h', '-44h', '-43h',
    '-42h', '-41h', '-40h', '-39h', '-38h',
    '-37h', '-36h', '-35h', '-34h', '-33h',
    '-32h', '-31h', '-30h', '-29h', '-28h',
    '1-27h', '-26h', '-25h', '-24h', '-23h',
    '-22h', '-21h', '-20h', '-19h', '-18h',
    '-17h', '-16h', '-15h', '-14h', '-13h',
    '-2h', '-11h', '-10h', '-9h', '-5h',
    '-4h', '-3h', '-2h', '-1h', 'Now']

export const realtimeChartData = {
    labels: realtimeChartLabels,
    datasets: [{
        label: 'Views',
        data: realtimeChartLabels.map(()=> faker.datatype.number({min: 30, max: 90})),
        backgroundColor: 'rgb(95, 158, 199)'
    }]
}

export const realtimeChartOptions = {
    labels: realtimeChartLabels,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false
        },
        title: {
            display: false
        }
    },
    scales: {
        y: {
            beginAtZero: true,
            display: false
        },
        x: {
            grid: {
                display: false
            },
            ticks: {
                callback: (label, index)=> (index === 0 || index === 47) ? realtimeChartLabels[index] : null,
                autoSkip: false,
                align: 'inner'
            }
        }
    }
}