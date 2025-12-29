import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Terms of Service | GradPipe',
    description: 'Terms of service for GradPipe platform usage.',
}

export default function TermsPage() {
    return (
        <main className="min-h-screen pt-32 pb-16 bg-bg-primary">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-8">
                    Terms of Service
                </h1>

                <div className="space-y-8 text-text-muted">
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">1. Platform Status</h2>
                        <p>
                            GradPipe is currently in <span className="text-white font-semibold">Beta</span>.
                            The services provided are subject to change, and we may update, modify, or discontinue features at any time without prior notice.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">2. No Guarantees</h2>
                        <p>
                            The platform is provided "as is" and "as available" without any warranties of any kind, either express or implied.
                            We do not guarantee that the platform will be error-free, uninterrupted, or that any specific results will be achieved from using our services.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">3. Account Management</h2>
                        <p>
                            We reserve the right to suspend, restrict, or terminate your access to GradPipe at our sole discretion,
                            for any reason, including but not limited to violation of these Terms or behavior that we deem harmful to the platform or other users.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">4. Jurisdiction</h2>
                        <p>
                            These Terms shall be governed by and construed in accordance with the laws of <span className="text-white font-semibold">India</span>.
                            Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in India.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">5. Contact Us</h2>
                        <p>
                            If you have any questions about these Terms, please contact us at:
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
