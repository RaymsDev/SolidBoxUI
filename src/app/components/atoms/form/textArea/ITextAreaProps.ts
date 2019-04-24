import { TextAreaProps } from 'semantic-ui-react';

export interface ITextAreaProps {
  error?: boolean;
  errorMessage?: string;
  mandatory?: boolean;
  enabled: boolean;
  label: string;
  value: string;
  onChange: (e: React.FormEvent, { value }: TextAreaProps) => void;
}
