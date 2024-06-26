

export type PointType = {
  points: number[];
};
export type  InputsReg = {
  email: string;
  password: string;
};
export type  InputsLim = {
  limit: number;
};
export interface Dataset {
  label: string;
  data: number[];
  backgroundColor: string[];
  borderColor: string[];
  borderWidth: number;
}

export interface ChartState {
  labels: string[];
  datasets: Dataset[];
  setData: (newPoints: number[]) => void;
}
