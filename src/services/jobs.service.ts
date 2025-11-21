import {
    collection,
    addDoc,
    updateDoc,
    doc,
    serverTimestamp,
    getDocs,
    query,
    where,
    orderBy
} from 'firebase/firestore';
import { db } from './firebase';
import type { Job } from '../types';

const COLLECTION = 'jobs';

export const JobsService = {
    // Create
    create: async (job: Omit<Job, 'id' | 'createdAt' | 'status'>, userId: string) => {
        return addDoc(collection(db, COLLECTION), {
            ...job,
            status: 'active',
            createdBy: userId,
            createdAt: serverTimestamp(), // Firestore timestamp
        });
    },

    // Read (Active Jobs)
    getAllActive: async () => {
        const q = query(
            collection(db, COLLECTION),
            where('status', '==', 'active'),
            orderBy('createdAt', 'desc')
        );
        const snapshot = await getDocs(q);
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Job));
    },

    // Archive (Admin only)
    archive: async (jobId: string) => {
        const ref = doc(db, COLLECTION, jobId);
        return updateDoc(ref, { status: 'archived' });
    }
};
