import Header from '@/components/landing/Header';
import HeroSection from '@/components/landing/HeroSection';
import CourseDetails from '@/components/landing/CourseDetails';
import CryptoSegments from '@/components/landing/CryptoSegments';
import Footer from '@/components/landing/Footer';
import ModuleTabs from '@/components/modules/ModuleTabs';
import { AuthProvider } from '@/components/auth/AuthContext';

export default function Home() {
  return (
    <AuthProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <HeroSection />
          <CourseDetails />
          <ModuleTabs />
          <CryptoSegments />
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
}
