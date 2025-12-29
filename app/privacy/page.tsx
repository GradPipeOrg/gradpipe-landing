import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Privacy Policy | GradPipe',
    description: 'Privacy policy and data handling practices for GradPipe.',
}

export default function PrivacyPage() {
    return (
        <main className="min-h-screen pt-32 pb-16 bg-bg-primary">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-8">
                    Privacy Policy
                </h1>

                <div className="space-y-8 text-text-muted">
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">1. Data We Collect</h2>
                        <p>
                            To provide our services, we collect specific information to verify your skills and build your profile:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Contact information (Email address)</li>
                            <li>GitHub username and profile data</li>
                            <li>Metadata from your public repositories (languages, commit history, project structures)</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">2. What We Do NOT Collect</h2>
                        <p>
                            We respect your privacy and security. We explicitly do <span className="text-white font-semibold">NOT</span> collect or store:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Passwords</li>
                            <li>Source code from private repositories</li>
                            <li>Access tokens or private keys (except where explicitly authorized for specific integrations, stored securely)</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">3. How We Use Your Data</h2>
                        <p>
                            Your data is used solely to power the GradPipe platform:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong className="text-white">Verification:</strong> To validate your coding skills and project history.</li>
                            <li><strong className="text-white">Ranking:</strong> To calculate scores for our leaderboards based on merit.</li>
                            <li><strong className="text-white">Discovery:</strong> To help companies find you based on your verified skills and built projects.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">4. Data Rights & Removal</h2>
                        <p>
                            You maintain full ownership of your data. You can request the removal of your data from our platform at any time.
                            Upon request, we will permanently delete your profile and associated data from our systems.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">5. Contact Us</h2>
                        <p>
                            For data removal requests or privacy concerns, please contact our team at:
                            <br />
                            <a href="mailto:contact@gradpipe.com" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                                contact@gradpipe.com
                            </a>
                        </p>
                    </section>

                    <div className="pt-8 border-t border-white/10 text-sm">
                        Last updated: December, 2025
                    </div>
                </div>
            </div>
        </main>
    )
}
