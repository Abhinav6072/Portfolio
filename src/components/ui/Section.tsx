import { cn } from '../../utils/cn';

// Utility for merging class names
export { cn };

// Reusable section wrapper
interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export const Section = ({ id, className, children }: SectionProps) => (
  <section id={id} className={cn('relative overflow-hidden', className)}>
    {children}
  </section>
);
