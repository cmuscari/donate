import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useStoreContext } from '../../utils/globalstate';


export default function BasicSelect() {
  const [category] = React.useState('');

  const { newCategory } = useStoreContext();

  const handleChange = (event) => {
    // setCategory(event.target.value);
    // console.log(event.target.value);
    newCategory(event.target.value);
 
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Category"
          onChange={handleChange}
        >
          <MenuItem value={'all'}>[All]</MenuItem>
          <MenuItem value={'health'}>Health</MenuItem>
          <MenuItem value={'children'}>Children</MenuItem>
          <MenuItem value={'education'}>Education</MenuItem>
          <MenuItem value={'human-civil'}>Human And Civil Rights</MenuItem>
          <MenuItem value={'art-culture'}>Arts and Culture</MenuItem>
          <MenuItem value={'public-military'}>Public service and military</MenuItem>
          <MenuItem value={'animals'}>Animals</MenuItem>
          <MenuItem value={'international'}>International</MenuItem>
          <MenuItem value={'environmental'}>Environmental</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}