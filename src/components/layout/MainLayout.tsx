import Header from '@/components/layout/HeaderDesktop';
import HeaderMobile from './HeaderMobile';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full">
      <div className="h-2 w-full bg-rainbow" />
      <HeaderMobile />
      <Header />
      <div className="px-4">{children}</div>
    </div>
  );
}
