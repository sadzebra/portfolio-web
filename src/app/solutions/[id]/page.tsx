import SolutionDetail from '../../../components/SolutionDetail';
import Header from '../../../components/Header'

async function SolutionPage({ params }: { params: { id: string } }) {
  const { id } = await params; // In newer Next.js versions, params is an async object

  return (
    <div className="min-h-screen bg-[#F9F6F4] p-4 text-slate-700 selection:bg-bran-pink/30 md:p-8 lg:p-12 font-sans">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-[10%] top-[20%] h-[500px] w-[500px] rounded-full bg-brand-slate/10 blur-[120px]" />
        <div className="absolute -right-[10%] top-[10%] h-[500px] w-[500px] rounded-full bg-bran-pink/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl relative">
        <Header />
        <SolutionDetail solutionId={id} />
      </div>
    </div>
  );
}

export default SolutionPage;
