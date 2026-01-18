import { FetchNotes } from '@/lib/api';
import NotesClient from '../../Notes.client';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

interface PageProps {
  params: Promise<{ slug?: string[] }>;
}

async function FilterPage({ params }: PageProps) {
  const { slug } = await params;
  const currentTag = slug?.[0] || 'all';

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['notes', '', 1, 12, currentTag],
    queryFn: () =>
      FetchNotes({ search: '', page: 1, perPage: 12, tag: currentTag }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient tag={currentTag} />
    </HydrationBoundary>
  );
}

export default FilterPage;
