// import { FetchNotes } from '@/lib/api';
// import NotesClient from './Notes.client';

// import {
//   dehydrate,
//   HydrationBoundary,
//   QueryClient,
// } from '@tanstack/react-query';

// async function NotesPage() {
//   const queryClient = new QueryClient();
//   await queryClient.prefetchQuery({
//     queryKey: ['notes', '', 1, 12],
//     queryFn: () => FetchNotes({ search: '', page: 1, perPage: 12 }),
//   });

//   return (
//     <div>
//       <HydrationBoundary state={dehydrate(queryClient)}>
//         <NotesClient />
//       </HydrationBoundary>
//     </div>
//   );
// }

// export default NotesPage;

import { redirect } from 'next/navigation';

function Notes() {
  redirect('/notes/filter/all');

  return null;
}

export default Notes;
