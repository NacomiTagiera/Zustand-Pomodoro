import { About } from '@/components/About';
import { Card } from '@/components/Card';
import { Header } from '@/components/Header';
import { Timer } from '@/components/Timer';

export default function Home() {
  return (
    <main>
      <Card>
        <Header />
        <Timer />
      </Card>
      <About />
    </main>
  );
}
