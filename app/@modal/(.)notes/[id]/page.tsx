'use client';

import { useRouter, useParams } from 'next/navigation';
import Modal from '@/components/Modal/Modal';
import NotePreview from './NotePreview.client.tsx';

function InterceptedNoteDetails() {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();

  return (
    <Modal isOpen={true} onClose={() => router.back()}>
      <NotePreview id={id} />
    </Modal>
  );
}

export default InterceptedNoteDetails;
