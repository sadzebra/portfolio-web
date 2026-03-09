import ProjectDetail from '../../../components/ProjectDetail';

async function ProjectPage({ params }: { params: { id: string } }) {
  const { id } = await params; // In newer Next.js versions, params is an async object

  return (
    <div>
      <ProjectDetail projectId={id} />
    </div>
  );
}

export default ProjectPage;
