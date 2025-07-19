export interface ButtonProps {
  onClick?: () => void;
  to?: string;
  variant?: 'primary' | 'secondary' | 'call-to-action' | 'outlined' | 'basic';
  children?: React.ReactNode;
  className?: string;
  copyText?: string;
}
