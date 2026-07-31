export interface IconButtonProps {
  icon: React.ReactNode;
  onClick?: () => void;
  variant?: 'ghost' | 'solid' | 'outline';
  size?: number;
  'aria-label'?: string;
}
