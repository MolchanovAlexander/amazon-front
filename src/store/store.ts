import { ChartState } from "../types/types";
import { create } from "zustand";

const INITIAL_STATE = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: 'data',
      data: [],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export const useChartStore = create<ChartState>(
  (set) => ({
    labels: INITIAL_STATE.labels,
    datasets: INITIAL_STATE.datasets,
    data: INITIAL_STATE.datasets[0].data,
    setData: (newdata: number[]) =>
      set((state) => ({
        datasets: state.datasets.map((dataset) => {
          return { ...dataset, data: newdata }
        }
        ),
      })),
  }),
);