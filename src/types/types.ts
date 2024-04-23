export type headingType = {
  text: string;
  textAccent: string;
};

export interface NavBarProps {
  onClose?: () => void;
}

export interface MobileMenuProps {
  onClose: () => void;
}
