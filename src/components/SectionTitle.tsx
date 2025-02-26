
interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <div className="text-center mb-12 animate-fade-up">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-100">{title}</h2>
      {subtitle && <p className="text-lg text-gray-400 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
};
