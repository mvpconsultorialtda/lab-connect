import {
    collection,
    addDoc,
    getDocs,
    query,
    orderBy,
    serverTimestamp
} from 'firebase/firestore';
import { db } from './firebase';
import type { Event } from '../types';

const COLLECTION = 'events';

export const EventsService = {
    create: async (event: Omit<Event, 'id' | 'createdAt'>) => {
        return addDoc(collection(db, COLLECTION), {
            ...event,
            createdAt: serverTimestamp(),
        });
    },

    getAllUpcoming: async () => {
        // In a real app, we would filter by date >= today
        const q = query(
            collection(db, COLLECTION),
            orderBy('date', 'asc')
        );
        const snapshot = await getDocs(q);
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Event));
    }
};
