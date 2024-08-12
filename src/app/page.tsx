"use client"
import React, { useState } from 'react';
import ViewDataButton from "./ViewDataButton";


export default function Home() {
  const [data, setData] = useState([
    {
      srNo: 1,
      farmerName: 'Sam',
      mobileNo: '1234567890',
      village: 'Village A',
      cropName: 'Wheat',
      area: '10 acres',
      quantity: '100 kg',
      token: 'ABC123',
      paymentType: 'Cash',
      totalAmount: 1000,
      paidAmount: 500,
      balanceAmount: 500,
      paymentStatus: 'Partial',
      remark: 'First installment paid',
      bookingDate: '2023-01-01',
      fertilizerSparingDate: '2023-01-15'
    }
  ]);

  return (
    <div className="maindiv">
      <ViewDataButton data={data} />
    </div>
  );
}