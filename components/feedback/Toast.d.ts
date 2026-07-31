export interface ToastProps {
  tone?: 'info' | 'success' | 'danger';
  children: React.ReactNode;
  onClose?: () => void;
}
