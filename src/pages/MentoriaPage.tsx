import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { MentorsService } from '../services/mentors.service';
import type { Mentor } from '../types';
import { User, Calendar } from 'lucide-react';
import Button from '../components/Button';

const MentoriaPage: React.FC = () => {
    const [mentors, setMentors] = useState<Mentor[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchMentors = async () => {
            try {
                const data = await MentorsService.getAll();
                setMentors(data);
            } catch (err) {
                console.error(err);
                setError('Failed to load mentors.');
            } finally {
                setLoading(false);
            }
        };
        fetchMentors();
    }, []);

    return (
        <div className="min-h-screen bg-brand-gray font-sans">
            <Navbar />
            <div className="pt-32 px-6 max-w-7xl mx-auto pb-20">
                <div className="mb-12">
                    <h1 className="text-4xl font-display font-bold text-brand-navy mb-4">Mentoria</h1>
                    <p className="text-lg text-brand-navy/70">Conecte-se com profissionais experientes para acelerar sua carreira.</p>
                </div>

                {loading ? (
                    <div className="flex justify-center py-20">
                        <div role="status" className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary"></div>
                    </div>
                ) : error ? (
                    <div className="text-red-500 text-center py-10">{error}</div>
                ) : mentors.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-brand-navy/5">
                        <p className="text-brand-navy/50 text-lg">Nenhum mentor disponível no momento.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {mentors.map(mentor => (
                            <div key={mentor.id} className="bg-white p-6 rounded-2xl shadow-sm border border-brand-navy/5 hover:shadow-md transition-all hover:-translate-y-1 flex flex-col">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary">
                                        <User className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-brand-navy">{mentor.name}</h3>
                                        <p className="text-brand-primary font-medium">{mentor.title}</p>
                                    </div>
                                </div>

                                <p className="text-brand-navy/70 text-sm mb-6 flex-grow">
                                    {mentor.bio}
                                </p>

                                {mentor.expertise && mentor.expertise.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {mentor.expertise.map((skill, index) => (
                                            <span key={index} className="px-2 py-1 bg-brand-gray text-brand-navy/60 text-xs rounded-md">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                <a href={mentor.schedulingLink} target="_blank" rel="noopener noreferrer" className="mt-auto">
                                    <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        Agendar Mentoria
                                    </Button>
                                </a>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MentoriaPage;
