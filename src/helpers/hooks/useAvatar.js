export function useAvatar(userName) {
  function stringToColor(string) {
    if (!string) return '';

    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  const avatar = {
    sx: {
      bgcolor: stringToColor(userName),
      fontSize: { xs: 14, md: 20 },
      width: { xs: 30, md: 40 },
      height: { xs: 30, md: 40 },
    },
    children: userName
      ? `${userName.split(' ')[0][0]}${userName.split(' ')[1][0]}`
      : 'default',
  };

  return { avatar };
}
