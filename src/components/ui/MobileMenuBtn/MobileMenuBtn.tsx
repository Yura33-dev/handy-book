import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

type MobileMenuBtnProps = {
  onCloseSideBar: () => void;
};

function MobileMenuBtn({ onCloseSideBar }: MobileMenuBtnProps) {
  return (
    <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      sx={{ mr: 1 }}
      onClick={onCloseSideBar}
    >
      <MenuIcon />
    </IconButton>
  );
}
export default MobileMenuBtn;
