"use client"
import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Box } from '@mui/material';

interface ViewDataProps {
  data: {
    srNo: number;
    farmerName: string;
    mobileNo: string;
    village: string;
    cropName: string;
    area: string;
    quantity: string;
    token: string;
    paymentType: string;
    totalAmount: number;
    paidAmount: number;
    balanceAmount: number;
    paymentStatus: string;
    remark: string;
    bookingDate: string;
    fertilizerSparingDate: string;
  }[];
}

const ViewDataButton: React.FC<ViewDataProps> = ({ data }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button   sx={{
        backgroundColor: 'black',
        color: 'white',
        '&:hover': {
          backgroundColor: 'white',
          color: 'black'
        },
      }} variant="contained" color="primary" onClick={handleOpen} >
        View Data
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>User Data</DialogTitle>
        <DialogContent dividers>
          {data.map((item, index) => (
            <div key={index}>
              <Typography variant="body1">Sr No: {item.srNo}</Typography>
              <Typography variant="body1">Farmer Name: {item.farmerName}</Typography>
              <Typography variant="body1">Mobile No: {item.mobileNo}</Typography>
              <Typography variant="body1">Village: {item.village}</Typography>
              <Typography variant="body1">Crop Name: {item.cropName}</Typography>
              <Typography variant="body1">Area: {item.area}</Typography>
              <Typography variant="body1">Quantity: {item.quantity}</Typography>
              <Typography variant="body1">Token: {item.token}</Typography>
              <Typography variant="body1">Payment Type: {item.paymentType}</Typography>
              <Typography variant="body1">Total Amount: {item.totalAmount}</Typography>
              <Typography variant="body1">Paid Amount: {item.paidAmount}</Typography>
              <Typography variant="body1">Balance Amount: {item.balanceAmount}</Typography>
              <Typography variant="body1">Payment Status: {item.paymentStatus}</Typography>
              <Typography variant="body1">Remark: {item.remark}</Typography>
              <Typography variant="body1">Booking Date: {item.bookingDate}</Typography>
              <Typography variant="body1">Fertilizer Sparing Date: {item.fertilizerSparingDate}</Typography>
              <hr />
            </div>
          ))}
        </DialogContent>
        <DialogActions>
          <Box display="flex" justifyContent="center" width="100%">
            <Button    
    sx={{
      backgroundColor: 'black',
      color: 'white',
      '&:hover': {
        backgroundColor: 'white',
        color: 'black'
      },
    }} variant="contained" color="primary" onClick={handleClose}>
              Close
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ViewDataButton;