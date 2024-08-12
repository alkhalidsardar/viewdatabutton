"use client"
import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

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

  return (
    <>
      <Button
        sx={{
          backgroundColor: 'black',
          fontWeight: 'bold',
          color: 'white',
          '&:hover': {
            backgroundColor: 'darkgray',
          },
        }}
        onClick={() => setOpen(true)}
      >
        View Data
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle  sx={{
          fontWeight: '600',
  
        }}>View Report</DialogTitle>
        
        <DialogContent sx={{ backgroundColor: '#ececec', padding: '15px' }}>
    {data.map((item, index) => (
      <Box key={index} mb={2} sx={{ mt: 2 }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '10px',
            backgroundColor: 'white',
            boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
            padding: '16px',
            borderRadius: '4px',
          }}
        >
          <img src="snake-1.png" alt="Logo" style={{ height: '50px' }} />
          <div style={{ textAlign: 'right' }}>
            <p>nerul , sec20</p>
            <p>naviMumbai, maharashtra, 400 706</p>
            <p>india</p>
          </div>
        </div>


              <TableContainer component={Paper}>
                <Table size="medium">
                  <TableHead>
                    <TableRow>
                      <TableCell colSpan={3}><Typography variant="h6">Contact Details</Typography></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ borderBottom: '2px solid #000' }}>Farmer Name</TableCell>
                      <TableCell sx={{ borderBottom: '2px solid #000' }}>Mobile No</TableCell>
                      <TableCell sx={{ borderBottom: '2px solid #000' }}>Village</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell sx={{ borderBottom: '2px solid #000' }}>{item.farmerName}</TableCell>
                      <TableCell sx={{ borderBottom: '2px solid #000' }}>{item.mobileNo}</TableCell>
                      <TableCell sx={{ borderBottom: '2px solid #000' }}>{item.village}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
              <TableContainer component={Paper} sx={{ mt: 2 }}>
                <Table size="medium">
                  <TableHead>
                    <TableRow>
                      <TableCell colSpan={4}><Typography variant="h6">Crop Details</Typography></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ borderBottom: '2px solid #000' }}>Crop Name</TableCell>
                      <TableCell sx={{ borderBottom: '2px solid #000' }}>Area</TableCell>
                      <TableCell sx={{ borderBottom: '2px solid #000' }}>Quantity</TableCell>
                      <TableCell sx={{ borderBottom: '2px solid #000' }}>Token</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell sx={{ borderBottom: '2px solid #000' }}>{item.cropName}</TableCell>
                      <TableCell sx={{ borderBottom: '2px solid #000' }}>{item.area}</TableCell>
                      <TableCell sx={{ borderBottom: '2px solid #000' }}>{item.quantity}</TableCell>
                      <TableCell sx={{ borderBottom: '2px solid #000' }}>{item.token}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
              <TableContainer component={Paper} sx={{ mt: 2 }}>
                <Table size="medium">
                  <TableHead>
                    <TableRow>
                      <TableCell colSpan={5}><Typography variant="h6">Payment Details</Typography></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ borderBottom: '2px solid #000' }}>Payment Type</TableCell>
                      <TableCell sx={{ borderBottom: '2px solid #000' }}>Total Amount</TableCell>
                      <TableCell sx={{ borderBottom: '2px solid #000' }}>Paid Amount</TableCell>
                      <TableCell sx={{ borderBottom: '2px solid #000' }}>Balance Amount</TableCell>
                      <TableCell sx={{ borderBottom: '2px solid #000' }}>Payment Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell sx={{ borderBottom: '2px solid #000' }}>{item.paymentType}</TableCell>
                      <TableCell sx={{ borderBottom: '2px solid #000' }}>{item.totalAmount}</TableCell>
                      <TableCell sx={{ borderBottom: '2px solid #000' }}>{item.paidAmount}</TableCell>
                      <TableCell sx={{ borderBottom: '2px solid #000' }}>{item.balanceAmount}</TableCell>
                      <TableCell sx={{ borderBottom: '2px solid #000' }}>{item.paymentStatus}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
              <TableContainer component={Paper} sx={{ mt: 2 }}>
                <Table size="medium">
                  <TableHead>
                    <TableRow>
                      <TableCell colSpan={3}><Typography variant="h6">Other Details</Typography></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ borderBottom: '2px solid #000' }}>Remark</TableCell>
                      <TableCell sx={{ borderBottom: '2px solid #000' }}>Booking Date</TableCell>
                      <TableCell sx={{ borderBottom: '2px solid #000' }}>Fertilizer Sparing Date</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell sx={{ borderBottom: '2px solid #000' }}>{item.remark}</TableCell>
                      <TableCell sx={{ borderBottom: '2px solid #000' }}>{item.bookingDate}</TableCell>
                      <TableCell sx={{ borderBottom: '2px solid #000' }}>{item.fertilizerSparingDate}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          ))}
        </DialogContent>
        <DialogActions>
        <Button
  onClick={() => setOpen(false)}
  sx={{
    backgroundColor: 'black',
    color: 'white',
    '&:hover': {
      backgroundColor: 'darkgray',
      color: 'black'
    },
    padding: '8px 16px',
    borderRadius: '4px',
    textTransform: 'none',
  }}
>
  Close
</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ViewDataButton;