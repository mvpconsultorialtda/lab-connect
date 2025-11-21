import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock Firebase
vi.mock('firebase/auth', () => ({
    getAuth: vi.fn(),
    signInWithEmailAndPassword: vi.fn(),
    createUserWithEmailAndPassword: vi.fn(),
    signOut: vi.fn(),
    onAuthStateChanged: vi.fn((_auth, callback) => {
        callback(null); // Default to no user
        return () => { }; // Unsubscribe function
    }),
    updateProfile: vi.fn(),
}));

vi.mock('firebase/app', () => ({
    initializeApp: vi.fn(),
}));

vi.mock('firebase/firestore', () => ({
    getFirestore: vi.fn(),
    collection: vi.fn(),
    addDoc: vi.fn(),
    getDocs: vi.fn(),
    doc: vi.fn(),
    updateDoc: vi.fn(),
    setDoc: vi.fn(),
    getDoc: vi.fn(),
    query: vi.fn(),
    where: vi.fn(),
    orderBy: vi.fn(),
    serverTimestamp: vi.fn(),
}));

// Mock React Router
vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        useNavigate: () => vi.fn(),
    };
});
