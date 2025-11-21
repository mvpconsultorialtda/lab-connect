import { describe, it, expect, vi, beforeEach } from 'vitest';
import { JobsService } from '../services/jobs.service';
import { MentorsService } from '../services/mentors.service';
import { EventsService } from '../services/events.service';
import { addDoc, getDocs } from 'firebase/firestore';

// Types for mocks
type MockAddDoc = ReturnType<typeof vi.fn>;
type MockGetDocs = ReturnType<typeof vi.fn>;

describe('Firestore Services', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    describe('JobsService', () => {
        it('should create a job', async () => {
            (addDoc as MockAddDoc).mockResolvedValueOnce({ id: 'job-123' });

            const jobData = {
                title: 'Dev',
                company: 'Tech',
                description: 'Code',
                location: 'Remote',
                contactLink: 'http',
                type: 'remote' as const,
                requirements: [],
                createdBy: 'user-1'
            };

            const result = await JobsService.create(jobData, 'user-1');

            expect(addDoc).toHaveBeenCalled();
            expect(result).toEqual({ id: 'job-123' });
        });

        it('should get active jobs', async () => {
            const mockDocs = [
                { id: '1', data: () => ({ title: 'Job 1', status: 'active' }) },
                { id: '2', data: () => ({ title: 'Job 2', status: 'active' }) }
            ];
            (getDocs as MockGetDocs).mockResolvedValueOnce({ docs: mockDocs });

            const jobs = await JobsService.getAllActive();

            expect(getDocs).toHaveBeenCalled();
            expect(jobs).toHaveLength(2);
            expect(jobs[0].title).toBe('Job 1');
        });
    });

    describe('MentorsService', () => {
        it('should create a mentor', async () => {
            (addDoc as MockAddDoc).mockResolvedValueOnce({ id: 'mentor-123' });

            const mentorData = {
                name: 'Alice',
                title: 'Senior Dev',
                bio: 'Expert',
                expertise: ['React'],
                schedulingLink: 'http',
                available: true
            };

            await MentorsService.create(mentorData);
            expect(addDoc).toHaveBeenCalled();
        });
    });

    describe('EventsService', () => {
        it('should create an event', async () => {
            (addDoc as MockAddDoc).mockResolvedValueOnce({ id: 'event-123' });

            const eventData = {
                title: 'Workshop',
                description: 'Learn React',
                date: '2025-01-01',
                location: 'Online',
                type: 'workshop' as const
            };

            await EventsService.create(eventData);
            expect(addDoc).toHaveBeenCalled();
        });
    });
});
