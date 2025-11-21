import {
    collection,
    addDoc,
    getDocs,
    query,
    where,
    orderBy,
    serverTimestamp
} from 'firebase/firestore';
import { db } from './firebase';
import type { Mentor } from '../types';

const COLLECTION = 'mentors';

export const MentorsService = {
    create: async (mentor: Omit<Mentor, 'id' | 'createdAt'>) => {
        return addDoc(collection(db, COLLECTION), {
            ...mentor,
            createdAt: serverTimestamp(),
        });
    },

    getAll: async () => {
        const q = query(
            collection(db, COLLECTION),
            where('available', '==', true),
            orderBy('name', 'asc')
        );
        const snapshot = await getDocs(q);
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Mentor));
    }
};
