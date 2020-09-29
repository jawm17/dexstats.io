import React, { useEffect, useState } from 'react';
import { Chart } from 'chart.js';
import 'chartjs-plugin-zoom';

export default function MainChart() {

    useEffect(() => {
        initCharts();
    });


    function initCharts() {
        let date_list = ["2019-08-09", "2019-08-10", "2019-08-11", "2019-08-12", "2019-08-13", "2019-08-14"]
        let value_list = [1000, 2000, 3000, 2500, 3000, 5000]
        let start_date = new Date(date_list[0]);
        let end_date = new Date(date_list[date_list.length - 1]);

        let range_min = new Date(date_list[0]);  //start date
        range_min.setDate(range_min.getDate() - 10);

        let range_max = new Date(date_list[date_list.length - 1]);  //end date
        range_max.setDate(range_max.getDate() + 10);

        var ctx = document.getElementById('myChart').getContext('2d');

        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }



    return null;
}