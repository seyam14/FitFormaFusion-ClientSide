import { useState } from 'react';
import { Paper, Tabs, Tab, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';

const ManageMember = () => {
  const [viewType, setViewType] = useState('table'); // 'table' is the default view

  const handleChangeView = (event, newValue) => {
    setViewType(newValue);
  };

  const members = [
    { id: 1, name: 'Tonmoy', age: 25, email: 'Tonmoy@gmail.com' },
    { id: 2, name: 'Shamim', age: 30, email: 'ShamimMiya@gmail.com' },
    { id: 3, name: 'Habib', age: 28, email: 'AhsanHabib@gmail.com' },
    { id: 4, name: 'Foysal', age: 23, email: 'Foysal@gmail.com' },
  ];

  return (
    <div>
      <Tabs value={viewType} onChange={handleChangeView} centered>
        <Tab label="Members" value="table" />
      </Tabs>

      {viewType === 'table' && (
        <Paper style={{ margin: '20px' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {members.map((member) => (
                <TableRow key={member.id}>
                  <TableCell>{member.name}</TableCell>
                  <TableCell>{member.age}</TableCell>
                  <TableCell>{member.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      )}
    </div>
  );
};

export default ManageMember;
