import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { JobsService } from '../services/jobs.service';
import type { Job } from '../types';
import { MapPin, Building2, Clock } from 'lucide-react';
import Button from '../components/Button';

const VagasPage: React.FC = () => {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const data = await JobsService.getAllActive();
                setJobs(data);
            } catch (err) {
                console.error(err);
                setError('Failed to load jobs.');
            } finally {
                setLoading(false);
            }
        };
        fetchJobs();
    }, []);

    return (
        <div className="min-h-screen bg-brand-gray font-sans">
            <Navbar />
            <div className="pt-32 px-6 max-w-7xl mx-auto pb-20">
                <div className="mb-12">
                    <h1 className="text-4xl font-display font-bold text-brand-navy mb-4">Vagas</h1>
                    <p className="text-lg text-brand-navy/70">Oportunidades exclusivas para designers da UNEB.</p>
                </div>

                {loading ? (
                    <div className="flex justify-center py-20">
                        <div role="status" className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary"></div>
                    </div>
                ) : error ? (
                    <div className="text-red-500 text-center py-10">{error}</div>
                ) : jobs.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-brand-navy/5">
                        <p className="text-brand-navy/50 text-lg">Nenhuma vaga disponível no momento.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {jobs.map(job => (
                            <div key={job.id} className="bg-white p-6 rounded-2xl shadow-sm border border-brand-navy/5 hover:shadow-md transition-all hover:-translate-y-1">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-brand-primary/10 rounded-xl">
                                        <Building2 className="w-6 h-6 text-brand-primary" />
                                    </div>
                                    <span className="px-3 py-1 bg-brand-gray text-brand-navy/60 text-xs font-bold uppercase tracking-wider rounded-full">
                                        {job.type}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-brand-navy mb-1">{job.title}</h3>
                                <p className="text-brand-navy/60 font-medium mb-4">{job.company}</p>

                                <div className="flex items-center gap-4 text-sm text-brand-navy/50 mb-6">
                                    <div className="flex items-center gap-1">
                                        <MapPin className="w-4 h-4" />
                                        {job.location}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-4 h-4" />
                                        Recent
                                    </div>
                                </div>

                                <p className="text-brand-navy/70 text-sm line-clamp-3 mb-6">
                                    {job.description}
                                </p>

                                <a href={job.contactLink} target="_blank" rel="noopener noreferrer" className="block">
                                    <Button className="w-full">Aplicar Agora</Button>
                                </a>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default VagasPage;
