import SolutionDetail from '../../../components/SolutionDetail';

async function SolutionPage({ params }: { params: { id: string } }) {
  const { id } = await params; // In newer Next.js versions, params is an async object

  return (
    <div>
      <SolutionDetail solutionId={id} />
    </div>
  );
}

export default SolutionPage;
