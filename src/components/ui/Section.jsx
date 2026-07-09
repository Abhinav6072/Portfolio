import { cn } from "../../utils/cn";

// Utility for merging class names
export { cn };

export const Section = ({ id, className, children }) => (
  <section id={id} className={cn("relative overflow-hidden", className)}>
    {children}
  </section>
);
