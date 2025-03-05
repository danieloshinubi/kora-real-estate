"use client";

import { useState } from "react";
import { FaPiggyBank } from "react-icons/fa6";
import { cabin } from "../fonts";

const AffordabilityCalculator = ({ onClose }: { onClose: () => void }) => {
  const [income, setIncome] = useState("");
  const [expenses, setExpenses] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [loanTerm, setLoanTerm] = useState("15 Years");
  const [creditScore, setCreditScore] = useState("Excellent (750+)");
  const [maxHomePrice, setMaxHomePrice] = useState(450000);
  const [monthlyPayment, setMonthlyPayment] = useState(2500);

  const handleReset = () => {
    setIncome("");
    setExpenses("");
    setDownPayment("");
    setLoanTerm("15 Years");
    setCreditScore("Excellent (750+)");
    setMaxHomePrice(450000);
    setMonthlyPayment(2500);
  };

  const handleCalculate = () => {
    const monthlyIncome = parseFloat(income);
    const monthlyExpenses = parseFloat(expenses);
    const availableIncome = monthlyIncome - monthlyExpenses;
    const loanTermYears =
      loanTerm === "1 Year"
        ? 1
        : loanTerm === "3 Years"
          ? 3
          : loanTerm === "5 Years"
            ? 5
            : loanTerm === "10 Years"
              ? 10
              : loanTerm === "15 Years"
                ? 15
                : 30;
    const interestRate =
      creditScore === "Excellent (750+)"
        ? 0.0325
        : creditScore === "Good (700-749)"
          ? 0.0345
          : creditScore === "Fair (650-699)"
            ? 0.0375
            : 0.045;
    const maxMonthlyPayment = availableIncome;
    const loanAmount =
      (maxMonthlyPayment *
        (1 - Math.pow(1 + interestRate / 12, -loanTermYears * 12))) /
      (interestRate / 12);
    const homePrice = loanAmount + parseFloat(downPayment);

    setMaxHomePrice(homePrice);
    setMonthlyPayment(maxMonthlyPayment);
  };

  return (
    <div
      className={`${cabin.className} fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50`}
    >
      <div className='bg-white text-[14px] p-6 rounded-lg shadow-lg overflow-scroll w-full max-h-[616px] max-w-[544px]'>
        <div className='flex justify-between items-center border-b pb-3'>
          <h2 className='text-xl font-semibold'>
            Smart Affordability Calculator
          </h2>
          <button
            className='btn btn-sm btn-circle btn-outline'
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <div className='grid gap-4 mt-4'>
          <div className='grid grid-cols-2 gap-4'>
            <label className='form-control'>
              <span className='label-text font-medium text-[16px]'>
                Monthly Income
              </span>
              <input
                type='number'
                placeholder='N 0.00'
                className='input input-bordered border p-2 rounded-lg outline-0 w-full'
                value={income}
                onChange={(e) => setIncome(e.target.value)}
              />
            </label>

            <label className='form-control'>
              <span className='label-text font-medium text-[16px]'>
                Monthly Expenses
              </span>
              <input
                type='number'
                placeholder='N 0.00'
                className='input input-bordered border p-2 rounded-lg outline-0 w-full'
                value={expenses}
                onChange={(e) => setExpenses(e.target.value)}
              />
            </label>
          </div>

          <label className='form-control'>
            <span className='label-text font-medium text-[16px]'>
              Down Payment Available
            </span>
            <input
              type='number'
              placeholder='N 0.00'
              className='input input-bordered border p-2 rounded-lg outline-0 w-full'
              value={downPayment}
              onChange={(e) => setDownPayment(e.target.value)}
            />
          </label>

          <label className='form-control'>
            <span className='label-text font-medium text-[16px]'>
              Preferred Loan Term
            </span>
            <select
              className='select select-bordered border p-2 py-3 rounded-lg outline-0 w-full'
              value={loanTerm}
              onChange={(e) => setLoanTerm(e.target.value)}
            >
              <option>1 Year</option>
              <option>3 Years</option>
              <option>5 Years</option>
              <option>10 Years</option>
              <option>15 Years</option>
              <option>30 Years</option>
            </select>
          </label>

          <label className='form-control'>
            <span className='label-text font-medium text-[16px]'>
              Credit Score Range
            </span>
            <select
              className='select select-bordered border p-2 py-3 rounded-lg outline-0 w-full'
              value={creditScore}
              onChange={(e) => setCreditScore(e.target.value)}
            >
              <option>Excellent (750+)</option>
              <option>Good (700-749)</option>
              <option>Fair (650-699)</option>
              <option>Poor (&lt;650)</option>
            </select>
          </label>
        </div>

        <div className='bg-gray-100 p-2 mt-4 rounded-lg space-y-2'>
          <h3 className='text-lg'>Estimated Affordablility</h3>
          <div className='grid grid-cols-2 gap-4'>
            <div className='bg-white p-2 rounded-lg border'>
              <p className='text-sm'>Maximum Home Price</p>
              <p className='text-lg font-semibold'>
                N{maxHomePrice.toLocaleString()}
              </p>
            </div>
            <div className='bg-white p-2 rounded-lg border'>
              <p className='text-sm'>Estimated Monthly Payment</p>
              <p className='text-lg font-semibold'>
                N{monthlyPayment.toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        <div className='mt-4'>
          <h3 className='text-lg font-semibold'>Recommended Lenders</h3>
          <div className='bg-gray-50 p-3 rounded-lg flex justify-between items-center mt-2 border'>
            <div className='flex items-center gap-2'>
              <FaPiggyBank className='text-gray-600' />
              <div>
                <p className='font-medium'>Bank A</p>
                <p className='text-sm text-gray-500'>3.25% APR</p>
              </div>
            </div>
            <button className='btn btn-sm btn-primary'>Apply Now</button>
          </div>
          <div className='bg-gray-50 p-3 rounded-lg flex justify-between items-center mt-2 border'>
            <div className='flex items-center gap-2'>
              <FaPiggyBank className='text-gray-600' />
              <div>
                <p className='font-medium'>Bank B</p>
                <p className='text-sm text-gray-500'>3.45% APR</p>
              </div>
            </div>
            <button className='btn btn-sm btn-primary'>Apply Now</button>
          </div>
        </div>

        <div className='flex justify-end mt-6'>
          <button
            className='btn btn-outline mr-8 border p-2 px-4 rounded-lg'
            onClick={handleReset}
          >
            Reset
          </button>
          <button
            className='btn btn-primary bg-slate-900 text-white p-2 rounded-lg'
            onClick={handleCalculate}
          >
            Calculate
          </button>
        </div>
      </div>
    </div>
  );
};

export default AffordabilityCalculator;
