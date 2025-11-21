export type UserRole = 'user' | 'admin';
export type UserStatus = 'pending' | 'approved' | 'rejected';
export type UserType = 'student' | 'company';

export interface UserProfile {
    uid: string;
    email: string;
    displayName: string;
    photoURL?: string;
    role: UserRole;
    status: UserStatus;
    type: UserType;
    bio?: string;
    portfolioLink?: string;
    linkedinLink?: string;
    graduationYear?: string;
    createdAt: string;
}

export interface Job {
    id?: string;
    title: string;
    company: string;
    description: string;
    type: 'remote' | 'onsite' | 'hybrid';
    location: string;
    requirements: string[];
    contactLink: string;
    status: 'active' | 'archived';
    createdAt: string;
    createdBy: string;
}

export interface Mentor {
    id?: string;
    name: string;
    title: string;
    bio: string;
    expertise: string[];
    photoURL?: string;
    linkedinLink?: string;
    schedulingLink: string; // Calendly etc
    available: boolean;
    createdAt: string;
}

export interface Event {
    id?: string;
    title: string;
    description: string;
    date: string;
    location: string;
    link?: string; // Registration link
    type: 'workshop' | 'lecture' | 'meetup';
    createdAt: string;
}
