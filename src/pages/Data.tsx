import { useEffect, useState } from 'react';
import Navbar from "../components/Navbar"
import { Bar, Doughnut } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    BarElement,
    LinearScale,
    Title
} from 'chart.js';
import { useChartStore } from '../store/store';
import { InputsLim } from '../types/types';

ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'always random data from server',
        },
    },
};

export const Data = () => {
    const { setData, datasets, labels } = useChartStore();
    const [inputs, setInputs] = useState<InputsLim>({
        limit: 100
    });
    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await fetch(
                    `http://localhost:8080/api/data`,
                    {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
                        },
                    }
                );
                const data = await res.json();
                setData(data);
                console.log(data);
            } catch (err) {
                console.log(err);
            }
        };
        makeRequest();
    }, []);

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        try {
            const res = await fetch(
                `http://localhost:8080/api/data`,
                {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        limit: inputs.limit,
                    }),
                }
            );
            const data = await res.json();
            setData(data);

        } catch (error) {
            console.log(error);
        }
    };
    const handleChange =
        (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setInputs((prev) => {
                return { ...prev, [e.target.name]: e.target.value };
            });
        };

    return (
        <div className="h-full">
            <Navbar />
            <div className="flex flex-row gap-2 h-full">
                <div className="w-1/3 h-1/2">
                    <Doughnut data={{ labels, datasets }} />
                </div>
                <div className="w-1/3 h-1/2">
                    <Bar options={options} data={{ labels, datasets }} />
                </div>
                <div className="w-1/3 h-1/2 bg-orange-100">
                    Limit from 10 to Integer.MAX
                    <input
                        type="number"
                        placeholder="limit"
                        name="limit"
                        className="bg-transparent rounded ring-2 ring-gray-600 p-2 m-10 font-bold"
                        onChange={handleChange}
                    />
                    <button
                        type="button"
                        name="submit"
                        className="bg-transparent rounded ring-2 ring-gray-600 p-2 m-10 font-bold"
                        onClick={handleSubmit}
                    > Submit </button>
                </div>
            </div>
        </div>
    )
}

