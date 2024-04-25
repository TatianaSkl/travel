export interface HeadingProps {
  text: string;
  textAccent: string;
}

export interface NavBarProps {
  onClose?: () => void;
}

export interface MobileMenuProps {
  onClose: () => void;
}

export interface BtnProps {
  text: string;
}

export interface CareerForm {
  fullName: string;
  email: string;
  position?: string;
  phone: string;
  message?: string;
  policy: boolean;
}
