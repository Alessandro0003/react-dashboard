import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'


  
function stringAvatar(name: string) {
    return {
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    }
}

export default function ProfileIcon() {
  return (
    <Stack direction="row" spacing={2}>
        <Avatar {...stringAvatar('A T')} />
    </Stack>
  );
}