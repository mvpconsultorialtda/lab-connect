import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { UsersService } from '../services/users.service';
import { JobsService } from '../services/jobs.service';
import { MentorsService } from '../services/mentors.service';
import { EventsService } from '../services/events.service';
import Button from '../components/Button';
import Input from '../components/Input';

export function AdminSetup() {
    const { user } = useAuth();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    // Job Form State
    const [job, setJob] = useState({ title: '', company: '', description: '', location: '', contactLink: '', type: 'remote' as const });

    // Mentor Form State
    const [mentor, setMentor] = useState({ name: '', title: '', bio: '', schedulingLink: '' });

    // Event Form State
    const [event, setEvent] = useState({ title: '', description: '', date: '', location: '', type: 'workshop' as const });

    const handlePromote = async () => {
        if (!user) return;
        setLoading(true);
        try {
            await UsersService.promoteToAdmin(user.uid);
            setMessage('Success! You are now an Admin. Refresh the page.');
        } catch (error) {
            setMessage('Error promoting user.');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleCreateJob = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!user) return;
        try {
            await JobsService.create({ ...job, requirements: [], createdBy: user.uid }, user.uid);
            setMessage('Job created!');
            setJob({ title: '', company: '', description: '', location: '', contactLink: '', type: 'remote' });
        } catch (error) {
            console.error(error);
            setMessage('Error creating job.');
        }
    };

    const handleCreateMentor = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await MentorsService.create({ ...mentor, expertise: [], available: true });
            setMessage('Mentor created!');
            setMentor({ name: '', title: '', bio: '', schedulingLink: '' });
        } catch (error) {
            console.error(error);
            setMessage('Error creating mentor.');
        }
    };

    const handleCreateEvent = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await EventsService.create(event);
            setMessage('Event created!');
            setEvent({ title: '', description: '', date: '', location: '', type: 'workshop' });
        } catch (error) {
            console.error(error);
            setMessage('Error creating event.');
        }
    };

    if (!user) return <div className="p-8">Please login first.</div>;

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <h1 className="text-3xl font-bold text-brand-navy mb-8">Admin Setup & Content Creation</h1>

            {message && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                    {message}
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Section 1: Admin Promotion */}
                <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h2 className="text-xl font-bold mb-4">1. Dev Tools</h2>
                    <p className="mb-4 text-gray-600">Current User ID: {user.uid}</p>
                    <Button onClick={handlePromote} isLoading={loading}>
                        Make me Admin
                    </Button>
                </div>

                {/* Section 2: Create Job */}
                <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h2 className="text-xl font-bold mb-4">2. Post a Job</h2>
                    <form onSubmit={handleCreateJob} className="space-y-4">
                        <Input label="Title" value={job.title} onChange={e => setJob({ ...job, title: e.target.value })} required />
                        <Input label="Company" value={job.company} onChange={e => setJob({ ...job, company: e.target.value })} required />
                        <Input label="Location" value={job.location} onChange={e => setJob({ ...job, location: e.target.value })} required />
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium text-brand-navy">Type</label>
                            <select
                                className="p-2 border rounded-md"
                                value={job.type}
                                onChange={e => setJob({ ...job, type: e.target.value as any })}
                            >
                                <option value="remote">Remote</option>
                                <option value="onsite">Onsite</option>
                                <option value="hybrid">Hybrid</option>
                            </select>
                        </div>
                        <Input label="Link" value={job.contactLink} onChange={e => setJob({ ...job, contactLink: e.target.value })} required />
                        <textarea
                            className="w-full p-2 border rounded-md"
                            placeholder="Description"
                            value={job.description}
                            onChange={e => setJob({ ...job, description: e.target.value })}
                        />
                        <Button type="submit">Create Job</Button>
                    </form>
                </div>

                {/* Section 3: Create Mentor */}
                <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h2 className="text-xl font-bold mb-4">3. Add Mentor</h2>
                    <form onSubmit={handleCreateMentor} className="space-y-4">
                        <Input label="Name" value={mentor.name} onChange={e => setMentor({ ...mentor, name: e.target.value })} required />
                        <Input label="Title (e.g. Senior Dev)" value={mentor.title} onChange={e => setMentor({ ...mentor, title: e.target.value })} required />
                        <Input label="Scheduling Link" value={mentor.schedulingLink} onChange={e => setMentor({ ...mentor, schedulingLink: e.target.value })} required />
                        <textarea
                            className="w-full p-2 border rounded-md"
                            placeholder="Bio"
                            value={mentor.bio}
                            onChange={e => setMentor({ ...mentor, bio: e.target.value })}
                        />
                        <Button type="submit">Create Mentor</Button>
                    </form>
                </div>

                {/* Section 4: Create Event */}
                <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h2 className="text-xl font-bold mb-4">4. Create Event</h2>
                    <form onSubmit={handleCreateEvent} className="space-y-4">
                        <Input label="Title" value={event.title} onChange={e => setEvent({ ...event, title: e.target.value })} required />
                        <Input type="date" label="Date" value={event.date} onChange={e => setEvent({ ...event, date: e.target.value })} required />
                        <Input label="Location" value={event.location} onChange={e => setEvent({ ...event, location: e.target.value })} required />
                        <textarea
                            className="w-full p-2 border rounded-md"
                            placeholder="Description"
                            value={event.description}
                            onChange={e => setEvent({ ...event, description: e.target.value })}
                        />
                        <Button type="submit">Create Event</Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
