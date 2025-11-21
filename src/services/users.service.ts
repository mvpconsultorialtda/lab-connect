import {
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';
import { db } from './firebase';
import type { UserProfile } from '../types';

const COLLECTION = 'users';

export const UsersService = {
    // Create or Update user profile
    saveProfile: async (uid: string, data: Partial<UserProfile>) => {
        const ref = doc(db, COLLECTION, uid);
        return setDoc(ref, data, { merge: true });
    },

    // Get user profile
    getProfile: async (uid: string) => {
        const ref = doc(db, COLLECTION, uid);
        const snap = await getDoc(ref);
        return snap.exists() ? (snap.data() as UserProfile) : null;
    },

    // Promote to Admin (Dev Tool)
    promoteToAdmin: async (uid: string) => {
        const ref = doc(db, COLLECTION, uid);
        return setDoc(ref, { role: 'admin' }, { merge: true });
    }
};
