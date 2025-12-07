import Button from "../ui/button";

export default function CTASection() {
    return (
        <section className="bg-background py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Ready to transform your business?
                    </h2>
                    <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
                        Let's discuss your project and how we can help you achieve your goals.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Button variant="primary" className="px-8 py-3 text-base">
                            Get in Touch
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
