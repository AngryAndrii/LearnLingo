import { useMemo } from 'react';
import { createAvatar } from '@dicebear/core';
import { adventurer, lorelei } from '@dicebear/collection';

function Avatar() {
  const avatar = useMemo(() => {
    return createAvatar(adventurer, {
      size: 50,
      // ... other options
    }).toDataUriSync();
  }, []);

  return <img src={avatar} alt="Avatar" />;
}

export default Avatar;
