import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { EventsService } from '../services/events.service';
import type { Event } from '../types';
import { Calendar, MapPin, Clock } from 'lucide-react';
import Button from '../components/Button';

const EventosPage: React.FC = () => {
    const [events, setEvents] = useState<Event[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const data = await EventsService.getAllUpcoming();
                setEvents(data);
            } catch (err) {
                console.error(err);
                setError('Failed to load events.');
            } finally {
                setLoading(false);
            }
        };
        fetchEvents();
    }, []);

    return (
        <div className="min-h-screen bg-brand-gray font-sans">
            <Navbar />
            <div className="pt-32 px-6 max-w-7xl mx-auto pb-20">
                <div className="mb-12">
                    <h1 className="text-4xl font-display font-bold text-brand-navy mb-4">Eventos</h1>
                    <p className="text-lg text-brand-navy/70">Workshops, palestras e encontros da comunidade.</p>
                </div>

                {loading ? (
                    <div className="flex justify-center py-20">
                        <div role="status" className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary"></div>
                    </div>
                ) : error ? (
                    <div className="text-red-500 text-center py-10">{error}</div>
                ) : events.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-brand-navy/5">
                        <p className="text-brand-navy/50 text-lg">Nenhum evento agendado no momento.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {events.map(event => (
                            <div key={event.id} className="bg-white rounded-2xl shadow-sm border border-brand-navy/5 overflow-hidden hover:shadow-md transition-all hover:-translate-y-1">
                                <div className="h-32 bg-brand-primary/10 flex items-center justify-center relative">
                                    <Calendar className="w-12 h-12 text-brand-primary/40" />
                                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-brand-primary uppercase tracking-wider shadow-sm">
                                        {event.type}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-2 text-brand-primary font-bold text-sm mb-2">
                                        <Clock className="w-4 h-4" />
                                        {new Date(event.date).toLocaleDateString('pt-BR')}
                                    </div>

                                    <h3 className="text-xl font-bold text-brand-navy mb-2">{event.title}</h3>

                                    <div className="flex items-center gap-2 text-brand-navy/50 text-sm mb-4">
                                        <MapPin className="w-4 h-4" />
                                        {event.location}
                                    </div>

                                    <p className="text-brand-navy/70 text-sm mb-6 line-clamp-3">
                                        {event.description}
                                    </p>

                                    <Button className="w-full">Inscrever-se</Button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default EventosPage;
