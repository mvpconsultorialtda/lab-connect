import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import VagasPage from '../pages/VagasPage';
import MentoriaPage from '../pages/MentoriaPage';
import EventosPage from '../pages/EventosPage';
import { JobsService } from '../services/jobs.service';
import { MentorsService } from '../services/mentors.service';
import { EventsService } from '../services/events.service';

// Mock the services
vi.mock('../services/jobs.service');
vi.mock('../services/mentors.service');
vi.mock('../services/events.service');
vi.mock('../components/Navbar', () => ({
    default: () => <div data-testid="navbar">Navbar</div>
}));

// Mock AuthContext
vi.mock('../contexts/AuthContext', () => ({
    useAuth: () => ({ user: { uid: 'test-user' }, loading: false })
}));

describe('Pages Integration Tests', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    describe('VagasPage', () => {
        it('should render jobs from service', async () => {
            const mockJobs = [
                {
                    id: '1',
                    title: 'Frontend Dev',
                    company: 'Tech Corp',
                    description: 'React Job',
                    location: 'Remote',
                    contactLink: 'http://test.com',
                    type: 'remote',
                    requirements: [],
                    createdBy: 'admin',
                    createdAt: {}
                }
            ];
            (JobsService.getAllActive as any).mockResolvedValue(mockJobs);

            render(
                <BrowserRouter>
                    <VagasPage />
                </BrowserRouter>
            );

            expect(screen.getByRole('status')).toBeInTheDocument(); // Loading spinner

            await waitFor(() => {
                expect(screen.getByText('Frontend Dev')).toBeInTheDocument();
                expect(screen.getByText('Tech Corp')).toBeInTheDocument();
            });
        });

        it('should handle empty state', async () => {
            (JobsService.getAllActive as any).mockResolvedValue([]);

            render(
                <BrowserRouter>
                    <VagasPage />
                </BrowserRouter>
            );

            await waitFor(() => {
                expect(screen.getByText(/Nenhuma vaga disponível/i)).toBeInTheDocument();
            });
        });
    });

    describe('MentoriaPage', () => {
        it('should render mentors from service', async () => {
            const mockMentors = [
                {
                    id: '1',
                    name: 'John Doe',
                    title: 'Senior Dev',
                    bio: 'Expert in React',
                    expertise: ['React', 'TS'],
                    schedulingLink: 'http://cal.com',
                    available: true,
                    createdAt: {}
                }
            ];
            (MentorsService.getAll as any).mockResolvedValue(mockMentors);

            render(
                <BrowserRouter>
                    <MentoriaPage />
                </BrowserRouter>
            );

            await waitFor(() => {
                expect(screen.getByText('John Doe')).toBeInTheDocument();
                expect(screen.getByText('Senior Dev')).toBeInTheDocument();
                expect(screen.getByText('React')).toBeInTheDocument();
            });
        });
    });

    describe('EventosPage', () => {
        it('should render events from service', async () => {
            const mockEvents = [
                {
                    id: '1',
                    title: 'React Workshop',
                    description: 'Learn React',
                    date: '2025-12-25',
                    location: 'Online',
                    type: 'workshop',
                    createdAt: {}
                }
            ];
            (EventsService.getAllUpcoming as any).mockResolvedValue(mockEvents);

            render(
                <BrowserRouter>
                    <EventosPage />
                </BrowserRouter>
            );

            await waitFor(() => {
                expect(screen.getByText('React Workshop')).toBeInTheDocument();
                expect(screen.getByText('Online')).toBeInTheDocument();
            });
        });
    });
});
